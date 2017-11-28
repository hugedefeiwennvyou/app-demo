var router=new VueRouter({
    linkActiveClass:"active",
    routes:[
        {path:"/",component:Home},
        {path:"/info",component:Info,children:[
            {path:"",component:List},
            {path:"/info/:id",component:Con},
        ]},
        {path:"/product",component:product},
        {path:"/login",component:Login},
        {path:"/doc",
            component:doc,
            children:[{path:"",components:{'default':right,'slider':docmenu}}],
        },
        {path:"*",redirect:"/"},
    ]
})