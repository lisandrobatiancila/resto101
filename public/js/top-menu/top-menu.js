const topMenuData = [
    {
        id: 1001, title: "adobo", img: "http://localhost/restaurant/public/images/adobo.jpg", price: 200,
        ingredients: [
            "2 lbs pork belly",
            "2 tablespoon garlic minced or crushed",
            "5 dried bay leaves",
            "4 tablespoon vinegar",
            "1/2 cup soy sauce",
            "1 teaspoon of sugar",
            "1 tablespoon peppercorn",
            "2 cups water",
            "salt to taste"
        ],
        directions: [
            {id: 1001, title: "The first thing to do is marinate the pork belly in soy sauce and crushed garlic. \
                It is best to marinate it overnight. If time is limited, one hour should be enough. \
                Some like to add vinegar during the process. You may do so if preferred."},
            {id: 1002, title: "Drain the marinade. Save it for later. \
                The marinated pork needs to be browned. Heat a cooking pot. Add pork with garlic. \
                You can also add a few tablespoons of cooking oil. Cook the pork until it turns brown."},
            {id: 1003, title: "Cook the pork until tender. Do this by pouring the remaining marinade, if any. \
                Also add water. Let the liquid boil. This is the part where I put the whole peppercorn and dried bay leaves. \
                These ingredients complete my pork adobo. Boiling for 40 minutes should be enough to tenderize the pork. \
                There are times when you have to cook longer."},
            {id: 1004, title: "If you have not added the vinegar as part of the marinade, pour it into the pot and let it cook for 10 minutes. \
                Salt is an optional ingredient for this recipe. Use it only if you think it is needed."}
        ],
        otherInfo: {
            info: "course:main course;cuisine:filipino;keyword:adobo, adobong baboy, inadodo, pork adobo;\
                prep time:10 minutes;cook time: 1 hour;total time: 1hour 10 minutes; servings: 4 people;\
                calories: 1211 kcal"
        }
    },
    {
        id: 2001, title: "sisig", img: "http://localhost/restaurant/public/images/sisig.jpg", price: 300,
        ingredients: [
            "1 lb. pig ears",
            "1 1/2 lb pork belly",
            "1 piece onion minced",
            "3 tablespoons soy sauce",
            "1/4 teaspoon ground black pepper",
            "1 knob ginger minced (optional)",
            "3 tablespoons chili flakes",
            "1/2 teaspoon garlic powder",
            "1 piece lemon or 3 to 5 pieces calamansi",
            "½ cup butter or margarine",
            "¼ lb chicken liver",
            "6 cups water",
            "3 tablespoons mayonnaise",
            "1/2 teaspoon salt",
            "1 piece egg (optional)"
        ], //array of strings
        directions: [
            {id: 2001, title: "This sisig recipe starts by boiling pork belly and pig ears until tender. \
                These are then grilled for a few minutes until it browns and develops a good texture. \
                I chop the meat into small pieces after grilling."},
            {id: 2002, title: "Start cooking the sisig by sautéing ginger. Add chicken liver. Cook it thoroughly. \
                Note that ginger is an optional ingredient for this sisig version. I added it to reduce the gaminess \
                of chicken liver. Feel free to use it based on your preference."},
            {id: 2003, title: "Add the minced meat. These are the pork belly and ears. \
                Make sure to blend all the ingredients together. This will balance the flavor of the dish. \
                Add the seasonings and spices afterwards."},
            {id: 2004, title: ""},
        ], //array of objects
        otherInfo: {
            info: "course: main; cuisine: filipino; keyword: filipino, sisig, pork sisig, pork sisig recipe, sisig, sisig recipe;\
                prep time: 12 minutes; cook time: 1 hour 30 minutes; total time: 1 hour 42 minutes; servings: 6 people;\
                calories: 933 kcal"
        }
    },
    {
        id: 3001, title: "sinigang", img: "http://localhost/restaurant/public/images/sinigang.png", price: 180,
        ingredients: [
            "2 lbs pork belly or buto-buto",
            "1 bunch spinach or kang-kong",
            "3 tablespoons fish sauce",
            "12 pieces string beans sitaw, cut in 2 inch length",
            "2 pieces tomato quartered",
            "3 pieces chili or banana pepper",
            "1 tablespoons cooking oil",
            "2 quarts water",
            "1 piece onion sliced",
            "2 pieces taro gabi, quartered",
            "1 pack sinigang mix good for 2 liters water"
        ], // array of strings
        directions: [
            {id: 3001, title: "boil the pork until very tender."},
            {id: 3002, title: "add the onion and tomatoe, this brings additional flavor to the broth."},
            {id: 3003, title: "add green leafy veggies, and the souring agent."}
        ], //array of objects
        otherInfo: {
            info: "course: main course; cuisine: filipino; keyword: filipino sinigang, pork, pork sinigang,\
                pork soup, sinigang, sinigang na baboy; prep time: 10 minutes; cook time: 1 hour;\
                total time: 1 hour 10 minutes; servings: 6 people; calories: 892 kcal" //string
        }
    }
];

