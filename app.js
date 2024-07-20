function Amountchange(){
  document.getElementById("txtAmount").value = document.getElementById("rangeAmount").value;
}
function Yearchange(){
  document.getElementById("txtYear").value = document.getElementById("rangeYears").value;
}
function Ratechange(){
  document.getElementById("txtRate").value = document.getElementById("rangeRate").value;
}
function calculateclick(){
var P = parseInt(document.getElementById("txtAmount").value);
var r = parseFloat(document.getElementById("txtRate").value)/12/100;
var n = parseInt(document.getElementById("txtYear").value)*12;
var EMI = P * r * Math.pow(1+r,n) / (Math.pow(1+r,n) - 1);  // Corrected the formula
 document.getElementById("result").innerHTML = "Your installment amount every month is <b>" + EMI.toFixed(2) + "</b> for "+ n +" months";
}