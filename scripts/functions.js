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
    showResultWindow();
    clearFieldsValues()
  } else printErrorMsg(false);
};
calculate.onclick = function () {
  calculateWithTax();
};

const close = () => {
  hideResultWindow()
}