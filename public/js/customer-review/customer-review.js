let isINMOBILE = window.matchMedia("(max-width: 700px)").matches;

let customerReview = [
    {
        id: 1001, name: 'dela cruz, juan d.', gender: 'male', 
        review: "this is the best food i've ever had so far, kodus to the owner, and the restaurant crew!",
        star: 3
    },
    {
        id: 1002, name: 'abcede, ayra c.', gender: 'female', 
        review: 'the foods is the best and the resto crew, was also great in terms of there serving and hospitality!',
        star: 4
    },
    {
        id: 1003, name: 'basil, felip f.', gender: 'male', 
        review: 'yeah!!!, i would recommend this to everyone to try out this resto, everything was good and perfect!!',
        star: 2
    },
    {
        id: 1004, name: 'bede, jolly b.', gender: 'female', 
        review: 'just wow, there is nothing that i can say so far everything was good and greate!!',
        star: 5
    },
    {
        id: 1005, name: 'torreon, lloyd s.', gender: 'male', 
        review: "to family out there who want to have a quality time with them, you must try this resto,\
            and you can tell it your self about there enviromment",
        star: 4
    },
    {
        id: 1006, name: 'cruz, christian l.', gender: 'male', 
        review: 'my first time trying out there food and everything was good!, must try!!',
        star: 3
    },
    {
        id: 1007, name: 'flyn, jenny j.', gender: 'female', 
        review: 'a comfort to filipino out there who miss out your identity ^_^, you must try this resto to see for yourself!!',
        star: 5
    },
    {
        id: 1008, name: 'martin, john d.', gender: 'male', 
        review: 'wow, everyone was good, and the place was clean, and the crew as helpfull and entertaining!!',
        star: 4
    },
    {
        id: 1009, name: 'alcasan, dale a.', gender: 'male', 
        review: 'there food price was affordable and the quality and the taste was soooo delicious,\
            someone out there must try this out!!',
        star: 2
    },
    {
        id: 10010, name: 'tariga, dianne g.', gender: 'female', 
        review: 'i just tried this resto with my family and everything was good and great, beautiful and great place!!!',
        star: 3
    },
];

if(isINMOBILE) {
    document.getElementById("prev-review-container").style.display = "none";
}

const CUST_REV_CONT = document.getElementById("review-container");
const CUST_PREV_REV = document.getElementsByClassName("customer-prev-review");

const PREV_REV_CONT = document.getElementById("prev-review-container"); //review container
const NEXT_REV_CONT = document.getElementById("next-review-container"); //review container

const PREV = document.getElementById("prev"); //arrow
const NEXT = document.getElementById("next"); //arrow

let baseCnt = 0;
// console.log(CUST_REV_CONT.children[0].children[0])
let CURR_INDEX = 0;
let NEXT_INDEX = 0;
let PREV_INDEX_LISTS = [];

NEXT_REV_CONT.appendChild(drawNextReview(CURR_INDEX, CURR_INDEX+1));

NEXT.addEventListener("click", function() {
    if(NEXT_INDEX >= customerReview.length)
        return;
    CURR_INDEX+=1;
    NEXT_INDEX = CURR_INDEX+1;
    PREV_INDEX_LISTS.push(CURR_INDEX-1);
    if(NEXT_INDEX <= customerReview.length){
        NEXT_REV_CONT.appendChild(drawNextReview(CURR_INDEX, NEXT_INDEX));
        if(isINMOBILE)
            PREV_REV_CONT.appendChild(drawPrevReview(PREV_INDEX_LISTS[PREV_INDEX_LISTS.length-1]));
        else
            PREV_REV_CONT.appendChild(drawPrevReview(PREV_INDEX_LISTS[PREV_INDEX_LISTS.length-1]));
    }
});
PREV.addEventListener("click", function() {
    if(CURR_INDEX <= 0){
        CURR_INDEX = NEXT_INDEX = 0;
        return ;
    }
    CURR_INDEX-=1;
    NEXT_INDEX-=1;
    if(PREV_INDEX_LISTS.length == 0)
        return;

    while (PREV_REV_CONT.children.length > 0) {
        PREV_REV_CONT.removeChild(PREV_REV_CONT.children[PREV_REV_CONT.children.length-1]);
    }
    //DONE CLEARING THE PREV_REV_CONT
    while(NEXT_REV_CONT.children.length > 0) {
        NEXT_REV_CONT.removeChild(NEXT_REV_CONT.children[NEXT_REV_CONT.children.length-1]);
    }
    // DONE CLEARING THE NEXT_REV_CONT

    NEXT_REV_CONT.appendChild(drawNextReview(
        PREV_INDEX_LISTS[PREV_INDEX_LISTS.length-1],
        PREV_INDEX_LISTS.length
    ));
    PREV_INDEX_LISTS.pop();
    if(PREV_INDEX_LISTS.length > 0)
        PREV_REV_CONT.appendChild(drawPrevReview(PREV_INDEX_LISTS[PREV_INDEX_LISTS.length-1]));
});