let TOP_MENU_CONTAINER = document.getElementById("top-menu-container");
// let TOP_MENU_CONTENT = document.getElementById("top-menu-content");

const topMenuLen = topMenuData.length;

for(let i = 0; i < topMenuLen; i++) {
    const top_menu_content = document.createElement("div");
    const top_menu_header = document.createElement("div");
    const top_menu_body = document.createElement("div");
    const top_menu_header_img = document.createElement("img");
    const top_menu_price = document.createElement("div");
    const top_menu_priceTag = document.createElement("p");

    top_menu_content.className = "top-menu-content";
    top_menu_header.className = "top-menu-header";
    top_menu_body.className = "top-menu-body text-capitalize";
    top_menu_price.className = "top-menu-price";

    top_menu_header_img.src = `${topMenuData[i].img}`;
    top_menu_header_img.style.width = 'inherit'
    top_menu_header_img.style.height = 'inherit'
    top_menu_priceTag.textContent = topMenuData[i].price;

    const top_body_pTagTile = document.createElement("p");
    const top_body_button = document.createElement("button");
    const top_body_addToOrder = document.createElement("button");

    top_body_button.setAttribute("id", `btn-${topMenuData[i].id}`);
    top_body_button.className = "btn btn-outline-primary text-capitalize";
    top_body_addToOrder.className = "btn btn-outline-order text-capitalize";
    top_body_button.textContent = "view";
    top_body_addToOrder.textContent = "add to order";
    top_body_pTagTile.textContent = topMenuData[i].title;

    top_menu_body.appendChild(top_body_pTagTile);
    top_menu_body.appendChild(top_body_addToOrder);
    top_menu_body.appendChild(top_body_button);

    top_menu_price.appendChild(top_menu_priceTag);
    top_menu_header.appendChild(top_menu_header_img);
    top_menu_header.appendChild(top_menu_price);

    top_menu_content.appendChild(top_menu_header);
    top_menu_content.appendChild(top_menu_body);
    
    TOP_MENU_CONTAINER.appendChild(top_menu_content);
}

const BTN_VIEWS = document.getElementsByTagName("button");
const bvLen = BTN_VIEWS.length;

for(let i = 0; i < bvLen; i++) {
    BTN_VIEWS[i].addEventListener("click", function() {
        const TOP_MENU = this.getAttribute("id");

        if(!TOP_MENU)
            return;
        const menuID = TOP_MENU.split('-')[1]; // get the top_menu ID
        const menu = topMenuData.filter(menu => menu.id === parseInt(menuID));

        const si = setInterval(() => {
            localStorage.setItem("view-top-menu", JSON.stringify(menu));
            window.location.href = 'certain-menu/certain-menu.php';
            clearInterval(si);
        }, 1000);
    });
}