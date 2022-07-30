let food = [];
let candy = [];
let drinks = [];
let sinCategoría = [];
class Product {
  constructor(name, category, cost, margin, price) {
    this.name = name;
    this.category = category;
    this.cost = cost;
    this.margin = margin;
    this.price = price;
    this.calculatePrice = function () {
      this.price = cost + (cost * margin) / 100;
    };
  }
}
const orderByCategory = (product) => {
  switch (product.category) {
    case "comestibles":
      food.push(product);
      break;
    case "1":
      food.push(product);
      break;
    case 1:
      food.push(product);
      break;
    case "golosinas":
      candy.push(product);
      break;
    case "2":
      candy.push(product);
      break;
    case "3":
      drinks.push(product);
      break;
    case "bebidas":
      drinks.push(product);
      break;
    case "":
      sinCategoría.push(product);
      break;
    default:
      sinCategoría.push(product);
      break;
  }
};
const printSample = () => {
  fetch("../assets/products.json")
    .then((response) => response.json())
    .then((json) => printProduct(json));
};
const displayproducts = (e) => {
  table.innerHTML = "";
  printSample();
  if (localStorage.length != 0) {
    for (i = 0; i <= localStorage.length; i++) {
      let item = localStorage.getItem(localStorage.key(i));
      item = JSON.parse(item);
      /* Desestructuración */
      const { name, category, cost, margin, price } = item;
      table.innerHTML += `<tr><td>${name}</td><td>${category}</td><td>${cost}</td><td>%${margin}</td><td>${price}</td><td><button onClick="deleteProduct('${name}')">Borrar</button></td></tr>`;
    }
  }
};
const loadItem = (product) => {
  localStorage.setItem(product.name, JSON.stringify(product));
};
const newProduct = () => {
  let name = document.getElementById("product__name").value;
  name = name.toLocaleUpperCase();
  let category = document.getElementById("product__category").value;
  let cost = +document.getElementById("product__cost").value;
  let margin = +document.getElementById("product__gain").value;
  if (noBlankField(name, category, cost, margin)) {
    swal("Listo!", `${name} fue agregado correctamente`, "success");
    let product = new Product(name, category, cost, margin);
    product.calculatePrice();
    orderByCategory(product);
    clearFields();
    loadItem(product);
    hideError();
    displayproducts();
  } else {
    showError();
    swal("Error!", "Debes completar todos los campos", "error");
  }
};
newProductSection.addEventListener("keyup", ({ key }) => {
  if (key === "Enter") {
    newProduct();
  }
});
const deleteProduct = (target) => {
  swal({
    title: "Estas seguro?",
    text: `Estas por eliminar de manera definitiva ${target}`,
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      swal(`${target} fue eliminado correctamente`, {
        icon: "success",
      });
      localStorage.removeItem(target);
      displayproducts("clear");
    }
  });
};
displayproducts();
newProductButton.onclick = function () {
  newProduct();
};
