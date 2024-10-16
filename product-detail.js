
const productContainer = document.querySelector('#product-Container');
console.log(productContainer)

async function fetchAndDisplaySingleProduct() {
  const ProductId = new URLSearchParams(window.location.search).get("id");

  //  conndition
  if (isNaN(ProductId) || ProductId < 1 || ProductId > 20) {
    display404Error();
    return;
  }

  const response = await fetch(`https://fakestoreapi.com/products/${ProductId}`);


  // If the response is not ok (e.g., 404), display an error message
  if (!response.ok) {
    display404Error();
    return;
  }
  const product = await response.json();
  console.log(product, ProductId);
  displayProduct(product)
}

function displayProduct(product) {
  productContainer.innerHTML = `

               <div class="bg-[#1A1A1A] rounded-xl  mt-12 p-4  w-5/6 h-3/6">
                   <div class="flex justify-end ">
                <a href="http://127.0.0.1:5500/index.html"> <button
                        class="text-white  px-4 p-2 text-sm border-1 rounded-full bg-[#141414]">Back</button></a>
                 </div>
                <div  class="product grid grid-cols-2 justify-items-center ">
                  
                   <div class="w-auto h-auto p-4 content-center">
                     <img class="rounded-lg max-h-80 max-w-80  " src="${product.image}" alt="">
                   </div>
                 <div class="">
                    <h1 class="font-extrabold text-white text-3xl px-4 py-4">${product.title}</h1>
                     <button class="px-4 p-1 text-sm font-semibold   border-[#262626] border-2 rounded-full text-white "> ${product.category} </button>
                      <p class="text-gray-500 font-semibold py-8 px-4">${product.description}
                     </p>
                     <p class="text-gray-500  px-4"> Price</p>
                    <div class="flex justify-between">
                      <h5 class="text-white  text-xl font-extrabold px-4">$ ${product.price}  </h5>
                  

                 </div>
                </div>
                </div>
               </div>
`;
}


function display404Error() {
  productContainer.innerHTML = `
    <div class="flex justify-center  items-center mt-10">
        <div class="">
            <div class="flex justify-center items-center h-48 ">
                <img class="h-52 rounded-full"
                    src="assets/character-illustration-of-wood-grain-with-404-error-vector.jpg" alt="">
            </div>
            <h5 class=" text-center text-9xl font-black text-white ">Oops!</h5>
            <h1 class="text-center text-xl font-semibold p-4 text-white "> 404 - PAGE NOT FOUND</h1>
            <p class="text-center text-sm w-96 font-medium text-white">The page you are looking for might be removed had
                its name
                changed or is temporarily
                unavailable.
            </p>
            <div class="text-center p-2">
                <a href="http://127.0.0.1:5500/index.html">
                    <button class="bg-[#0043D2] text-sm text-white font-bold rounded-full p-2 px-5 "> GO TO
                        HOMEPAGE </button></a>
            </div>
        </div>
    </div>
  `;
}

fetchAndDisplaySingleProduct();



// const productContainer = document.querySelector('#product-Container');
// console.log(productContainer);

// async function fetchAndDisplaySingleProduct() {
//   const ProductId = new URLSearchParams(window.location.search).get("id");

//   // Check if the ProductId is a valid number and within the valid range
//   if (isNaN(ProductId) || ProductId < 1 || ProductId > 20) {
//     display404Error();
//     return;
//   }

//   const response = await fetch(`https://fakestoreapi.com/products/${ProductId}`);

//   // If the response is not ok (e.g., 404), display an error message
//   if (!response.ok) {
//     display404Error();
//     return;
//   }

//   const product = await response.json();
//   console.log(product, ProductId);
//   displayProduct(product);
// }

// function displayProduct(product) {
//   productContainer.innerHTML = `
//     <div class="bg-[#1A1A1A] rounded-xl py-4  p-4  w-5/6 h-3/6">
//       <div class="product grid grid-cols-2 justify-items-center ">
//         <div class="w-auto h-auto p-4 content-center">
//           <img class="rounded-lg max-h-80 max-w-80" src="${product.image}" alt="">
//         </div>
//         <div class="">
//           <h1 class="font-extrabold text-white text-3xl px-4 py-4">${product.title}</h1>
//           <button class="px-4 p-1 text-sm font-semibold border-[#262626] border-2 rounded-full text-white"> 
//             ${product.category} 
//           </button>
//           <p class="text-gray-500 font-semibold py-8 px-4">${product.description}</p>
//           <p class="text-gray-500 px-4"> Price</p>
//           <div class="flex justify-between">
//             <h5 class="text-white font-extrabold px-4">$ ${product.price}</h5>
//             <div class="px-8 ">
//               <button class="p-2 bg-[#703BF7] text-white rounded-lg">Add to Cart</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   `;
// }

// function display404Error() {
//   productContainer.innerHTML = `
//    <div class="flex justify-center items-center bg-[#896335]  rounded-xl p-4">
//         <div class="">
//             <div class="flex justify-center items-center h-48">
//                 <img class="h-52 rounded-full"
//                     src="assets/character-illustration-of-wood-grain-with-404-error-vector.jpg" alt="">
//             </div>
//             <h5 class=" text-center text-9xl font-black text-white ">Oops!</h5>
//             <h1 class="text-center text-xl font-semibold p-4 text-white">404 - PAGE NOT FOUND</h1>
//             <p class="text-center text-sm w-96 font-medium text-white">The page you are looking for might be removed, had
//                 its name changed, or is temporarily unavailable.
//             </p>
//             <div class="text-center p-2">
//                 <a href="http://127.0.0.1:5500/index.html">
//                     <button class="bg-[#0043D2] text-sm text-white font-bold rounded-full p-2 px-5">GO TO
//                         HOMEPAGE</button>
//                 </a>
//             </div>
//         </div>
//     </div>
//   `;
// }

// fetchAndDisplaySingleProduct();
