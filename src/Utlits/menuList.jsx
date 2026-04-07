export const menuList = [
    {
        id: 1,
        path: "/",
        name: "Home",
    },
    {
        id: 2,
        path: "/",
        section: "#portfolio",
        name: "Portfolio",
    },
    {
        id: 3,
        path: "/",
        section: "#pricing",
        name: "Pricing",
    },
    {
        id: 4,
        path: "/",
        section: "#services",
        name: "Services",
        dropDown: [
            {
                id: 1,
                path: "/all-services",
                name: "Web Design",
            },
            {
                id: 2,
                path: "/service-details",
                name: "AI Chatbot",
            },
        ],
    },
    {
        id: 5,
        path: "/",
        section: "#faq",
        name: "FAQ",
    },
    {
        id: 6,
        path: "/",
        section: "#blog",
        name: "Blog",
        dropDown: [
            {
                id: 1,
                path: "/all-blog",
                name: "All Articles",
            },
            {
                id: 2,
                path: "/blog-details",
                name: "Blog Details",
            },
        ],
    },
    {
        id: 7,
        path: "/",
        section: "#contact",
        name: "Contact",
    },
];