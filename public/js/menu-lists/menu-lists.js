const MENU_MAIN_CONTAINER = document.getElementById("menu-highleted-container");

const menusLists = [
    {
        id: 1001, type: {
            title: "sea foods", 
            item: [
                {
                    id: 10001, title: 'fish',
                    dishes: [
                        {id: 100001, title: "sweet and sour tilapia", price: 150},
                        {id: 100002, title: "escabeche", price: 130},
                        {id: 100003, title: "salmon sisig", price: 180},
                        {id: 100003, title: "bangus sisig", price: 180},
                        {id: 100003, title: "lapu-lapu sinigang", price: 120},
                        {id: 100003, title: "fish lumpia", price: 120},
                        {id: 100003, title: "grilled tuna belly", price: 200},
                        {id: 100003, title: "daing na bangus", price: 160},
                    ]
                },
                {
                    id: 10002, title: "crabs",
                    dishes: [
                        {id: 100001, title: "stir fried crabs with ginger and scallions", price: 180},
                        {id: 100002, title: "chili garlic crabs", price: 110},
                        {id: 100003, title: "ginataang alimasag", price: 130},
                        {id: 100004, title: "tortang talon with crab meat", price: 110},
                        {id: 100005, title: "rellenong alimasag", price: 180},
                        {id: 100006, title: "crispy crablets", price: 110},
                        {id: 100007, title: "aligue pasta", price: 150},
                    ]
                },
                {
                    id: 10003, title: 'shrimp',
                    dishes: [
                        {id: 100001, title: "halabos na hipon with butter", price: 150},
                        {id: 100002, title: "shrimp paella", price: 220},
                        {id: 100003, title: "lemon garlic shrimp pasta", price: 160},
                        {id: 100004, title: "chili garlic shrimp", price: 130},
                        {id: 100005, title: "coconut shrimp", price: 120},
                        {id: 100006, title: "shrimp laing", price: 150},
                        {id: 100007, title: "shrimp with pancit canton", price: 140},
                        {id: 100008, title: "butter garlic shrimp", price: 180},
                    ]
                },
                {
                    id: 10004, title: 'shellfish',
                    dishes: [
                        {id: 100001, title: "spicy tahong", price: 150},
                        {id: 100002, title: "baked tahong with butter cheese", price: 130},
                        {id: 100003, title: "rellenong tahong", price: 180},
                        {id: 100004, title: "grilled mussels", price: 200},
                        {id: 100005, title: "snails with spinach in coconut milk", price: 130},
                        {id: 100006, title: "pasta with clams", price: 140},
                        {id: 100007, title: "clam soup", price: 120},
                        {id: 100008, title: "adobong tahong", price: 150},
                        {id: 100009, title: "deep fried mussel", price: 110},
                        {id: 1000010, title: "bacon wrapped scallops in lemon garlic butter sauce", price: 160},
                    ]
                },
            ]
        }
    },
    {
        id: 2001, type: {
            title: "meat",
            item: [
                {
                    id: 20001, title: "chicken",
                    dishes: [
                        {
                            id: 200001, title: "crispy fried chicken", price: 150
                        },
                        {
                            id: 200002, title: "roasted bbq chicken", price: 200
                        },
                        {
                            id: 200003, title: "chicken sinigang", price: 130
                        },
                        {
                            id: 200004, title: "pineapple fried chicken", price: 140
                        },
                        {
                            id: 200005, title: "roasted chicken", price: 220
                        },
                        {
                            id: 200006, title: "chickem curry", price: 130
                        },
                        {
                            id: 200007, title: "chicken afritada", price: 120
                        },
                        {
                            id: 200008, title: "chicken adobo", price: 140
                        }
                    ]
                },
                {
                    id: 20002, type: "pork",
                    dishes: [
                        {
                            id: 200001, title: "pork adobo", price: 120
                        },
                        {
                            id: 200002, title: "pork afritada", price: 110
                        },
                        {
                            id: 200003, title: "pork sinigang", price: 100
                        },
                        {
                            id: 200004, title: "pork menudo", price: 110
                        },
                        {
                            id: 200005, title: "pork caldereta", price: 110
                        },
                        {
                            id: 200006, title: "pork katsu curry", price: 120
                        },
                        {
                            id: 200007, title: "crispy pork belly", price: 160
                        },
                        {
                            id: 200008, title: "pork sisig", price: 160
                        },
                        {
                            id: 200009, title: "pork barbecue", price: 80
                        },
                    ]
                },
                {
                    id: 20003, type: "beef",
                    dishes: [
                        {
                            id: 200001, title: "beef pares", price: 130
                        },
                        {
                            id: 200002, title: "beef caldereta", price: 110
                        },
                        {
                            id: 200003, title: "bistek tagalog", price: 150
                        },
                        {
                            id: 200004, title: "beef ribs", price: 130
                        },
                        {
                            id: 200005, title: "beef sinigang", price: 120
                        },
                        {
                            id: 200006, title: "bulalo", price: 120
                        },
                        {
                            id: 200007, title: "beef pares mami noodles", price: 120
                        },
                        {
                            id: 200008, title: "beef morcon", price: 130
                        },
                        {
                            id: 200009, title: "beef silog", price: 120
                        },
                    ]
                },
            ]
        }
    },
    {},
    {
        id: 1004, type: "desserts",
        dishes: [
            {id: 10001, title: "leche flan", price: 80},
            {
                id: 10002, title: "maja blanca", price: 60
            },
            {
                id: 10003, title: "yema", price: 20
            },
            {
                id: 10003, title: "buko salad", price: 50
            },
            {
                id: 10003, title: "cassava cake", price: 20
            },
            {
                id: 10003, title: "biko", price: 30
            },
            {
                id: 10003, title: "buko pandan", price: 30
            },
        ]
    }
];

function drawSeaFoodsMenu () {
    const seaFoodContainer = document.createElement("div");
    seaFoodContainer.className = "menu-content";

    return seaFoodContainer;
}