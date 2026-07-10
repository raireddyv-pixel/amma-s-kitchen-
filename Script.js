// Amma's Kitchen Cart System

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, size, price){

cart.push({
name:name,
size:size,
price:price,
qty:1
});

localStorage.setItem("cart",JSON.stringify(cart));

alert(name+" added to cart!");

}

function loadCart(){

let table=document.getElementById("cart-items");

if(!table) return;

table.innerHTML="";

let total=0;

cart.forEach((item,index)=>{

total+=item.price*item.qty;

table.innerHTML+=`

<tr>

<td>${item.name}</td>

<td>${item.size}</td>

<td>${item.qty}</td>

<td>₹${item.price}</td>

<td>
<button onclick="removeItem(${index})">
Remove
</button>
</td>

</tr>

`;

});

document.getElementById("total").innerHTML="₹"+total;

}

function removeItem(index){

cart.splice(index,1);

localStorage.setItem("cart",JSON.stringify(cart));

loadCart();

}

window.onload=loadCart;
function sendWhatsAppOrder() {

let name = document.querySelector('input[type="text"]').value;
let phone = document.querySelector('input[type="tel"]').value;

let message = "🍲 *Amma's Kitchen Order*%0A%0A";

cart.forEach(item => {
message += "• " + item.name + " (" + item.size + ") - ₹" + item.price + "%0A";
});

let total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

message += "%0A💰 Total: ₹" + total;
message += "%0A👤 Name: " + name;
message += "%0A📱 Phone: " + phone;

window.open(
"https://wa.me/91YOURNUMBER?text=" + message,
"_blank"
);

}
