const roundPrice = (price) => {
  if(price%10 < 2.99){
    return price - (price%10);
  }else{
    return (price - (price%10)) + 10;
  }
}

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
    finalCost = finalCost.toFixed(2);
    sellingPrice = finalCost * `1.${gain}`;
    sellingPrice = roundPrice(sellingPrice);
    pyPrice = sellingPrice * 1.2;
    finalCostResult.innerHTML = finalCost;
    sellingPriceResult.innerHTML = sellingPrice;
    pyPriceResult.innerHTML = pyPrice;
    copyToClipboard(finalCost, sellingPrice, pyPrice);
    showResultWindow();
    clearFieldsValues()
  } else printErrorMsg(false);
};
const close = () => {
  hideResultWindow()
}

const calculatePriceWt = (tax) => {
  tax = +tax;
  let batchCostWtValue = +(batchCostWt.value);
  let batchUnitsWtValue = +(batchUnitsWt.value);
  let batchGainWtValue = +(batchGainWt.value);
  if (noBlankFieldsWt()) {
    printErrorMsg(true);
    finalCostWt = batchCostWtValue/batchUnitsWtValue*tax;
    finalCostWt.toFixed(2);
    sellingPriceWt = finalCostWt * `1.${batchGainWtValue}`;
    sellingPriceWt = roundPrice(sellingPriceWt);
    pyPriceWt = sellingPriceWt * 1.2;
    pyPriceResultWt.innerHTML = pyPriceWt;
    finalCostResultWt.innerHTML = finalCostWt.toFixed(2);
    sellingPriceResultWt.innerHTML = sellingPriceWt;
    copyToClipboard(finalCostWt.toFixed(2), sellingPriceWt, pyPriceWt);
    showResultWindowWt();
    clearFieldsValuesWt();
  }else printErrorMsg(false)
}

const copyToClipboard = (cost, sell, pya) => {
  let result = `Costo $${cost} | Venta $${sell} | Pya $${pya}`;
  navigator.clipboard.writeText(result)
        .then(() => {
        console.log("Text copied to clipboard...")
    })
        .catch(err => {
        console.log('Something went wrong', err);
    })
}