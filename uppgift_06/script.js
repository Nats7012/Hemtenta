function isNumber(x) {
    x = Number(x);
    return typeof x === "number" && !isNaN(x);
  }

  function myFunction(val) {
    alert("The input value has changed. The new value is: " + val);
  }

  function checkInput() {
    let input = document.getElementById("input").value;
    let result = isNumber(input);
    let output = document.getElementById("result");
    if (result) {
      output.innerHTML = input * input;
    } else {
      output.innerHTML = "Värdet är inte ett nummer";
    }
  }

  function typeOfNaN(x) {
    if (Number.isNaN(x)) {
      return 'Number NaN';
    }
    if (isNaN(x)) {
      return 'NaN';
    }
  }

  console.log(typeOfNaN('100F'));

  console.log(typeOfNaN(NaN));