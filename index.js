const textBox = document.getElementById("textBox");
const c_f = document.getElementById("c-f");
const c_k = document.getElementById("c-k");
const f_c = document.getElementById("f-c");
const f_k = document.getElementById("f-k");
const k_c = document.getElementById("k-c");
const k_f = document.getElementById("k-f");
const result = document.getElementById("result");
let temp;

function c_to_f() {
  temp = Number(textBox.value);
  temp = (temp * 9) / 5 + 32;
  result.textContent = temp.toFixed(1) + "°F";
}

function c_to_k() {
  temp = Number(textBox.value);
  temp = temp + 273.5;
  result.textContent = temp.toFixed(1) + "°K";
}
function f_to_c() {
  temp = Number(textBox.value);
  temp = (temp - 32) * (5 / 9);
  result.textContent = temp.toFixed(1) + "°F";
}
function f_to_k() {
  temp = Number(textBox.value);
  temp = (temp - 32) * (5 / 9) + 273.15;
  result.textContent = temp.toFixed(1) + "°F";
}
function k_to_c() {
  temp = Number(textBox.value);
  temp = temp - 273.15;
  result.textContent = temp.toFixed(1) + "°F";
}
function k_to_f() {
  temp = Number(textBox.value);
  temp = (temp - 273.15) * (9 / 5) + 32;
  result.textContent = temp.toFixed(1) + "°F";
}
