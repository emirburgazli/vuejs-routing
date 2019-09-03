import Home from "./components/Home";
import header from "./components/Header";

const User = resolve => {
    require.ensure(["./components/user/User.vue"], () => {
      resolve(require("./components/user/User.vue"));
    },"User")
}

const UserStart = resolve => {
    require.ensure(["./components/user/User.vue"], () => {
        resolve(require("./components/user/UserStart.vue"));
    },"User")
}

const UserDetail = resolve => {
    require.ensure(["./components/user/User.vue"], () => {
        resolve(require("./components/user/UserDetail.vue"));
    },"User")
}

const UserEdit = resolve => {
    require.ensure(["./components/user/User.vue"], () => {
        resolve(require("./components/user/UserEdit.vue"));
    },"User")
}
//
//
// import User from "./components/user/User";
// import UserStart from "./components/user/UserStart";
// import UserEdit from "./components/user/UserEdit";
// import UserDetail from "./components/user/UserDetail";
//

export const routes = [
    {
        path: '/', name: 'anasayfa', components: {
            default: Home,
            "header-top": header
        }
    },
    // {path: '/home', component: Home, name: 'anasayfa'},
    {
        path: '/user/', name: 'kullanici',
        components: {
            default: User,
            "header-top": header
        },
        children: [
            {path: '', component: UserStart}, //user geldiğinde
            {
                path: ':id', component: UserDetail, beforeEnter: (to,from,next) => {
                console.log("root seviyesi control");
                    next();
                }
            }, // /user/12
            {path: ':id/edit', component: UserEdit, name: "userEdit"} // user/12/edit
        ]
    },
    {path: "*", redirect: "/"}
];
