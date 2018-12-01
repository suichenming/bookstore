import 'whatwg-fetch'
import API from '../api'


//将价格转为准确的格式
let convertPrice = function(price){
    let tmp = '';
    for(var i = 0; i < price.length; i++){
        if( price[i] === '.'){
            tmp += price[i];
        }
        else if(isNaN(Number(price[i])) ){
            continue;
        }
        else{//数字
            tmp += price[i];
        }
    }
    return tmp;
}

// 将作者转为正确的显示格式
let convertAuthor = function(authors){
    let tmp = '';
    for(var i = 0; i < authors.length; i++){
        tmp += authors[i];
        if(i !== authors.length-1){
            tmp += ',';
        }
       
    }
    return tmp;
}

// 请求首页数据的方法
export function getTopBookList(query){
    return new Promise((resolve, reject)=>{
        // console.log('请求');
        fetch(`${API.BOOK_SEARCH}?q=${query}`)
        .then(response=>{
            // console.log('请求得到响应');
            return response.json();
        })
        .then(result=>{
            // console.log('请求接收数据完成');
            let data = result.books.map(book=>{
                return {
                    id: book.id,
                    title: book.title,
                    price: convertPrice(book.price),
                    image: book.images.large,
                    rating: book.rating.average,
                    author: convertAuthor(book.author)
                }
            })
            resolve(data);
        })
        .catch(()=>{
            console.log('请求失败');
        })
    })
}

//请求图书分类数据
export function getBookCategory(){
    return new Promise((resolve, reject)=>{
        fetch(API.BOOK_CATEGORY)
        .then(response=>{
            return response.json();
        })
        .then(result=>{
            let data = result.map(item=>{
                item.isShow = false;
                item.subitems = item['sub-item'];
                return item;
            })
            resolve(data);
        })
        .catch(()=>{
            console.log('请求图书分类数据失败');
        })
    })
}

// 获得数据的详情数据
export function getBookDetailByid(id){
    return new Promise((resolve, reject)=>{
        fetch(`${API.BOOK_DETAIL}/${id}`)
        .then(responose=>{
            return responose.json();
        })
        .then(result=>{
            result.price = convertPrice(result.price);
            resolve(result);
        })
        .catch(()=>{
            console.log('请求图书详情数据失败');
        })
    })
}