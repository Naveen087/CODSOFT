const display = document.getElementById("dis");

function evaluate1() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
function addToDisplay(input) {
  display.value += input;
}
function clearDis() {
  display.value = "";
}
function delete1() {
  display.value = display.value.toString().slice(0, -1);
}
function percentage1() {
  return eval((100 * display.value) / display.value);
}
