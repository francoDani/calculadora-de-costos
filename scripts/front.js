const showResultWindow = () => {
  resultsWindow.style.visibility = "visible";
  resultsWindow.style.width = "90%";
  resultsWindow.style.height = "20rem";
};
const clearFieldsValues = () => {
  batchCost.value = "";
  batchUnits.value = "";
  batchGain.value = "";
};
const hideResultWindow = () => {
  resultsWindow.style.visibility = "hidden";
};
