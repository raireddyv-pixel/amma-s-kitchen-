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
