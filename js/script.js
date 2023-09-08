const products = [
  {
    id: 0,
    images: "images/prod1.png",
    title: "abc",
    price: 120,
  },
  {
    id: 1,
    images: "images/prod2.png",
    title: "abc",
    price: 80,
  },
  {
    id: 2,
    images: "images/prod3.png",
    title: "abc",
    price: 100,
  },
  {
    id: 3,
    images: "images/prod4.png",
    title: "abc",
    price: 150,
  },
];
const categories = [
  ...new Set(
    products.map((item) => {
      return item;
    })
  ),
];
let i = 0;
document.getElementById("root").innerHTML = categories
  .map((item) => {
    var { images, title, price } = item;
    return (
      `<div class="box flex flex-col items-center justify-between border-2 border-lime-400 rounded-lg p-4">
            <div class="img-box w-full h-44 flex items-center justify-center">
                <img class="images max-w-9/10 max-h-full" src=${images}></img>
            </div>
            <div class="bottom mt-5 w-full text-center flex flex-col items-center justify-between">
                <p>${title}</p>
                <h2>$ ${price}.00</h2>` +
      "<button onclick='addtocart(" +
      i++ +
      ")' class='w-full rounded-lg bg-lime-400 cursor-pointer text-white hover:bg-sky-400 hover:text-black'>Add to Cart</button>" +
      `</div>
        </div>`
    );
  })
  .join("");

var cart = [];

function addtocart(a) {
  cart.push({ ...categories[a] });
  displayCart();
}

function delElement(a) {
  cart.splice(a, 1);
  displayCart();
}

function displayCart() {
  let j = 0,
    total = 0;
  document.getElementById("count").innerHTML = cart.length;
  if (cart.length == 0) {
    document.getElementById("cartItem").innerHTML = "Your Cart Is Empty";
    document.getElementById("total").innerHTML = "$ " + 0 + ".00";
  } else {
    document.getElementById("cartItem").innerHTML = cart
      .map((item) => {
        var { images, title, price } = item;
        total = total + price;
        document.getElementById("total").innerHTML = "$ " + total + ".00";
        return (
          `<div class='cart-item flex items-center justify-between p-2.5 m-2.5 bg-white border-b-2 border-lime-400 rounded-md'>
                <div class='row-img w-12 h-12  flex items-center justify-center rounded-xl border-2 border-lime-400'>
                    <img class='row' style="max-width: 43px; max-height: 43px; border-radius:50%" src=${images}>
                    </div>
                    <p class='text-sm'>${title}</p>
                    <h2 class='text-md'>$ ${price}.00</h2>` +
          "<i class='fa fa-trash-o hover:cursor-pointer hover:text-amber-400' onclick='delElement(" +
          j++ +
          ")'></i></div>"
        );
      })
      .join("");
  }
}
