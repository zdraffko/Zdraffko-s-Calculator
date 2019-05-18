const number = document.getElementsByClassName("number");
const operator = document.getElementsByClassName("operator");
const output = document.getElementById("result");
const history = document.getElementById("history");
const clear = document.getElementById("clear");
const del = document.getElementById("delete");
const result = document.getElementById("=");
let isValid = Boolean(false);

for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function() {
    if (isValid) {
      output.innerText = number[i].innerText;
      history.innerText += number[i].innerText;
      isValid = false;
    } else {
      output.innerText += number[i].innerText;
      history.innerText += number[i].innerText;
    }
  });
}

for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function() {
    if (history.innerText === "") {
      output.innerText = "";
      alert(`Please enter a number first!`);
    } else {
      if (
        history.innerText.substring(history.innerText.length - 1) === "+" ||
        history.innerText.substring(history.innerText.length - 1) === "-" ||
        history.innerText.substring(history.innerText.length - 1) === "/" ||
        history.innerText.substring(history.innerText.length - 1) === "%" ||
        history.innerText.substring(history.innerText.length - 1) === "*"
      ) {
        history.innerText =
          history.innerText.substring(0, history.innerText.length - 1) +
          operator[i].innerText;
        output.innerText = "";
      } else {
        history.innerText += operator[i].innerText;
        output.innerText = "";
      }
    }
  });
}

clear.addEventListener("click", function clear() {
  output.innerText = "";
  history.innerText = "";
});

del.addEventListener("click", function() {
  if (output.innerText === "") {
    history.innerText = history.innerText.substring(
      0,
      history.innerText.length - 1
    );
  } else {
    output.innerText = output.innerText.substring(
      0,
      output.innerText.length - 1
    );
  }
});

result.addEventListener("click", function() {
  output.innerText = eval(history.innerText);
  history.innerText = "";
  isValid = true;
});