function nextCustomerReview(currIndex, nextIndex) {
    if(currIndex == 0) {
        const CUST_CURR_REV = document.createElement("div");
        const CUST_NEXT_REV = document.createElement("div");

        CUST_CURR_REV.className = 'customer-current-review animate-opacity';

        let CUST_CURR_REV_HEAD = document.createElement("div");
        let USER_IMG = document.createElement("img");
        let USER_NAME_SPAN = document.createElement("p");

        let CUST_CURR_REV_BODY = document.createElement("div");
        let CUST_REVIEW_TAG = document.createElement("p");

        CUST_CURR_REV_HEAD.style.padding = "10px";
        CUST_CURR_REV_HEAD.style.textAlign = "center";
        USER_IMG.src = customerReview[currIndex].gender === "male"?
            "http://localhost/restaurant/public/images/man.png":
            "http://localhost/restaurant/public/images/girl.png";
        USER_IMG.style.width = "70px";
        USER_IMG.style.height = "70px";

        USER_NAME_SPAN.textContent = customerReview[currIndex].name;
        USER_NAME_SPAN.className = "text-capitalize";

        CUST_CURR_REV_HEAD.appendChild(USER_IMG);
        CUST_CURR_REV_HEAD.appendChild(USER_NAME_SPAN);

        CUST_REVIEW_TAG.textContent = customerReview[currIndex].review;
        CUST_CURR_REV_BODY.style.padding = "10px";
        CUST_CURR_REV_BODY.style.textAlign = "center";
        let CUST_REVIEW_STAR_CONT = document.createElement("div");
        CUST_REVIEW_STAR_CONT.style.marginTop = "20px";
        for(let i = 0; i < customerReview[currIndex].star; i++) {
            let CUST_REVIEW_STAR = document.createElement("img");
            CUST_REVIEW_STAR.style.width = "20px";
            CUST_REVIEW_STAR.style.height = "20px";
            CUST_REVIEW_STAR.style.marginLeft = "3px";
            CUST_REVIEW_STAR.src = "http://localhost/restaurant/public/images/star.png";
            CUST_REVIEW_STAR_CONT.appendChild(CUST_REVIEW_STAR);
        }

        CUST_CURR_REV_BODY.appendChild(CUST_REVIEW_TAG);
        CUST_CURR_REV_BODY.appendChild(CUST_REVIEW_STAR_CONT);
        // CUST_CURR_REV_BODY.appendChild()

        CUST_CURR_REV.appendChild(CUST_CURR_REV_HEAD);
        CUST_CURR_REV.appendChild(CUST_CURR_REV_BODY);
        NEXT_REV_CONT.appendChild(CUST_CURR_REV);
        //DONE SETTING THE CUSTOMER_CURRENT_REVIEW

        CUST_NEXT_REV.className = 'customer-next-review animate-opacity';

        CUST_CURR_REV_HEAD = document.createElement("div");
        USER_IMG = document.createElement("img");
        USER_NAME_SPAN = document.createElement("p");

        CUST_CURR_REV_BODY = document.createElement("div");
        CUST_REVIEW_TAG = document.createElement("p");


        CUST_CURR_REV_HEAD.style.padding = "10px";
        CUST_CURR_REV_HEAD.style.textAlign = "center";
        USER_IMG.src = customerReview[nextIndex].gender === "male"?
            "http://localhost/restaurant/public/images/man.png":
            "http://localhost/restaurant/public/images/girl.png";
        USER_IMG.style.width = "70px";
        USER_IMG.style.height = "70px";

        USER_NAME_SPAN.textContent = customerReview[nextIndex].name;
        USER_NAME_SPAN.className = "text-capitalize";

        CUST_CURR_REV_BODY.style.textAlign = "center";
        CUST_REVIEW_TAG.className = "ellipse";
        CUST_REVIEW_TAG.textContent = customerReview[nextIndex].review;
        CUST_CURR_REV_BODY.appendChild(CUST_REVIEW_TAG);

        CUST_CURR_REV_HEAD.appendChild(USER_IMG);
        CUST_CURR_REV_HEAD.appendChild(USER_NAME_SPAN);

        // CUST_CURR_REV_BODY.appendChild()

        CUST_NEXT_REV.appendChild(CUST_CURR_REV_HEAD);
        CUST_NEXT_REV.appendChild(CUST_CURR_REV_BODY);

        NEXT_REV_CONT.appendChild(CUST_NEXT_REV);
        //DONE SETTING THE CUSTOMER_NEXT_REVIEW
    }
    else {
        if(currIndex > 0) {
            if(PREV_REV_CONT.children.length > 0)
                while(PREV_REV_CONT.children.length > 0){
                    PREV_REV_CONT.removeChild(PREV_REV_CONT.children[PREV_REV_CONT.children.length-1]);
                }
            NEXT_REV_CONT.children[0].className = "customer-prev-review animate-opacity";
            NEXT_REV_CONT.children[0].children[1].children[0].className = "ellipse";
            NEXT_REV_CONT.children[0].children[1].children[1].remove();
            PREV_REV_CONT.appendChild(NEXT_REV_CONT.children[0]);
            while(NEXT_REV_CONT.children.length > 0) {
                NEXT_REV_CONT.removeChild(NEXT_REV_CONT.children[NEXT_REV_CONT.children.length-1]);
            }
        const CUST_CURR_REV = document.createElement("div");
        const CUST_NEXT_REV = document.createElement("div");

        CUST_CURR_REV.className = 'customer-current-review animate-opacity';

        let CUST_CURR_REV_HEAD = document.createElement("div");
        let USER_IMG = document.createElement("img");
        let USER_NAME_SPAN = document.createElement("p");

        let CUST_CURR_REV_BODY = document.createElement("div");
        let CUST_REVIEW_TAG = document.createElement("p");

        CUST_CURR_REV_HEAD.style.padding = "10px";
        CUST_CURR_REV_HEAD.style.textAlign = "center";
        USER_IMG.src = customerReview[currIndex].gender === "male"?
            "http://localhost/restaurant/public/images/man.png":
            "http://localhost/restaurant/public/images/girl.png";
        USER_IMG.style.width = "70px";
        USER_IMG.style.height = "70px";
        
        CUST_CURR_REV_BODY.style.textAlign = "center";
        // CUST_REVIEW_TAG.className = "ellipse";
        CUST_CURR_REV_BODY.style.padding = "10px";
        CUST_CURR_REV_BODY.style.textAlign = "center";
        CUST_REVIEW_TAG.textContent = customerReview[currIndex].review;

        USER_NAME_SPAN.textContent = customerReview[currIndex].name;
        USER_NAME_SPAN.className = "text-capitalize";

        CUST_CURR_REV_HEAD.appendChild(USER_IMG);
        CUST_CURR_REV_HEAD.appendChild(USER_NAME_SPAN);
        
        let CUST_REVIEW_STAR_CONT = document.createElement("div");
        CUST_REVIEW_STAR_CONT.style.marginTop = "20px";
        for(let i = 0; i < customerReview[currIndex].star; i++) {
            let CUST_REVIEW_STAR = document.createElement("img");
            CUST_REVIEW_STAR.style.width = "20px";
            CUST_REVIEW_STAR.style.height = "20px";
            CUST_REVIEW_STAR.style.marginLeft = "3px";
            CUST_REVIEW_STAR.src = "http://localhost/restaurant/public/images/star.png";
            CUST_REVIEW_STAR_CONT.appendChild(CUST_REVIEW_STAR);
        }

        CUST_CURR_REV_BODY.appendChild(CUST_REVIEW_TAG);
        CUST_CURR_REV_BODY.appendChild(CUST_REVIEW_STAR_CONT);
        // CUST_CURR_REV_BODY.appendChild()

        CUST_CURR_REV.appendChild(CUST_CURR_REV_HEAD);
        CUST_CURR_REV.appendChild(CUST_CURR_REV_BODY);
        NEXT_REV_CONT.appendChild(CUST_CURR_REV);
        //DONE SETTING THE CUSTOMER_CURRENT_REVIEW

            if(nextIndex <= customerReview.length-1) { // CANT DRAW IF NEXTINDEX IS GREATER THAT customerReviewLength!!
                CUST_NEXT_REV.className = 'customer-next-review animate-opacity';

                CUST_CURR_REV_HEAD = document.createElement("div");
                USER_IMG = document.createElement("img");
                USER_NAME_SPAN = document.createElement("p");

                CUST_CURR_REV_BODY = document.createElement("div");
                CUST_REVIEW_TAG = document.createElement("p");

                CUST_CURR_REV_HEAD.style.padding = "10px";
                CUST_CURR_REV_HEAD.style.textAlign = "center";
                USER_IMG.src = customerReview[nextIndex].gender === "male"?
                    "http://localhost/restaurant/public/images/man.png":
                    "http://localhost/restaurant/public/images/girl.png";
                USER_IMG.style.width = "70px";
                USER_IMG.style.height = "70px";

                USER_NAME_SPAN.textContent = customerReview[nextIndex].name;
                USER_NAME_SPAN.className = "text-capitalize";

                CUST_CURR_REV_HEAD.appendChild(USER_IMG);
                CUST_CURR_REV_HEAD.appendChild(USER_NAME_SPAN);

                // CUST_CURR_REV_BODY.appendChild()
                CUST_REVIEW_TAG.textContent = customerReview[nextIndex].review;
                CUST_REVIEW_TAG.className = "ellipse";
                CUST_CURR_REV_BODY.style.textAlign = "center";

                CUST_CURR_REV_BODY.appendChild(CUST_REVIEW_TAG);
                
                CUST_NEXT_REV.appendChild(CUST_CURR_REV_HEAD);
                CUST_NEXT_REV.appendChild(CUST_CURR_REV_BODY);

                NEXT_REV_CONT.appendChild(CUST_NEXT_REV);
                //DONE SETTING THE CUSTOMER_NEXT_REVIEW
            } 
        }
    }
}

