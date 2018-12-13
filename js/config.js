require.config({
    baseUrl:"js/",
    paths:{
        jquery:"lib/jquery-1.11.3",
        bootstrap:"js/common/bootstrap",
        register:"js/common/register",
        login:"js/common/login",
        nav:"js/common/nav",
        header:"js/common/header"
    },
    shim:{
        bootstrap:{
            deps:["jquery"]
        }
    }
})

