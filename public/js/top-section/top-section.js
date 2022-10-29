window.addEventListener("scroll", function(ev) {
    let nav = this.document.getElementsByTagName("nav");
    if(this.scrollY > 150)
        nav[0].style.backgroundColor = "#eabd36"; 
    else
        nav[0].style.backgroundColor = "transparent";
});

const BTN_ACTIONS = document.getElementsByTagName("button");
const BALen = BTN_ACTIONS.length;

BTN_ACTIONS[0].addEventListener("click", topSectionAction); // a button for signin

function topSectionAction() {
    const btnText = this.innerHTML;

    if(btnText === 'order online')
        window.location.href = '/restaurant/order-online/order-online.php';
}