function drawNextReview(currIndex, nextIndex) {
    const FINALCONTAINER = document.createElement("div");
    while(NEXT_REV_CONT.children.length > 0) {
        NEXT_REV_CONT.removeChild(NEXT_REV_CONT.children[NEXT_REV_CONT.children.length-1]);
    }
    const CUST_CURR_REV = document.createElement("div");

    CUST_CURR_REV.className = 'customer-current-review animate-opacity';

    let CUST_CURR_REV_HEAD = document.createElement("div");
    let USER_IMG = document.createElement("img");
    let USER_NAME_SPAN = document.createElement("p");

    let CUST_CURR_REV_BODY = document.createElement("div");
    let CUST_REVIEW_TAG = document.createElement("p");

    CUST_CURR_REV_HEAD.style.padding = "10px";
    CUST_CURR_REV_HEAD.style.textAlign = "center";
    USER_IMG.src = customerReview[currIndex].gender === "male"?
        "http://localhost/restaurant/public/images/man.png":
        "http://localhost/restaurant/public/images/girl.png";
    USER_IMG.style.width = "70px";
    USER_IMG.style.height = "70px";

    USER_NAME_SPAN.textContent = customerReview[currIndex].name;
    USER_NAME_SPAN.className = "text-capitalize";

    CUST_CURR_REV_HEAD.appendChild(USER_IMG);
    CUST_CURR_REV_HEAD.appendChild(USER_NAME_SPAN);

    CUST_REVIEW_TAG.textContent = customerReview[currIndex].review;
    CUST_CURR_REV_BODY.style.padding = "10px";
    CUST_CURR_REV_BODY.style.textAlign = "center";
    let CUST_REVIEW_STAR_CONT = document.createElement("div");
    CUST_REVIEW_STAR_CONT.style.marginTop = "20px";
    for(let i = 0; i < customerReview[currIndex].star; i++) {
        let CUST_REVIEW_STAR = document.createElement("img");
        CUST_REVIEW_STAR.style.width = "20px";
        CUST_REVIEW_STAR.style.height = "20px";
        CUST_REVIEW_STAR.style.marginLeft = "3px";
        CUST_REVIEW_STAR.src = "http://localhost/restaurant/public/images/star.png";
        CUST_REVIEW_STAR_CONT.appendChild(CUST_REVIEW_STAR);
    }

    CUST_CURR_REV_BODY.appendChild(CUST_REVIEW_TAG);
    CUST_CURR_REV_BODY.appendChild(CUST_REVIEW_STAR_CONT);
    // CUST_CURR_REV_BODY.appendChild()

    CUST_CURR_REV.appendChild(CUST_CURR_REV_HEAD);
    CUST_CURR_REV.appendChild(CUST_CURR_REV_BODY);
    // NEXT_REV_CONT.appendChild(CUST_CURR_REV);
    //DONE SETTING THE CUSTOMER_CURRENT_REVIEW
    if(nextIndex >= customerReview.length)
        return CUST_CURR_REV;
    if(!isINMOBILE) {
        const CUST_NEXT_REV = document.createElement("div");
        CUST_NEXT_REV.className = 'customer-next-review animate-opacity';

        CUST_CURR_REV_HEAD = document.createElement("div");
        USER_IMG = document.createElement("img");
        USER_NAME_SPAN = document.createElement("p");

        CUST_CURR_REV_BODY = document.createElement("div");
        CUST_REVIEW_TAG = document.createElement("p");

        CUST_CURR_REV_HEAD.style.padding = "10px";
        CUST_CURR_REV_HEAD.style.textAlign = "center";
        USER_IMG.src = customerReview[nextIndex].gender === "male"?
            "http://localhost/restaurant/public/images/man.png":
            "http://localhost/restaurant/public/images/girl.png";
        USER_IMG.style.width = "70px";
        USER_IMG.style.height = "70px";

        USER_NAME_SPAN.textContent = customerReview[nextIndex].name;
        USER_NAME_SPAN.className = "text-capitalize";

        CUST_CURR_REV_BODY.style.textAlign = "center";
        CUST_REVIEW_TAG.className = "ellipse";
        CUST_REVIEW_TAG.textContent = customerReview[nextIndex].review;
        CUST_CURR_REV_BODY.appendChild(CUST_REVIEW_TAG);

        CUST_CURR_REV_HEAD.appendChild(USER_IMG);
        CUST_CURR_REV_HEAD.appendChild(USER_NAME_SPAN);

        // CUST_CURR_REV_BODY.appendChild()

        CUST_NEXT_REV.appendChild(CUST_CURR_REV_HEAD);
        CUST_NEXT_REV.appendChild(CUST_CURR_REV_BODY);

        FINALCONTAINER.appendChild(CUST_CURR_REV);
        FINALCONTAINER.appendChild(CUST_NEXT_REV);
    }
    else {
        FINALCONTAINER.appendChild(CUST_CURR_REV);
    }

        // NEXT_REV_CONT.appendChild(CUST_NEXT_REV);
    return FINALCONTAINER
}

