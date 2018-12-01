import {createStore} from 'redux'

//管理的全局数据的初始值
const preloadState = {
    cartList: []
}

//处理全局数据的方法
// 初始化执行，以及之后每一次调用store的dispatch方法都执行一次。
// 调用dispath时提供的参数就作为action传入。
const reducer = function(state, action){
    // 参数state：上一次的state状态
    // 参数action：事件描述对象
    console.log(action.type);
    
    //初始化取得数据
    if(action.type.includes('redux/INIT')){
        state.cartList = JSON.parse(localStorage.getItem('cart')) || [];
    }

    // 处理添加商品到购物车
    if(action.type === 'add-book'){
        // 判断是否存在该书籍
        let index = state.cartList.findIndex(item=>{
            return item.id === action.value.id;
        })
        if(index>=0){//存在该书籍
            state.cartList[index].count += 1;
        }else{//不存在该书籍
            state.cartList.push(
                {...action.value, count: 1}
            );
        }
    }

    // 处理删除整个商品的事件
    if(action.type === 'delete-book'){
        state.cartList = state.cartList.filter(item=>{
            return item.id !== action.id;
        });
    }

    //处理商品数据递增
    if(action.type === 'add-count'){
        state.cartList.map(item=>{
            if(item.id === action.id){
                item.count ++;
            }
        })
    }

    //处理商品数据递减
    if(action.type === 'reduce-count'){
        state.cartList.map(item=>{
            if(item.id === action.id){
                if(item.count > 1){
                    item.count --;
                }
                else{
                    alert('不能再少了');
                }
            }
        })
    }
   
    //将数据存储起来
    localStorage.setItem('cart', JSON.stringify(state.cartList));

    //返回下一次全局使用的state状态
    return state;
};

//创建仓库
const store = createStore(reducer, preloadState);

export default store;

