const calculateWithTax = () => {
  let total = +batchCost.value;
  let units = +batchUnits.value;
  let gain = +batchGain.value;
  let finalCost;
  let sellingPrice;
  let pyPrice;
  if (noBlankFields()) {
    printErrorMsg(true);
    finalCost = total / units;
    sellingPrice = finalCost * `1.${gain}`;
    pyPrice = sellingPrice * 1.2;
    resultsWindow.innerHTML = `<h1>COSTO FINAL</h1><p>$${finalCost}</p><h1>PRECIO DE VENTA</h1><p>$${sellingPrice}</p><h1>PRECIO PEDIDOS YA</h1><p>$${pyPrice}</p>`;
    showResultWindow();
  } else printErrorMsg(false);
};
calculate.onclick = function () {
  calculateWithTax();
};
