// let label = document.getElementById('label')
// let shoppingCart = document.getElementById('Shopping_cart')
// let basket = JSON.parse(localStorage.getItem('data')) || []

// let calculate = () => {
//     let cartIcon = document.getElementById('cartAmount').innerHTML = 'hs'

// }
// calculate()


// let generate_Cart_Item = () => {
//     if (basket.length !== 0) {
//         return (shoppingCart.innerHTML = basket.map((x) => {
//             let { title, description, category, price, image } = x;

//             return `
//              <div id="Shopping_cart" class="p-4   h-5/6">
//             <div id="label" class=" border-y-8 border-l-8 rounded-xl h-full  overflow-y-scroll">
//                 <h1 class="font-bold text-2xl text-white p-2 text-center">My Shopping Cart</h1>

//                 <div class="p-4">
//                     <div class="flex justify-between items-center rounded-xl  bg-[#1A1A1A] ">
//                         <div class="p-8">
//                             <img class="rounded-xl" src="${image} " alt="">
//                         </div>
//                         <div>
//                             <h1 class="font-extrabold text-white text-3xl py-4">${title} </h1>
//                             <button class=" p-2 text-sm  border-gray-700 border-2 rounded-full text-white ">
//                                 ${category}
//                             </button>
//                             <p class="text-gray-500 py-8">${description}
//                             </p>
//                             <div class="flex justify-between">
//                                 <div class="">
//                                     <h5 class="text-white font-extrabold ">price
//                                     </h5>
//                                     <h5 class="text-white font-extrabold"> ${price} </h5>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>

//             `
//         }))
//     }
// }
// generate_Cart_Item()


document.addEventListener("DOMContentLoaded", function () {
    let label = document.getElementById('label');
    let shoppingCart = document.getElementById('Shopping_Cart');
    let basket = JSON.parse(localStorage.getItem('data')) || [];

    // total price and total items of selected add to cart items
    let calculateTotals = () => {
        let totalPrice = 0; // Initialize as a number
        let totalItems = basket.length;

        // Sum the price of all items in the basket
        basket.forEach(item => {
            totalPrice += Number(item.price);
        });

        // Update the HTML with the calculated values
        document.getElementById('subtotal').innerHTML = `$${totalPrice.toFixed(2)}`;
        document.getElementById('totalItems').innerHTML = totalItems;
    };

    let calculate = () => {
        document.getElementById('cartAmount').innerHTML = basket.length;
        calculateTotals();
    };
    calculate();

    // load selected products on Ui
    let generateCartItem = () => {
        if (basket.length !== 0) {
            shoppingCart.innerHTML = basket.map((x) => {
                let { title, description, category, price, image } = x;
                return `
                    <div class="p-4">
                        <div class="flex justify-between items-center gap-12 rounded-xl bg-[#1A1A1A]">
                            <div class="flex justify-center item-center h-full bg-white rounded-xl w-2/5 ml-12 p-4">
                                <img class="rounded-xl h-60 bg-white " src="${image}" alt="">
                            </div>
                            <div class="w-3/5 p-4">
                                <h1 class="font-extrabold text-white text-2xl py-4">${title}</h1>
                                <button class="p-2 text-sm border-gray-700 border-2 rounded-full text-white">${description}</button>
                                <p class="text-gray-500 py-8">${category}</p>
                                <div class="flex justify-between">
                                    <div>
                                        <h5 class="text-gray-500">Price</h5>
                                        <h5 class="text-white font-extrabold">$${price}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;
            }).join('');
        } else {
            shoppingCart.innerHTML = "<h2 class= 'font-bold text-white text-center'>Your cart is empty.Please Add to cart products first</h2>";
        }
        calculateTotals();
    };
    generateCartItem(); ss
});
