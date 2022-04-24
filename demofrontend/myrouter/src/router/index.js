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
            component: HomePage,
            // 指定路由视图的名称，即 router-link中可用的 name 属性
            name: "home",
        },
        {
            path: "/posts",
            // component: PostsPage,
            components: {
                default: PostsPage,
                // 手动指定路由视图 name： PostsRecommend:PostsRecommend
                PostsRecommend,
                // 自动缩写： PostsList: PostsList
                PostsList,
            },
            name: "posts",
            children: [
                {
                    path: ":id",
                    component: PostDetail,
                    view: "detail",
                    name: "post-detail",
                },
            ],
        },
        {
            path: "/about",
            component: AboutPage,
            name: "about"
        },
    ]
});

export default router;