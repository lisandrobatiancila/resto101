const RESTO_STORAGE = new RestoStorage();

let isMOBILE = window.matchMedia("(max-width: 600px)").matches;
const ORDER_LIST = document.getElementById("order-list"); //local to this instanct page

ORDER_LIST.textContent = RESTO_STORAGE.countedOrders();

window.addEventListener("scroll", function(ev) {
    let nav = this.document.getElementsByTagName("nav");
    if(this.scrollY > 150)
        nav[0].style.backgroundColor = "#eabd36"; 
    else
        nav[0].style.backgroundColor = "transparent";
});

const BTN_ORDER_CONTAINER = document.getElementsByClassName("btn-order-online");
const BURGER_MENU = document.getElementById("burger-menu");
const BTN_ACTIONS = document.getElementsByTagName("button");
const BALen = BTN_ACTIONS.length;

BTN_ACTIONS[0].addEventListener("click", topSectionAction); // it gets all the button specially that can be found in current page
BURGER_MENU.addEventListener("click", toggleNavigation);

if(!JSON.parse(localStorage.getItem("toggleActive")))
    localStorage.setItem("toggleActive", false);
else {
    if(JSON.parse(localStorage.getItem("toggleActive"))) {
        let NAV = document.getElementsByTagName("nav");
        let navChildren = NAV[0].children;
        let childrenLen = navChildren.length;

        navChildren[0].className = "burger-menu-toggled";
        for(let i = 0; i < childrenLen; i++) {
            if(i != 0)
                navChildren[i].style.display = "block";
        }
    }
}

function topSectionAction() {
    const btnText = this.innerHTML;

    if(btnText === 'order online')
        window.location.href = '/order-online/order-online.php';
}

function toggleNavigation() {
    let NAV = document.getElementsByTagName("nav");
    let navChildren = NAV[0].children;
    let childrenLen = navChildren.length;

    if(!JSON.parse(localStorage.getItem("toggleActive"))){
        for(let i = 0; i < childrenLen; i++) {
            if(i != 0)
                navChildren[i].style.display = "block";
            else
                navChildren[i].className = "burger-menu-toggled";
        }
        localStorage.setItem("toggleActive", true);
    }
    else{
        for(let i = 0; i < childrenLen; i++) {
            if(i != 0)
                navChildren[i].style.display = "none";
            else
                navChildren[i].className = "burger-menu";
        }
        localStorage.setItem("toggleActive", false);
    }

}