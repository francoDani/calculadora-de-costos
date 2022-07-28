let taxes;
const calculateTaxes = () => {
  let invoiceTotalValue = +invoiceTotal.value;
  let invoiceSubTotalValue = +invoiceSubTotal.value;
  taxes = `${((invoiceTotalValue * 100) / invoiceSubTotalValue / 100).toFixed(2)}`;    
  invoiceResult.innerHTML = `%${taxes}`;
  invoiceTotal.classList.remove("error");
  invoiceSubTotal.classList.remove("error");
  invoiceResult.classList.remove("warning");
};

invoiceSubTotal.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    if (invoiceTotal.value == "" || invoiceTotal.value <= 0) {
      invoiceTotal.classList.add("error");
      invoiceResult.classList.add("warning");
      invoiceResult.innerHTML = "Debe completar todos los campos";
    } else if (invoiceSubTotal.value == "" || invoiceSubTotal.value <= 0) {
      invoiceSubTotal.classList.add("error");
      invoiceResult.classList.add("warning");
      invoiceResult.innerHTML = "Debe completar todos los campos";
    } else {
      calculateTaxes()      
    }
  }
});
taxButton.onclick = function () {
  if (invoiceTotal.value == "" || invoiceTotal.value <= 0) {
    invoiceTotal.classList.add("error");
    invoiceResult.classList.add("warning");
    invoiceResult.innerHTML = "Debe completar todos los campos";
  } else if (invoiceSubTotal.value == "" || invoiceSubTotal.value <= 0) {
    invoiceSubTotal.classList.add("error");
    invoiceResult.classList.add("warning");
    invoiceResult.innerHTML = "Debe completar todos los campos";
  } else {
    calculateTaxes()      
  }
};
batchGainWt.addEventListener("keypress", function (e) {
  if (e.key ==="Enter"){
    calculatePriceWt(taxes);
  }
});

  calculateWt.onclick = function () {
    calculatePriceWt(taxes);
  };