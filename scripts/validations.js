
const noBlankFields = () => {
    let total = +(batchCost.value);
    let units = +(batchUnits.value);
    let gain = +(batchGain.value);
    if(total && units && gain) {
        return true;
    }else return false;
}
const printErrorMsg = (v) => {
    (v) ? errorMsg.innerHTML = "" : errorMsg.innerHTML = 'Debe completar todos los campos';
}
const printError = (field) => {
    (field.value == "") ? field.classList.add('error') : field.classList.remove('error');
}

batchCost.onchange = function(){
    printError(batchCost);
}
batchUnits.onchange =function(){
    printError(batchUnits);
}
batchGain.onchange =function(){
    printError(batchGain);
}