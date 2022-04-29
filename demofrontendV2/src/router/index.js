import {createRouter, createWebHashHistory} from "vue-router";
import HomePage from "../components/HomePage.vue";
import PostsPage from "../components/PostsPage.vue";
import AboutPage from "../components/AboutPage.vue";
import PostsList from "../components/PostsList.vue";
import PostsRecommend from "../components/PostsRecommend.vue";
import PostDetail from "../components/PostDetail.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            components: {
                default: HomePage,
                // 手动指定路由视图 name： PostsRecommend:PostsRecommend
                PostsRecommend,
            },
            // 指定路由视图的名称，即 router-link中可用的 name 属性
            name: "home",
        },
        {
            path: "/posts",
            // component: PostsPage,
            components: {
                default: PostsPage,
                // 自动缩写： PostsList: PostsList
                PostsList,
            },
            name: "posts",
            children: [
                {
                    path: ":id/",
                    redirect: "/posts/:id/detail",
                },
            ],
        },
        {
            path: "/about",
            component: AboutPage,
            name: "about"
        },
        {
            path: "/posts/:id/detail",
            component: PostDetail,
            name: "post-detail"
        }
    ]
});

export default router;