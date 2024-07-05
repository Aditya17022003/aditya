let searchform = document.querySelector(".search-form");
document.querySelector(".search-btn").onclick=() =>{
    searchform.classList.toggle('active');
    navbar.classList.remove('active');
    cart.classList.remove('active');



}


let navbar = document.querySelector(".navbar");
document.querySelector(".menu-btn").onclick=()=>{
    navbar.classList.toggle('active');
    searchform.classList.remove('active');
    cart.classList.remove('active');
    

}

let cart = document.querySelector(".cart-item-container");
document.querySelector(".cart-btn").onclick=()=>{
    cart.classList.toggle('active');
    searchform.classList.remove('active');
    navbar.classList.remove('active');


}