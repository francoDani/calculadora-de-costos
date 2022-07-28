batchCost.onchange = function(){
    printError(batchCost);
}
batchUnits.onchange =function(){
    printError(batchUnits);
}
batchGain.onchange =function(){
    printError(batchGain);
}
calculate.onclick = function () {
  calculateWithTax();
};