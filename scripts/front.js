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
