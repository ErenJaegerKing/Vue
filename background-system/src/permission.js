import router from "./router";
import store from "./store";
import { Message } from "element-ui";
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style
import { getToken } from "@/utils/auth"; // get token from cookie
import getPageTitle from "@/utils/get-page-title";

NProgress.configure({ showSpinner: false }); // NProgress Configuration

const whiteList = ["/login"]; // no redirect whitelist

router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start();

  // set page title
  document.title = getPageTitle(to.meta.title);

  // determine whether the user has logged in
  // const hasToken = getToken();

  const hasGetUserInfo = store.getters.user; // 获取本地用户信息

  if (to.meta.auth) {
    // 说明页面需要鉴权
    if (hasGetUserInfo) {
      // 本地有用户信息 
      next();
    } else {
      // 没有用户信息，查看是否有Token
      const hasToken = localStorage.getItem("adminToken");
      if (hasToken) {
        // 有Token，验证Token是否有效
        try {
          await store.dispatch("user/getInfo"); //相当于whoami
          next();
        } catch (error) {
          // 拿不到用户信息
          await store.dispatch("user/resetToken");
          Message.error("登录过期,请重新登录");
          next(`/login?redirect=${to.path}`);
          NProgress.done();
        }
      } else {
        // 没有Token，重新登录，导航到login
        next(`/login?redirect=${to.path}`);
        NProgress.done();
      }
    }
  } else {
    // 说明页面不需要鉴权
    if (to.path === "/login" && hasGetUserInfo) {
      // 说明是现在是在登录的状态下,要去login页面，我们将其导航到首页
      next({ path: "/" });
    } else {
      next();
    }
    NProgress.done();
  }

  // vue-element-admin 原本的鉴权流程
  // if (hasToken) {
  //   if (to.path === '/login') {
  //     // if is logged in, redirect to the home page
  //     next({ path: '/' })
  //     NProgress.done()
  //   } else {
  //     const hasGetUserInfo = store.getters.name
  //     if (hasGetUserInfo) {
  //       next()
  //     } else {
  //       try {
  //         // get user info
  //         await store.dispatch('user/getInfo')

  //         next()
  //       } catch (error) {
  //         // remove token and go to login page to re-login
  //         await store.dispatch('user/resetToken')
  //         Message.error(error || 'Has Error')
  //         next(`/login?redirect=${to.path}`)
  //         NProgress.done()
  //       }
  //     }
  //   }
  // } else {
  //   /* has no token*/

  //   if (whiteList.indexOf(to.path) !== -1) {
  //     // in the free login whitelist, go directly
  //     next()
  //   } else {
  //     // other pages that do not have permission to access are redirected to the login page.
  //     next(`/login?redirect=${to.path}`)
  //     NProgress.done()
  //   }
  // }
});

router.afterEach(() => {
  // finish progress bar
  NProgress.done();
});
