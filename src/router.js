import Home from "./page/home/index"
import Comment from "./page/comment/index"

const router = [


    {
        path: "/",
        exact: true,
        component: Home
    },
    {
        path: "/comment/:id",
        exact: false,
        component: Comment
    }


]

export default router