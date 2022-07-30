const showResultWindow = () => {
  resultsWindow.style.visibility = "visible";
  resultsWindow.style.width = "90%";
  resultsWindow.style.height = "20rem";
};
const showResultWindowWt = () => {
  resultsWindowWt.style.visibility = "visible";
  resultsWindowWt.style.width = "90%";
  resultsWindowWt.style.height = "20rem";
};
const clearFieldsValues = () => {
  batchCost.value = "";
  batchUnits.value = "";
  batchGain.value = "";
  batchCostWt.value = "";
  batchUnitsWt.value = "";
  batchGainWt.value = "";
};
const clearFieldsValuesWt = () => {
  batchCostWt.value = "";
  batchUnitsWt.value = "";
  batchGainWt.value = "";
};
const hideResultWindow = () => {
  resultsWindow.style.visibility = "hidden";
  resultsWindowWt.style.visibility = "hidden";
};
const hideResultWindowWt = () => {
  resultsWindowWt.style.visibility = "hidden";
};
const printProduct = (object) => {
  for (let i = 0; i < object.length; i++) {
    const { name, category, cost, margin } = object[i];
    let price = cost + (cost * margin) / 100;
    table.innerHTML += `<tr><td>${name}</td><td>${category}</td><td>${cost}</td><td>%${margin}</td><td>${price}</td><td>sample</td></tr>`;
  }
};
const clearFields = () => {
  document.getElementById("product__name").value = "";
  document.getElementById("product__name").classList.remove("error");
  document.getElementById("product__category").value = "";
  document.getElementById("product__category").classList.remove("error");
  document.getElementById("product__cost").value = "";
  document.getElementById("product__cost").classList.remove("error");
  document.getElementById("product__gain").value = "";
  document.getElementById("product__gain").classList.remove("error");
};
const showError = () => {
  document.querySelector(".error__msg").classList.add("show");
};
const hideError = () => {
  document.querySelector(".error__msg").classList.remove("show");
};