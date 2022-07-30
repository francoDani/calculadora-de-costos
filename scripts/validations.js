const noBlankFields = () => {
  let total = +batchCost.value;
  let units = +batchUnits.value;
  let gain = +batchGain.value;
  if (total && units && gain) {
    return true;
  } else return false;
};
const noBlankFieldsWt = () => {
  let total = +batchCostWt.value;
  let units = +batchUnitsWt.value;
  let gain = +batchGainWt.value;
  if (total && units && gain && taxes) {
    return true;
  } else return false;
};
const printErrorMsg = (v) => {
  v
    ? (errorMsg.innerHTML = "")
    : (errorMsg.innerHTML = "Debe completar todos los campos");
};
const printError = (field) => {
  field.value == ""
    ? field.classList.add("error")
    : field.classList.remove("error");
};
const noBlankField = (name, category, cost, margin) => {
  if (
    name != " " &&
    name != "" &&
    category != "" &&
    cost != "" &&
    margin != ""
  ) {
    return true;
  } else {
    return false;
  }
};
