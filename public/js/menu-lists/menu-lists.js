const MENU_MAIN_CONTAINER = document.getElementById("menu-highleted-container");
const CHOICES_CONTENT = document.getElementById("choices-content");

if(!localStorage.getItem("defaultMENU")){
    localStorage.setItem("defaultMENU", "sea foods"); // used by all menu options
    localStorage.setItem("currentFishIndex", 0); // if you want to debug for SEAFODS got HERE!!
    localStorage.setItem("currentCrabsIndex", 0); // if you want to debug for SEAFODS got HERE!!
    localStorage.setItem("currentShrimpsIndex", 0); // if you want to debug for SEAFODS got HERE!!
    localStorage.setItem("currentShellFishIndex", 0); // if you want to debug for SEAFODS got HERE!!

    localStorage.setItem("currentChickenIndex", 0);
    localStorage.setItem("currentPorkIndex", 0);
    localStorage.setItem("currentBeefIndex", 0);

    localStorage.setItem("currentDesserts", 0);
}

const menusLists = [
    {
        id: 1001, type: {
            title: "sea foods", 
            item: [
                {
                    id: 10001, title: 'fish',
                    dishes: [
                        {id: 100001, title: "sweet and sour tilapia, sweet and sour tilapia, sweet and sour tilapia", 
                            ingredients: [
                                "2 pieces tilapia cleaned",
                                "2 tablespoons Knorr Liquid Seasoning",
                                "1 piece red bell pepper julienne",
                                "1 piece green bell pepper julienne",
                                "1 piece carrot julienne",
                                "5 cloves garlic crushed",
                                "1 piece onion sliced",
                                "2 thumbs ginger julienne",
                                "2 tablespoons cornstarch",
                                "2 cups water",
                                "5 1/2 tablespoons white vinegar",
                                "8 tablespoons tomato ketchup",
                                "7 tablespoons white sugar",
                                "1 ¼ cup cooking oil",
                                "Salt and ground black pepper to taste"
                            ], //array of strings
                            directions: [
                                {id: 10000011, title: "Apply Knorr Liquid Seasoning all over the tilapia. \
                                    Let it stand for 10 minutes so that the fish can absorb the flavor of the seasoning."},
                                {id: 10000012, title: "Heat around 1 cup of cooking oil in a pan. Once the oil gets hot, \
                                    fry the fish until the color turns golden brown. Flip to fry the opposite side. \
                                    Remove from the pan. Place on a clean plate. Set aside."},
                                {id: 10000013, title: "Make the sauce by heating 3 tablespoons of cooking oil in a cooking \
                                    pot. Saute onion and garlic for 10 seconds. Add ginger. Saute for 12 seconds."},
                                {id: 10000014, title: "Pour white vinegar and water. Let boil."},
                                {id: 10000015, title: "Add tomato ketchup. Stir until it completely dilutes in the mixture."},
                                {id: 10000016, title: "Add sugar. Stir until the sugar gets fully incorporated."},
                                {id: 10000017, title: "Put carrots and bell peppers. Cook for 3 minutes."},
                                {id: 10000018, title: "Combine cornstarch and 3 tablespoons water. Mix well. Pour into the cooking pot. \
                                    Stir until sauce thickens."},
                                {id: 1000009, title: "Season with salt and ground black pepper. Add a piece of tilapia and cook for 3 minutes."},
                                {id: 10000010, title: ""},
                            ], //array of objects
                            otherInfo: {
                                info: "course: main course; cuisine: filipino; keyword: sweet and sour fish, tilapia recipe,;\
                                    prep time: 10 minutes; cook time: 30 minutes; servings: 3 people; calories: 1063kcal"
                            },
                            price: 150,
                            img: "http://localhost/restaurant/public/images/sast.jpg"
                        },
                        {id: 100002, title: "escabeche", price: 130, img: "http://localhost/restaurant/public/images/escbche.jpg",
                            ingredients: [
                                "2 lbs fish (large) sliced into serving pieces",
                                "¾ cup cooking oil",
                                "2 tablespoons salt",
                                "----sauce ingredients----",
                                "1 onion thinly sliced",
                                "3 cloves garlic chopped",
                                "2 thumbs ginger Julienne",
                                "1 red bell pepper Julienne",
                                "1 green bell pepper Julienne",
                                "1 carrot Julienne",
                                "3 tablespoons white vinegar",
                                "4 tablespoons banana ketchup",
                                "3 tablespoons white sugar",
                                "1 cup water",
                                "1 tablespoon cornstarch",
                                "2 tablespoons cooking oil",
                                "Salt and ground black pepper to taste"
                            ], //array of strings
                            directions: [
                                {id: 10000021, title: "Rub salt all over the fish slices. Let it stand for 5 minutes."},
                                {id: 10000022, title: "Heat cooking oil. Fry both sides of the fish until it turns golden \
                                    brown in color. Remove the fish from the pan and arrange on a serving plate."},
                                {id: 10000023, title: "Make the escabeche sauce by heating 2 tablespoons of oil in a pan.\
                                     Sauté garlic and onion until the latter softens."},
                                {id: 10000024, title: "Add tomato ketchup, vinegar, sugar, and water. Stir and let boil."},
                                {id: 10000025, title: "Put the bell peppers and carrots into the pan. Cook for 3 minutes."},
                                {id: 10000026, title: "Season with salt and pepper."},
                                {id: 10000027, title: "Combine cornstarch with 2 tablespoons of water. Mix well. Pour the mixture into the pan. \
                                    Stir until the sauce thickens to your desired consistency."},
                                {id: 1000009, title: "Pour the escabeche sauce over the fried fish. Serve warm."},
                            ], //array of objects
                            otherInfo: {
                                info: "course: filipino recipe, main course; cuisine: filipino; keyword: sweet and sour, sweet and sour fish;\
                                    prep time: 10 minutes; cook time: 30 minutes;servings: 5people; calories: 598kcal"
                            }
                        },
                        {id: 100003, title: "salmon sisig", price: 180, img: "http://localhost/restaurant/public/images/slmn-ssg.jpg",
                            ingredients: [
                                "12 ounces salmon fillet",
                                "1/4 cup Lady's Choice Mayonnaise",
                                "1 1/2 teaspoons Knorr Liquid Seasoning",
                                "1 piece onion chopped",
                                "3/4 cup green onion chopped",,
                                "6 pieces Thai chili pepper cho,pped",
                                "3/4 cup chicharon crushed",
                                "3 tablespoons butter",
                                "1/4 teaspoon garlic powder",
                                "1 1/2 tablespoons cooking oil"
                            ], //array of strings
                            directions: [
                                {id: 10000030, title: "Place salmon in a turbo broiler. Spray cooking oil all over the fish. \
                                    Broil for 12 minutes at 390F."},
                                {id: 10000031, title: "Let it cool down. Remove from the broiler and flake the fish. \
                                    Set aside."},
                                {id: 10000032, title: "Melt 1/3 of the butter in a pan. Add cooking oil. Continue cooking until the mixture gets hot. \
                                    Add salmon flakes and cook for 30 seconds while constantly stirring."},
                                {id: 10000034, title: "Add half of the amount of each of these ingredients: onion, \
                                    chili pepper, green onion. Cook while stirring for 2 minutes."},
                                {id: 10000035, title: "Add garlic powder and Knorr Liquid Seasoning. Cook for 1 minute."},
                                {id: 10000036, title: "Add Lady's Choice Mayonnaise. Stir and cook for 30 seconds."},
                                {id: 10000037, title: "Put chicharon into the pan. Stir. Transfer to a large bowl. \
                                    Let it cool down."},
                                {id: 10000038, title: "Add remaining onion and green onion. Toss. Season with ground black pepper."},
                                {id: 10000039, title: "Heat a metal plate on a stovetop. Add remaining butter and \
                                    let it melt. Arrage the prepared salmon sisig on the metal plate. Top with chicharon and add remaining chili pepper. Serve. Share and enjoy!"},
                            ], //array of objects
                            otherInfo: {
                                info: "course: appetizer, main course; cuisine: filipino; keyword: filipion sisig, salmon sisig;\
                                    prep time: 5 minutes; cook time: 20 minutes; servings: 4 people; calories: 381 kcal"
                            }
                        },
                        {id: 100004, title: "bangus sisig", price: 180, img: "http://localhost/restaurant/public/images/bngs-ssg.jpg",
                            ingredients: [
                                "1 piece bangus fried or baked, and then flaked",
                                "1 piece onion chopped",
                                "1/2 cup scallions chopped",
                                "1 tablespoon chili pepper labuyo or Thai chili",
                                "1/2 teaspoon ground black pepper",
                                "1 tablespoon soy sauce",
                                "2 teaspoons ginger minced",
                                "1 cup crushed chicharon pork rind",
                                "1/2 tablespoon mayonnaise",
                                "1/4 cup unsalted butter",
                                "1 teaspoon garlic powder",
                                "1/2 teaspoon salt"
                            ], //array of strings
                            directions: [
                                {id: 10000041, title: "Melt-in butter in a large pan"},
                                {id: 10000042, title: "Add the onion and cook for 3 minutes"},
                                {id: 10000043, title: "Put-in the ginger. Stir and cook for 2 minutes in low to medium heat."},
                                {id: 10000044, title: "Add the bangus and then stir."},{id: 10000045, title: "Put-in the garlic powder, salt,ground black pepper, and soy sauce. Stir and cook for 5 minutes"},
                                {id: 10000046, title: "Add the chicharon, scallions, and chili. Stir and cook for 3 minutes more."},
                                {id: 10000047, title: "Put-in the mayonnaise. Stir."},
                            ], //array of objects
                            otherInfo: {
                                info: "prep time: 10 minutes; cook time: 25 minutes; total time: 35 minutes; servings: 4 people; calories: 416kcal"
                            }
                        },
                        {id: 100005, title: "lapu-lapu sinigang", price: 120, img: "http://localhost/restaurant/public/images/sngng-lpu2x.jpg",
                            ingredients: [
                                "2 6 ounces slices fish steak",
                                "1 lb. shrimp cleaned",
                                "2 25g pack Knorr Sinigang na May Miso Recipe Mix",
                                "6 snake beans cut in 2 inch pieces",
                                "8 to 10 pieces mustard leaves",
                                "9 to 12 pieces okra",
                                "2 pieces banana pepper or long green chili",
                                "2 quarts rice wash hugas bigas",
                                "2 medium tomato wedged",
                                "1 medium yellow onion wedged",
                                "3 tablespoons fish sauce patis"
                            ], //array of strings
                            directions: [
                                {id: 10000051, title: "Pour rice wash in a soup pot. Let boil."},
                                {id: 10000052, title: "Add tomato and onion. Cook for 5 minutes."},
                                {id: 10000053, title: "Add fish."},
                                {id: 10000054, title: "Add Knorr Sinigang na May Miso Recipe Mix. Stir."},
                                {id: 10000055, title: "Put all the vegetables into the pot. Cover and cook for 6 to 8 minutes."},
                                {id: 10000056, title: "Pour fish sauce and add the mustard leaves. Cook for 2 minutes."},
                            ], //array of objects
                            otherInfo: {
                                info: "course: seafood; cuisine: filipino; prep time: 10 minutes; cook time: 40 minutes;\
                                    total time: 50 minutes; servings: 6 people"
                            }
                        },
                        {id: 100006, title: "fish lumpia", price: 120, img: "http://localhost/restaurant/public/images/fsh-lmpa.jpg",
                            ingredients: [
                                "1 large boneless bangus milkfish",
                                "8 pieces lumpia wrapper",
                                "2 stalks celery minced",
                                "1 medium yellow onion minced",
                                "½ cup minced carrot",
                                "¼ cup chopped flat leaf parsley",
                                "¾ cup minced jicama singkamas",
                                "1 ½ teaspoons salt",
                                "¼ teaspoon ground black pepper",
                                "1 egg",
                                "2 cups cooking oil"
                            ], //array of strings
                            directions: [
                                {id: 10000061, title: "Preheat oven to 370F (188C)."},
                                {id: 10000062, title: "Arrange the bangus in a baking tray. Bake for 15 minutes or \
                                    until flaky"},
                                {id: 10000063, title: "Remove from the oven. Let it cool down. Scrape the meat from the fish and \
                                    place in a bowl."},
                                {id: 10000064, title: "Heat 3 tablespoons of cooking oil. Once the oil becomes hot, sauté onion and \
                                    celery. Add the carrot. Sauté for 30 seconds"},
                                {id: 10000065, title: "Add the chopped parsley, and fish flakes. Cook for 1 minute. \
                                    Add salt and pepper. Stir and cook for 30 seconds. Arrange in a large bowl."},
                                {id: 10000066, title: "Put the minced singkamas into the bowl along with the egg. \
                                    Stir until all ingredients are well blended."},
                                {id: 10000067, title: "Cut the lumpia wrapper in half to form two triangles. \
                                    Lay a piece of triangular wrapper in a flat surface wherein the base of the triangle is located below."},
                                {id: 10000068, title: "Scoop 1 to 2 tablespoons of the fish mixture and arrange on the lower part \
                                    of the wrapper. Mold using your hands to form a long cylinder and partially press \
                                    to compress the mixture. Secure the filling by folding both sides of the wrapper inwards until \
                                    the mixture is covered. Roll the wrapper starting from the bottom to the top. \
                                    Dip your finger in egg white or water and rub it over the tip of the wrapper to make it sticky. \
                                    Gently the press the tip against the egg rolls to secure. Do this until all the fish mixture is \
                                    consumed. Note: watch the video below for more details on how to wrap the egg roll properly."},
                                {id: 10000069, title: "Heat the remaining oil in a pan. Once the oil gets hot enough, start \
                                    to fry the egg rolls. Make sure to retain extra space in the pan to equally cook the rolls. \
                                    Cook one side for 2 to 3 minutes or until golden brown. Turn over to cook the other side."},
                                {id: 10000070, title: "Transfer to a cooling rack. Let the oil drip."}
                            ], //array of objects
                            otherInfo: {
                                info: "course: fish; cuisine: filipino; pre time: 12 minutes; cook time: 6 minutes;\
                                    total time: 18 minutes; servings: 5 people"
                            }
                        },
                        {id: 100007, title: "grilled tuna belly", price: 200, img: "http://localhost/restaurant/public/images/grld-tna-blly.jpg",
                            ingredients: [
                                "4 lbs. Tuna belly",
                                "1 cup soy sauce",
                                "2 tablespoons sugar",
                                "4 pieces calamansi",
                                "¼ teaspoon ground black pepper"
                            ], //array of strings
                            directions: [
                                {id: 10000071, title: "Prepare the marinade by combine soy sauce, calamansi, \
                                    ground black pepper, and sugar in a bowl. Stir until well blended."},
                                {id: 10000072, title: "Place the tuna in a Ziploc bag. Pour the soy sauce marinade.\
                                    Let the air out of the bag. Seal. Marinate inside the fridge for at least 3 hours."},
                                {id: 10000073, title: "Heat-up the grill. Arrange the tuna belly on the grate \
                                    of the grill. Brush a generous amount marinade mixture on the tuna. \
                                    Grill for 3 to 5 minutes."},
                                {id: 10000074, title: "Turn the tuna belly over and grill the opposite side. \
                                    Baste the top and sides. Continue to grill for another 5 minutes. \
                                    Continue performing the process until the tuna is completely cooked."},
                                {id: 10000075, title: "Serve with a dipping sauce composed of soy sauce, calamansi, \
                                    and chili pepper. Share and enjoy!"},
                            ], //array of objects
                            otherInfo: {
                                info: "course: main course; cuisine: filipino; keyword: grilled fish, inihaw na isda, tuna;\
                                    prep time: 3 minutes; cook time: 18 minutes; servings: 6 people; calories: 39kcal"
                            }
                        },
                        {id: 100008, title: "daing na bangus", price: 160, img: "http://localhost/restaurant/public/images/dng-n-bngs.jpg",
                            ingredients: [
                                "1 medium to large milkfish bangus, scales removed and butterflied",
                                "2 tablespoons Knorr Liquid seasoning",
                                "5 cloves garlic crushed and chopped",
                                "5 pieces Thai chili minced",
                                "1 teaspoon crushed whole peppercorn",
                                "1/2 cup white vinegar",
                                "1 cup cooking oil"
                            ], //array of strings
                            directions: [
                                {id: 10000081, title: "Arrange the fish in a large plate belly part facing upwards."},
                                {id: 10000082, title: "Pour Knorr Liquid Seasoning all over the fish. \
                                    Distribute equally using your hands.Let it stay for 5 minutes."},
                                {id: 10000083, title: "Rub ground black pepper, chili, and garlic. Pour the vinegar. \
                                    Flip the fish over so that the belly part faces downward. This will let the meat \
                                    absorb the seasoning and spices better."},
                                {id: 10000084, title: "Cover the fish with a clear plastic wrap. Refrigerate overnight."},
                                {id: 10000085, title: "Heat oil in a wide pan. Once the oil gets hot, pan fry the fish. \
                                    until golden brown. Turn the fish over using a wide spatula to cook the opposite side.\
                                     Note: use a splatter screen to protect yourself"},
                                {id: 10000086, title: "Remove the fish from the pan. Arrange in a plate."},
                            ], //array of objects
                            otherInfo: {
                                info: "course: fish;cuisine: filipino;prep time: 3 hours; cook time: 15 minutes; \
                                    total time: 3 hours 15 minutes; servings: 2 people"
                            }
                        },
                    ]
                },
                {
                    id: 10002, title: "crabs",
                    dishes: [
                        {id: 100001, title: "stir fried crabs with ginger and scallions", price: 180,
                            img: "http://localhost/restaurant/public/images/str-frd-crbs-w-gngr-a-scllns.jpg",
                            ingredients: [
                                "4 lbs crabs",
                                "1  1/2 tablespoon oyster sauce",
                                "1/2 teaspoon sesame oil",
                                "1 teaspoon salt",
                                "1/2 teaspoon ground black pepper",
                                "2 teaspoons sugar",
                                "1 tablespoon cornstarch",
                                "1/2 cup water",
                                "1 cup scallions chopped",
                                "2 to 3 tablespoons ginger, minced"
                            ], // array of string
                            directions: [
                                {id: 10000011, title: "1. In a bowl, combine oyster sauce, sesame oil, salt, \
                                    ground black pepper, sugar, garlic, cornstarch, and water. Mix well then set aside."},
                                {id: 10000012, title: "2. Pour cooking oil in a wok or frying pan then apply heat."},
                                {id: 10000013, title: "3. Deep-fry the crabs for 3 minutes. Remove from the wok and \
                                    place in a container letting excess oil to drip."},
                                {id: 10000014, title: "4. On the same wok, remove cooking oil until about 2 tablespoons\
                                    are left. Sauté ginger and scallions for 2 minutes."},
                                {id: 10000015, title: "5. Put-in the deep-fried crabs and pour the sauce mixture \
                                    (mixed ingredients in number 1). Stir and cook for a minute."},
                            ], // array of objects
                            otherInfo: {
                                info: ""
                            }
                        },
                        {id: 100002, title: "chili garlic crabs", price: 110,
                            img: "http://localhost/restaurant/public/images/chl-grlc-crb.jpg",
                            ingredients: [
                                "3 lbs. crab cut in half",
                                "1 Knorr Chicken Cube",
                                "1 tablespoon tomato paste",
                                "¼ cup banana ketchup",
                                "3 teaspoons cornstarch",
                                "1 egg beaten",
                                "¾ cup green onion cut into pieces",
                                "3 Thai chili pepper chopped",
                                "1 onion chopped",
                                "1 head garlic minced",
                                "2 thumbs ginger grated",
                                "2 cups water",
                                "4 tablespoons cooking oil",
                                "Salt and ground black pepper to taste"
                            ], // array of strings
                            directions: [
                                {id: 10000021, title: "Heat oil in a cooking pot. Sauté the onion, garlic, ginger, \
                                    and Thai chili pepper."},
                                {id: 10000022, title: "Continue cooking by adding the crab. Cook while stirring \
                                    occasionally for 3 to 5 minutes. Note: I am using blue crab for this recipe."},
                                {id: 10000023, title: "Pour water into the pot and then add Knorr Chicken Cube. \
                                    Cover the pot and let the liquid boil."},
                                {id: 10000024, title: "Add tomato paste and banana ketchup. Stir. Cook for 2 minutes."},
                                {id: 10000025, title: "Add the shrimp back into the pot. Also add some green onions. \
                                    Cover the pot and cook for 1 to 2 minutes."},
                                {id: 10000026, title: "Season with salt and ground black pepper."},
                                {id: 10000027, title: "Add the beaten egg. Stir."},
                                {id: 10000028, title: "Make a slurry by combining cornstarch with 3 tablespoons water. \
                                    Pour the mixture into the pan. Stir until the sauce thickens."},
                            ], // array of objects,
                            otherInfo: {
                                info: "course: main dish; cuisine: filipino; keyword: chili crab, filipino sea food;\
                                    prep time: 1 hour 10 minutes; cook time: 30 minutes;servings: 4 people; calories: 482 kcal"
                            }
                        },
                        {id: 100003, title: "ginataang alimasag", price: 130,
                            img: "http://localhost/restaurant/public/images/gntng-almsg.jpg",
                            ingredients: [
                                "3 pieces crab steamed for 12 minutes",
                                "40 grams Knorr Ginataang Gulay Recipe Mix",
                                "15 pieces snake beans cut into 2-inch pieces",
                                "12 ounces calabaza squash cubed",
                                "1 piece onion chopped",
                                "2 thumbs ginger minced",
                                "5 cloves garlic crushed and chopped",
                                "3 tablespoons cooking oil",
                                "2 1/2 cups water room temperature",
                                "Salt and ground black pepper to taste optional"
                            ], // array of strings
                            directions: [
                                {id: 10000031, title: "Heat oil in a pan."},
                                {id: 10000032, title: "Saute garlic, onion, and ginger until onion turns translucent."},
                                {id: 10000033, title: "Combine water and Knorr Ginataang Gulay Mix. \
                                    Stir until well blended. Pour mixture into the pan. Let boil."},
                                {id: 10000034, title: "Add crab and kalabasa. Cover and boil for 5 minutes."},
                                {id: 10000035, title: "Add snake beans. Continue cooking for 8 minutes."},
                                {id: 10000036, title: "Season with salt and pepper if desired. \
                                    Note: this is an optional step."},
                            ], // array of objects,
                            otherInfo: {
                                info: "course: main course;cuisine: filipino; keyword: alimasag, crab, ginataan;\
                                    prep time: 4 minutes; cook time: 30 minutes; servings: 3 people;calories: 376 kcal"
                            }
                        },
                        {id: 100004, title: "tortang talon with crab meat", price: 60,
                            img: "http://localhost/restaurant/public/images/trtng-tlng-crb-mt.jpg",
                            ingredients: [
                                "3 medium chinese eggplants broiled for 12 minutes",
                                "4 eggs",
                                "1 cup fresh crabmeat",
                                "1 medium yellow onion chopped",
                                "1/4 teaspoon salt",
                                "1/4 teaspoon garlic powder",
                                "a dash of ground black pepper",
                                "8 tablespoons cooking oil"
                            ], // array of strings
                            directions: [
                                {id: 10000041, title: "Heat a pan and pour-in 3 to 4 tablespoons of oil."},
                                {id: 10000042, title: "Saute the onion until soft."},
                                {id: 10000043, title: "Add the crabmeat. Stir fry for 2 to 3 minutes."},
                                {id: 10000044, title: "Add salt, ground black pepper, and garlic powder.\
                                    Cook for 1 minute. Transfer to a bowl and then set aside."},
                                {id: 10000045, title: "Peel the eggplants. Make sure to completely remove the skin."},
                                {id: 10000046, title: "Lay a piece of eggplant flat in a plate and then flatten it \
                                    using a fork."},
                                {id: 10000047, title: "Heat a clean pan and pour-in remaining oil."},
                                {id: 10000048, title: "Dip the flattened eggplant in beaten egg. \
                                    Put in the pan with oil to fry. Scoop some of the cooked crabmeat and spread on top \
                                    of the eggplant. Pour 2 to 3 tablespoons of beaten eggs over the meat.\
                                    Push or scoop hot oil over the eggplant to partially cook the egg. \
                                    This will hold the crabmeat and prevent it from falling."},
                                {id: 10000049, title: "After 3 minutes, turn over the eggplant using a spatula. \
                                    Cook the other side for 3 to 5 minutes."},
                            ], // array of objects,
                            otherInfo: {
                                info: "prep time: 5 minutes; cook time: 8 minutes; total time: 13 minutes;servings: 3 people"
                            }
                        },
                        {id: 100005, title: "rellenong alimasag", price: 180,
                            img: "http://localhost/restaurant/public/images/rllng-almsg.jpg",
                            ingredients: [
                                "Meat and top shell of 8 pieces steamed blue crabs",
                                "1 medium potato diced",
                                "1 medium carrot diced",
                                "1/2 cup bread crumbs",
                                "1 medium onion minced",
                                "1 piece long green chili siling pansigang, chopped",
                                "1 medium tomato diced",
                                "3 teaspoons dried parsley",
                                "2 teaspoons garlic powder",
                                "2 teaspoons salt",
                                "1 teaspoon ground black pepper",
                                "2 tablespoons cooking oil for sauteeing",
                                "2 pieces raw eggs",
                                "1 cup cooking oil for frying"
                            ], // array of strings
                            directions: [
                                {id: 10000051, title: "Heat pan and pour-in 2 tablespoons of cooking oil."},
                                {id: 10000052, title: "Saute onion and tomatoes."},
                                {id: 10000053, title: "Add potato and carrot. Cook for 3 to 5 minutes"},
                                {id: 10000054, title: "Put-in the long green chili and crab meat (you may include \
                                        the juice of the crab for additional flavor). Cook for 2 minutes."},
                                {id: 10000055, title: "Add parsley, garlic powder, salt, and ground black pepper. \
                                    Stir. Turn off the heat and place in a large bowl."},
                                {id: 10000056, title: "Once the temperature cools down, combine the cooked mixture \
                                    with breadcrumbs and eggs. Mix well."},
                                {id: 10000057, title: "Stuff each crab shell with the mixture."},
                                {id: 10000058, title: "Heat a pan and pour-in 1 cup of oil."},
                                {id: 10000059, title: "When the oil becomes hot, fry the stuffed crab shells. \
                                    The part with the stuffing should be facing up. Gently scoop the hot oil using \
                                    a spoon and pour the oil on the stuffings. This will slowly cook the stuffing."},
                                {id: 10000060, title: "Flip the crab shell and fry the side with stuffing in medium heat \
                                    for about 3 to 5 minutes."},
                            ], // array of objects,
                            otherInfo: {
                                info: "course: main dish;cuisine: filipino;prep time: 10 minutes; cook time: 18 minutes;\
                                    total time: 28 minutes; servings: 8 people; calories: 204 kcal"
                            }
                        },
                        {id: 100006, title: "crispy crablets", price: 110,
                            img: "http://localhost/restaurant/public/images/crspy-crlts.jpg",
                            ingredients: [
                                "2 lbs. crablets cleaned",
                                "4 tablespoons gin or sherry optional",
                                "1 cup cornstarch",
                                "1/2 tablespoon salt",
                                "2 teaspoons ground black pepper",
                                "3 cups cooking oil"
                            ], // array of strings
                            directions: [
                                {id: 10000061, title: "Place the crablets in a bowl then pour-in gin or sherry. \
                                    Mix gently."},
                                {id: 10000062, title: "Sprinkle salt and ground black pepper then mix well."},
                                {id: 10000063, title: "Heat a frying pan or cooking pot and pour-in cooking oil."},
                                {id: 10000064, title: "Dredge the crablets in cornstarch then deep fry until the texture \
                                    becomes crispy."},
                                {id: 10000065, title: "Remove from the pan and place in a plate lined with paper towel."},
                                {id: 10000066, title: "Once excess oil drips-off completely, arrange in a serving plate \
                                    and serve with spicy vinegar dip."},
                            ], // array of objects,
                            otherInfo: {
                                info: "prep time: 15 minutes; cook time: 12 minutes; total time: 27 minutes;servings: 6 people"
                            }
                        },
                        {id: 100007, title: "aligue pasta", price: 120,
                            img: "http://localhost/restaurant/public/images/algue-psta.jpg",
                            ingredients: [
                                "1 lb fettuccine noodles cooked according to package instructions",
                                "1 lb mixed seafood cleaned (shrimp, mussels, squid, and crab)",
                                "1 cup heavy whipping cream",
                                "1  1/2 cup crab fat taba ng talangka",
                                "1/2 cup cooking rice wine",
                                "1 medium onion diced",
                                "1 tablespoon garlic minced",
                                "Salt and ground black pepper to taste",
                                "1 teaspoon green onions for garnish",
                                "2 tablespoons cooking oil"
                            ], // array of strings
                            directions: [
                                {id: 10000071, title: "Arrange cooked fettuccine noodles in a serving plate. Set aside."},
                                {id: 10000072, title: "Heat a cooking pot and pour-in cooking oil."},
                                {id: 10000073, title: "Sauté garlic and onions."},
                                {id: 10000074, title: "Pour-in cooking rice wine, stir, and cook for a minute."},
                                {id: 10000075, title: "Put-in the crab fat (taba ng talangka) then stir. Simmer for \
                                    2 minutes."},
                                {id: 10000076, title: "Sprinkle salt and ground black pepper, pour-in heavy whipping \
                                    cream, and stir. Simmer for 3 to 4 minutes."},
                                {id: 10000077, title: "Add mixed seafood and cook for 2 minutes."},
                                {id: 10000078, title: "Turn-off heat and pour over fettuccine noodles. \
                                    Garnish with green onions."},
                            ], // array of objects,
                            otherInfo: {
                                info: "prep time: 12 minutes;cook time: 30 minutes;total time: 42 minutes;servings: 2 people"
                            }
                        },
                    ]
                },
                {
                    id: 10003, title: 'shrimps',
                    dishes: [
                        {id: 100001, title: "halabos na hipon with butter", price: 150,
                            img: "http://localhost/restaurant/public/images/hlbs-n-hpn-w-bttr.jpg",
                            ingredients: [
                                "1 lb. shrimp deveined",
                                "1 cup lemon lime soda",
                                "2 tablespoons butter",
                                "1 tablespoons parsley chopped",
                                "½ teaspoon salt"
                            ], // array of strings
                            directions: [
                                {id: 10000011, title: "Heat pan and then add shrimp. Stir."},
                                {id: 10000012, title: "Pour lemon lime soda. Let it boil while gently stirring shrimp \
                                    once in a while. Continue cooking until the liquid reduces to half."},
                                {id: 10000013, title: "Season with salt and add butter. Let the butter melt. \
                                    Continue cooking for 1 to 2 minutes."},
                                {id: 10000014, title: "Add parsley. Stir."},
                            ], // array of objects
                            otherInfo: {
                                info: "course: main course;cuisine: filipino;keyword: shrimp recipes;prep time: 5 minutes;\
                                    cook time: 10 minutes;servings: 3 people; calores: 251 kcal"
                            }
                        },
                        {id: 100003, title: "lemon garlic shrimp pasta", price: 160,
                            img: "http://localhost/restaurant/public/images/lmn-grlc-shrmp-psta.jpg",
                            ingredients: [
                                "1 lb. shrimp deveined and shells removed",
                                "½ lb fettuccine pasta",
                                "7.6 ounces all-purpose cream",
                                "½ lemon",
                                "5 cloves garlic crushed and chopped",
                                "15 grape tomatoes halved",
                                "¼ cup parmesan cheese",
                                "¼ cup butter",
                                "2 tablespoons parsley chopped",
                                "3 tablespoons olive oil",
                                "Salt and ground black pepper to taste"
                            ], // array of strings
                            directions: [
                                {id: 10000031, title: "Cook pasta according to package instructions. You can add a \
                                    teaspoon of salt before boiling. Set aside."},
                                {id: 10000032, title: "Heat a pan. Pour-in olive oil. Add the shrimp once the oil gets \
                                    hot. Saute for 2 minutes or until both sides of the shrimp turns orange in color. \
                                    Remove the shrimp from the pan and transfer to a clean plate. Set aside."},
                                {id: 10000033, title: "Heat the remaining oil (if applicable. Otherwise add 2 tablespoons \
                                    of olive oil). Add 2 tablespoons of butter and continue cooking until the butter melts \
                                    and starts to bubble."},
                                {id: 10000034, title: "Add garlic. Cook while continuously stirring for 30 seconds."},
                                {id: 10000035, title: "Add grape tomatoes. Continue sautéing for 1 minute."},
                                {id: 10000036, title: "Pour the all-purpose cream into the pan and then add ¼ cup of pasta \
                                    water (this is the water used to cook the fettuccine). Stir and then add the lemon zest. \
                                    Let the mixture slowly boil (use medium heat setting). Continue cooking for 1 minute. \
                                    Season with salt and ground black pepper."},
                                {id: 10000037, title: "Toss the pasta into the pan. Add the shrimp, parsley, \
                                    and remaining butter. Continue tossing until all ingredients are incorporated. \
                                    Top with more parmesan cheese if desired."},
                            ], // array of objects
                            otherInfo: {
                                info: "course: main course;cuisine: italian;alredo pasta recipe,fettucine;prep time: 5 minutes;\
                                    cook time: 20 minutes;servings: 4 people; calores: 624 kcal"
                            }
                        },
                        {id: 100004, title: "chili garlic shrimp stir fry", price: 130,
                            img: "http://localhost/restaurant/public/images/chl-grlc-shrmp-str-fry.jpg",
                            ingredients: [
                                "2 lbs. shrimp cleaned",
                                "2 tablespoons minced garlic",
                                "1/2 cup banana ketchup",
                                "1 tablespoon Sriracha sauce",
                                "3 tablespoons butter",
                                "3 tablespoon sherry cooking wine",
                                "Salt and ground black pepper to taste",
                                "1/4 cup chopped green onions"
                            ], // array of strings
                            directions: [
                                {id: 10000041, title: "Melt butter in a pan."},
                                {id: 10000042, title: "Once the butter melts, continue to heat until hot."},
                                {id: 10000043, title: "Add the garlic. Cook for 1 to 2 minutes or until light brown."},
                                {id: 10000044, title: "Put-in the shrimp. Cook for 2 minutes."},
                                {id: 10000045, title: "Pour-in the sherry. Continue to cook until the liquid completely evaporates."},
                                {id: 10000046, title: "Add ketchup and Sriracha sauce. Continue to stir fry for 1 minute."},
                                {id: 10000047, title: "Put-in the green onions. Add salt and pepper to taste."},
                            ], // array of objects
                            otherInfo: {
                                info: "prep time: 10 minutes;cook time: 15 minutes; total time: 25 minutes;servings: 4 people"
                            }
                        },
                        {id: 100005, title: "coconut shrimp", price: 120,
                            img: "http://localhost/restaurant/public/images/ccnt-shrmp.jpg",
                            ingredients: [
                                "1 lb. large shrimp cleaned and shell removed",
                                "1 cup bread crumbs",
                                "1 cup sweetened desiccated coconut",
                                "Salt and ground black pepper to taste",
                                "½ cup all-purpose flour",
                                "1 cup cooking oil",
                                "----Battered ingredients----",
                                "1 egg",
                                "1 cup all-purpose flour",
                                "1 cup fresh milk",
                                "1 teaspoon baking powder",
                                "½ teaspoon salt",
                                "----Sweet chili sauce ingredients----",
                                "2 teaspoons minced garlic",                    
                                "¾ cup rice vinegar",
                                "¾ cup sugar",
                                "1 piece Thai chili pepper",
                                "¾ cup water",
                                "1 teaspoon ketchup",
                                "2 teaspoons cornstarch",
                                "Salt to taste"
                            ], // array of strings
                            directions: [
                                {id: 10000051, title: "Make the Sweet chili sauce by combining Good Life Minced Garlic, \
                                    Thai chili pepper, and water in a food processor or blender. Blitz for 10 seconds. \
                                    Set aside."},
                                {id: 100000512, title: "Pour vinegar in a saucepan. Let boil."},
                                {id: 100000513, title: "Pour the garlic, chili, and water mixture. Stir and cook for \
                                    2 minutes."},
                                {id: 100000514, title: "Add sugar. Stir until sugar dilutes completely. \
                                    Season with salt and add ketchup."},
                                {id: 100000515, title: "Combine cornstarch and 1 ½ tablespoons of water. \
                                    Stir until a slurry is formed. Pour the slurry into the saucepan. Stir right away. \
                                    Continue cooking in medium heat while stirring until the sauce thickens to your \
                                    desired consistency. Set the sauce aside."},
                                {id: 100000516, title: "Prepare the shrimp by seasoning with salt and ground black pepper.\
                                    Let it stay for 5 minutes."},
                                {id: 100000517, title: "Make the batter by combining all batter ingredients in a bowl. \
                                    Stir until the mixture smoothens. Set aside."},
                                {id: 100000518, title: "Combine Good Life Bread Crumbs and desiccated coconut in a bowl. \
                                    Mix well. Set aside."},
                                {id: 100000519, title: "Dredge shrimp in flour one piece at a time. Dip it in the batter \
                                    afterwards. Let the excess batter drip. Roll it next in bread crumb and desiccated \
                                    coconut mixture. Arrange the coated shrimp on a clean plate. Note: Make sure \
                                    that both sides get coated completely. Perform this step until all the shrimp are coated."},
                                {id: 1000005110, title: "Heat oil in a pan. Fry the coconut shrimp by batch. You can flip the \
                                    shrimp multiple times while frying until both sides turn golden brown in color."},
                                {id: 1000005111, title: "Place the coconut shrimp on a plate lined with a paper towel after \
                                    frying."},
                                {id: 1000005112, title: "Arrange on a serving plate and serve with sweet chili sauce."}
                            ], // array of objects
                            otherInfo: {
                                info: "course: appetizer;cuisine: american;keyword: appetizer recipes, shrimp recipes;\
                                    prep time: 10 minutes;cook time: 7 minutes;"
                            }
                        },
                        {id: 100006, title: "shrimp laing", price: 130,
                            img: "http://localhost/restaurant/public/images/shrmp-lng.jpg",
                            ingredients: [
                                "2 oz. dried taro leaves",
                                "10 pieces shrimp",
                                "4 cups coconut milk",
                                "3 tablespoons shrimp paste",
                                "1 piece onion minced",
                                "5 cloves garlic crushed",
                                "3 thumbs ginger Julienne",
                                "6 pieces Thai chili pepper",
                                "3 ounces pork fat",
                                "Ground white pepper to taste"
                            ], // array of strings
                            directions: [
                                {id: 10000061, title: "Clean the shrimp by cutting the antenna and deveining. Set aside."},
                                {id: 10000062, title: "Sear pork fat in a cooking pot. Continue cooking until enough oil\
                                    gets extracted from it."},
                                {id: 10000063, title: "Sauté onion, garlic, and ginger using the oil from the pork."},
                                {id: 10000064, title: "Once the onion tenderizes, pour coconut milk into the pot and let \
                                    it boil."},
                                {id: 10000065, title: "Add chili peppers, shrimp paste, and dried taro leaves. \
                                    Cover and cook for 5 minutes."},
                                {id: 10000066, title: "Push the leave to submerge in coconut milk. Continue boiling on a \
                                    covered pot for 30 minutes."},
                                {id: 10000067, title: "Stir the mixture and adjust the heat between low to medium. \
                                    Cover and cook for 45 to 60 minutes or until the leaves get very soft."},
                                {id: 10000068, title: "Season with ground pepper and add shrimp. Cook for 3 minutes."},
                            ], // array of objects
                            otherInfo: {
                                info: "course: main course;cuisine: filipino;keyword: bicol laing, how to cook shrimp,\
                                    spicy shrimp;prep time: 10 minutes; cook time: 1 hour 20 minutes; servings: 5 people;\
                                    calories: 560 kcal"
                            }
                        },
                        {id: 100007, title: "shrimp with pancit canton", price: 110,
                            img: "http://localhost/restaurant/public/images/shrmp-pnct-cntn.jpg",
                            ingredients: [
                                "1 lb. medium to large shrimp shell and head removed",
                                "16 ounces Pancit Canton noodles flour sticks",
                                "1 cup baby bok choy chopped (small pechay)",
                                "1 cup chopped Napa cabbage pechay Baguio",
                                "1/2 small red bell pepper cut into strips",
                                "1/2 small yellow bell pepper cut into strips",
                                "1/2 small green bell pepper cut into strips",
                                "1 medium yellow onion sliced",
                                "2 1/2 cups chicken broth",
                                "2 tablespoons oyster sauce",
                                "1 teaspoon garlic powder",
                                "Salt and ground black pepper to taste",
                                "3 tablespoons cooking oil"
                            ], // array of strings
                            directions: [
                                {id: 10000071, title: "Combine shrimp, garlic powder, a sprinkle of salt \
                                    and ground black pepper. Toss to coat the shrimp. Let is stay for at least 10 minutes."},
                                {id: 10000072, title: "Heat a wok and pour-in 2 tablespoons of cooking oil."},
                                {id: 10000073, title: "Once the oil gets hot, pan-fry the shrimp for 1 minute per side. \
                                    Remove the shrimp and put in a clean plate. Set aside."},
                                {id: 10000074, title: "Add the remaining cooking oil. Once the oil gets hot, stir-fry \
                                    the bell peppers for 2 minutes."},
                                {id: 10000075, title: "Put-in the bok choy and Napa cabbage. Continue to stir fry for \
                                    2 minutes. remove the veggies form the wok and place in a plate. Set aside."},
                                {id: 10000076, title: "Using the same wok, pour-in the chicken broth. Add the oyster sauce. \
                                    Stir and let boil."},
                                {id: 10000077, title: "Put-in the flour stiucks or pancit canton noodles. Let the noodles \
                                    absorb the liquid. Toss the noodles after every minute so that all the noodles can absorb \
                                    the same amount of liquid."},
                                {id: 10000078, title: "Once the noodles completely absorb the chicken broth, put-in the \
                                    stir-fried veggies. Toss and continue to cook for 2 minutes."},
                                {id: 10000079, title: "Add the cooked shimp. Toss and cook for 2 to 3 minutes. Add salt \
                                    and pepper if needed."},
                                {id: 100000710, title: "Transfer the shrimp Pancit Canton in a serving plate."},
                            ], // array of objects
                            otherInfo: {
                                info: "prep time: 10 minutes;cook time: 35 minutes;total time: 45 minutes;servings: 6 people"
                            }
                        },
                        {id: 100008, title: "butter garlic shrimp", price: 180,
                            img: "http://localhost/restaurant/public/images/gbshrmp.jpg",
                            ingredients: [
                                "2 lbs shrimp cleaned",
                                "2 tablespoons parsley chopped",
                                "1/4 cup butter",
                                "1 head garlic crushed",
                                "1 cup lemon lime soda",
                                "1 teaspoon lemon juice",
                                "salt and pepper to taste"
                            ], // array of strings
                            directions: [
                                {id: 10000081, title: "Marinate the shrimp in lemon soda for about 10 minutes"},
                                {id: 10000082, title: "Melt the butter in a pan."},
                                {id: 10000083, title: "Add the garlic. Cook in low heat until the color turns light brown"},
                                {id: 10000084, title: "Put-in the shrimp. Adjust heat to high. Stir-fry until shrimp turns orange."},
                                {id: 10000085, title: "Season with ground black pepper, salt, and lemon juice. Stir."},
                                {id: 10000086, title: "Add parsley. Cook for 30 seconds."},
                            ], // array of objects
                            otherInfo: {
                                info: "course: main course;cuisine: filipino recipe;keyword: butter garlic shrimp;\
                                    garlic butter shrim; how to cook shrimp;prep time: 10 minutes;cook time: 12 minutes;\
                                    total time: 22 minutes;servings: 6 people;calores: 243 kcal"
                            }
                        },
                    ]
                },
                {
                    id: 10004, title: 'shellfish',
                    dishes: [
                        {id: 100001, title: "spicy tahong", price: 150,
                            img: "",
                            ingredients: [], // array of string
                            directions: [], // array of object
                            otherInfo: {
                                info: ""
                            }
                        },
                        {id: 100002, title: "baked tahong with butter cheese", price: 130,
                            img: "",
                            ingredients: [], // array of string
                            directions: [], // array of object
                            otherInfo: {
                                info: ""
                            }
                        },
                        {id: 100003, title: "rellenong tahong", price: 180,
                            img: "",
                            ingredients: [], // array of string
                            directions: [], // array of object
                            otherInfo: {
                                info: ""
                            }
                        },
                        {id: 100004, title: "grilled mussels", price: 200,
                            img: "",
                            ingredients: [], // array of string
                            directions: [], // array of object
                            otherInfo: {
                                info: ""
                            }
                        },
                        {id: 100005, title: "snails with spinach in coconut milk", price: 130,
                            img: "",
                            ingredients: [], // array of string
                            directions: [], // array of object
                            otherInfo: {
                                info: ""
                            }
                        },
                        {id: 100006, title: "pasta with clams", price: 140,
                            img: "",
                            ingredients: [], // array of string
                            directions: [], // array of object
                            otherInfo: {
                                info: ""
                            }
                        },
                        {id: 100007, title: "clam soup", price: 120,
                            img: "",
                            ingredients: [], // array of string
                            directions: [], // array of object
                            otherInfo: {
                                info: ""
                            }
                        },
                        {id: 100008, title: "adobong tahong", price: 150,
                            img: "",
                            ingredients: [], // array of string
                            directions: [], // array of object
                            otherInfo: {
                                info: ""
                            }
                        },
                        {id: 100009, title: "deep fried mussel", price: 110,
                            img: "",
                            ingredients: [], // array of string
                            directions: [], // array of object
                            otherInfo: {
                                info: ""
                            }
                        },
                        {id: 1000010, title: "bacon wrapped scallops in lemon garlic butter sauce", price: 160,
                            img: "",
                            ingredients: [], // array of string
                            directions: [], // array of object
                            otherInfo: {
                                info: ""
                            }
                        },
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
                    id: 20002, title: "pork",
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
                    id: 20003, title: "beef",
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
    {
        id: 1003, type: "drinks",
        dishes: [

        ]
    },
    {
        id: 1004, type: {
            title: "desserts",
            item: [
                {
                    id: 10004, title: "desserts",
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
            ]
        }
    }
];
const choicesCONTENTLEN = CHOICES_CONTENT.children.length;
for(let i = 0; i < choicesCONTENTLEN; i++) {
    CHOICES_CONTENT.children[i].addEventListener("click", changeMENU);
    if(localStorage.getItem("defaultMENU") === CHOICES_CONTENT.children[i].children[0].innerHTML && localStorage.getItem("defaultMENU") === "sea foods")
        CHOICES_CONTENT.children[i].classList.add("active-options-menu-seafoods");
    else if(localStorage.getItem("defaultMENU") === CHOICES_CONTENT.children[i].children[0].innerHTML && localStorage.getItem("defaultMENU") === "meat")
        CHOICES_CONTENT.children[i].classList.add("active-options-menu-meat");
    else if(localStorage.getItem("defaultMENU") === CHOICES_CONTENT.children[i].children[0].innerHTML && localStorage.getItem("defaultMENU") === "drinks")
        CHOICES_CONTENT.children[i].classList.add("active-options-menu-drinks");
    else if(localStorage.getItem("defaultMENU") === CHOICES_CONTENT.children[i].children[0].innerHTML && localStorage.getItem("defaultMENU") === "desserts")
        CHOICES_CONTENT.children[i].classList.add("active-options-menu-desserts");
}

if(localStorage.getItem("defaultMENU") === "sea foods")
    MENU_MAIN_CONTAINER.appendChild(drawSeaFoodsMenu(
        0, "seafoods",
        parseInt(localStorage.getItem("currentFishIndex")), parseInt(localStorage.getItem("currentFishIndex"))+1
    ));
else if(localStorage.getItem("defaultMENU") === "meat"){
    MENU_MAIN_CONTAINER.appendChild(drawMeatFoodsMenu(1));
}
else if(localStorage.getItem("defaultMENU") === "drinks")
    MENU_MAIN_CONTAINER;
else if(localStorage.getItem("defaultMENU") === "desserts")
    MENU_MAIN_CONTAINER.appendChild(drawDessertsMenu(3));

//menuType can be [SeaFoods, Meat, Drinks, Desserts]
function drawSeaFoodsMenu (index, menuType, currIndex, nextIndex) {
    const seaFoodContainer = document.createElement("div");
    seaFoodContainer.className = "menu-content-container";

    let seafoodMENU = menusLists[index].type.item
    let FILength = seafoodMENU.length;
    for(let i = 0; i < FILength; i++) {
        const seafoodContentContainer = document.createElement("div");
        const activeMENU = document.createElement("div");
        const activeMENUPTAG = document.createElement("p");
        const prevARROW = document.createElement("div");
        const nextARROW = document.createElement("div");

        seafoodContentContainer.className = "menu-content-item-container"
        activeMENU.className = "active-menu";
        activeMENUPTAG.className = "text-capitalize";

        prevARROW.className = "prev";
        nextARROW.className = "next";
        
        prevARROW.setAttribute("id", `prev-${seafoodMENU[i].title}`);
        nextARROW.setAttribute("id", `next-${seafoodMENU[i].title}`);
        prevARROW.addEventListener("click", prevMenuDishListener)
        nextARROW.addEventListener("click", nextMenuDishListener);

        prevARROW.textContent = "❮";
        nextARROW.textContent = "❯";

        activeMENUPTAG.textContent = seafoodMENU[i].title;
        
        const finalContainer = document.createElement("div");
        finalContainer.className = "menu-content-item-container-final";
        if(seafoodMENU[i].title === "fish") {
            const seafoodDISHES = menusLists[index].type.item[i].dishes; // get each individual seafoods DISHES MENU
            finalContainer.appendChild(drawFishDish(seafoodDISHES, 
                parseInt(localStorage.getItem("currentFishIndex")), "menu-content-item"));
            finalContainer.appendChild(drawFishDish(seafoodDISHES, 
                parseInt(localStorage.getItem("currentFishIndex"))+1,
                "menu-content-next-item"));
        }
        else if(seafoodMENU[i].title === "crabs") {
            const seafoodDISHES = menusLists[index].type.item[i].dishes;
            finalContainer.appendChild(drawCrabsDish(seafoodDISHES, parseInt(localStorage.getItem("currentCrabsIndex")), 'menu-content-item'));
            finalContainer.appendChild(drawCrabsDish(seafoodDISHES, parseInt(localStorage.getItem("currentCrabsIndex"))+1, 'menu-content-next-item'));
        }
        else if(seafoodMENU[i].title === "shrimps") {
            const seafoodDISHES = menusLists[index].type.item[i].dishes;
            finalContainer.appendChild(drawShrimpDish(seafoodDISHES, parseInt(localStorage.getItem("currentShrimpsIndex")), 'menu-content-item'));
            finalContainer.appendChild(drawShrimpDish(seafoodDISHES, parseInt(localStorage.getItem("currentShrimpsIndex"))+1, 'menu-content-next-item'));
        }
        else if(seafoodMENU[i].title === "shellfish") {
            const seafoodDISHES = menusLists[index].type.item[i].dishes;
            finalContainer.appendChild(drawShellFish(seafoodDISHES, parseInt(localStorage.getItem("currentShellFishIndex")), 'menu-content-item'));
            finalContainer.appendChild(drawShellFish(seafoodDISHES, parseInt(localStorage.getItem("currentShellFishIndex"))+1, 'menu-content-next-item'));
        }
        
        seafoodContentContainer.appendChild(finalContainer);
        activeMENU.appendChild(activeMENUPTAG);
        seafoodContentContainer.appendChild(activeMENU);

        seafoodContentContainer.appendChild(prevARROW);
        seafoodContentContainer.appendChild(nextARROW);

        seaFoodContainer.appendChild(seafoodContentContainer);

    } // end of display fish menu
    
    return seaFoodContainer;
}

function drawFishDish(seafoodDISHES, index, classStyle) {
    const fishSeaFoodContentCURRENT = document.createElement("div");
    const fishSeaFoodContentCURRENTHEADER = document.createElement("div");
    const fishFoodPRICECONTAINER = document.createElement("div");
    const fishFoodPRICETAG = document.createElement("p");
    const fishSeaFoodContentCURRENTBODY = document.createElement("div");
    const fishFoodContentCURRENTIMG = document.createElement("img");
    const fishSeaFoodContentCURRENTPTAG = document.createElement("p");
    const fishOrderActionCURRENTButton = document.createElement("button");

    fishSeaFoodContentCURRENT.className = classStyle //"menu-content-item";
    fishSeaFoodContentCURRENTHEADER.className = "menu-content-header";
    fishFoodPRICECONTAINER.className = "food-price";
    fishSeaFoodContentCURRENTBODY.className = "menu-content-body";
    fishSeaFoodContentCURRENTPTAG.className = "ellipse text-capitalize";
    fishSeaFoodContentCURRENTPTAG.style.textAlign = "center";

    fishFoodContentCURRENTIMG.src = seafoodDISHES[index].img; // currentMenu DISH
    fishFoodPRICETAG.textContent = seafoodDISHES[index].price;
    fishSeaFoodContentCURRENTPTAG.textContent = seafoodDISHES[index].title; // currentMenu DISH
    fishOrderActionCURRENTButton.textContent = "add to order"; // currentMenu DISH

    fishSeaFoodContentCURRENTHEADER.appendChild(fishFoodContentCURRENTIMG);
    fishFoodPRICECONTAINER.appendChild(fishFoodPRICETAG);
    fishSeaFoodContentCURRENTHEADER.appendChild(fishFoodPRICECONTAINER);
    fishSeaFoodContentCURRENTBODY.appendChild(fishSeaFoodContentCURRENTPTAG);
    fishSeaFoodContentCURRENTBODY.appendChild(fishOrderActionCURRENTButton);

    fishSeaFoodContentCURRENT.appendChild(fishSeaFoodContentCURRENTHEADER);
    fishSeaFoodContentCURRENT.appendChild(fishSeaFoodContentCURRENTBODY);

    return fishSeaFoodContentCURRENT;
} // this get executed if prev, and next arrow was clicked by user

function drawCrabsDish(seafoodDISHES, index, classStyle) {
    const crabSeaFoodContentCURRENT = document.createElement("div");
    const crabSeaFoodContentCURRENTHEADER = document.createElement("div");
    const crabFoodPRICECONTAINER = document.createElement("div");
    const crabFoodPRICETAG = document.createElement("p");
    const crabSeaFoodContentCURRENTBODY = document.createElement("div");
    const crabFoodContentCURRENTIMG = document.createElement("img");
    const crabSeaFoodContentCURRENTPTAG = document.createElement("p");
    const crabOrderActionCURRENTButton = document.createElement("button");

    crabSeaFoodContentCURRENT.className = classStyle //"menu-content-item";
    crabSeaFoodContentCURRENTHEADER.className = "menu-content-header";
    crabFoodPRICECONTAINER.className = "food-price";
    crabSeaFoodContentCURRENTBODY.className = "menu-content-body";
    crabSeaFoodContentCURRENTPTAG.className = "ellipse text-capitalize";
    crabSeaFoodContentCURRENTPTAG.style.textAlign = "center";

    crabFoodContentCURRENTIMG.src = seafoodDISHES[index].img; // currentMenu DISH
    crabFoodPRICETAG.textContent = seafoodDISHES[index].price;
    crabSeaFoodContentCURRENTPTAG.textContent = seafoodDISHES[index].title; // currentMenu DISH
    crabOrderActionCURRENTButton.textContent = "add to order"; // currentMenu DISH

    crabSeaFoodContentCURRENTHEADER.appendChild(crabFoodContentCURRENTIMG);
    crabFoodPRICECONTAINER.appendChild(crabFoodPRICETAG);
    crabSeaFoodContentCURRENTHEADER.appendChild(crabFoodPRICECONTAINER);
    crabSeaFoodContentCURRENTBODY.appendChild(crabSeaFoodContentCURRENTPTAG);
    crabSeaFoodContentCURRENTBODY.appendChild(crabOrderActionCURRENTButton);

    crabSeaFoodContentCURRENT.appendChild(crabSeaFoodContentCURRENTHEADER);
    crabSeaFoodContentCURRENT.appendChild(crabSeaFoodContentCURRENTBODY);

    return crabSeaFoodContentCURRENT;
} // this get executed if prev, and next arrow was clicked by user

function drawShrimpDish(seafoodDISHES, index, classStyle) {
    const shrimpSeaFoodContentCURRENT = document.createElement("div");
    const shrimpSeaFoodContentCURRENTHEADER = document.createElement("div");
    const shrimpFoodPRICECONTAINER = document.createElement("div");
    const shrimpFoodPRICETAG = document.createElement("p");
    const shrimpSeaFoodContentCURRENTBODY = document.createElement("div");
    const shrimpFoodContentCURRENTIMG = document.createElement("img");
    const shrimpSeaFoodContentCURRENTPTAG = document.createElement("p");
    const shrimpOrderActionCURRENTButton = document.createElement("button");

    shrimpSeaFoodContentCURRENT.className = classStyle //"menu-content-item";
    shrimpSeaFoodContentCURRENTHEADER.className = "menu-content-header";
    shrimpFoodPRICECONTAINER.className = "food-price";
    shrimpSeaFoodContentCURRENTBODY.className = "menu-content-body";
    shrimpSeaFoodContentCURRENTPTAG.className = "ellipse text-capitalize";
    shrimpSeaFoodContentCURRENTPTAG.style.textAlign = "center";

    shrimpFoodContentCURRENTIMG.src = seafoodDISHES[index].img; // currentMenu DISH
    shrimpFoodPRICETAG.textContent = seafoodDISHES[index].price;
    shrimpSeaFoodContentCURRENTPTAG.textContent = seafoodDISHES[index].title; // currentMenu DISH
    shrimpOrderActionCURRENTButton.textContent = "add to order"; // currentMenu DISH

    shrimpSeaFoodContentCURRENTHEADER.appendChild(shrimpFoodContentCURRENTIMG);
    shrimpFoodPRICECONTAINER.appendChild(shrimpFoodPRICETAG);
    shrimpSeaFoodContentCURRENTHEADER.appendChild(shrimpFoodPRICECONTAINER);
    shrimpSeaFoodContentCURRENTBODY.appendChild(shrimpSeaFoodContentCURRENTPTAG);
    shrimpSeaFoodContentCURRENTBODY.appendChild(shrimpOrderActionCURRENTButton);

    shrimpSeaFoodContentCURRENT.appendChild(shrimpSeaFoodContentCURRENTHEADER);
    shrimpSeaFoodContentCURRENT.appendChild(shrimpSeaFoodContentCURRENTBODY);

    return shrimpSeaFoodContentCURRENT;
} // this get executed if prev, and next arrow was clicked by user
function drawShellFish(seafoodDISHES, index, classStyle) {
    const shellFishSeaFoodContentCURRENT = document.createElement("div");
    const shellFishSeaFoodContentCURRENTHEADER = document.createElement("div");
    const shellFishFoodPRICECONTAINER = document.createElement("div");
    const shellFishFoodPRICETAG = document.createElement("p");
    const shellFishSeaFoodContentCURRENTBODY = document.createElement("div");
    const shellFishFoodContentCURRENTIMG = document.createElement("img");
    const shellFishSeaFoodContentCURRENTPTAG = document.createElement("p");
    const shellFishOrderActionCURRENTButton = document.createElement("button");

    shellFishSeaFoodContentCURRENT.className = classStyle //"menu-content-item";
    shellFishSeaFoodContentCURRENTHEADER.className = "menu-content-header";
    shellFishFoodPRICECONTAINER.className = "food-price";
    shellFishSeaFoodContentCURRENTBODY.className = "menu-content-body";
    shellFishSeaFoodContentCURRENTPTAG.className = "ellipse text-capitalize";
    shellFishSeaFoodContentCURRENTPTAG.style.textAlign = "center";

    shellFishFoodContentCURRENTIMG.src = "http://localhost/restaurant/public/images/adobo.jpg"; // currentMenu DISH
    shellFishFoodPRICETAG.textContent = seafoodDISHES[index].price;
    shellFishSeaFoodContentCURRENTPTAG.textContent = seafoodDISHES[index].title; // currentMenu DISH
    shellFishOrderActionCURRENTButton.textContent = "add to order"; // currentMenu DISH

    shellFishSeaFoodContentCURRENTHEADER.appendChild(shellFishFoodContentCURRENTIMG);
    shellFishFoodPRICECONTAINER.appendChild(shellFishFoodPRICETAG);
    shellFishSeaFoodContentCURRENTHEADER.appendChild(shellFishFoodPRICECONTAINER);
    shellFishSeaFoodContentCURRENTBODY.appendChild(shellFishSeaFoodContentCURRENTPTAG);
    shellFishSeaFoodContentCURRENTBODY.appendChild(shellFishOrderActionCURRENTButton);

    shellFishSeaFoodContentCURRENT.appendChild(shellFishSeaFoodContentCURRENTHEADER);
    shellFishSeaFoodContentCURRENT.appendChild(shellFishSeaFoodContentCURRENTBODY);

    return shellFishSeaFoodContentCURRENT;
} // this get executed if prev, and next arrow was clicked by user

function drawMeatFoodsMenu(index) {
    const meatFoodContainer = document.createElement("div");
    meatFoodContainer.className = "menu-content-container";

    let meatfoodMENU = menusLists[index].type.item
    let MFMLength = meatfoodMENU.length;
    for(let i = 0; i < MFMLength; i++) {
        const meatfoodContentContainer = document.createElement("div");
        const activeMENU = document.createElement("div");
        const activeMENUPTAG = document.createElement("p");
        const prevARROW = document.createElement("div");
        const nextARROW = document.createElement("div");

        meatfoodContentContainer.className = "menu-content-item-container"
        activeMENU.className = "active-menu";
        activeMENUPTAG.className = "text-capitalize";

        prevARROW.className = "prev";
        nextARROW.className = "next";
        
        prevARROW.setAttribute("id", `prev-${meatfoodMENU[i].title}`);
        nextARROW.setAttribute("id", `next-${meatfoodMENU[i].title}`);
        prevARROW.addEventListener("click", prevMenuDishListener)
        nextARROW.addEventListener("click", nextMenuDishListener);

        prevARROW.textContent = "❮";
        nextARROW.textContent = "❯";

        activeMENUPTAG.textContent = meatfoodMENU[i].title;
        
        const finalContainer = document.createElement("div");
        finalContainer.className = "menu-content-item-container-final";
        if(meatfoodMENU[i].title === "chicken") {
            const meatfoodDISHES = menusLists[index].type.item[i].dishes; // get each individual meatfoods DISHES MENU
            finalContainer.appendChild(drawFishDish(meatfoodDISHES, 
                parseInt(localStorage.getItem("currentFishIndex")), "menu-content-item"));
            finalContainer.appendChild(drawFishDish(meatfoodDISHES, 
                parseInt(localStorage.getItem("currentFishIndex"))+1,
                "menu-content-next-item"));
        }
        else if(meatfoodMENU[i].title === "pork") {
            const meatfoodDISHES = menusLists[index].type.item[i].dishes;
            finalContainer.appendChild(drawCrabsDish(meatfoodDISHES, parseInt(localStorage.getItem("currentCrabsIndex")), 'menu-content-item'));
            finalContainer.appendChild(drawCrabsDish(meatfoodDISHES, parseInt(localStorage.getItem("currentCrabsIndex"))+1, 'menu-content-next-item'));
        }
        else if(meatfoodMENU[i].title === "beef") {
            const meatfoodDISHES = menusLists[index].type.item[i].dishes;
            finalContainer.appendChild(drawCrabsDish(meatfoodDISHES, parseInt(localStorage.getItem("currentShrimpsIndex")), 'menu-content-item'));
            finalContainer.appendChild(drawCrabsDish(meatfoodDISHES, parseInt(localStorage.getItem("currentShrimpsIndex"))+1, 'menu-content-next-item'));
        }
        
        meatfoodContentContainer.appendChild(finalContainer);
        activeMENU.appendChild(activeMENUPTAG);
        meatfoodContentContainer.appendChild(activeMENU);

        meatfoodContentContainer.appendChild(prevARROW);
        meatfoodContentContainer.appendChild(nextARROW);

        meatFoodContainer.appendChild(meatfoodContentContainer);

    } // end of display fish menu
    
    return meatFoodContainer;
}

function drawMeatDish(meatDISHES, index, classStyle) {
    const meatSeaFoodContentCURRENT = document.createElement("div");
    const meatSeaFoodContentCURRENTHEADER = document.createElement("div");
    const meatFoodPRICECONTAINER = document.createElement("div");
    const meatFoodPRICETAG = document.createElement("p");
    const meatSeaFoodContentCURRENTBODY = document.createElement("div");
    const meatFoodContentCURRENTIMG = document.createElement("img");
    const meatSeaFoodContentCURRENTPTAG = document.createElement("p");
    const meatOrderActionCURRENTButton = document.createElement("button");

    meatSeaFoodContentCURRENT.className = classStyle //"menu-content-item";
    meatSeaFoodContentCURRENTHEADER.className = "menu-content-header";
    meatFoodPRICECONTAINER.className = "food-price";
    meatSeaFoodContentCURRENTBODY.className = "menu-content-body";
    meatSeaFoodContentCURRENTPTAG.className = "ellipse text-capitalize";
    meatSeaFoodContentCURRENTPTAG.style.textAlign = "center";

    meatFoodContentCURRENTIMG.src = "http://localhost/restaurant/public/images/adobo.jpg"; // currentMenu DISH
    meatFoodPRICETAG.textContent = meatDISHES[index].price;
    meatSeaFoodContentCURRENTPTAG.textContent = meatDISHES[index].title; // currentMenu DISH
    meatOrderActionCURRENTButton.textContent = "add to order"; // currentMenu DISH

    meatSeaFoodContentCURRENTHEADER.appendChild(meatFoodContentCURRENTIMG);
    meatFoodPRICECONTAINER.appendChild(meatFoodPRICETAG);
    meatSeaFoodContentCURRENTHEADER.appendChild(meatFoodPRICECONTAINER);
    meatSeaFoodContentCURRENTBODY.appendChild(meatSeaFoodContentCURRENTPTAG);
    meatSeaFoodContentCURRENTBODY.appendChild(meatOrderActionCURRENTButton);

    meatSeaFoodContentCURRENT.appendChild(meatSeaFoodContentCURRENTHEADER);
    meatSeaFoodContentCURRENT.appendChild(meatSeaFoodContentCURRENTBODY);

    return meatSeaFoodContentCURRENT;
}

function drawDessertsMenu(index) {
    const dessertFoodContainer = document.createElement("div");
    dessertFoodContainer.className = "menu-content-container";

    let dessertfoodMENU = menusLists[index].type.item;
    let MFMLength = dessertfoodMENU.length;
    for(let i = 0; i < MFMLength; i++) {
        const dessertfoodContentContainer = document.createElement("div");
        const activeMENU = document.createElement("div");
        const activeMENUPTAG = document.createElement("p");
        const prevARROW = document.createElement("div");
        const nextARROW = document.createElement("div");

        dessertfoodContentContainer.className = "menu-content-item-container"
        activeMENU.className = "active-menu";
        activeMENUPTAG.className = "text-capitalize";

        prevARROW.className = "prev";
        nextARROW.className = "next";
        
        prevARROW.setAttribute("id", `prev-${dessertfoodMENU[i].title}`);
        nextARROW.setAttribute("id", `next-${dessertfoodMENU[i].title}`);
        prevARROW.addEventListener("click", prevMenuDishListener)
        nextARROW.addEventListener("click", nextMenuDishListener);

        prevARROW.textContent = "❮";
        nextARROW.textContent = "❯";

        activeMENUPTAG.textContent = dessertfoodMENU[i].title;

        const finalContainer = document.createElement("div");
        finalContainer.className = "menu-content-item-container-final";
        if(dessertfoodMENU[i].title === "desserts") {
            const dessertfoodDISHES = menusLists[index].type.item[i].dishes; // get each individual dessertfoods DISHES MENU
            finalContainer.appendChild(drawDessertDish(dessertfoodDISHES, 
                parseInt(localStorage.getItem("currentFishIndex")), "menu-content-item"));
            finalContainer.appendChild(drawDessertDish(dessertfoodDISHES, 
                parseInt(localStorage.getItem("currentFishIndex"))+1,
                "menu-content-next-item"));
        }
        
        dessertfoodContentContainer.appendChild(finalContainer);
        activeMENU.appendChild(activeMENUPTAG);
        dessertfoodContentContainer.appendChild(activeMENU);

        dessertfoodContentContainer.appendChild(prevARROW);
        dessertfoodContentContainer.appendChild(nextARROW);

        dessertFoodContainer.appendChild(dessertfoodContentContainer);

    } // end of display fish menu
    
    return dessertFoodContainer;
}

function drawDessertDish(dessertDISHES, index, classStyle) {
    const dessertSeaFoodContentCURRENT = document.createElement("div");
    const dessertSeaFoodContentCURRENTHEADER = document.createElement("div");
    const dessertFoodPRICECONTAINER = document.createElement("div");
    const dessertFoodPRICETAG = document.createElement("p");
    const dessertSeaFoodContentCURRENTBODY = document.createElement("div");
    const dessertFoodContentCURRENTIMG = document.createElement("img");
    const dessertSeaFoodContentCURRENTPTAG = document.createElement("p");
    const dessertOrderActionCURRENTButton = document.createElement("button");

    dessertSeaFoodContentCURRENT.className = classStyle //"menu-content-item";
    dessertSeaFoodContentCURRENTHEADER.className = "menu-content-header";
    dessertFoodPRICECONTAINER.className = "food-price";
    dessertSeaFoodContentCURRENTBODY.className = "menu-content-body";
    dessertSeaFoodContentCURRENTPTAG.className = "ellipse text-capitalize";
    dessertSeaFoodContentCURRENTPTAG.style.textAlign = "center";

    dessertFoodContentCURRENTIMG.src = "http://localhost/restaurant/public/images/adobo.jpg"; // currentMenu DISH
    dessertFoodPRICETAG.textContent = dessertDISHES[index].price;
    dessertSeaFoodContentCURRENTPTAG.textContent = dessertDISHES[index].title; // currentMenu DISH
    dessertOrderActionCURRENTButton.textContent = "add to order"; // currentMenu DISH

    dessertSeaFoodContentCURRENTHEADER.appendChild(dessertFoodContentCURRENTIMG);
    dessertFoodPRICECONTAINER.appendChild(dessertFoodPRICETAG);
    dessertSeaFoodContentCURRENTHEADER.appendChild(dessertFoodPRICECONTAINER);
    dessertSeaFoodContentCURRENTBODY.appendChild(dessertSeaFoodContentCURRENTPTAG);
    dessertSeaFoodContentCURRENTBODY.appendChild(dessertOrderActionCURRENTButton);

    dessertSeaFoodContentCURRENT.appendChild(dessertSeaFoodContentCURRENTHEADER);
    dessertSeaFoodContentCURRENT.appendChild(dessertSeaFoodContentCURRENTBODY);

    return dessertSeaFoodContentCURRENT
}

function changeMENU () {
    const newMENU = this.children[0].innerHTML;
    for(let i = 0; i < choicesCONTENTLEN; i++) {
        CHOICES_CONTENT.children[i].classList.remove("active-options-menu-seafoods");
        CHOICES_CONTENT.children[i].classList.remove("active-options-menu-meat");
        CHOICES_CONTENT.children[i].classList.remove("active-options-menu-drinks");
        CHOICES_CONTENT.children[i].classList.remove("active-options-menu-desserts");
    }
    const CURRENT_ACTIVE_CHILD = MENU_MAIN_CONTAINER.children[0];
    CURRENT_ACTIVE_CHILD.remove()
    if(newMENU === "sea foods"){
        this.classList.add("active-options-menu-seafoods");
        MENU_MAIN_CONTAINER.appendChild(drawSeaFoodsMenu(
            0, "seafoods",
            parseInt(localStorage.getItem("currentFishIndex")), parseInt(localStorage.getItem("currentFishIndex"))+1
        ));
    }
    else if(newMENU === "meat"){
        this.classList.add("active-options-menu-meat");
        MENU_MAIN_CONTAINER.appendChild(drawMeatFoodsMenu(1));
    } 
    else if(newMENU === "drinks"){
        this.classList.add("active-options-menu-drinks");
    } 
    else if(newMENU === "desserts"){
        this.classList.add("active-options-menu-desserts");
        MENU_MAIN_CONTAINER.appendChild(drawDessertsMenu(3))
    }
    localStorage.setItem("defaultMENU", newMENU);
} // menu can be one of them [seafoods, meat, desserts. i just made a special treat to drinks, so it was added]

function nextMenuDishListener() {
    const nextID = this.getAttribute("id");
    if(nextID === "next-fish") {
        if(parseInt(localStorage.getItem("currentFishIndex"))+1 >= menusLists[0].type.item[0].dishes.length)
            return ;
        const currentFishIndex = parseInt(localStorage.getItem("currentFishIndex"));
        localStorage.setItem("currentFishIndex", currentFishIndex+1);
        const fishDISH = MENU_MAIN_CONTAINER.children[0].children[0]; // display all child
        const fishCONTENT = fishDISH.children[0]; // the card fish dish item

        // fishCONTENT.children[0].className = "inactive";
        // fishCONTENT.children[1].className = "menu-content-item";
        fishCONTENT.children[0].style.marginLeft = "-200px";
        fishCONTENT.children[0].classList.add("inactive");
        fishCONTENT.children[1].className = "menu-content-item";
        
        if(parseInt(localStorage.getItem("currentFishIndex"))+1 >= menusLists[0].type.item[0].dishes.length)
            localStorage.setItem("currentFishIndex", -1);
        const si = setInterval(() => {
            fishCONTENT.appendChild(drawFishDish(menusLists[0].type.item[0].dishes, 
                parseInt(localStorage.getItem("currentFishIndex"))+1 >= menusLists[0].type.item[0].dishes.length? 0:parseInt(localStorage.getItem("currentFishIndex"))+1
                , "menu-content-next-item"))

            const sisi = setInterval(() => {
                fishCONTENT.removeChild(fishCONTENT.children[0])
                clearInterval(sisi)
            }, 2000);
            clearInterval(si)
        }, 1000);
    } // this means user clicked the fish menu dish
    else if(nextID === "next-crabs") {
        if(parseInt(localStorage.getItem("currentCrabsIndex"))+1 >= menusLists[0].type.item[1].dishes.length)
            return ;
        const currentCrabsIndex = parseInt(localStorage.getItem("currentCrabsIndex"));
        localStorage.setItem("currentCrabsIndex", currentCrabsIndex+1);
        const fishDISH = MENU_MAIN_CONTAINER.children[0].children[1]; // display all child
        const fishCONTENT = fishDISH.children[0]; // the card fish dish item

        // fishCONTENT.children[0].className = "inactive";
        // fishCONTENT.children[1].className = "menu-content-item";
        fishCONTENT.children[0].style.marginLeft = "-200px";
        fishCONTENT.children[0].classList.add("inactive");
        fishCONTENT.children[1].className = "menu-content-item";
        
        if(parseInt(localStorage.getItem("currentCrabsIndex"))+1 >= menusLists[0].type.item[1].dishes.length)
            localStorage.setItem("currentCrabsIndex", -1);
        const si = setInterval(() => {
            fishCONTENT.appendChild(drawFishDish(menusLists[0].type.item[1].dishes, 
                parseInt(localStorage.getItem("currentCrabsIndex"))+1 >= menusLists[0].type.item[1].dishes.length? 0:parseInt(localStorage.getItem("currentCrabsIndex"))+1
                , "menu-content-next-item"))

            const sisi = setInterval(() => {
                fishCONTENT.removeChild(fishCONTENT.children[0])
                clearInterval(sisi)
            }, 2000);
            clearInterval(si)
        }, 1000);
    } // this means user clicked the crabs menu dish
    else if(nextID === "next-shrimps") {
        if(parseInt(localStorage.getItem("currentShrimpsIndex"))+1 >= menusLists[0].type.item[2].dishes.length)
            return ;
        const currentShrimpsIndex = parseInt(localStorage.getItem("currentShrimpsIndex"));
        localStorage.setItem("currentShrimpsIndex", currentShrimpsIndex+1);
        const fishDISH = MENU_MAIN_CONTAINER.children[0].children[2]; // display all child
        const fishCONTENT = fishDISH.children[0]; // the card fish dish item

        // fishCONTENT.children[0].className = "inactive";
        // fishCONTENT.children[1].className = "menu-content-item";
        fishCONTENT.children[0].style.marginLeft = "-200px";
        fishCONTENT.children[0].classList.add("inactive");
        fishCONTENT.children[1].className = "menu-content-item";
        
        if(parseInt(localStorage.getItem("currentShrimpsIndex"))+1 >= menusLists[0].type.item[2].dishes.length)
            localStorage.setItem("currentShrimpsIndex", -1);
        const si = setInterval(() => {
            fishCONTENT.appendChild(drawFishDish(menusLists[0].type.item[2].dishes, 
                parseInt(localStorage.getItem("currentShrimpsIndex"))+1 >= menusLists[0].type.item[2].dishes.length? 0:parseInt(localStorage.getItem("currentShrimpsIndex"))+1
                , "menu-content-next-item"))

            const sisi = setInterval(() => {
                fishCONTENT.removeChild(fishCONTENT.children[0])
                clearInterval(sisi)
            }, 2000);
            clearInterval(si)
        }, 1000);
    } // this means user clicked the shrimps menu dish
    else if(nextID === "next-shellfish") {
        if(parseInt(localStorage.getItem("currentShellFishIndex"))+1 >= menusLists[0].type.item[3].dishes.length)
            return ;
        const currentShellFishIndex = parseInt(localStorage.getItem("currentShellFishIndex"));
        localStorage.setItem("currentShellFishIndex", currentShellFishIndex+1);
        const fishDISH = MENU_MAIN_CONTAINER.children[0].children[3]; // display all child
        const fishCONTENT = fishDISH.children[0]; // the card fish dish item

        // fishCONTENT.children[0].className = "inactive";
        // fishCONTENT.children[1].className = "menu-content-item";
        fishCONTENT.children[0].style.marginLeft = "-200px";
        fishCONTENT.children[0].classList.add("inactive");
        fishCONTENT.children[1].className = "menu-content-item";
        
        if(parseInt(localStorage.getItem("currentShellFishIndex"))+1 >= menusLists[0].type.item[3].dishes.length)
            localStorage.setItem("currentShellFishIndex", -1);
        const si = setInterval(() => {
            fishCONTENT.appendChild(drawFishDish(menusLists[0].type.item[3].dishes, 
                parseInt(localStorage.getItem("currentShellFishIndex"))+1 >= menusLists[0].type.item[3].dishes.length? 0:parseInt(localStorage.getItem("currentShellFishIndex"))+1
                , "menu-content-next-item"))

            const sisi = setInterval(() => {
                fishCONTENT.removeChild(fishCONTENT.children[0])
                clearInterval(sisi)
            }, 2000);
            clearInterval(si)
        }, 1000);
    } // this means user clicked the shrimps menu dish
    else if(nextID === "next-chicken") {
        if(parseInt(localStorage.getItem("currentChickenIndex"))+1 >= menusLists[1].type.item[0].dishes.length)
            return ;
        const currentChickenIndex = parseInt(localStorage.getItem("currentChickenIndex"));
        localStorage.setItem("currentChickenIndex", currentChickenIndex+1);
        const meatDISH = MENU_MAIN_CONTAINER.children[0].children[0]; // display all child
        const meatCONTENT = meatDISH.children[0]; // the card fish dish item

        // meatCONTENT.children[0].className = "inactive";
        // meatCONTENT.children[1].className = "menu-content-item";
        meatCONTENT.children[0].style.marginLeft = "-200px";
        meatCONTENT.children[0].classList.add("inactive");
        meatCONTENT.children[1].className = "menu-content-item";
        
        if(parseInt(localStorage.getItem("currentChickenIndex"))+1 >= menusLists[1].type.item[0].dishes.length)
            localStorage.setItem("currentChickenIndex", -1);
        const si = setInterval(() => {
            meatCONTENT.appendChild(drawMeatDish(menusLists[1].type.item[0].dishes, 
                parseInt(localStorage.getItem("currentChickenIndex"))+1 >= menusLists[1].type.item[0].dishes.length? 0:parseInt(localStorage.getItem("currentChickenIndex"))+1
                , "menu-content-next-item"))

            const sisi = setInterval(() => {
                meatCONTENT.removeChild(meatCONTENT.children[0])
                clearInterval(sisi)
            }, 2000);
            clearInterval(si)
        }, 1000);
    } // this means user clicked the shrimps menu dish
    else if(nextID === "next-pork") {
        if(parseInt(localStorage.getItem("currentPorkIndex"))+1 >= menusLists[1].type.item[1].dishes.length)
            return ;
        const currentPorkIndex = parseInt(localStorage.getItem("currentPorkIndex"));
        localStorage.setItem("currentPorkIndex", currentPorkIndex+1);
        const meatDISH = MENU_MAIN_CONTAINER.children[0].children[1]; // display all child
        const meatCONTENT = meatDISH.children[0]; // the card fish dish item

        // meatCONTENT.children[0].className = "inactive";
        // meatCONTENT.children[1].className = "menu-content-item";
        meatCONTENT.children[0].style.marginLeft = "-200px";
        meatCONTENT.children[0].classList.add("inactive");
        meatCONTENT.children[1].className = "menu-content-item";
        
        if(parseInt(localStorage.getItem("currentPorkIndex"))+1 >= menusLists[1].type.item[1].dishes.length)
            localStorage.setItem("currentPorkIndex", -1);
        const si = setInterval(() => {
            meatCONTENT.appendChild(drawMeatDish(menusLists[1].type.item[1].dishes, 
                parseInt(localStorage.getItem("currentPorkIndex"))+1 >= menusLists[1].type.item[1].dishes.length? 0:parseInt(localStorage.getItem("currentPorkIndex"))+1
                , "menu-content-next-item"))

            const sisi = setInterval(() => {
                meatCONTENT.removeChild(meatCONTENT.children[0])
                clearInterval(sisi)
            }, 2000);
            clearInterval(si)
        }, 1000);
    } // this means user clicked the shrimps menu dish
    else if(nextID === "next-beef") {
        if(parseInt(localStorage.getItem("currentBeefIndex"))+1 >= menusLists[1].type.item[1].dishes.length)
            return ;
        const currentBeefIndex = parseInt(localStorage.getItem("currentBeefIndex"));
        localStorage.setItem("currentBeefIndex", currentBeefIndex+1);
        const meatDISH = MENU_MAIN_CONTAINER.children[0].children[2]; // display all child
        const meatCONTENT = meatDISH.children[0]; // the card fish dish item

        // meatCONTENT.children[0].className = "inactive";
        // meatCONTENT.children[1].className = "menu-content-item";
        meatCONTENT.children[0].style.marginLeft = "-200px";
        meatCONTENT.children[0].classList.add("inactive");
        meatCONTENT.children[1].className = "menu-content-item";
        
        if(parseInt(localStorage.getItem("currentBeefIndex"))+1 >= menusLists[1].type.item[2].dishes.length)
            localStorage.setItem("currentBeefIndex", -1);
        const si = setInterval(() => {
            meatCONTENT.appendChild(drawMeatDish(menusLists[1].type.item[2].dishes, 
                parseInt(localStorage.getItem("currentBeefIndex"))+1 >= menusLists[1].type.item[2].dishes.length? 0:parseInt(localStorage.getItem("currentBeefIndex"))+1
                , "menu-content-next-item"))

            const sisi = setInterval(() => {
                meatCONTENT.removeChild(meatCONTENT.children[0])
                clearInterval(sisi)
            }, 2000);
            clearInterval(si)
        }, 1000);
    } // this means user clicked the shrimps menu dish
    else if(nextID === "next-desserts") {
        if(parseInt(localStorage.getItem("currentDesserts"))+1 >= menusLists[1].type.item[1].dishes.length)
            return ;
        const currentDesserts = parseInt(localStorage.getItem("currentDesserts"));
        localStorage.setItem("currentDesserts", currentDesserts+1);
        const meatDISH = MENU_MAIN_CONTAINER.children[0].children[0]; // display all child
        const meatCONTENT = meatDISH.children[0] // the card fish dish item

        // meatCONTENT.children[0].className = "inactive";
        // meatCONTENT.children[1].className = "menu-content-item";
        meatCONTENT.children[0].style.marginLeft = "-200px";
        meatCONTENT.children[0].classList.add("inactive");
        meatCONTENT.children[1].className = "menu-content-item";
        
        if(parseInt(localStorage.getItem("currentDesserts"))+1 >= menusLists[3].type.item[0].dishes.length)
            localStorage.setItem("currentDesserts", -1);
        const si = setInterval(() => {
            meatCONTENT.appendChild(drawMeatDish(menusLists[3].type.item[0].dishes, 
                parseInt(localStorage.getItem("currentDesserts"))+1 >= menusLists[3].type.item[0].dishes.length? 0:parseInt(localStorage.getItem("currentDesserts"))+1
                , "menu-content-next-item"))

            const sisi = setInterval(() => {
                meatCONTENT.removeChild(meatCONTENT.children[0])
                clearInterval(sisi)
            }, 2000);
            clearInterval(si)
        }, 1000);
    } // this means user clicked the shrimps menu dish
}
function prevMenuDishListener() {
    console.log(this)
}
