const listItem = document.querySelector("table")
let items = JSON.parse(localStorage.getItem("cart")) || []
// const itemCount = document.querySelector(".item_count");

const totalPrice = document.querySelector(".total-cart-price")
if(items.length === 0){
    let sorryMsg = document.createElement("h1")
    sorryMsg.innerHTML = "Your cart is empty!"
    document.body.appendChild(sorryMsg)
}

items.forEach(item => {
    let structure = `<tr id=${item.id}>
    <td>
      <div class="cart-info">
        <img src=${item.product_img} alt="" />
        <div>
        <span>${item.product_name}</span>
          <br>
          <span class="suppr">Remove</span>
        </div>
      </div>
    </td>
    <td>
    <button class="plus-btn" type="button">+</button>
    
    <span>1</span>
   
    <button class="minus-btn" type="button">-</button>
    </td>
    <td>
      <h5 class="card-title">
        price = 
        <span>${item.product_price}</span>$
      </h5><br />
    </td>
    </tr>
    <hr>`


  listItem.innerHTML = listItem.innerHTML + structure
});

const plusBtn = document.querySelectorAll(".plus-btn");
const minusBtn = document.querySelectorAll(".minus-btn");



for (const btn of plusBtn) {
    btn.addEventListener("click", () => {
        btn.nextElementSibling.innerHTML++;
        let price = btn.parentElement.nextElementSibling.firstElementChild.firstElementChild.innerHTML;
         totalPrice.innerHTML = parseInt(totalPrice.innerHTML) + parseInt(price);
    })
}

for (const btn of minusBtn) {
  btn.addEventListener("click", () => {
      if (btn.previousElementSibling.innerHTML<=1){
          innerHTML= 1;
      }
      else{
  btn.previousElementSibling.innerHTML--;
  let price = btn.parentElement.nextElementSibling.firstElementChild.firstElementChild.innerHTML
    totalPrice.innerHTML = parseInt(totalPrice.innerHTML) - parseInt(price)
  
}
  })  
}
var removecart = document.getElementsByClassName('suppr')
for (let btn of removecart){
    btn.addEventListener("click", (e) => {
        // let qty = btn.previousElementSibling.previousElementSibling.innerHTML;
        // let price = btn.parentElement.previousElementSibling.firstElementChild.innerHTML
        // totalPrice.innerHTML = parseInt(totalPrice.innerHTML) - parseInt(qty) * parseInt(price)
        const id = e.target.parentElement.parentElement.parentElement.parentElement.id
        let contentCart = JSON.parse(localStorage.getItem("cart"))
        let newContent = contentCart.filter(el => el.id != id)
        localStorage.setItem("cart", JSON.stringify(newContent))
        btn.parentElement.parentElement.parentElement.parentElement.remove();
        itemCount.innerHTML = newContent.length
    })

}