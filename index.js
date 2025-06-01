const Categories = document.querySelector(".header-category");
const productsContainer = document.querySelector(".All-products");
let currentCategory = "all";
const products = [
  {
    id: 1,
    title: "Ground Nuts Oil Pack",
    slug: "ground-nuts-oil-pack",
    image:
      "https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/new-product/1.jpg",
    category: "snack-and-spices",
    sub_category: "snack",
    rate: 4,
    isDiscount: true,
    oldPrice: 30,
    newPrice: 20,
    out_of_stock: false,
    weight: [100, 250, 500],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1900s,",
  },
  {
    id: 2,
    title: "Organic Litchi Juice Pack",
    slug: "organic-litchi-juice-pack",
    image:
      "https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/new-product/2.jpg",
    category: "snack-and-spices",
    sub_category: "Juice",
    rate: 4,
    isDiscount: true,
    oldPrice: 30,
    newPrice: 20,
    out_of_stock: false,
    weight: [100, 250, 500],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1900s,",
  },
  {
    id: 3,
    title: "Crunchy Banana Chips",
    slug: "crunchy-banana-chips",
    image:
      "https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/new-product/3.jpg",
    category: "snack-and-spices",
    sub_category: "chips",
    rate: 4,
    isDiscount: true,
    oldPrice: 30,
    newPrice: 20,
    out_of_stock: false,
    weight: [100, 250, 500],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1900s,",
  },
  {
    id: 4,
    title: "Organic dragon fruit",
    slug: "organic-dragon-fruit",
    image:
      "https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/new-product/9.jpg",
    category: "fruits",
    sub_category: "fruit",
    rate: 3,
    isDiscount: false,
    oldPrice: 30,
    newPrice: null,
    out_of_stock: false,
    weight: [100, 250, 500],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1900s,",
  },
  {
    id: 5,
    title: "Fresh blue berry",
    slug: "fresh-blue-berry",
    image:
      "https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/new-product/10.jpg",
    category: "fruits",
    sub_category: "fruit",
    rate: 5,
    isDiscount: false,
    oldPrice: 30,
    newPrice: null,
    out_of_stock: true,
    weight: [100, 250, 500],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1900s,",
  },
];
function handleCategories() {
  let newcategories = [];
  products.forEach((item) => newcategories.push(item.category));
  const uniqueCategory = ["all", ...new Set(newcategories)];
  const result = uniqueCategory.map((item) => ({
    label: item.replace("-", " ").replace("and", "&"),
    value: item,
  }));
  result.forEach(
    (item) =>
      (Categories.innerHTML += `<h3 class="${
        currentCategory == item.value ? "active" : ""
      }" data-value=${item.value}>${item.label}</h3>
          <span>/</span>`)
  );
  const cartegorieall = document.querySelectorAll(".header-category h3");
  cartegorieall.forEach(
    (item) =>
      (item.onclick = () => {
        cartegorieall.forEach((product) => product.classList.remove("active"));
        item.classList.add("active");
        currentCategory = item.dataset.value;
        console.log(filterProducts());
      })
  );
}
function filterProducts() {
  if (currentCategory == "all") {
    return displayProducts(products);
  } else {
    const productfilterd=products.filter((product) => product.category == currentCategory);
    return displayProducts(productfilterd)
  }
}
function displayProducts(data) {
    let html=``;
  data.forEach(
    (product) =>
      (html+= `
        <div class="productCard">
                <div class="product-image">
                  <img src="${product.image}" alt="">
                  <div class="icons">
                    <div class="icon">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                        <g id="Heart">
                          <path d="M12,20.043a.977.977,0,0,1-.7-.288L4.63,13.08A5.343,5.343,0,0,1,6.053,4.513,5.266,5.266,0,0,1,12,5.371a5.272,5.272,0,0,1,5.947-.858A5.343,5.343,0,0,1,19.37,13.08l-6.676,6.675A.977.977,0,0,1,12,20.043ZM8.355,4.963A4.015,4.015,0,0,0,6.511,5.4,4.4,4.4,0,0,0,4.122,8.643a4.345,4.345,0,0,0,1.215,3.73l6.675,6.675,6.651-6.675a4.345,4.345,0,0,0,1.215-3.73A4.4,4.4,0,0,0,17.489,5.4a4.338,4.338,0,0,0-4.968.852h0a.744.744,0,0,1-1.042,0A4.474,4.474,0,0,0,8.355,4.963Z">
                          </path>
                        </g>
                      </svg>
                    </div>
                    <div class="icon">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z">
                        </path>
                        <circle cx="256" cy="256" r="80" fill="none" stroke-miterlimit="10" stroke-width="32"></circle>
                      </svg>
                    </div>
                    <div class="icon">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M233.9 328.1c-2.6-2.6-6.1-4.1-9.9-4.1-3.7 0-7.3 1.4-9.9 4.1-2.6 2.6-4.1 6.1-4.1 9.9 0 3.7 1.4 7.3 4.1 9.9l.1.1 41.1 40.1H166c-20.4 0-33.6-7.5-41.6-23.5-8.4-17-9.4-41.5-9.4-58.5V170.8c15-2.8 28.7-10.5 39-21.9 11.6-12.9 18-29.5 18-46.9 0-38.6-31.4-70-70-70s-70 31.4-70 70c0 17 6.2 33.3 17.3 46.1 9.9 11.3 23.1 19.1 37.7 22.3V306c0 14.7 0 42.1 9.4 65.3 11.9 29.3 36 44.7 69.6 44.7h89.7L216 456.2c-5.4 5.4-5.4 14.3 0 19.8l.1.1c2.7 2.5 6.2 3.9 9.8 3.9 3.8 0 7.3-1.4 9.9-4.1l57.6-57.4c4.2-4.2 6.5-9.8 6.5-15.7 0-5.9-2.3-11.3-6.5-15.5l-59.5-59.2zM102 144c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42zM425 341.6V206c0-14.7 0-42.1-9.4-65.3-11.9-29.2-36-44.7-69.6-44.7h-89.7L296 55.8c5.4-5.4 5.4-14.3 0-19.8l-.1-.1c-2.7-2.5-6.2-3.9-9.8-3.9-3.8 0-7.3 1.4-9.9 4.1l-57.6 57.4c-4.2 4.2-6.5 9.8-6.5 15.7 0 5.9 2.3 11.3 6.5 15.5l59.6 59.4c2.6 2.6 6.1 4.1 9.9 4.1 3.7 0 7.3-1.4 9.9-4.1 2.6-2.6 4.1-6.1 4.1-9.9 0-3.7-1.4-7.3-4.1-9.9l-.1-.1-41.2-40.2H346c20.4 0 33.6 7.5 41.6 23.5 8.4 17 9.4 41.5 9.4 58.5v135.2c-15 2.8-28.7 10.5-39 21.9-11.6 12.9-18 29.5-18 46.9 0 38.6 31.4 70 70 70s70-31.4 70-70c0-17-6.2-33.3-17.3-46.1-9.9-11.3-23.2-19.1-37.7-22.3zM410 452c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42z">
                        </path>
                      </svg>
                    </div>
                    <div class="icon">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M80 176a16 16 0 0 0-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 0 0-16-16zm80 0v-32a96 96 0 0 1 96-96h0a96 96 0 0 1 96 96v32">
                        </path>
                        <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160 224v16a96 96 0 0 0 96 96h0a96 96 0 0 0 96-96v-16"></path>
                      </svg>
                    </div>
                  </div>  
                  </div>
                  <div class="product-content">
                    <div class="product-content-header">
                      <span>${product.category}</span>
                      <div class="rate">
                        ${new Array(5).fill(1).map((_,index)=>
                            product.rate >=index+1 ?
                            `<svg class="active" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z">
                                    </path>
                                </svg>`:`<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="16px" width="16px" xmlns="http://www.w3.org/2000/svg"><path d="M463 192H315.9L271.2 58.6C269 52.1 262.9 48 256 48s-13 4.1-15.2 10.6L196.1 192H48c-8.8 0-16 7.2-16 16 0 .9.1 1.9.3 2.7.2 3.5 1.8 7.4 6.7 11.3l120.9 85.2-46.4 134.9c-2.3 6.5 0 13.8 5.5 18 2.9 2.1 5.6 3.9 9 3.9 3.3 0 7.2-1.7 10-3.6l118-84.1 118 84.1c2.8 2 6.7 3.6 10 3.6 3.4 0 6.1-1.7 8.9-3.9 5.6-4.2 7.8-11.4 5.5-18L352 307.2l119.9-86 2.9-2.5c2.6-2.8 5.2-6.6 5.2-10.7 0-8.8-8.2-16-17-16zm-127.2 92.5c-10 7.2-14.2 20.2-10.2 31.8l30.1 87.7c1.3 3.7-2.9 6.8-6.1 4.6l-77.4-55.2c-4.9-3.5-10.6-5.2-16.3-5.2-5.7 0-11.4 1.7-16.2 5.2l-77.4 55.1c-3.2 2.3-7.4-.9-6.1-4.6l30.1-87.7c4-11.8-.2-24.8-10.3-32l-81-57.1c-3.2-2.2-1.6-7.3 2.3-7.3H196c12 0 22.7-7.7 26.5-19.1l29.6-88.2c1.2-3.6 6.4-3.6 7.6 0l29.6 88.2c3.8 11.4 14.5 19.1 26.5 19.1h97.3c3.9 0 5.5 5 2.3 7.2l-79.6 57.5z"></path></svg>`
                    ).join("")}
                                </div>
                    </div>
                    <div class="product-name">
                      <h2>${product.title}</h2>
                    </div>
                    <div class="product-price-weight">
                      <div class="product-price">
                        <strong>$${product.isDiscount?product.newPrice:product.oldPrice}</strong>
                        <del>${product.isDiscount?`$${product.oldPrice}`:""}</del>
                        ${product.out_of_stock? `<span class="out-of-stock">out of stock</span>`:""}
                      </div>
                      <div class="product-weight">
                        <h4>100kg</h4>
                      </div>
                    </div>
                </div>
            </div>`)
  );
  productsContainer.innerHTML =html;
}
filterProducts();
handleCategories();