function drawPrevReview(currIndex) {
    while(PREV_REV_CONT.children.length > 0) {
        PREV_REV_CONT.removeChild(PREV_REV_CONT.children[PREV_REV_CONT.children.length-1]);
    }
    
    const CUST_PREV_REV = document.createElement("div");

    CUST_PREV_REV.className = 'customer-prev-review animate-opacity';
    let CUST_CURR_REV_HEAD = document.createElement("div");
    let USER_IMG = document.createElement("img");
    let USER_NAME_SPAN = document.createElement("p");
    let CUST_CURR_REV_BODY = document.createElement("div");
    let CUST_REVIEW_TAG = document.createElement("p");

    CUST_CURR_REV_HEAD.style.padding = "10px";
    CUST_CURR_REV_HEAD.style.textAlign = "center";
    USER_IMG.src = customerReview[currIndex].gender === "male"?
        "http://localhost/restaurant/public/images/man.png":
        "http://localhost/restaurant/public/images/girl.png";
    USER_IMG.style.width = "70px";
    USER_IMG.style.height = "70px";
    USER_NAME_SPAN.textContent = customerReview[currIndex].name;
    USER_NAME_SPAN.className = "text-capitalize";

    CUST_CURR_REV_HEAD.appendChild(USER_IMG);
    CUST_CURR_REV_HEAD.appendChild(USER_NAME_SPAN);

    CUST_REVIEW_TAG.className = "ellipse";
    CUST_REVIEW_TAG.textContent = customerReview[currIndex].review;
    CUST_CURR_REV_BODY.style.textAlign = "center";

    CUST_CURR_REV_BODY.appendChild(CUST_REVIEW_TAG);

    CUST_PREV_REV.appendChild(CUST_CURR_REV_HEAD);
    CUST_PREV_REV.appendChild(CUST_CURR_REV_BODY);

    return CUST_PREV_REV;
}

