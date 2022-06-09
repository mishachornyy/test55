eexport default [

    {
        id: 1,
        title: "Mut",
        start: new Date(2022, 3, 20, 19, 30, 0),
        end: new Date(2022, 3, 22, 2, 0, 0)
    },
    {
        id: 2,
        title: "day",
        start: new Date(2022, 3, 20, 19, 30, 0),
        end: new Date(2022, 3, 22, 2, 0, 0)
    },

    {
        id: 3,
        title: "Event",
        start: new Date(2022, 5, 20, 19, 30, 0),
        end: new Date(2022, 3, 22, 2, 0, 0)
    },
    {
        id: 4,
        title: "Today",
        start: new Date(new Date().setHours(new Date().getHours() - 3)),
        end: new Date(new Date().setHours(new Date().getHours() + 3))
    }
];
