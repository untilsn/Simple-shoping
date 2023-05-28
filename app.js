const productList = document.querySelector(".product .container .list");
const modalBtn = document.querySelector(".header .icon");
const overlay = document.querySelector(".overlay");
const closeModal = document.querySelector(".close");
const product = document.querySelector(".product .list");
const modal = document.querySelector(".modal");
const modalList = document.querySelector(".modal .box-list");

let cartStore = [];

function handleProduct() {
  PRODUCTS.forEach((item, index) => {
    const template = `<li class="item">
        <div class="img">
          <img src="${item.img}" alt="" />
        </div>
        <div class="info">
          <h1 class="name">${item.name}</h1>
          <p class="price">${item.price}$</p>
        </div>
        <div class="btn">
        <button onClick="handleAdd(${index})" class="add">Add to cart</button>

        </div>
      </li>`;
    productList.insertAdjacentHTML("beforeend", template);
  });
}
handleProduct();

function handleAdd(productIndex) {
  const productItem = PRODUCTS[productIndex];
  const existProduct = cartStore.find((item) => item.id === productItem.id);
  if (existProduct) {
    existProduct.quantity += 1;
  } else {
    productItem.quantity = 1;
    cartStore.push(productItem);
  }

  renderProduct();
}

function renderProduct() {
  modalList.innerHTML = "";
  cartStore.forEach((item) => {
    const content = `<li class="box-item">
        <div class="modal-cart">
          <div class="img">
            <img src="${item.img}" alt="" />
          </div>
          <div class="name">${item.name}</div>
          <div class="price">${item.price}$</div>
          <div class="quantity">
            <div class="icon">
              <i class="fa-solid fa-plus"></i>
            </div>
            <span>${item.quantity}</span>
            <div class="icon">
              <i class="fa-solid fa-minus"></i>
            </div>
          </div>
        </div>
      </li>`;
    modalList.insertAdjacentHTML("beforeend", content);
  });
}

// ===================================//
modalBtn.addEventListener("click", () => {
  modal.classList.add("active");
});

document.addEventListener("click", (e) => {
  if (e.target.matches(".overlay") || e.target.matches(".close")) {
    modal.classList.remove("active");
  }
});
