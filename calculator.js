// Function that display value
function dis(val) {
  document.getElementById("result").value += val;
}

// Function that evaluates the digit and return result
// Made use of the mathjs package
function solve() {
  let question = document.getElementById("result").value;
  let answer = eval(question);
  document.getElementById("result").value = answer;
  return answer;
}

// Function that clear the display
function clr() {
  document.getElementById("result").value = "";
}
