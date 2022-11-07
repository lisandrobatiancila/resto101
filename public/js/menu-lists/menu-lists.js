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
                        {id: 100001, title: "sweet and sour tilapia", 
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
                            ], //array of objects
                            otherInfo: {
                                info: "course: main course; cuisine: filipino; keyword: sweet and sour fish, tilapia recipe,;\
                                    prep time: 10 minutes; cook time: 30 minutes; servings: 3 people; calories: 1063kcal"
                            },
                            price: 150,
                            img: "https://resto-mock.herokuapp.com/public/images/sast.jpg"
                        },
                        {id: 100002, title: "escabeche", price: 130, img: "https://resto-mock.herokuapp.com/public/images/escbche.jpg",
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
                        {id: 100003, title: "salmon sisig", price: 180, img: "https://resto-mock.herokuapp.com/public/images/slmn-ssg.jpg",
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
                        {id: 100004, title: "bangus sisig", price: 180, img: "https://resto-mock.herokuapp.com/public/images/bngs-ssg.jpg",
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
                        {id: 100005, title: "lapu-lapu sinigang", price: 120, img: "https://resto-mock.herokuapp.com/public/images/sngng-lpu2x.jpg",
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
                        {id: 100006, title: "fish lumpia", price: 120, img: "https://resto-mock.herokuapp.com/public/images/fsh-lmpa.jpg",
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
                        {id: 100007, title: "grilled tuna belly", price: 200, img: "https://resto-mock.herokuapp.com/public/images/grld-tna-blly.jpg",
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
                        {id: 100008, title: "daing na bangus", price: 160, img: "https://resto-mock.herokuapp.com/public/images/dng-n-bngs.jpg",
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
                        {id: 1000021, title: "stir fried crabs with ginger and scallions", price: 180,
                            img: "https://resto-mock.herokuapp.com/public/images/str-frd-crbs-w-gngr-a-scllns.jpg",
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
                        {id: 1000022, title: "chili garlic crabs", price: 110,
                            img: "https://resto-mock.herokuapp.com/public/images/chl-grlc-crb.jpg",
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
                        {id: 1000023, title: "ginataang alimasag", price: 130,
                            img: "https://resto-mock.herokuapp.com/public/images/gntng-almsg.jpg",
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
                        {id: 1000024, title: "tortang talon with crab meat", price: 60,
                            img: "https://resto-mock.herokuapp.com/public/images/trtng-tlng-crb-mt.jpg",
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
                        {id: 1000025, title: "rellenong alimasag", price: 180,
                            img: "https://resto-mock.herokuapp.com/public/images/rllng-almsg.jpg",
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
                        {id: 1000026, title: "crispy crablets", price: 110,
                            img: "https://resto-mock.herokuapp.com/public/images/crspy-crlts.jpg",
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
                        {id: 1000027, title: "aligue pasta", price: 120,
                            img: "https://resto-mock.herokuapp.com/public/images/algue-psta.jpg",
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
                        {id: 1000031, title: "halabos na hipon with butter", price: 150,
                            img: "https://resto-mock.herokuapp.com/public/images/hlbs-n-hpn-w-bttr.jpg",
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
                        {id: 1000032, title: "lemon garlic shrimp pasta", price: 160,
                            img: "https://resto-mock.herokuapp.com/public/images/lmn-grlc-shrmp-psta.jpg",
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
                        {id: 1000034, title: "chili garlic shrimp stir fry", price: 130,
                            img: "https://resto-mock.herokuapp.com/public/images/chl-grlc-shrmp-str-fry.jpg",
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
                        {id: 1000035, title: "coconut shrimp", price: 120,
                            img: "https://resto-mock.herokuapp.com/public/images/ccnt-shrmp.jpg",
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
                        {id: 1000036, title: "shrimp laing", price: 130,
                            img: "https://resto-mock.herokuapp.com/public/images/shrmp-lng.jpg",
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
                        {id: 1000037, title: "shrimp with pancit canton", price: 110,
                            img: "https://resto-mock.herokuapp.com/public/images/shrmp-pnct-cntn.jpg",
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
                        {id: 1000038, title: "butter garlic shrimp", price: 180,
                            img: "https://resto-mock.herokuapp.com/public/images/gbshrmp.jpg",
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
                        {id: 1000041, title: "spicy tahong", price: 150,
                            img: "https://resto-mock.herokuapp.com/public/images/spcy-thng.jpg",
                            ingredients: [
                                "2 pounds mussels",
                                "4 tablespoons olive oil",
                                "1 head garlic, peeled and minced",
                                "6 Thai chili peppers, stemmed and minced",
                                "1 onion, peeled and sliced thinly",
                                "1 bell pepper, cored, seeded, and cut into thin strips",
                                "1/4 cup tomato sauce",
                                "2 tablespoons dry sherry",
                                "salt and pepper to taste"
                            ], // array of string
                            directions: [
                                {id: 10000011, title: "Soak the mussels in a bowl of cold water for about 30 minutes. \
                                    Rinse and drain well. Pull the beard and byssus from the shell to remove."},
                                {id: 10000012, title: "Place in a pot with enough water to cover. Bring to a boil just \
                                    until the shells begin to open."},
                                {id: 10000013, title: "Completely pry open the shells and using a small knife, \
                                    cut the rubbery muscle which holds the mussel on the shell. Discard shells and \
                                    set aside the meat."},
                                {id: 10000014, title: "In a wide pan over medium heat, warm olive oil. Add garlic and \
                                    chili peppers and cook, stirring regularly, for about 1 to 2 minutes or until fragrant."},
                                {id: 10000015, title: "Increase the heat to high. Add onions and bell pepper and cook, \
                                    stirring regularly, for about 1 minute or until tender yet crisp."},
                                {id: 10000016, title: "Add mussels and continue to cook for about 3 to 5 minutes."},
                                {id: 10000017, title: "Add tomato sauce and wine. Continue to cook for about \
                                    4 to 5 minutes, stirring regularly. Season with salt and pepper to taste."},
                            ], // array of object
                            otherInfo: {
                                info: "cook time: 30 minutes;calories: 262 kcal"
                            }
                        },
                        {id: 1000042, title: "baked tahong with butter cheese", price: 130,
                            img: "https://resto-mock.herokuapp.com/public/images/bkd-thng-w-bttr-chse.jpg",
                            ingredients: [
                                "2 lbs. mussels",
                                "1 head garlic crushed",
                                "1 tablespoon minced parsley",
                                "3/4 cup shredded quickmelt or sharp cheddar cheese",
                                "1/4 cup butter",
                                "4 cups water",
                                "4 tablespoons cooking oil"
                            ], // array of string
                            directions: [
                                {id: 10000021, title: "Prepare the fried garlic by heating oil in a small pot. \
                                    As the oil heats-up, add the garlic. Continue to cook in medium heat while \
                                    stirring-once in a while until the garlic turns golden brown. Separate the oil from \
                                    the fried garlic. Set aside."},
                                {id: 10000022, title: "Prepare the mussels by pouring water in a cooking pot. \
                                    Bring to a boil."},
                                {id: 10000023, title: "Add the mussels and continue to cook for 1 minute or until it \
                                    starts to open. Discard the water and then let the mussels cool down."},
                                {id: 10000024, title: "Open the mussels completely and then peel off the shell that has \
                                    no meat. We will only need the shell with mussel meat attached."},
                                {id: 10000025, title: "Preheat the oven to 350F"},
                                {id: 10000026, title: "Arrange the mussels (meat side up) on a baking tray. \
                                    Distribute butter and shredded cheese equally over each piece of mussel. \
                                    Put inside the oven and then bake for 5 minutes."},
                                {id: 10000027, title: "Remove the tray from the oven. Arrange the fried garlic on top \
                                    of the mussels. Put the tray back into the oven. Continue to bake for 3 to 5 minutes more."},
                                {id: 10000028, title: "Remove from the oven. Let it cool. Arrange in a serving plate. \
                                    Sprinkle parsley on top."},
                            ], // array of object
                            otherInfo: {
                                info: "course: seafood;cuisine: filipino;prep time: 5 minutes;cook time: 12 minutes;\
                                    total time: 17 minutes;servings: 4 people"
                            }
                        },
                        {id: 1000043, title: "rellenong tahong", price: 180,
                            img: "https://resto-mock.herokuapp.com/public/images/rllng-thng.jpg",
                            ingredients: [
                                "1 lb. ground pork",
                                "16 to 20 pieces mussels cleaned and other shell removed",
                                "1/2 teaspoon onion powder",
                                "1 teaspoon garlic powder",
                                "6 strips bacon chopped",
                                "2 tablespoons chopped parsley",
                                "1/2 cup shredded sharp cheddar cheese",
                                "1 egg",
                                "1/2 teaspoon salt",
                                "1 /4 teaspoon ground black pepper"
                            ], // array of string
                            directions: [
                                {id: 10000031, title: "In a mixing bowl, combine all the ingredients. Mix well until \
                                    everything is blended."},
                                {id: 10000031, title: "Scoop around 1 to 1 1/2 tablespoons of mixture and stuff \
                                    it into the mussels. Do this step until all the mussels have stuffings."},
                                {id: 10000031, title: "Arrange the stuffed mussels on a baking tray."},
                                {id: 10000031, title: "Preheat oven to 370F."},
                                {id: 10000031, title: "Place the tray with stuffed mussels in the oven. \
                                    Bake for 30 to 40 minutes."},
                            ], // array of object
                            otherInfo: {
                                info: "prep time: 15 minutes; cook time: 40 minutes;total time: 55 minutes;servings: 5 people"
                            }
                        },
                        {id: 1000044, title: "grilled mussels", price: 200,
                            img: "https://resto-mock.herokuapp.com/public/images/grld-msls.jpg",
                            ingredients: [
                                "1 lb. mussels",
                                "1 medium plum tomato diced",
                                "1 large yellow onion minced",
                                "2 teaspoons minced garlic",
                                "2 tablespoons tomato paste",
                                "4 tablespoons bread crumbs",
                                "2 tablespoons chopped parsley",
                                "1 tablespoon chopped mint",
                                "1 tablespoon olive oil",
                                "1 teaspoon lemon juice"
                            ], // array of string
                            directions: [
                                {id: 10000041, title: "Clean the mussels and boil in 2 cups of water for at least 2 to \
                                    5 minutes."},
                                {id: 10000042, title: "Let the mussels cool. Drain and remove the beard. Set aside."},
                                {id: 10000043, title: "Heat the olive oil in a pan."},
                                {id: 10000044, title: "Sauté the onion until soft"},
                                {id: 10000045, title: "Add the garlic and continue to sauté for 1 minute."},
                                {id: 10000046, title: "Add the tomato and tomato paste. Sauté for 1 minute. \
                                    Transfer to a bowl and let cool."},
                                {id: 10000047, title: "Meanwhile combine breadcrumbs, parsley, mint, and lemon juice. \
                                    Mix well."},
                                {id: 10000048, title: "Scoop the sautéed onion, garlic, and tomato mixture \
                                    and arrange on top of the mussels. Add the breadcrumbs mixture above."},
                                {id: 10000049, title: "Heat the grill and grill the mussels for 5 to 7 minutes in medium \
                                    heat."},
                            ], // array of object
                            otherInfo: {
                                info: "prep time: 5 minutes; cook time: 7 minutes;total time: 12 minutes;servings: 4 people"
                            }
                        },
                        {id: 1000045, title: "snails with spinach in coconut milk", price: 130,
                            img: "https://resto-mock.herokuapp.com/public/images/snls-w-spnch-i-ccnt-mlk.jpg",
                            ingredients: [
                                "2 lbs sea snails",
                                "2 cups coconut milk",
                                "1 cup chopped spinach",
                                "2 tablespoons shrimp paste bagoong alamang",
                                "1 tablespoon fish sauce paris",
                                "1 medium onion minced",
                                "1 thumb ginger minced",
                                "1 teaspoon minced garlic",
                                "3 tablespoons cooking oil",
                                "1/4 teaspoon ground black pepper",
                                "1 teaspoon crushed red pepper"
                            ], // array of string
                            directions: [
                                {id: 10000051, title: "Heat the cooking oil in a cooking pot."},
                                {id: 10000052, title: "Saute the garlic, ginger, and onion when the oil becomes hot."},
                                {id: 10000053, title: "Add-in the ground black pepper and crushed red pepper. Stir."},
                                {id: 10000054, title: "Pour-in the coconut milk. Let boil. Simmer (cook in low heat) \
                                    for 10 minutes."},
                                {id: 10000055, title: "Add-in the sea snails. Increase the heat to medium. Stir \
                                    and cover. Cook for 15 to 20 minutes while gently stirring every 3 minutes."},
                                {id: 10000056, title: "Put-in the spinach. Stir and continue to cook for 3 minutes."},
                            ], // array of object
                            otherInfo: {
                                info: "prep time: 10 minutes;cook time: 40 minutes;total time: 50 minutes;servings: 5 people"
                            }
                        },
                        {id: 1000046, title: "linguine  pasta with clams", price: 140,
                            img: "https://resto-mock.herokuapp.com/public/images/lnge-pst-w-clms.jpg",
                            ingredients: [
                                "1 1/2 lbs round clam cleaned",
                                "1 lb. linguine",
                                "2 tablespoons chopped red bell pepper",
                                "2 tablespoons chopped green bell pepper",
                                "3 stalks scallions finely chopped",
                                "1 small yellow onion minced",
                                "1 teaspoon minced garlic",
                                "1 cup dry white wine",
                                "3 ounces bottled clam juice",
                                "3 tablespoons extra virgin olive oil",
                                "Salt to taste"
                            ], // array of string
                            directions: [
                                {id: 10000061, title: "Cook the linguine according to package instructions. Set aside \
                                    in a large bowl."},
                                {id: 10000062, title: "Heat the olive oil in a sauté pan."},
                                {id: 10000063, title: "Add the onion and garlic. Cook until the onion turns soft."},
                                {id: 10000064, title: "Add the red and green bell peppers and clams. Stir."},
                                {id: 10000065, title: "Pour-in white wine and clam juice. Continue to cook until the \
                                    liquid reduces in half."},
                                {id: 10000066, title: "Add scallions and salt."},
                                {id: 10000067, title: "Pour the cooked clams along with the sauce over the cooked linguine \
                                    pasta. Toss."},
                            ], // array of object
                            otherInfo: {
                                info: "prep time: 5 minutes;cook time: 20 minutes; total time: 25 minutes;servings: 4 people"
                            }
                        },
                        {id: 1000047, title: "clam soup", price: 120,
                            img: "https://resto-mock.herokuapp.com/public/images/clm-soup.jpg",
                            ingredients: [
                                "1 lb. shell clams packaged",
                                "1 bunch fresh spinach washed and drained",
                                "1 medium yellow onion sliced",
                                "1 thumb ginger julienned",
                                "3 cups water",
                                "Salt and freshly ground black pepper to taste"
                            ], // array of string
                            directions: [
                                {id: 10000071, title: "Boil the water in a stockpot."},
                                {id: 10000072, title: "Add the ginger and onion. Cover and continue to boil in medium \
                                    heat for 3 to 5 minutes."},
                                {id: 10000073, title: "Stir-in the clams. Simmer for 5 to 10 minutes."},
                                {id: 10000074, title: "Add-in the spinach. Cover and cook for a minute more."},
                                {id: 10000075, title: "Sprinkle some salt and freshly ground black pepper to taste."},
                            ], // array of object
                            otherInfo: {
                                info: "prep time: 5 minutes;cook time: 25 minutes;total time: 30 minutes;servings: 3 people"
                            }
                        },
                        {id: 1000048, title: "adobong tahong", price: 150,
                            img: "https://resto-mock.herokuapp.com/public/images/adbng-thng.jpg",
                            ingredients: [
                                "1 lb. Mussels cleaned and shell removed",
                                "3 cloves garlic crushed",
                                "3 tablespoons soy sauce",
                                "2 tablespoons white vinegar",
                                "4 pieces dried bay leaves",
                                "1/2 tablespoon whole peppercorn",
                                "2 tablespoons toasted garlic click here for the recipe",
                                "2 tablespoons cooking oil",
                                "Salt to taste"
                            ], // array of string
                            directions: [
                                {id: 10000081, title: "Heat the cooking oil in a cooking pot."},
                                {id: 10000082, title: "Put-in the crushed garlic and whole peppercorn. \
                                    Cook until the garlic turns light brown."},
                                {id: 10000083, title: "Add the mussels. Stir and cook for 2 minutes."},
                                {id: 10000084, title: "Put-in the bay leaves, add the soy sauce, and 1 tablespoon of \
                                    toasted garlic. Let it boil. Simmer for 5 to 7 minutes."},
                                {id: 10000085, title: "Pour-in the vinegar. Let the liquid reboil. Stir and then cook \
                                    for 3 minutes."},
                                {id: 10000086, title: "Add salt to taste. Transfer to a serving plate."},
                                {id: 10000087, title: "Top with the remaining toasted garlic. Serve."},
                            ], // array of object
                            otherInfo: {
                                info: "prep time: 5 minutes; cook time: 15 minutes;total time: 20 minutes;servings: 3 people"
                            }
                        },
                        {id: 1000049, title: "deep fried mussel", price: 110,
                            img: "https://resto-mock.herokuapp.com/public/images/dp-frd-mssl.jpg",
                            ingredients: [
                                "1 lb. mussel meat meat removed from the shell",
                                "1 cup water",
                                "1/ 1/4 cup all-purpose flour",
                                "1/4 cup cornstarch",
                                "2 medium eggs",
                                "1 teaspoons garlic powder",
                                "1 teaspoon ground black pepper",
                                "3 teaspoon salt",
                                "2 to 3 cups cooking oil"
                            ], // array of string
                            directions: [
                                {id: 10000091, title: "Sprinkle 2 teaspoons of salt and 1/2 teaspoon of ground \
                                    black pepper on the mussel meat. Mix well and then let it stand for 30 minutes."},
                                {id: 10000092, title: "Meanwhile, make the batter by combining 3/4 cup flour, cornstarch, eggs, water, garlic powder, and remaining salt and pepper in a medium bowl. Mix well until the texture becomes smooth."},
                                {id: 10000093, title: "Heat the oil in a deep cooking pot."},
                                {id: 10000094, title: "Dip the mussel meat in the batter and then dredge in the remaining \
                                    flour. This will prevent the mussel meat from sticking to each other."},
                                {id: 10000095, title: "Deep fry the coated mussel meat in medium heat until the color of the \
                                    coating turns golden brown."},
                                {id: 10000096, title: "add with garlic sauce"},
                            ], // array of object
                            otherInfo: {
                                info: "prep time: 10 minutes; cook time: 5 minutes;total time: 15 minutes;servings: 4 people"
                            }
                        },
                        {id: 10000410, title: "bacon wrapped scallops in lemon garlic butter sauce", price: 180,
                            img: "https://resto-mock.herokuapp.com/public/images/bcn-wrp-sclp.jpg",
                            ingredients: [
                                "1 lb scallops",
                                "8 strips of bacon",
                                "1 teaspoon garlic powder",
                                "4 tablespoons butter",
                                "1 teaspoon lemon juice"
                            ], // array of string
                            directions: [
                                {id: 100000101, title: "Wrap each scallop with a strip of bacon then secure using a \
                                    wooden toothpick."},
                                {id: 100000102, title: "Heat a frying pan then put-in the butter and allow to melt."},
                                {id: 100000103, title: "Fry the bacon-wrapped scallops for about 3 minutes per side."},
                                {id: 100000104, title: "Pre-heat oven to 350 degrees Fahrenheit. Bake the fried \
                                    bacon-wrapped scallops for 15 minutes."},
                                {id: 100000105, title: "Heat the same pan where the scallops were fried. \
                                    With the remaining butter, sprinkle the garlic powder and put-in the lemon juice. \
                                    Cook for a minute then turn-off heat."},
                                {id: 100000106, title: "Arrange the baked bacon-wrapped scallops in a serving plate \
                                    then top with lemon garlic butter sauce."},
                            ], // array of object
                            otherInfo: {
                                info: "prep time: 5 minutes;cook time: 21 minutes;total time: 26 minutes;servings: 4 people"
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
                            id: 200001, title: "crispy fried chicken", price: 150,
                            img: "https://resto-mock.herokuapp.com/public/images/crspy-chkn.jpg",
                            ingredients: [
                                "3 lbs. chicken cut into individual pieces",
                                "1 tablespoon salt",
                                "3 cups cooking oil",
                                "1 cup all-purpose flour",
                                "----Batter ingredients----",
                                "¾ cup evaporated milk",
                                "1 Knorr Chicken Cube",
                                "2 eggs",
                                "¾ cups all-purpose flour",
                                "1 teaspoon baking powder",
                                "2 teaspoons garlic powder",
                                "½ teaspoon salt",
                                "¼ teaspoon ground black pepper"
                            ], // array of string
                            directions: [
                                {id: 20000011, title: "Rub salt all over the chicken. Let it stay for 15 minutes."},
                                {id: 20000012, title: "Heat the oil in a cooking pot."},
                                {id: 20000013, title: "Prepare the batter. Start by pressing a fork on the chicken cube \
                                    until it is completely squashed. Combine it with warm milk. Stir until well blended. \
                                    Set aside."},
                                {id: 20000014, title: "Combine flour, baking powder, garlic powder, salt, and ground black \
                                    pepper. Mix well using a fork or a wire whisk. Set aside."},
                                {id: 20000015, title: "Beat the eggs in a large mixing bowl. Add the milk mixture. \
                                    Continue to beat until all the ingredients are all incorporated. Add half of flour mixture. \
                                    Whisk. Add the remaining half and whisk until the texture of the batter becomes smooth."},
                                {id: 20000016, title: "Dredge the chicken in flour and then dip in batter. Roll it again in flour \
                                    until completely covered. Fry in medium heat for 7 minutes per side."},
                                {id: 20000017, title: "Remove from the pot and put in a plate lined with paper towel. \
                                    This will absorb the oil."},
                            ], // arry of object
                            otherInfo: {
                                info: "course: fried chicken;prep time: 20 minutes;cook time: 15 minutes;total time: 35 minutes;\
                                    servings: 6 people"
                            }
                        },
                        {
                            id: 200002, title: "roasted bbq chicken", price: 230,
                            img: "https://resto-mock.herokuapp.com/public/images/rstd-bbq-chkn.jpg",
                            ingredients: [
                                "1 whole chicken cut into quarters",
                                "1/4 cup light soy sauce",
                                "1 teaspoon paprika",
                                "1/2 teaspoon ground black pepper",
                                "1 teaspoon salt",
                                "1 teaspoon garlic powder",
                                "2 tablespoons canola oil",
                                "juice from 1 small lemon",
                                "1 1/4 cups barbecue sauce use your preferred brand"
                            ], // array of string
                            directions: [
                                {id: 20000021, title: "Prepare the marinade by combine soy sauce, oil, garlic powder. \
                                    paprika, lemon, salt, and pepper in a bowl. Stir until all the ingredients are well blended."},
                                {id: 20000022, title: "Arrange the chicken quarters in a resealable bag. \
                                    Pour-in the marinade. Let the air out of the bag, seal, and marinate the chicken \
                                    overnight. Place the bag in the fridge and let it stay for 12 to 16 hours. \
                                    This will let the chicken absorb the flavor."},
                                {id: 20000023, title: "Preheat your oven to 375F."},
                                {id: 20000024, title: "Top a baking tray with aluminum foil and geese it with 1 tablespoon \
                                    of cooking oil or spray with a cooking oil spray. Arrange the chicken on top of the \
                                    greased foil. Bake in the oven for 18 minutes."},
                                {id: 20000025, title: "Baste the chicken with half of the barbecue sauce. \
                                    Continue to bake for 12 minutes."},
                                {id: 20000026, title: "Baste the chicken with the remaining half of the bbq sauce. \
                                    Bake for 8 to 10 minutes or until the chicken is completely cooked. You can also use a \
                                    meat thermometer to ensure that the chicken is done. The internal temperature of the \
                                    chicken should be at least 165F."},
                                {id: 20000027, title: "Remove the oven roasted bbq chicken from the oven. \
                                    Arrange in a serving plate."},
                            ], // arry of object
                            otherInfo: {
                                info: "prep time: 10 minutes; cook time: 40 minutes;total time: 50 minutes;servings: 4 people"
                            }
                        },
                        {
                            id: 200003, title: "pineapple fried chicken", price: 140,
                            img: "https://resto-mock.herokuapp.com/public/images/pnple-chkn.jpg",
                            ingredients: [
                                "3 lbs. whole chicken cut into serving pieces",
                                "1 20 oz. can crushed pineapple",
                                "1 cup lemon soda Sprite or 7-Up",
                                "1 tablespoon dark soy sauce",
                                "3 teaspoons salt",
                                "1 teaspoon ground black pepper",
                                "2 large eggs beaten",
                                "1 cup all-purpose flour",
                                "1 teaspoon garlic powder",
                                "2 cups cooking oil",
                                "Additional salt and pepper for rubbing"
                            ], // array of string
                            directions: [
                                {id: 20000031, title: "In a large container, combine crushed pineapple, lemon soda, \
                                    soy sauce, 3 tsp. salt, 1 tsp. ground black pepper. Stir."},
                                {id: 20000032, title: "Add the chicken pieces in the mixture. Marinate overnight. \
                                    Make sure to place the container in the fridge while marinating."},
                                {id: 20000033, title: "Combine the flour and garlic powder. Set aside."},
                                {id: 20000034, title: "Separate the chicken from the marinade. Let excess liquid drip."},
                                {id: 20000035, title: "Heat the cooking oil in a frying pan."},
                                {id: 20000036, title: "Rub some salt and pepper over the chicken pieces and then dip \
                                    each piece in the egg mixture. Dredge the egg coated chicken in the flour mixture."},
                                {id: 20000037, title: "Fry each chicken piece in low to medium heat for about 8 to \
                                    12 minutes per side. You can add more time depending on the thickness of the chicken."},
                                {id: 20000038, title: "Remove the cooked chicken pieces from the pan. Arrange in a plate \
                                    lined with paper towels."},
                            ], // arry of object
                            otherInfo: {
                                info: "prep time: 10 minutes;cook time: 20 minutes;total time: 30 minutes;servings: 6 people"
                            }
                        },
                        {
                            id: 200004, title: "chicken curry", price: 130,
                            img: "https://resto-mock.herokuapp.com/public/images/chkn-crry.jpg",
                            ingredients: [
                                "2 lbs. chicken cut into serving pieces",
                                "1 tablespoon curry powder",
                                "1 piece potato cubed",
                                "4 cloves garlic minced",
                                "2 stalks celery sliced",
                                "1 piece red bell pepper sliced",
                                "2 pieces long green pepper",
                                "1 piece onion chopped",
                                "2 thumbs ginger cut into strips",
                                "2 cups coconut milk",
                                "1/2 cup all-purpose cream optional",
                                "1 cup water",
                                "fish sauce and ground black pepper to taste"
                            ], // array of string
                            directions: [
                                {id: 20000041, title: "Heat oil in a pan. Fry potato for 1 minute per side. Remove from the pan. \
                                    Set aside."},
                                {id: 20000042, title: "Using the remaining oil, saute garlic, onion, celery, and ginger until \
                                    onion softens."},
                                {id: 20000043, title: "Add the chicken pieces. Saute until the outer part of the chicken turns \
                                    light brown."},
                                {id: 20000044, title: "Add 1 tablespoon fish sauce. Continue sautéing for 1 minute."},
                                {id: 20000045, title: "Pour-in coconut milk and water. Let boil."},
                                {id: 20000046, title: "Add curry powder. Stir until the powder is completely diluted. \
                                    Cover the pot and continue cooking between low to medium heat until the liquid reduces to half."},
                                {id: 20000047, title: "Add the red bell pepper and pan fried-potato. Cook for 5 minutes."},
                                {id: 20000048, title: "Season with fish sauce and ground black pepper as needed. You can also add \
                                    all-purpose cream if desired."},
                            ], // arry of object
                            otherInfo: {
                                info: "course: main course;cuisine: filipino;keyword: chicken curry, chicken recipes, curry;\
                                    prep time: 10 minutes;cook time: 1 hour;total time: 1 hour 10 minutes;servings: 6 people;\
                                    calores: 497 kcal"
                            }
                        },
                        {
                            id: 200005, title: "chicken adobo", price: 140,
                            img: "https://resto-mock.herokuapp.com/public/images/chkn-adb.jpg",
                            ingredients: [
                                "2 lbs. chicken cut into serving pieces",
                                "1 Knorr Chicken Cube",
                                "5 eggs medium size",
                                "¼ cup soy sauce",
                                "¼ cup vinegar",
                                "1 cup water",
                                "3 bay leaves",
                                "2 teaspoons whole peppercorn",
                                "8 cloves garlic crushed",
                                "1 teaspoon sugar",
                                "3 tablespoons cooking oil"
                            ], // array of string
                            directions: [
                                {id: 20000051, title: "Combine chicken, soy sauce, vinegar, and 5 cloves garlic. \
                                    Mix well until all ingredients are well incorporated. Marinate for 30 minutes."},
                                {id: 20000052, title: "Meanwhile, boil the eggs for 10 minutes. Let the eggs cool \
                                    down afterwards and peel off the shell."},
                                {id: 20000053, title: "Heat oil in a pan. sauté the remaining garlic until it starts \
                                    to turn brown."},
                                {id: 20000054, title: "Add the marinated chicken (do not include the marinade yet). \
                                    Cook for 3 minutes."},
                                {id: 20000055, title: "Pour the remaining marinade into the pan and add water. Let boil."},
                                {id: 20000056, title: "Add bay leaves, whole peppercorn, and Knorr Chicken Cube. \
                                    Stir. Cover the pan and continue cooking using low to medium heat for 15 to \
                                    20 minutes."},
                                {id: 20000057, title: "Add the sugar and put the eggs into the pan. Gently stir. \
                                    Cook for 2 minutes."},
                            ], // arry of object
                            otherInfo: {
                                info: "course: main course;cuisine: filipino;keyword: adobo;prep time: 14 minutes;\
                                    cook time: 30 minutes;servings: 4 people;calores: 692 kcal"
                            }
                        }
                    ]
                },
                {
                    id: 20002, title: "pork",
                    dishes: [
                        {
                            id: 2000021, title: "pork adobo", price: 200,
                            img: "https://resto-mock.herokuapp.com/public/images/adobo.jpg",
                            ingredients: [
                                "2 lbs pork belly",
                                "2 tablespoons garlic minced or crushed",
                                "5 dried bay leaves",
                                "4 tablespoons vinegar",
                                "1/2 cup soy sauce",
                                "1 tablespoon peppercorn",
                                "2 cups water",
                                "Salt to taste"
                            ], // array of string
                            directions: [
                                {id: 200000211, title: "Combine the pork belly, soy sauce, and garlic then marinade for \
                                    at least 1 hour"},
                                {id: 200000212, title: "Heat the pot and put-in the marinated pork belly then cook for \
                                    a few minutes"},
                                {id: 200000213, title: "Pour remaining marinade including garlic."},
                                {id: 200000214, title: "Add water, whole pepper corn, and dried bay leaves then bring \
                                    to a boil. Simmer for 40 minutes to 1 hour"},
                                {id: 200000215, title: "Put-in the vinegar and simmer for 12 to 15 minutes"},
                                {id: 200000216, title: "Add salt to taste"},
                            ], // array of objects
                            otherInfo: {
                                info: "course: main course;cuisine: filipino;keywrod: adoob, adobong baboy, inadobo, pork adobo;\
                                    prep time: 10 minutes; cook time: 1 hour;total time: 1 hour 10 minutes;servings: 4 people;\
                                    calories: 1211 kcal"
                            }
                        },
                        {
                            id: 2000023, title: "pork sinigang", price: 180,
                            img: "https://resto-mock.herokuapp.com/public/images/sinigang.png",
                            ingredients: [
                                "2 lbs. Pork belly cubed",
                                "66 g. Knorr Sinigang sa Sampaloc Mix with Gabi",
                                "2 pieces talong sliced",
                                "8 pieces okra",
                                "18 pieces string beans cut in 2-inch pieces",
                                "5 ounces daikon radish (labanos) sliced",
                                "1 bunch kangkong",
                                "1 piece onion wedged",
                                "2 pieces tomato wedged",
                                "6 pieces shishito pepper",
                                "8 cups water",
                                "Fish sauce and ground black pepper to taste",
                                "3 tablespoons cooking oil"
                            ], // array of string
                            directions: [
                                {id: 20000031, title: "Heat oil in a cooking pot. Saute onion until layers separate. \
                                    Add half of the tomato. Saute for 2 minutes."},
                                {id: 20000032, title: "Add pork belly. Continue sauteeing until the pork browns while \
                                    adding around 1 tablespoon fish sauce."},
                                {id: 20000033, title: "Pour water. Cover the pot and let the liquid boil."},
                                {id: 20000034, title: "Add Knorr Sinigang sa Sampaloc with Gabi. Cover and adjust heat \
                                    between low to medium. Cook for 30 minutes or until the pork gets tender."},
                                {id: 20000035, title: "Add labanos. Cover and continue cooking for 30 minutes."},
                                {id: 20000036, title: "Add eggplant, string beans, and okra. Cook for 5 minutes."},
                                {id: 20000037, title: "Add kangkong stalks and remaining tomato. Cook for 3 minutes."},
                                {id: 20000038, title: "Season with fish sauce (as needed) and ground black pepper."},
                            ], // array of objects
                            otherInfo: {
                                info: "course: main course;cuisine: filipino;keyword: filipino sinigang, pork soup;\
                                    prep time: 10 minutes;cook time: 50 minutes;servings: 6 people;calores: 952 kcal"
                            }
                        },
                        {
                            id: 2000024, title: "pork katsu curry", price: 230,
                            img: "https://resto-mock.herokuapp.com/public/images/prk-kts-crry.jpg",
                            ingredients: [
                                "3 pieces pork chops",
                                "1 ½ cups cooking oil",
                                "3 cups cooked white rice",
                                "----Brine Ingredients:----",
                                "2 cups water",
                                "2 cups ice cubes",
                                "1/4 cup salt",
                                "2 tablespoons brown sugar",
                                "2 pieces dried bay leaves",
                                "----Breading Ingredients:----",
                                "½ cup all-purpose flour",
                                "1 ½ cup Panko breadcrumbs",
                                "2 pieces eggs beaten",
                                "----Curry Sauce Ingredients----",
                                "1 piece Knorr Pork Cube",
                                "1 piece onion chopped",
                                "1 piece carrot sliced",
                                "1 piece potato cubed",
                                "1 teaspoon ginger grated",
                                "1 clove garlic grated",
                                "½ piece apple peeled and grated",
                                "1 tablespoon curry powder",
                                "1 tablespoon garam masala",
                                "5 tablespoons butter",
                                "4 tablespoons all-purpose flour",
                                "2 ¾ cups water",
                                "Salt and ground black pepper to taste"
                            ], // array of string
                            directions: [
                                {id: 20000061, title: "Make the brine by combining all brine ingredients in a cooking pot, \
                                    except for the ice cubes. Let it boil. Stir until sugar and salt dilutes completely. \
                                    Let it cool down. Combine brine solution and ice cubes."},
                                {id: 20000062, title: "Arrange pork chops in a resealable plastic bag and then pour \
                                    the brine solution with ice cubes in it. Seal the bag. Refrigerate for not more \
                                    than 8 hours."},
                                {id: 20000063, title: "Make the curry sauce by melting 2 tablespoons butter in a pan. \
                                    Add onion. Cook until the texture becomes soft. Add garlic and ginger. Stir and then \
                                    add carrot and potato. Continue cooking for 1 minute. Add apple and 1 cup water. Let boil. \
                                    Cover and cook for 6 minutes. Set aside."},
                                {id: 20000064, title: "Make the roux by melting 3 tablespoons of butter in a cooking pot. \
                                    Add all-purpose flour. Stir and continue cooking for 4 minutes. Add curry powder \
                                    and garam masala. Cook while stirring for a minute. Pour 1 ¾ cups water in the cooking \
                                    pot. Stir until mixture thickens. Add Knorr Pork Cube. Stir. \
                                    Add the contents of the pot with potato and onion. Continue cooking for 3 to 5 minutes. \
                                    Season with salt and ground black pepper. Set aside."},
                                {id: 20000065, title: "Make the pork tonkatsu by rinsing pork with running water. \
                                    Pat dry using paper towels."},
                                {id: 20000066, title: "Heat oil in a cooking pot to 350F. While oil is heating, \
                                    dredge a piece of pork chop in flour. Shake-off excess. Dip in beaten egg \
                                    and the dredge in Panko breadcrumbs. Dip again in egg and then dredge in breadcrumbs \
                                    once more."},
                                {id: 20000067, title: "Deep fry breaded pork chop until the outer part turns golden brown \
                                    and internal temperature reads 145F or more. Remove from the pot and let it cool down. \
                                    Slice into serving pieces."},
                                {id: 20000068, title: "Arrange a cup of rice on a plate. Top with sliced pork tonkatsu \
                                    and then pour curry sauce on top."},
                            ], // array of objects
                            otherInfo: {
                                info: "course: main course;cuisine: japanese;keyword: chicken curry, katsu, tonkatsu;\
                                    prep time: 20 minutes; cook time: 45 minutes;servings: 3 people;calories: 5059 kcal"
                            }
                        },
                        {
                            id: 2000025, title: "crispy pork belly", price: 200,
                            img: "https://resto-mock.herokuapp.com/public/images/crspy-prk-blly.jpg",
                            ingredients: [
                                "1 ½ lbs. pork belly",
                                "3 tablespoons Knorr Liquid Seasoning",
                                "6 cups water",
                                "3 pieces dried bay leaves",
                                "1 teaspoon whole peppercorn"
                            ], // array of string
                            directions: [
                                {id: 20000071, title: "Combine pork belly, water, whole peppercorn, and dried bay leaves \
                                    in a cooking pot. Cover the pot and let it boil. Adjust heat between low and medium. \
                                    Continue boiling for 60 minutes."},
                                {id: 20000072, title: "Remove pork from the pot. Let it cool down. Slice into thin pieces. \
                                    Note: I usually freeze the pork for 1 ½ hours before slicing it. \
                                    This method will harden the meat and fat by a bit. It helps prevent the meat \
                                    from wobbling when sliced."},
                                {id: 20000073, title: "Combine sliced pork and Knorr Liquid Seasoning. Mix well."},
                                {id: 20000074, title: "Arrange pork on an air fryer. Set the air fryer to 350F \
                                    and air fry for 20 minutes or until pork becomes crispy. Note: Make sure to flip \
                                    the pork slices in the middle of the cooking process. This will ensure that both sides \
                                    are cooked properly."},
                            ], // array of objects
                            otherInfo: {
                                info: "course: main course;cuisine: filipino;keyword: crispy pork belly, deep fried pork belly,\
                                    inihaw na liempo, lechon kawali;prep time: 1 hour;cook time: 20 minutes;calores: 3577 kcal"
                            }
                        },
                        {
                            id: 2000026, title: "pork sisig", price: 300,
                            img: "https://resto-mock.herokuapp.com/public/images/sisig.jpg",
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
                            ], // array of string
                            directions: [
                                {id: 20000081, title: "Pour the water in a pan and bring to a boil Add salt and pepper."},
                                {id: 20000082, title: "Put-in the pig's ears and pork belly then simmer for 40 minutes \
                                    to 1 hour (or until tender)."},
                                {id: 20000083, title: "Remove the boiled ingredients from the pot then drain excess water"},
                                {id: 20000084, title: "Grill the boiled pig ears and pork belly until done"},
                                {id: 20000085, title: "Chop the pig ears and pork belly into fine pieces"},
                                {id: 20000086, title: "In a wide pan, melt the butter or margarine. Add the onions. \
                                    Cook until onions are soft."},
                                {id: 20000087, title: "Put-in the ginger and cook for 2 minutes"},
                                {id: 20000088, title: "Add the chicken liver. Crush the chicken liver while cooking \
                                    it in the pan."},
                                {id: 20000089, title: "Add the chopped pig ears and pork belly. Cook for 10 to 12 minutes"},
                                {id: 2000008110, title: "Put-in the soy sauce, garlic powder, and chili. Mix well"},
                                {id: 2000008111, title: "Add salt and pepper to taste"},
                                {id: 2000008112, title: "Put-in the mayonnaise and mix with the other ingredients"},
                                {id: 2000008113, title: "Transfer to a serving plate. Top with chopped green onions \
                                    and raw egg."},
                            ], // array of objects
                            otherInfo: {
                                info: "course: main course;cuisine: filipino;keyword: filipino sisig, pork sisig, pork sisig recipe\
                                    sisig, sisig recipe; prep time: 12 minutes;cook time: 1 hour 30 minutes;total time: 1 hour 42 minutes;\
                                    servings: 6 people;calories: 933 kcal"
                            }
                        },
                        {
                            id: 2000027, title: "pork barbecue", price: 80,
                            img: "https://resto-mock.herokuapp.com/public/images/prk-bbq.jpg",
                            ingredients: [
                                "3 lbs. pork shoulder sliced into thin pieces",
                                "2 sachets Knorr SavorRich Pork Liquid Seasoning",
                                "2 tablespoons brown sugar",
                                "½ cup banana ketchup",
                                "3 pieces calamansi",
                                "6 cloves garlic crushed",
                                "½ cup soy sauce",
                                "½ teaspoon ground black pepper"
                            ], // array of string
                            directions: [
                                {id: 20000091, title: "Arrange pork slices in a large bowl. Add Knorr SavorRich, \
                                    soy sauce, ketchup, sugar, garlic, and ground black pepper. Mix well. \
                                    Cover and refrigerate for at least 3 hours. Note: marinating the meat longer will \
                                    provide better results."},
                                {id: 20000092, title: "Skewer the marinated meat on a bamboo skewer (also called \
                                    barbecue stick). Set aside."},
                                {id: 20000093, title: "Heat-up the grill. Start to grill the pork barbecue \
                                    for 3 to 5 minutes per side. Continue this step until pork is thoroughly cooked. \
                                    Note: baste with a mixture of soy sauce, banana ketchup, and vegetable oil after turning the barbecue over."},
                                {id: 20000094, title: "Serve with warm rice and a dip of spicy vinegar. Enjoy!"},
                            ], // array of objects
                            otherInfo: {
                                info: "course: main course;cuisine: filipino;keyword: barbecue, bbq, grilled pork;\
                                    prep time: 3 hours;cook time: 15 minutes;calories: 2339 kcal"
                            }
                        },
                    ]
                },
                {
                    id: 20003, title: "beef",
                    dishes: [
                        {
                            id: 2000031, title: "bistek tagalog", price: 150,
                            img: "https://resto-mock.herokuapp.com/public/images/bstk-tglg.jpg",
                            ingredients: [
                                "1 1/2 lbs beef sirloin thinly sliced",
                                "5 tablespoons soy sauce",
                                "4 pieces calamansi or 1-piece lemon",
                                "1/2 tsp ground black pepper",
                                "3 cloves garlic minced",
                                "3 pieces yellow onion sliced into rings",
                                "4 tablespoons cooking oil",
                                "1 cup water",
                                "1 pinch salt"
                            ], // array of string
                            directions: [
                                {id: 20000031, title: "Marinate beef in soy sauce, lemon (or calamansi), and ground black \
                                    pepper for at least 1 hour. Note: marinate overnight for best result"},
                                {id: 20000032, title: "Heat the cooking oil in a pan then pan-fry half of the onions until \
                                    the texture becomes soft. Set aside"},
                                {id: 20000033, title: "Drain the marinade from the beef. Set it aside. Pan-fry the beef \
                                    on the same pan where the onions were fried for 1 minute per side. Remove from the pan. \
                                    Set aside"},
                                {id: 20000034, title: "Add more oil if needed. Saute garlic and remaining raw onions until \
                                    onion softens."},
                                {id: 20000035, title: "Pour the remaining marinade and water. Bring to a boil."},
                                {id: 20000036, title: "Add beef. Cover the pan and simmer until meat is tender. \
                                    Note: Add water as needed."},
                                {id: 20000037, title: "Season with ground black pepper and salt as needed. \
                                    Top with pan-fried onions."},
                            ], // array of object
                            otherInfo: {
                                info: "course: beef recipe;cuisine: filipino;keyword: beef steak, beefsteak, bistek;\
                                    prep time: 1 hour;cook time: 40 minutes; total time: 1 hour 40 minutes;\
                                    servings: 5 people; calories: 279 kcal"
                            }
                        },
                        {
                            id: 2000032, title: "bbq beef ribs", price: 230,
                            img: "https://resto-mock.herokuapp.com/public/images/bbq-bf-rbs.jpg",
                            ingredients: [
                                "3 lbs. beef short ribs sliced crosswise about a quarter of an inch",
                                "1/4 cup Worcestershire sauce",
                                "1 tablespoon dark soy sauce",
                                "1 tablespoon barbecue sauce",
                                "1 teaspoon white sugar",
                                "1/2 cup banana ketchup",
                                "Juice of 1 lime",
                                "1 teaspoon garlic powder",
                                "1 teaspoon salt",
                                "1/2 teaspoon ground black pepper"
                            ], // array of string
                            directions: [
                                {id: 200000321, title: "Make the marinade by combining all the ingredients (except for the beef short \
                                    ribs) in a bowl. Mix well."},
                                {id: 200000322, title: "Place the beef short ribs in a large Ziploc bag or a container with cover \
                                    and then pour-in the marinade."},
                                {id: 200000323, title: "Make sure that the beef is coated with marinade. Place inside the fridge \
                                    and marinate for at least 3 hours."},
                                {id: 200000324, title: "Heat the grill and then start grilling the beef short ribs. \
                                    Try grilling each side for 5 minutes in medium heat. Lower the grill time if the heat is too much."},
                            ], // array of object
                            otherInfo: {
                                info: "prep time: 3 hours;cook time: 30 minutes; total time: 3 hours 30 minutes;\
                                    servings: 6 people"
                            }
                        },
                        {
                            id: 2000033, title: "beef sinigang", price: 120,
                            img: "https://resto-mock.herokuapp.com/public/images/bf-sngng.jpg",
                            ingredients: [
                                "3 1/2 lbs. corned beef brisket cubed",
                                "2 40g pack Knorr Sinigang sa Sampaloc mix",
                                "1 bunch fresh spinach or kangkong",
                                "6 to 8 pieces okra",
                                "1 medium eggplant sliced",
                                "12 pieces snake beans sitaw, cut into 2 inch pieces",
                                "1 medium Daikon radish sliced",
                                "2 medium yellow onion wedged",
                                "2 medium ripe tomato wedged",
                                "3 to 4 pieces long green pepper siling pansigang",
                                "12 to 15 cups water",
                                "3 tablespoons fish sauce",
                                "1/4 teaspoon ground black pepper"
                            ], // array of string
                            directions: [
                                {id: 200000331, title: "Pour water into a cooking pot. Add tomato, onion, and corned beef. Let boil. Cover and cook between low to medium heat for 1 1/2 to 2 hours or until the beef becomes tender. Note: add more water as needed."},
                                {id: 200000332, title: "Add Knorr Sinigang sa Sampaloc Mix. Stir."},
                                {id: 200000333, title: "Add daikon radish, okra, eggplant, long green pepper, \
                                    and snake beans.Cover and cook for 5 minutes."},
                                {id: 200000334, title: "Season with fish sauce and ground black pepper."},
                                {id: 200000335, title: "Add Spinach. Turn off heat."},
                            ], // array of object
                            otherInfo: {
                                info: "course: main course;cuisine: filipino;prep time: 10 minutes;cook time: 2 hours;\
                                    total time: 2 hours 10 minutes;servings: 5 people;"
                            }
                        },
                        {
                            id: 2000034, title: "bulalo", price: 120,
                            img: "https://resto-mock.herokuapp.com/public/images/bf-bllo.jpg",
                            ingredients: [
                                "2 lbs beef shank",
                                "½ cabbage whole leaf individually detached",
                                "1 bundle bok choy",
                                "2 cobs corn each cut into 3 parts",
                                "2 Tablespoons whole peppercorn",
                                "1/2 cup green onions cut unto 1 1/2 inch pieces",
                                "1 onion",
                                "34 ounces water",
                                "fish sauce to taste optional"
                            ], // array of string
                            directions: [
                                {id: 200000341, title: "In a big cooking pot, pour in water and bring to a boil"},
                                {id: 200000342, title: "Put-in the beef shank followed by the onion and whole pepper corn then \
                                    simmer for 1.5 hours (30 mins if using a pressure cooker) or until meat is tender."},
                                {id: 200000343, title: "Add the corn and simmer for another 10 minutes"},
                                {id: 200000344, title: "Add the fish sauce,cabbage, pechay, and green onion (onion leeks)"},
                            ], // array of object
                            otherInfo: {
                                info: "course: main course;cuisine: filipino recipe;keyword: beef recipes, beef shank,\
                                    beef soup, bulalo batangas;prep time: 10 minutes; cook time: 1 hour 50 minutes;\
                                    total time: 2 hours;servings: 4 people;calores: 231 kcal"
                            }
                        },
                        {
                            id: 2000035, title: "beef pares mami noodles", price: 120,
                            img: "https://resto-mock.herokuapp.com/public/images/bf-prs-mmi.jpg",
                            ingredients: [
                                "1/2 recipe for beef pares",
                                "1 lb. round miki noodles",
                                "1/2 cup chopped scallions",
                                "3 tablespoons toasted garlic",
                                "4 boiled eggs",
                                "1 lb. beef neck bones",
                                "8 cups water",
                                "2 tablespoons fish sauce",
                                "Salt and ground black pepper to taste"
                            ], // array of string
                            directions: [
                                {id: 200000351, title: "Pour water in a pot. Add the beef neck bones. Let boil. \
                                    Simmer for 2 hours."},
                                {id: 200000352, title: "Add salt and ground black pepper to taste."},
                                {id: 200000353, title: "Arrange the miki noodles in a cooking basket. Submerge in boiling \
                                    broth for 10 minutes. Remove, drain, and the set aside."},
                                {id: 200000354, title: "Arrange the cooked miki noodles along with a serving of beef pares \
                                    in individual bowls. Top with chopped scallions, toasted garlic, and a piece of \
                                    boiled egg, sliced in half."},
                                {id: 200000355, title: "Pour a cup or two of hot beef stock in the bowl. \
                                    Season with some fish sauce and ground black pepper."},
                            ], // array of object
                            otherInfo: {
                                info: "course: beef;cuisine: filipino;prep time: 15 minutes; cook time: 2 hours;total time: 2 hours 15 minutes\
                                    servings: 4 people"
                            }
                        },
                    ]
                },
            ]
        }
    },
    {
        id: 3001, type: "drinks",
        dishes: [

        ]
    },
    {
        id: 4001, type: {
            title: "desserts",
            item: [
                {
                    id: 40001, title: "desserts",
                    dishes: [
                        {
                            id: 400001, title: "leche flan", price: 120,
                            img: "https://resto-mock.herokuapp.com/public/images/lche-fln.jpg",
                            ingredients: [
                                "10 pieces eggs",
                                "1 can condensed milk (14 oz)",
                                "1 cup fresh milk or evaporated milk",
                                "1 cup granulated sugar",
                                "1 teaspoon vanilla extract"
                            ], // array of string
                            directions: [
                                {id: 40000011, title: "Using all the eggs, separate the yolk from the egg white \
                                    (only egg yolks will be used)."},
                                {id: 10000012, title: "Place the egg yolks in a big bowl then beat them using a fork or \
                                    an egg beater"},
                                {id: 40000013, title: "Add the condensed milk and mix thoroughly"},
                                {id: 40000014, title: "Pour-in the fresh milk and Vanilla. Mix well"},
                                {id: 40000015, title: "Put the mold (llanera) on top of the stove and heat using low fire"},
                                {id: 40000016, title: "Put-in the granulated sugar on the mold and mix thoroughly until \
                                    the solid sugar turns into liquid (caramel) having a light brown color. \
                                    Note: Sometimes it is hard to find a Llanera (Traditional flan mold) depending on \
                                    your location. I find it more convenient to use individual Round Pans in \
                                    making leche flan."},
                                {id: 40000017, title: "Spread the caramel (liquid sugar) evenly on the flat side of the \
                                    mold"},
                                {id: 40000018, title: "Wait for 5 minutes then pour the egg yolk and milk mixture on the \
                                    mold"},
                                {id: 40000019, title: "Cover the top of the mold using an Aluminum foil"},
                                {id: 400000110, title: "Steam the mold with egg and milk mixture for 30 to 35 minutes."},
                                {id: 400000111, title: "After steaming, let the temperature cool down then refrigerate"},
                            ], /// array of object
                            otherInfo: {
                                info: "coures: dessert;cuisine: filipino;keyword: creme brulee, creme caramel, filipino flan,\
                                    leche flan, leche flan recipe;prep time: 10 minutes; cook time: 45 minutes;cook time: 45 minutes;\
                                    total time: 55 minutes;servings: 6 people;calories: 369 kcal"
                            }
                        },
                        {
                            id: 400002, title: "maja blanca", price: 100,
                            img: "https://resto-mock.herokuapp.com/public/images/mja-blnca.jpeg",
                            ingredients: [
                                "4 cups coconut milk",
                                "3/4 cup cornstarch",
                                "14 ounces condensed milk",
                                "3/4 cup fresh milk",
                                "3/4 cup granulated sugar",
                                "15 ounces whole sweet kernel corn",
                                "5 tbsp toasted grated coconut"
                            ], // array of string
                            directions: [
                                { id: 40000021, title: "Pour the coconut milk in a cooking pot and bring to a boil."},
                                { id: 40000022, title: "Add the sugar, condensed milk, and whole sweet kernel corn \
                                    then stir until all the ingredients are evenly distributed."},
                                { id: 40000023, title: "Simmer for 8 minutes"},
                                { id: 40000024, title: "Combine the milk and cornstarch then whisk until the cornstarch \
                                    is diluted"},
                                { id: 40000025, title: "Pour the fresh milk and cornstarch mixture in the cooking pot \
                                    and stir thoroughly."},
                                { id: 40000026, title: "Allow to cook while stirring until the mixture reaches your \
                                    desired thickness"},
                                { id: 40000027, title: "Pour the mixture in a serving tray then arrange \
                                    and flatten the top using a flat tool such as a wooden spatula"},
                                { id: 40000028, title: "Allow to cool down then refrigerate for at least 1 hour"},
                                { id: 40000029, title: "Garnish with toasted grated coconut (or latik if available)"},
                            ], /// array of object
                            otherInfo: {
                                info: "course: dessert;cuisine: filipino recipe;keyword: corn pudding, maja, maja mais;\
                                    prep time: 8 minutes; cook time: 35 minutes;total time: 43 minutes;\
                                    servings: 8 people;calories: 574 kcal"
                            }
                        },
                        {
                            id: 400003, title: "buko salad", price: 120,
                            img: "https://resto-mock.herokuapp.com/public/images/bko-pndn.jpg",
                            ingredients: [
                                "4 cups young coconut buko, shredded",
                                "6 ounces sugar palm fruit kaong, drained",
                                "12 ounces coconut gel nata de coco, drained",
                                "2 cans 15 ounces each fruit cocktail, drained",
                                "8 ounces pineapple chunks drained",
                                "1 14 ounce can sweetened condensed milk",
                                "7 ounces table cream"
                            ], // array of string
                            directions: [
                                {id: 40000031, title: "In a mixing bowl, combine young coconut, kaong, nata de coco, \
                                    pineapple chunks, and fruit cocktail. Gently stir to distribute the ingredients."},
                                {id: 40000032, title: "Add sweetened condensed milk and table cream. \
                                    Mix until all the ingredients are properly distributed."},
                                {id: 40000033, title: "Refrigerate for at least 4 hours or place in the freezer \
                                    for 1 hour."},
                                {id: 40000034, title: "Transfer to a serving bowl."},
                            ], /// array of object
                            otherInfo: {
                                info: "prep time: 20 minutes;cook time: 10 minutes; total time: 30 minutes; servings: 6 people"
                            }
                        },
                        {
                            id: 400004, title: "cassava cake with cream and cheese", price: 120,
                            img: "https://resto-mock.herokuapp.com/public/images/csva-cke.jpg",
                            ingredients: [
                                "2 lbs. cassava grated",
                                "2 cups coconut cream",
                                "12 ounces evaporated milk",
                                "3 eggs",
                                "3 tablespoons butter melted",
                                "1/2 cup quick-melt cheese shredded",
                                "14 ounces condensed milk",
                                "----Topping ingredients:----",
                                "1 cup coconut cream",
                                "7 ounces condensed milk",
                                "1 cup quick-melt cheese shredded",
                                "4 tablespoons butter melted"
                            ], // array of string
                            directions: [
                                {id: 40000041, title: "Preheat oven to 350F."},
                                {id: 40000042, title: "Combine the wet ingredients in a mixing bowl starting by cracking \
                                    the eggs. Beat until smooth. Pour the evaporated milk, condensed milk, butter, \
                                    and coconut milk. Whisk everything together until the mixture smoothens."},
                                {id: 40000043, title: "Add the grated cassava and ½ cup cheese in the bowl where \
                                    the wet ingredients are at. Mix well."},
                                {id: 40000044, title: "Transfer the mixture into a greased baking pan. Bake for 1 hour."},
                                {id: 40000045, title: "Prepare the topping my mixing all the toping ingredients in a clean \
                                    bowl. Mix everything together. Set aside."},
                                {id: 40000046, title: "Pour the topping mixture over the baked cassava. Put the baking pan \
                                    back in the oven. Continue baking for 350F until the topping thickens. \
                                    Note: You will notice that it will burn a bit, that is normal."},
                                {id: 40000047, title: "Remove the baking pan from the oven. Let the cassava cake cool down."},
                            ], /// array of object
                            otherInfo: {
                                info: "course: dessert;cuisine: filipino;keyword: balingoy recipe, cassava cake, kamoteng kahoy recipe;\
                                    prep time: 10 minutes; cook time: 1 hour;servings: 6 people; calories: 973 kcal"
                            }
                        },
                        {
                            id: 400005, title: "biko", price: 110,
                            img: "https://resto-mock.herokuapp.com/public/images/bko.jpg",
                            ingredients: [
                                "2 cups glutinous rice aka sticky rice or malagkit",
                                "1 1/2 cups water",
                                "2 cups brown sugar",
                                "4 cups coconut milk",
                                "1/2 tsp salt"
                            ], // array of string
                            directions: [
                                {id: 40000051, title: "Combine the sticky rice and water in a rice cooker \
                                    and cook until the rice is ready (we intentionally combined lesser amount of water \
                                    than the usual so that the rice will not be fully cooked)"},
                                {id: 40000052, title: "While the rice is cooking, combine the coconut milk with \
                                    brown sugar and salt in a separate pot and cook in low heat until the texture \
                                    becomes thick. Stir constantly."},
                                {id: 40000053, title: "Once the rice is cooked and the coconut milk-sugar mixture \
                                    is thick enough, add the cooked rice in the coconut milk and sugar mixture then mix well. \
                                    Continue cooking until all the liquid evaporates (but do not overcook)."},
                                {id: 40000054, title: "Scoop the cooked biko and place it in a serving plate then flatten \
                                    the surface."},
                            ], /// array of object
                            otherInfo: {
                                info: "prep time: 10 minutes; cook time: 40 minutes; total time: 50 minutes;\
                                    servings: 8 people"
                            }
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
            if(parseInt(localStorage.getItem("currentFishIndex")) < 0)
                localStorage.setItem("currentFishIndex", seafoodDISHES.length-1);

            finalContainer.appendChild(drawFishDish(seafoodDISHES, 
            parseInt(localStorage.getItem("currentFishIndex")), "menu-content-item"));
            if(!isMOBILE)
                finalContainer.appendChild(drawFishDish(seafoodDISHES, 
                    parseInt(localStorage.getItem("currentFishIndex"))+1 == seafoodDISHES.length?0:parseInt(localStorage.getItem("currentFishIndex"))+1,
                    "menu-content-next-item"));
        }
        else if(seafoodMENU[i].title === "crabs") {
            const seafoodDISHES = menusLists[index].type.item[i].dishes;
            if(parseInt(localStorage.getItem("currentCrabsIndex")) < 0)
                localStorage.setItem("currentCrabsIndex", seafoodDISHES.length-1);

            finalContainer.appendChild(drawCrabsDish(seafoodDISHES, 
            parseInt(localStorage.getItem("currentCrabsIndex")), "menu-content-item"));
            if(!isMOBILE)
                finalContainer.appendChild(drawCrabsDish(seafoodDISHES, 
                    parseInt(localStorage.getItem("currentCrabsIndex"))+1 == seafoodDISHES.length?0:parseInt(localStorage.getItem("currentCrabsIndex"))+1,
                    "menu-content-next-item"));
        }
        else if(seafoodMENU[i].title === "shrimps") {
            const seafoodDISHES = menusLists[index].type.item[i].dishes;
            if(parseInt(localStorage.getItem("currentShrimpsIndex")) < 0)
                localStorage.setItem("currentShrimpsIndex", seafoodDISHES.length-1);

            finalContainer.appendChild(drawShrimpDish(seafoodDISHES, 
            parseInt(localStorage.getItem("currentShrimpsIndex")), "menu-content-item"));
            if(!isMOBILE)
                finalContainer.appendChild(drawShrimpDish(seafoodDISHES, 
                    parseInt(localStorage.getItem("currentShrimpsIndex"))+1 == seafoodDISHES.length?0:parseInt(localStorage.getItem("currentShrimpsIndex"))+1,
                    "menu-content-next-item"));
        }
        else if(seafoodMENU[i].title === "shellfish") {
            const seafoodDISHES = menusLists[index].type.item[i].dishes;
            if(parseInt(localStorage.getItem("currentShellFishIndex")) < 0)
                localStorage.setItem("currentShellFishIndex", seafoodDISHES.length-1);

            finalContainer.appendChild(drawShellFish(seafoodDISHES, 
            parseInt(localStorage.getItem("currentShellFishIndex")), "menu-content-item"));
            if(!isMOBILE)
                finalContainer.appendChild(drawShellFish(seafoodDISHES, 
                    parseInt(localStorage.getItem("currentShellFishIndex"))+1 == seafoodDISHES.length?0:parseInt(localStorage.getItem("currentShellFishIndex"))+1,
                    "menu-content-next-item"));
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
    const fishViewActionButton = document.createElement("button");

    fishSeaFoodContentCURRENT.className = classStyle //"menu-content-item";
    fishSeaFoodContentCURRENTHEADER.className = "menu-content-header";
    fishFoodPRICECONTAINER.className = "food-price";
    fishSeaFoodContentCURRENTBODY.className = "menu-content-body";
    fishSeaFoodContentCURRENTPTAG.className = "ellipse text-capitalize";
    fishSeaFoodContentCURRENTPTAG.style.textAlign = "center";
    fishOrderActionCURRENTButton.className = "order";
    fishViewActionButton.className = "btn btn-outline-primary text-capitalize";
    fishViewActionButton.style.width = "50%";
    fishViewActionButton.style.marginTop = "5px";
    fishViewActionButton.style.paddingLeft = "-200px";

    fishFoodContentCURRENTIMG.src = seafoodDISHES[index].img; // currentMenu DISH
    fishFoodPRICETAG.textContent = seafoodDISHES[index].price;
    fishSeaFoodContentCURRENTPTAG.textContent = seafoodDISHES[index].title; // currentMenu DISH
    fishOrderActionCURRENTButton.textContent = "add to order"; // currentMenu DISH
    fishViewActionButton.textContent = "view";
    fishViewActionButton.addEventListener("click", function() {
        viewDISH([seafoodDISHES[index]]);
    });
    fishOrderActionCURRENTButton.addEventListener("click", function() {
        addDishToOrder(seafoodDISHES[index]); // OBJECT ONLY
    });

    fishSeaFoodContentCURRENTHEADER.appendChild(fishFoodContentCURRENTIMG);
    fishFoodPRICECONTAINER.appendChild(fishFoodPRICETAG);
    fishSeaFoodContentCURRENTHEADER.appendChild(fishFoodPRICECONTAINER);
    fishSeaFoodContentCURRENTBODY.appendChild(fishSeaFoodContentCURRENTPTAG);
    fishSeaFoodContentCURRENTBODY.appendChild(fishOrderActionCURRENTButton);
    fishSeaFoodContentCURRENTBODY.appendChild(fishViewActionButton);

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
    const crabViewActionButton = document.createElement("button");

    crabSeaFoodContentCURRENT.className = classStyle //"menu-content-item";
    crabSeaFoodContentCURRENTHEADER.className = "menu-content-header";
    crabFoodPRICECONTAINER.className = "food-price";
    crabSeaFoodContentCURRENTBODY.className = "menu-content-body";
    crabSeaFoodContentCURRENTPTAG.className = "ellipse text-capitalize";
    crabSeaFoodContentCURRENTPTAG.style.textAlign = "center";
    crabOrderActionCURRENTButton.className = "order";
    crabViewActionButton.className = "btn btn-outline-primary text-capitalize";
    crabViewActionButton.style.width = "50%";
    crabViewActionButton.style.marginTop = "5px";
    crabViewActionButton.style.paddingLeft = "-200px";

    crabFoodContentCURRENTIMG.src = seafoodDISHES[index].img; // currentMenu DISH
    crabFoodPRICETAG.textContent = seafoodDISHES[index].price;
    crabSeaFoodContentCURRENTPTAG.textContent = seafoodDISHES[index].title; // currentMenu DISH
    crabOrderActionCURRENTButton.textContent = "add to order"; // currentMenu DISH
    crabViewActionButton.textContent = "view"; // currentMenu DISH
    crabViewActionButton.addEventListener("click", function() {
        viewDISH([seafoodDISHES[index]]);
    });
    crabOrderActionCURRENTButton.addEventListener("click", function() {
        addDishToOrder(seafoodDISHES[index]); // OBJECT ONLY
    });

    crabSeaFoodContentCURRENTHEADER.appendChild(crabFoodContentCURRENTIMG);
    crabFoodPRICECONTAINER.appendChild(crabFoodPRICETAG);
    crabSeaFoodContentCURRENTHEADER.appendChild(crabFoodPRICECONTAINER);
    crabSeaFoodContentCURRENTBODY.appendChild(crabSeaFoodContentCURRENTPTAG);
    crabSeaFoodContentCURRENTBODY.appendChild(crabOrderActionCURRENTButton);
    crabSeaFoodContentCURRENTBODY.appendChild(crabViewActionButton);

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
    const shrimpViewActionButton = document.createElement("button");

    shrimpSeaFoodContentCURRENT.className = classStyle //"menu-content-item";
    shrimpSeaFoodContentCURRENTHEADER.className = "menu-content-header";
    shrimpFoodPRICECONTAINER.className = "food-price";
    shrimpSeaFoodContentCURRENTBODY.className = "menu-content-body";
    shrimpSeaFoodContentCURRENTPTAG.className = "ellipse text-capitalize";
    shrimpSeaFoodContentCURRENTPTAG.style.textAlign = "center";
    shrimpOrderActionCURRENTButton.className = "order";
    shrimpViewActionButton.className = "btn btn-outline-primary text-capitalize";
    shrimpViewActionButton.style.width = "50%";
    shrimpViewActionButton.style.marginTop = "5px";
    shrimpViewActionButton.style.paddingLeft = "-200px";

    shrimpFoodContentCURRENTIMG.src = seafoodDISHES[index].img; // currentMenu DISH
    shrimpFoodPRICETAG.textContent = seafoodDISHES[index].price;
    shrimpSeaFoodContentCURRENTPTAG.textContent = seafoodDISHES[index].title; // currentMenu DISH
    shrimpOrderActionCURRENTButton.textContent = "add to order"; // currentMenu DISH
    shrimpViewActionButton.textContent = "view"; // currentMenu DISH
    shrimpViewActionButton.addEventListener("click", function() {
        viewDISH([seafoodDISHES[index]]);
    });
    shrimpOrderActionCURRENTButton.addEventListener("click", function() {
        addDishToOrder(seafoodDISHES[index]); // OBJECT ONLY
    });

    shrimpSeaFoodContentCURRENTHEADER.appendChild(shrimpFoodContentCURRENTIMG);
    shrimpFoodPRICECONTAINER.appendChild(shrimpFoodPRICETAG);
    shrimpSeaFoodContentCURRENTHEADER.appendChild(shrimpFoodPRICECONTAINER);
    shrimpSeaFoodContentCURRENTBODY.appendChild(shrimpSeaFoodContentCURRENTPTAG);
    shrimpSeaFoodContentCURRENTBODY.appendChild(shrimpOrderActionCURRENTButton);
    shrimpSeaFoodContentCURRENTBODY.appendChild(shrimpViewActionButton);

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
    const shellFishViewActionButton = document.createElement("button");

    shellFishSeaFoodContentCURRENT.className = classStyle //"menu-content-item";
    shellFishSeaFoodContentCURRENTHEADER.className = "menu-content-header";
    shellFishFoodPRICECONTAINER.className = "food-price";
    shellFishSeaFoodContentCURRENTBODY.className = "menu-content-body";
    shellFishSeaFoodContentCURRENTPTAG.className = "ellipse text-capitalize";
    shellFishSeaFoodContentCURRENTPTAG.style.textAlign = "center";
    shellFishOrderActionCURRENTButton.className = "order";
    shellFishViewActionButton.className = "btn btn-outline-primary text-capitalize";
    shellFishViewActionButton.style.width = "50%";
    shellFishViewActionButton.style.marginTop = "5px";
    shellFishViewActionButton.style.paddingLeft = "-200px";

    shellFishFoodContentCURRENTIMG.src = seafoodDISHES[index].img; // currentMenu DISH
    shellFishFoodPRICETAG.textContent = seafoodDISHES[index].price;
    shellFishSeaFoodContentCURRENTPTAG.textContent = seafoodDISHES[index].title; // currentMenu DISH
    shellFishOrderActionCURRENTButton.textContent = "add to order"; // currentMenu DISH
    shellFishViewActionButton.textContent = "view";
    shellFishViewActionButton.addEventListener("click", function() {
        viewDISH([seafoodDISHES[index]]);
    });
    shellFishOrderActionCURRENTButton.addEventListener("click", function() {
        addDishToOrder(seafoodDISHES[index]); // OBJECT ONLY
    });

    shellFishSeaFoodContentCURRENTHEADER.appendChild(shellFishFoodContentCURRENTIMG);
    shellFishFoodPRICECONTAINER.appendChild(shellFishFoodPRICETAG);
    shellFishSeaFoodContentCURRENTHEADER.appendChild(shellFishFoodPRICECONTAINER);
    shellFishSeaFoodContentCURRENTBODY.appendChild(shellFishSeaFoodContentCURRENTPTAG);
    shellFishSeaFoodContentCURRENTBODY.appendChild(shellFishOrderActionCURRENTButton);
    shellFishSeaFoodContentCURRENTBODY.appendChild(shellFishViewActionButton);

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
            if(parseInt(localStorage.getItem("currentChickenIndex")) < 0)
                localStorage.setItem("currentChickenIndex", meatfoodDISHES.length-1);

            finalContainer.appendChild(drawMeatDish(meatfoodDISHES, 
            parseInt(localStorage.getItem("currentChickenIndex")), "menu-content-item"));
            if(!isMOBILE)
                finalContainer.appendChild(drawMeatDish(meatfoodDISHES, 
                    parseInt(localStorage.getItem("currentChickenIndex"))+1 == meatfoodDISHES.length?0:parseInt(localStorage.getItem("currentChickenIndex"))+1,
                    "menu-content-next-item"));
        }
        else if(meatfoodMENU[i].title === "pork") {
            const meatfoodDISHES = menusLists[index].type.item[i].dishes;
            if(parseInt(localStorage.getItem("currentPorkIndex")) < 0)
                localStorage.setItem("currentPorkIndex", meatfoodDISHES.length-1);

            finalContainer.appendChild(drawMeatDish(meatfoodDISHES, 
            parseInt(localStorage.getItem("currentPorkIndex")), "menu-content-item"));
            if(!isMOBILE)
                finalContainer.appendChild(drawMeatDish(meatfoodDISHES, 
                    parseInt(localStorage.getItem("currentPorkIndex"))+1 == meatfoodDISHES.length?0:parseInt(localStorage.getItem("currentPorkIndex"))+1,
                    "menu-content-next-item"));
        }
        else if(meatfoodMENU[i].title === "beef") {
            const meatfoodDISHES = menusLists[index].type.item[i].dishes;
            if(parseInt(localStorage.getItem("currentBeefIndex")) < 0)
                localStorage.setItem("currentBeefIndex", meatfoodDISHES.length-1);

            finalContainer.appendChild(drawMeatDish(meatfoodDISHES, 
            parseInt(localStorage.getItem("currentBeefIndex")), "menu-content-item"));
            if(!isMOBILE)
                finalContainer.appendChild(drawMeatDish(meatfoodDISHES, 
                    parseInt(localStorage.getItem("currentBeefIndex"))+1 == meatfoodDISHES.length?0:parseInt(localStorage.getItem("currentBeefIndex"))+1,
                    "menu-content-next-item"));
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
    const meatViewActionButton = document.createElement("button");

    meatSeaFoodContentCURRENT.className = classStyle //"menu-content-item";
    meatSeaFoodContentCURRENTHEADER.className = "menu-content-header";
    meatFoodPRICECONTAINER.className = "food-price";
    meatSeaFoodContentCURRENTBODY.className = "menu-content-body";
    meatSeaFoodContentCURRENTPTAG.className = "ellipse text-capitalize";
    meatSeaFoodContentCURRENTPTAG.style.textAlign = "center";
    meatOrderActionCURRENTButton.className = "order";
    meatViewActionButton.className = "btn btn-outline-primary text-capitalize";
    meatViewActionButton.style.width = "50%";
    meatViewActionButton.style.marginTop = "5px";
    meatViewActionButton.style.paddingLeft = "-200px";
    

    meatFoodContentCURRENTIMG.src = meatDISHES[index].img; // currentMenu DISH
    meatFoodPRICETAG.textContent = meatDISHES[index].price;
    meatSeaFoodContentCURRENTPTAG.textContent = meatDISHES[index].title; // currentMenu DISH
    meatOrderActionCURRENTButton.textContent = "add to order"; // currentMenu DISH
    meatViewActionButton.textContent = "view";
    meatViewActionButton.addEventListener("click", function() {
        viewDISH([meatDISHES[index]]);
    });
    meatOrderActionCURRENTButton.addEventListener("click", function() {
        addDishToOrder(meatDISHES[index]); // OBJECT ONLY
    });

    meatSeaFoodContentCURRENTHEADER.appendChild(meatFoodContentCURRENTIMG);
    meatFoodPRICECONTAINER.appendChild(meatFoodPRICETAG);
    meatSeaFoodContentCURRENTHEADER.appendChild(meatFoodPRICECONTAINER);
    meatSeaFoodContentCURRENTBODY.appendChild(meatSeaFoodContentCURRENTPTAG);
    meatSeaFoodContentCURRENTBODY.appendChild(meatOrderActionCURRENTButton);
    meatSeaFoodContentCURRENTBODY.appendChild(meatViewActionButton);

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
            if(parseInt(localStorage.getItem("currentDesserts")) < 0)
                localStorage.setItem("currentDesserts", dessertfoodDISHES.length-1);

            finalContainer.appendChild(drawDessertDish(dessertfoodDISHES, 
            parseInt(localStorage.getItem("currentDesserts")), "menu-content-item"));
            if(!isMOBILE)
                finalContainer.appendChild(drawDessertDish(dessertfoodDISHES, 
                    parseInt(localStorage.getItem("currentDesserts"))+1 == dessertfoodDISHES.length?0:parseInt(localStorage.getItem("currentDesserts"))+1,
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
    const dessertViewActionButton = document.createElement("button");

    dessertSeaFoodContentCURRENT.className = classStyle //"menu-content-item";
    dessertSeaFoodContentCURRENTHEADER.className = "menu-content-header";
    dessertFoodPRICECONTAINER.className = "food-price";
    dessertSeaFoodContentCURRENTBODY.className = "menu-content-body";
    dessertSeaFoodContentCURRENTPTAG.className = "ellipse text-capitalize";
    dessertSeaFoodContentCURRENTPTAG.style.textAlign = "center";
    dessertViewActionButton.className = "btn btn-outline-primary text-capitalize";
    dessertViewActionButton.style.width = "50%";
    dessertViewActionButton.style.marginTop = "5px";
    dessertViewActionButton.style.paddingLeft = "-200px";

    dessertFoodContentCURRENTIMG.src = dessertDISHES[index].img; // currentMenu DISH
    dessertFoodPRICETAG.textContent = dessertDISHES[index].price;
    dessertSeaFoodContentCURRENTPTAG.textContent = dessertDISHES[index].title; // currentMenu DISH
    dessertOrderActionCURRENTButton.textContent = "add to order"; // currentMenu DISH
    dessertOrderActionCURRENTButton.className = "order";
    dessertViewActionButton.textContent = "view";
    dessertViewActionButton.addEventListener("click", function() {
        viewDISH([dessertDISHES[index]])
    });
    dessertOrderActionCURRENTButton.addEventListener("click", function() {
        addDishToOrder(dessertDISHES[index]); // OBJECT ONLY
    });

    dessertSeaFoodContentCURRENTHEADER.appendChild(dessertFoodContentCURRENTIMG);
    dessertFoodPRICECONTAINER.appendChild(dessertFoodPRICETAG);
    dessertSeaFoodContentCURRENTHEADER.appendChild(dessertFoodPRICECONTAINER);
    dessertSeaFoodContentCURRENTBODY.appendChild(dessertSeaFoodContentCURRENTPTAG);
    dessertSeaFoodContentCURRENTBODY.appendChild(dessertOrderActionCURRENTButton);
    dessertSeaFoodContentCURRENTBODY.appendChild(dessertViewActionButton);

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
        if(parseInt(localStorage.getItem("currentFishIndex")) >= menusLists[0].type.item[0].dishes.length)
            localStorage.setItem("currentFishIndex", 0);
        const currentFishIndex = parseInt(localStorage.getItem("currentFishIndex"));
        localStorage.setItem("currentFishIndex", currentFishIndex+1);
        const fishDISH = MENU_MAIN_CONTAINER.children[0].children[0]; // display all child
        const fishCONTENT = fishDISH.children[0]; // the card fish dish item

        // fishCONTENT.children[0].className = "inactive";
        // fishCONTENT.children[1].className = "menu-content-item";
        if(isMOBILE){
            if(parseInt(localStorage.getItem("currentFishIndex")) >= menusLists[0].type.item[0].dishes.length)
                localStorage.setItem("currentFishIndex", 0);
            fishCONTENT.appendChild(drawFishDish(menusLists[0].type.item[0].dishes, 
                parseInt(localStorage.getItem("currentFishIndex")) >= menusLists[0].type.item[0].dishes.length? 0:parseInt(localStorage.getItem("currentFishIndex"))
                , "menu-content-item"));
            fishCONTENT.children[0].remove();
            return;
        }
        fishCONTENT.children[0].style.marginLeft = "-200px";
        fishCONTENT.children[0].classList.add("inactive");
        fishCONTENT.children[1].className = "menu-content-item";
        if(parseInt(localStorage.getItem("currentFishIndex")) >= menusLists[0].type.item[0].dishes.length)
            localStorage.setItem("currentFishIndex", 0);
        const si = setInterval(() => {
            fishCONTENT.appendChild(drawFishDish(menusLists[0].type.item[0].dishes, 
                parseInt(localStorage.getItem("currentFishIndex"))+1 >= menusLists[0].type.item[0].dishes.length? 0:parseInt(localStorage.getItem("currentFishIndex"))+1
                , "menu-content-next-item"));

            const sisi = setInterval(() => {
                fishCONTENT.removeChild(fishCONTENT.children[0]);
                clearInterval(sisi);
            }, 2000);
            clearInterval(si)
        }, 1000);
    } // this means user clicked the fish menu dish
    else if(nextID === "next-crabs") {
        if(parseInt(localStorage.getItem("currentCrabsIndex")) >= menusLists[0].type.item[1].dishes.length)
            localStorage.setItem("currentCrabsIndex", 0);
        const currentCrabsIndex = parseInt(localStorage.getItem("currentCrabsIndex"));
        localStorage.setItem("currentCrabsIndex", currentCrabsIndex+1);
        const fishDISH = MENU_MAIN_CONTAINER.children[0].children[1]; // display all child
        const fishCONTENT = fishDISH.children[0]; // the card fish dish item

        // fishCONTENT.children[0].className = "inactive";
        // fishCONTENT.children[1].className = "menu-content-item";
        if(isMOBILE){
            if(parseInt(localStorage.getItem("currentCrabsIndex")) >= menusLists[0].type.item[1].dishes.length)
                localStorage.setItem("currentCrabsIndex", 0);
            fishCONTENT.appendChild(drawFishDish(menusLists[0].type.item[1].dishes, 
                parseInt(localStorage.getItem("currentCrabsIndex")) >= menusLists[0].type.item[1].dishes.length? 0:parseInt(localStorage.getItem("currentCrabsIndex"))
                , "menu-content-item"));
            fishCONTENT.children[0].remove();
            return;
        }
        fishCONTENT.children[0].style.marginLeft = "-200px";
        fishCONTENT.children[0].classList.add("inactive");
        fishCONTENT.children[1].className = "menu-content-item";
        
        if(parseInt(localStorage.getItem("currentCrabsIndex")) >= menusLists[0].type.item[1].dishes.length)
            localStorage.setItem("currentCrabsIndex", 0);
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
        if(parseInt(localStorage.getItem("currentShrimpsIndex")) >= menusLists[0].type.item[2].dishes.length)
            localStorage.setItem("currentShrimpsIndex", 0);
        const currentShrimpsIndex = parseInt(localStorage.getItem("currentShrimpsIndex"));
        localStorage.setItem("currentShrimpsIndex", currentShrimpsIndex+1);
        const fishDISH = MENU_MAIN_CONTAINER.children[0].children[2]; // display all child
        const fishCONTENT = fishDISH.children[0]; // the card fish dish item

        // fishCONTENT.children[0].className = "inactive";
        // fishCONTENT.children[1].className = "menu-content-item";
        if(isMOBILE){
            if(parseInt(localStorage.getItem("currentShrimpsIndex")) >= menusLists[0].type.item[2].dishes.length)
                localStorage.setItem("currentShrimpsIndex", 0);
            fishCONTENT.appendChild(drawFishDish(menusLists[0].type.item[2].dishes, 
                parseInt(localStorage.getItem("currentShrimpsIndex")) >= menusLists[0].type.item[2].dishes.length? 0:parseInt(localStorage.getItem("currentShrimpsIndex"))
                , "menu-content-item"));
            fishCONTENT.children[0].remove();
            return;
        }
        fishCONTENT.children[0].style.marginLeft = "-200px";
        fishCONTENT.children[0].classList.add("inactive");
        fishCONTENT.children[1].className = "menu-content-item";
        
        if(parseInt(localStorage.getItem("currentShrimpsIndex")) >= menusLists[0].type.item[2].dishes.length)
            localStorage.setItem("currentShrimpsIndex", 0);
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
        if(parseInt(localStorage.getItem("currentShellFishIndex")) >= menusLists[0].type.item[3].dishes.length)
            localStorage.setItem("currentShellFishIndex", 0);
        const currentShellFishIndex = parseInt(localStorage.getItem("currentShellFishIndex"));
        localStorage.setItem("currentShellFishIndex", currentShellFishIndex+1);
        const fishDISH = MENU_MAIN_CONTAINER.children[0].children[3]; // display all child
        const fishCONTENT = fishDISH.children[0]; // the card fish dish item

        // fishCONTENT.children[0].className = "inactive";
        // fishCONTENT.children[1].className = "menu-content-item";
        if(isMOBILE){
            if(parseInt(localStorage.getItem("currentShellFishIndex")) >= menusLists[0].type.item[3].dishes.length)
                localStorage.setItem("currentShellFishIndex", 0);
            fishCONTENT.appendChild(drawFishDish(menusLists[0].type.item[3].dishes, 
                parseInt(localStorage.getItem("currentShellFishIndex")) >= menusLists[0].type.item[3].dishes.length? 0:parseInt(localStorage.getItem("currentShellFishIndex"))
                , "menu-content-item"));
            fishCONTENT.children[0].remove();
            return;
        }
        fishCONTENT.children[0].style.marginLeft = "-200px";
        fishCONTENT.children[0].classList.add("inactive");
        fishCONTENT.children[1].className = "menu-content-item";
        
        if(parseInt(localStorage.getItem("currentShellFishIndex")) >= menusLists[0].type.item[3].dishes.length)
            localStorage.setItem("currentShellFishIndex", 0);
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
        if(parseInt(localStorage.getItem("currentChickenIndex")) >= menusLists[1].type.item[0].dishes.length)
            localStorage.setItem("currentChickenIndex", 0);
        const currentChickenIndex = parseInt(localStorage.getItem("currentChickenIndex"));
        localStorage.setItem("currentChickenIndex", currentChickenIndex+1);
        const meatDISH = MENU_MAIN_CONTAINER.children[0].children[0]; // display all child
        const meatCONTENT = meatDISH.children[0]; // the card fish dish item

        // meatCONTENT.children[0].className = "inactive";
        // meatCONTENT.children[1].className = "menu-content-item";
        if(isMOBILE) {
            if(parseInt(localStorage.getItem("currentChickenIndex")) >= menusLists[1].type.item[0].dishes.length)
                localStorage.setItem("currentChickenIndex", 0);
            meatCONTENT.appendChild(drawMeatDish(menusLists[1].type.item[0].dishes, 
                parseInt(localStorage.getItem("currentChickenIndex")) >= menusLists[1].type.item[0].dishes.length? 0:parseInt(localStorage.getItem("currentChickenIndex"))
                , "menu-content-item"));
            meatCONTENT.children[0].remove();
            return;
        }
        meatCONTENT.children[0].style.marginLeft = "-200px";
        meatCONTENT.children[0].classList.add("inactive");
        meatCONTENT.children[1].className = "menu-content-item";
        
        if(parseInt(localStorage.getItem("currentChickenIndex")) >= menusLists[1].type.item[0].dishes.length)
            localStorage.setItem("currentChickenIndex", 0);
        const si = setInterval(() => {
            meatCONTENT.appendChild(drawMeatDish(menusLists[1].type.item[0].dishes, 
                parseInt(localStorage.getItem("currentChickenIndex"))+1 >= menusLists[1].type.item[0].dishes.length? 0:parseInt(localStorage.getItem("currentChickenIndex"))+1
                , "menu-content-next-item"));

            const sisi = setInterval(() => {
                meatCONTENT.removeChild(meatCONTENT.children[0]);
                clearInterval(sisi);
            }, 2000);
            clearInterval(si)
        }, 1000);
    } // this means user clicked the shrimps menu dish
    else if(nextID === "next-pork") {
        if(parseInt(localStorage.getItem("currentPorkIndex")) >= menusLists[1].type.item[1].dishes.length)
            localStorage.setItem("currentPorkIndex", 0);
        const currentPorkIndex = parseInt(localStorage.getItem("currentPorkIndex"));
        localStorage.setItem("currentPorkIndex", currentPorkIndex+1);
        const meatDISH = MENU_MAIN_CONTAINER.children[0].children[1]; // display all child
        const meatCONTENT = meatDISH.children[0]; // the card fish dish item

        // meatCONTENT.children[0].className = "inactive";
        // meatCONTENT.children[1].className = "menu-content-item";
        if(isMOBILE) {
            if(parseInt(localStorage.getItem("currentPorkIndex")) >= menusLists[1].type.item[1].dishes.length)
                localStorage.setItem("currentPorkIndex", 0);
            meatCONTENT.appendChild(drawMeatDish(menusLists[1].type.item[1].dishes, 
                parseInt(localStorage.getItem("currentPorkIndex")) >= menusLists[1].type.item[1].dishes.length? 0:parseInt(localStorage.getItem("currentPorkIndex"))
                , "menu-content-item"));
            meatCONTENT.children[0].remove();
            return;
        }
        meatCONTENT.children[0].style.marginLeft = "-200px";
        meatCONTENT.children[0].classList.add("inactive");
        meatCONTENT.children[1].className = "menu-content-item";
        
        if(parseInt(localStorage.getItem("currentPorkIndex")) >= menusLists[1].type.item[1].dishes.length)
            localStorage.setItem("currentPorkIndex", 0);
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
        if(parseInt(localStorage.getItem("currentBeefIndex")) >= menusLists[1].type.item[2].dishes.length)
            localStorage.setItem("currentBeefIndex", 0);
        const currentBeefIndex = parseInt(localStorage.getItem("currentBeefIndex"));
        localStorage.setItem("currentBeefIndex", currentBeefIndex+1);
        const meatDISH = MENU_MAIN_CONTAINER.children[0].children[2]; // display all child
        const meatCONTENT = meatDISH.children[0]; // the card fish dish item

        // meatCONTENT.children[0].className = "inactive";
        // meatCONTENT.children[1].className = "menu-content-item";
        if(isMOBILE) {
            if(parseInt(localStorage.getItem("currentBeefIndex")) >= menusLists[1].type.item[2].dishes.length)
                localStorage.setItem("currentBeefIndex", 0);
            meatCONTENT.appendChild(drawMeatDish(menusLists[1].type.item[2].dishes, 
                parseInt(localStorage.getItem("currentBeefIndex")) >= menusLists[1].type.item[2].dishes.length? 0:parseInt(localStorage.getItem("currentBeefIndex"))
                , "menu-content-item"));
            meatCONTENT.children[0].remove();
            return;
        }
        meatCONTENT.children[0].style.marginLeft = "-200px";
        meatCONTENT.children[0].classList.add("inactive");
        meatCONTENT.children[1].className = "menu-content-item";
        
        if(parseInt(localStorage.getItem("currentBeefIndex")) >= menusLists[1].type.item[2].dishes.length)
            localStorage.setItem("currentBeefIndex", 0);
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
        if(parseInt(localStorage.getItem("currentDesserts")) >= menusLists[3].type.item[0].dishes.length)
            localStorage.setItem("currentDesserts", 0);
        const currentDesserts = parseInt(localStorage.getItem("currentDesserts"));
        localStorage.setItem("currentDesserts", currentDesserts+1);
        const meatDISH = MENU_MAIN_CONTAINER.children[0].children[0]; // display all child
        const meatCONTENT = meatDISH.children[0] // the card fish dish item

        // meatCONTENT.children[0].className = "inactive";
        // meatCONTENT.children[1].className = "menu-content-item";
        if(isMOBILE) {
            if(parseInt(localStorage.getItem("currentDesserts")) >= menusLists[3].type.item[0].dishes.length)
                localStorage.setItem("currentDesserts", 0);
            meatCONTENT.appendChild(drawMeatDish(menusLists[3].type.item[0].dishes, 
                parseInt(localStorage.getItem("currentDesserts")) >= menusLists[3].type.item[0].dishes.length? 0:parseInt(localStorage.getItem("currentDesserts"))
                , "menu-content-item"));
            meatCONTENT.children[0].remove();
            return;
        }
        meatCONTENT.children[0].style.marginLeft = "-200px";
        meatCONTENT.children[0].classList.add("inactive");
        meatCONTENT.children[1].className = "menu-content-item";
        
        if(parseInt(localStorage.getItem("currentDesserts")) >= menusLists[3].type.item[0].dishes.length)
            localStorage.setItem("currentDesserts", 0);

        const si = setInterval(() => {
            meatCONTENT.appendChild(drawDessertDish(menusLists[3].type.item[0].dishes, 
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
    const prevID = this.getAttribute("id");

    if(prevID === "prev-fish") {
        if(parseInt(localStorage.getItem("currentFishIndex")) >= menusLists[0].type.item[0].dishes.length)
            localStorage.setItem("currentFishIndex", 0);
        if(parseInt(localStorage.getItem("currentFishIndex")) <= 0)
            return;
        const currentFishIndex = parseInt(localStorage.getItem("currentFishIndex"));
        localStorage.setItem("currentFishIndex", currentFishIndex-1);
        const fishDISH = MENU_MAIN_CONTAINER.children[0].children[0]; // display all child
        const fishCONTENT = fishDISH.children[0]; // the card fish dish item

        // fishCONTENT.children[0].className = "inactive";
        // fishCONTENT.children[1].className = "menu-content-item";
        if(isMOBILE){
            if(parseInt(localStorage.getItem("currentFishIndex")) >= menusLists[0].type.item[0].dishes.length)
                localStorage.setItem("currentFishIndex", 0);
            fishCONTENT.appendChild(drawFishDish(menusLists[0].type.item[0].dishes, 
                parseInt(localStorage.getItem("currentFishIndex")) >= menusLists[0].type.item[0].dishes.length? 0:parseInt(localStorage.getItem("currentFishIndex"))
                , "menu-content-item"));
            fishCONTENT.children[0].remove();
            return;
        }
        
        fishCONTENT.children[1].style.marginRight = "-200px";
        fishCONTENT.children[1].classList.add("inactive");

        const si = setInterval(() => {
            const sisi = setInterval(() => {
                fishCONTENT.removeChild(fishCONTENT.children[1]);
                fishCONTENT.prepend(drawFishDish(menusLists[0].type.item[0].dishes, 
                    localStorage.getItem("currentFishIndex")
                    , "menu-content-item"));
                    fishCONTENT.children[1].className = "menu-content-next-item";

                clearInterval(sisi);
            }, 2000);
            clearInterval(si)
        }, 1000);
    } // this means user clicked the fish menu dish
    else if(prevID === "prev-crabs") {
        if(parseInt(localStorage.getItem("currentCrabsIndex")) >= menusLists[0].type.item[1].dishes.length)
            localStorage.setItem("currentCrabsIndex", 0);
        if(parseInt(localStorage.getItem("currentCrabsIndex")) <= 0)
            return;
        const currentCrabsIndex = parseInt(localStorage.getItem("currentCrabsIndex"));
        localStorage.setItem("currentCrabsIndex", currentCrabsIndex-1);
        const fishDISH = MENU_MAIN_CONTAINER.children[0].children[1]; // display all child
        const fishCONTENT = fishDISH.children[0]; // the card fish dish item

        // fishCONTENT.children[0].className = "inactive";
        // fishCONTENT.children[1].className = "menu-content-item";
        if(isMOBILE){
            if(parseInt(localStorage.getItem("currentCrabsIndex")) >= menusLists[0].type.item[1].dishes.length)
                localStorage.setItem("currentCrabsIndex", 0);
            fishCONTENT.appendChild(drawFishDish(menusLists[0].type.item[1].dishes, 
                parseInt(localStorage.getItem("currentCrabsIndex")) >= menusLists[0].type.item[1].dishes.length? 0:parseInt(localStorage.getItem("currentCrabsIndex"))
                , "menu-content-item"));
            fishCONTENT.children[0].remove();
            return;
        }
        fishCONTENT.children[1].style.marginRight = "-200px";
        fishCONTENT.children[1].classList.add("inactive");

        const si = setInterval(() => {
            const sisi = setInterval(() => {
                fishCONTENT.removeChild(fishCONTENT.children[1]);
                fishCONTENT.prepend(drawFishDish(menusLists[0].type.item[1].dishes, 
                    localStorage.getItem("currentCrabsIndex")
                    , "menu-content-item"));
                    fishCONTENT.children[1].className = "menu-content-next-item";

                clearInterval(sisi);
            }, 2000);
            clearInterval(si)
        }, 1000);
    } // this means user clicked the crabs menu dish
    else if(prevID === "prev-shrimps") {
        if(parseInt(localStorage.getItem("currentShrimpsIndex")) >= menusLists[0].type.item[2].dishes.length)
            localStorage.setItem("currentShrimpsIndex", 0);
        if(parseInt(localStorage.getItem("currentShrimpsIndex")) <= 0)
            return;
        const currentShrimpsIndex = parseInt(localStorage.getItem("currentShrimpsIndex"));
        localStorage.setItem("currentShrimpsIndex", currentShrimpsIndex-1);
        const fishDISH = MENU_MAIN_CONTAINER.children[0].children[2]; // display all child
        const fishCONTENT = fishDISH.children[0]; // the card fish dish item

        // fishCONTENT.children[0].className = "inactive";
        // fishCONTENT.children[1].className = "menu-content-item";
        if(isMOBILE){
            if(parseInt(localStorage.getItem("currentShrimpsIndex")) >= menusLists[0].type.item[2].dishes.length)
                localStorage.setItem("currentShrimpsIndex", 0);
            fishCONTENT.appendChild(drawFishDish(menusLists[0].type.item[2].dishes, 
                parseInt(localStorage.getItem("currentShrimpsIndex")) >= menusLists[0].type.item[2].dishes.length? 0:parseInt(localStorage.getItem("currentShrimpsIndex"))
                , "menu-content-item"));
            fishCONTENT.children[0].remove();
            return;
        }
        fishCONTENT.children[1].style.marginRight = "-200px";
        fishCONTENT.children[1].classList.add("inactive");

        const si = setInterval(() => {
            const sisi = setInterval(() => {
                fishCONTENT.removeChild(fishCONTENT.children[1]);
                fishCONTENT.prepend(drawFishDish(menusLists[0].type.item[2].dishes, 
                    localStorage.getItem("currentShrimpsIndex")
                    , "menu-content-item"));
                    fishCONTENT.children[1].className = "menu-content-next-item";

                clearInterval(sisi);
            }, 2000);
            clearInterval(si)
        }, 1000);
    } // this means user clicked the shrimps menu dish
    else if(prevID === "prev-shellfish") {
        if(parseInt(localStorage.getItem("currentShellFishIndex")) >= menusLists[0].type.item[3].dishes.length)
            localStorage.setItem("currentShellFishIndex", 0);
        if(parseInt(localStorage.getItem("currentShellFishIndex")) <= 0)
            return;
        const currentShellFishIndex = parseInt(localStorage.getItem("currentShellFishIndex"));
        localStorage.setItem("currentShellFishIndex", currentShellFishIndex-1);
        const fishDISH = MENU_MAIN_CONTAINER.children[0].children[3]; // display all child
        const fishCONTENT = fishDISH.children[0]; // the card fish dish item

        // fishCONTENT.children[0].className = "inactive";
        // fishCONTENT.children[1].className = "menu-content-item";
        if(isMOBILE){
            if(parseInt(localStorage.getItem("currentShellFishIndex")) >= menusLists[0].type.item[3].dishes.length)
                localStorage.setItem("currentShellFishIndex", 0);
            fishCONTENT.appendChild(drawFishDish(menusLists[0].type.item[3].dishes, 
                parseInt(localStorage.getItem("currentShellFishIndex")) >= menusLists[0].type.item[3].dishes.length? 0:parseInt(localStorage.getItem("currentShellFishIndex"))
                , "menu-content-item"));
            fishCONTENT.children[0].remove();
            return;
        }
        fishCONTENT.children[1].style.marginRight = "-200px";
        fishCONTENT.children[1].classList.add("inactive");

        const si = setInterval(() => {
            const sisi = setInterval(() => {
                fishCONTENT.removeChild(fishCONTENT.children[1]);
                fishCONTENT.prepend(drawFishDish(menusLists[0].type.item[3].dishes, 
                    localStorage.getItem("currentShellFishIndex")
                    , "menu-content-item"));
                    fishCONTENT.children[1].className = "menu-content-next-item";

                clearInterval(sisi);
            }, 2000);
            clearInterval(si)
        }, 1000);
    } // this means user clicked the shrimps menu dish
    else if(prevID === "prev-chicken") {
        if(parseInt(localStorage.getItem("currentChickenIndex")) >= menusLists[1].type.item[0].dishes.length)
            localStorage.setItem("currentChickenIndex", 0);
        if(parseInt(localStorage.getItem("currentChickenIndex")) <= 0)
            return;
        const currentChickenIndex = parseInt(localStorage.getItem("currentChickenIndex"));
        localStorage.setItem("currentChickenIndex", currentChickenIndex-1);
        const meatDISH = MENU_MAIN_CONTAINER.children[0].children[0]; // display all child
        const meatCONTENT = meatDISH.children[0]; // the card fish dish item

        // meatCONTENT.children[0].className = "inactive";
        // meatCONTENT.children[1].className = "menu-content-item";
        if(isMOBILE) {
            if(parseInt(localStorage.getItem("currentChickenIndex")) >= menusLists[1].type.item[0].dishes.length)
                localStorage.setItem("currentChickenIndex", 0);
            meatCONTENT.appendChild(drawMeatDish(menusLists[1].type.item[0].dishes, 
                parseInt(localStorage.getItem("currentChickenIndex")) >= menusLists[1].type.item[0].dishes.length? 0:parseInt(localStorage.getItem("currentChickenIndex"))
                , "menu-content-item"));
            meatCONTENT.children[0].remove();
            return;
        }
        meatCONTENT.children[1].style.marginRight = "-200px";
        meatCONTENT.children[1].classList.add("inactive");

        const si = setInterval(() => {
            const sisi = setInterval(() => {
                meatCONTENT.removeChild(meatCONTENT.children[1]);
                meatCONTENT.prepend(drawFishDish(menusLists[1].type.item[0].dishes, 
                    localStorage.getItem("currentChickenIndex")
                    , "menu-content-item"));
                    meatCONTENT.children[1].className = "menu-content-next-item";

                clearInterval(sisi);
            }, 2000);
            clearInterval(si)
        }, 1000);
    } // this means user clicked the shrimps menu dish
    else if(prevID === "prev-pork") {
        if(parseInt(localStorage.getItem("currentPorkIndex")) >= menusLists[1].type.item[1].dishes.length)
            localStorage.setItem("currentPorkIndex", 0);
        if(parseInt(localStorage.getItem("currentPorkIndex")) <= 0)
            return;
        const currentPorkIndex = parseInt(localStorage.getItem("currentPorkIndex"));
        localStorage.setItem("currentPorkIndex", currentPorkIndex-1);
        const meatDISH = MENU_MAIN_CONTAINER.children[0].children[1]; // display all child
        const meatCONTENT = meatDISH.children[0]; // the card fish dish item

        // meatCONTENT.children[0].className = "inactive";
        // meatCONTENT.children[1].className = "menu-content-item";
        if(isMOBILE) {
            if(parseInt(localStorage.getItem("currentPorkIndex")) >= menusLists[1].type.item[1].dishes.length)
                localStorage.setItem("currentPorkIndex", 0);
            meatCONTENT.appendChild(drawMeatDish(menusLists[1].type.item[1].dishes, 
                parseInt(localStorage.getItem("currentPorkIndex")) >= menusLists[1].type.item[1].dishes.length? 0:parseInt(localStorage.getItem("currentPorkIndex"))
                , "menu-content-item"));
            meatCONTENT.children[0].remove();
            return;
        }
        meatCONTENT.children[1].style.marginRight = "-200px";
        meatCONTENT.children[1].classList.add("inactive");

        const si = setInterval(() => {
            const sisi = setInterval(() => {
                meatCONTENT.removeChild(meatCONTENT.children[1]);
                meatCONTENT.prepend(drawFishDish(menusLists[1].type.item[1].dishes, 
                    localStorage.getItem("currentPorkIndex")
                    , "menu-content-item"));
                    meatCONTENT.children[1].className = "menu-content-next-item";

                clearInterval(sisi);
            }, 2000);
            clearInterval(si)
        }, 1000);
    } // this means user clicked the shrimps menu dish
    else if(prevID === "prev-beef") {
        if(parseInt(localStorage.getItem("currentBeefIndex")) >= menusLists[1].type.item[2].dishes.length)
            localStorage.setItem("currentBeefIndex", 0);
        if(parseInt(localStorage.getItem("currentBeefIndex")) <= 0)
            return;
        const currentBeefIndex = parseInt(localStorage.getItem("currentBeefIndex"));
        localStorage.setItem("currentBeefIndex", currentBeefIndex-1);
        const meatDISH = MENU_MAIN_CONTAINER.children[0].children[2]; // display all child
        const meatCONTENT = meatDISH.children[0]; // the card fish dish item

        // meatCONTENT.children[0].className = "inactive";
        // meatCONTENT.children[1].className = "menu-content-item";
        if(isMOBILE) {
            if(parseInt(localStorage.getItem("currentBeefIndex")) >= menusLists[1].type.item[2].dishes.length)
                localStorage.setItem("currentBeefIndex", 0);
            meatCONTENT.appendChild(drawMeatDish(menusLists[1].type.item[2].dishes, 
                parseInt(localStorage.getItem("currentBeefIndex")) >= menusLists[1].type.item[2].dishes.length? 0:parseInt(localStorage.getItem("currentBeefIndex"))
                , "menu-content-item"));
            meatCONTENT.children[0].remove();
            return;
        }
        meatCONTENT.children[1].style.marginRight = "-200px";
        meatCONTENT.children[1].classList.add("inactive");

        const si = setInterval(() => {
            const sisi = setInterval(() => {
                meatCONTENT.removeChild(meatCONTENT.children[1]);
                meatCONTENT.prepend(drawFishDish(menusLists[1].type.item[2].dishes, 
                    localStorage.getItem("currentBeefIndex")
                    , "menu-content-item"));
                    meatCONTENT.children[1].className = "menu-content-next-item";

                clearInterval(sisi);
            }, 2000);
            clearInterval(si)
        }, 1000);
    } // this means user clicked the shrimps menu dish
    else if(prevID === "prev-desserts") {
        if(parseInt(localStorage.getItem("currentDesserts")) >= menusLists[3].type.item[0].dishes.length)
            localStorage.setItem("currentDesserts", 0);
        if(parseInt(localStorage.getItem("currentDesserts")) <= 0)
            return;
        const currentDesserts = parseInt(localStorage.getItem("currentDesserts"));
        localStorage.setItem("currentDesserts", currentDesserts-1);
        const meatDISH = MENU_MAIN_CONTAINER.children[0].children[0]; // display all child
        const meatCONTENT = meatDISH.children[0] // the card fish dish item

        // meatCONTENT.children[0].className = "inactive";
        // meatCONTENT.children[1].className = "menu-content-item";
        if(isMOBILE) {
            if(parseInt(localStorage.getItem("currentDesserts")) >= menusLists[3].type.item[0].dishes.length)
                localStorage.setItem("currentDesserts", 0);
            meatCONTENT.appendChild(drawMeatDish(menusLists[3].type.item[0].dishes, 
                parseInt(localStorage.getItem("currentDesserts")) >= menusLists[3].type.item[0].dishes.length? 0:parseInt(localStorage.getItem("currentDesserts"))
                , "menu-content-item"));
            meatCONTENT.children[0].remove();
            return;
        }
        meatCONTENT.children[1].style.marginRight = "-200px";
        meatCONTENT.children[1].classList.add("inactive");

        const si = setInterval(() => {
            const sisi = setInterval(() => {
                meatCONTENT.removeChild(meatCONTENT.children[1]);
                meatCONTENT.prepend(drawFishDish(menusLists[3].type.item[0].dishes, 
                    localStorage.getItem("currentDesserts")
                    , "menu-content-item"));
                    meatCONTENT.children[1].className = "menu-content-next-item";

                clearInterval(sisi);
            }, 2000);
            clearInterval(si)
        }, 1000);
    } // this means user clicked the shrimps menu dish
}

function viewDISH(dish) {
    localStorage.setItem("view-top-menu", JSON.stringify(dish));

    const si = setInterval(() => {
        window.location.href = "../certain-menu/certain-menu.php";
        clearInterval(si);
    }, 1000);
}

function addDishToOrder(dish) {
    let orders = [];
    const RESPONSE_MESSAGES = document.getElementById("response-messages");

    if(localStorage.getItem("orders")) {
        orders = JSON.parse(localStorage.getItem("orders"));
        
        if(!RESTO_STORAGE.dishExistAlready(orders, dish.id)) {
            localStorage.setItem("orders", JSON.stringify(RESTO_STORAGE.addNewDish(orders, dish)));

            RESPONSE_MESSAGES.textContent = "New order was added!";
            RESPONSE_MESSAGES.style.zIndex = "1";
            RESPONSE_MESSAGES.style.opacity = 1;
            RESPONSE_MESSAGES.style.backgroundColor = "#76eba5";
            RESPONSE_MESSAGES.style.transition = "all 0s";

            const si = setInterval(() => {
                RESPONSE_MESSAGES.style.opacity = 0;
                clearInterval(si);
            }, 1500);
        }
        else {
            localStorage.setItem("orders", JSON.stringify(orders));
            RESPONSE_MESSAGES.textContent = "This order has been added already!";
            RESPONSE_MESSAGES.style.zIndex = "1";
            RESPONSE_MESSAGES.style.opacity = 1;
            RESPONSE_MESSAGES.style.backgroundColor = "#ffb34f";
            RESPONSE_MESSAGES.style.transition = "all 0.8s";

            const si = setInterval(() => {
                RESPONSE_MESSAGES.style.opacity = 0;
                clearInterval(si);
            }, 1500);
        }
    }
    else {
        orders.push(dish);
        localStorage.setItem("orders", JSON.stringify(orders));
        RESPONSE_MESSAGES.textContent = "New order was added!";
        RESPONSE_MESSAGES.style.zIndex = "1";
        RESPONSE_MESSAGES.style.opacity = 1;
        RESPONSE_MESSAGES.style.backgroundColor = "#76eba5";
        RESPONSE_MESSAGES.style.transition = "all 0s";

        const si = setInterval(() => {
            RESPONSE_MESSAGES.style.opacity = 0;
            clearInterval(si);
        }, 1500);
    }
    ORDER_LIST.textContent = RESTO_STORAGE.countedOrders();
}