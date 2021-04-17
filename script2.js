// const plusBtn = document.querySelectorAll(".plus-btn");
// const totalPrice = document.querySelector(".total-price");
const itemCount = document.querySelector(".item_count");

// let productsInCart = []
let initialCart = JSON.parse(localStorage.getItem("cart")) || [] // Convert JSON to JS
itemCount.innerHTML = initialCart.length

// console.log(plusBtn)









var swiper = new Swiper('.swiper-container',{
    slidesPerView:5 ,
    spaceBetween:30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    
});

const addCart = document.querySelectorAll('.aa');
const cartShow =document.querySelector('header .navlist a h1 i span')
console.log(addCart);

for (var i =0; i<addCart.length; i++){
    addCart[i].addEventListener('click',()=>{
        cartCount();
    })

}
function cartCount(){
    let prdCount = localStorage.getItem('cartsCount');
prdCount = parseInt(prdCount);
if(prdCount){
    localStorage.setItem('cartsCount',prdCount + 1);
    cartShow.textContent =prdCount +1;
}else{
    localStorage.setItem('cartsCount' ,1);
    cartShow.textContent =prdCount +1;
} 
}
//done--------------------------------------------------------------------------
const addToCartBtns = document.querySelectorAll(".cart")

for (const btn of addToCartBtns) {
    btn.addEventListener("click",function(){
        let product_name = btn.previousElementSibling.firstElementChild.innerHTML;
        let product_price = btn.previousElementSibling.lastElementChild.firstElementChild.innerHTML;
        let product_img = btn.previousElementSibling.previousElementSibling.firstElementChild.getAttribute("src");

        let product_data = {
            product_price,
            product_name,
            product_img,
            id: Math.floor(Math.random() * 1000000)
        }

        initialCart.push(product_data)
        localStorage.setItem("cart", JSON.stringify(initialCart))
        itemCount.innerHTML = initialCart.length
    })
}

//------------------------------------------------------------------------------------