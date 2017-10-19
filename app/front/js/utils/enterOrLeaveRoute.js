/*
 * @Author: leo 
 * @Date: 2017-08-13 14:09:04 
 * @Last Modified by: leo
 * @Last Modified time: 2017-10-19 11:21:33
 */
/*
   路由 跳转 确认 集合
   在这里处理组件进入和离开逻辑（通过路由的 onEnter onLeave 方法）
*/

// login 页面 离开时逻辑
export const enterHomePage = (nextState, replace, next) => {
    /*
       此处处理 进入 /home 路由的权限控制
       nextState ： 表示跳转后的location 信息；
       replace 用于 更改下一个进入的页面地址，但是不会跳转；
       next : 用于跳转页面，没有其他操作则显示当前路由对应页面
    */
    console.log(nextState);
    next();
 }
 