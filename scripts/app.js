/**
 * Clase de producto a ingresar
 */
class Product {
  constructor(name, price, quantity, date) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.date = date;
  }
}
/**
 * Ua
 */
class UI {
  addProduct(products) {
    const productList = document.getElementById("product-list");
    const element = document.createElement("div");
    element.innerHTML = `
      <div class = "card text-center mb-4">
        <div class = "card-body">
          <strong>Product: </strong>${products.name}
          <strong>Product quantity: </strong>${products.quantity}
          <strong>Product price: </strong>${products.price}
          <strong>Product date: </strong>${products.date}
           <a href="#" class="btn btn-danger" name="delete">Delete</a>
        </div>
      </div>
    `;

    productList.appendChild(element);
  }
  resetForm() {
    document.getElementById("product-form").reset();
    document.getElementById("year").valueAsDate = new Date();
  }
  deleteProduct(element) {
    if (element.name === "delete") {
      element.parentElement.parentElement.parentElement.remove();
      this.showMessage(
        "☺Se ha eliminado el producto de manera corracta☺",
        "info"
      );
    }
  }
  showMessage(message, cssClass) {
    const div = document.createElement("div");
    div.className = `alert alert-${cssClass} mt-2`;
    div.appendChild(document.createTextNode(message));
    //Showing in DOM
    const container = document.querySelector(".container");
    const app = document.querySelector("#app");
    container.insertBefore(div, app);
    setTimeout(function () {
      document.querySelector(".alert").remove();
    }, 3000);
  }
}

/**
 * Manipulación de DOM
 */

const form = document.getElementById("product-form");
form.onsubmit = agregarProductos;

function agregarProductos(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const quantity = document.getElementById("quantity").value;
  const year = document.getElementById("year").value;

  const products = new Product(name, price, quantity, year);
  const ui = new UI();
  ui.addProduct(products);
  ui.resetForm(products);

  console.log(products);
}

document.getElementById("product-list").addEventListener("click", function (e) {
  const ui = new UI();
  ui.deleteProduct(e.target);
});
