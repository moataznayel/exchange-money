let mySelect1 = document.querySelector(".form");
let mySelect = document.querySelector(".select");
let myInput = document.querySelector(".form-control");
let myBtn = document.querySelector(".btn");
let myChange = document.querySelector(".change");
myInput.value = 1;

fetch("https://v6.exchangerate-api.com/v6/e81264b84019ea57a88fed63/latest/USD")
  .then((r) => r.json())
  .then((data) => {
    for (let ele in data.conversion_rates) {
      let myOption = `<option>${ele}</option>`;
      mySelect1.innerHTML += myOption;
      mySelect.innerHTML += myOption;
    }
    mySelect.value = "EGP";
    fetch(
      ` https://v6.exchangerate-api.com/v6/e81264b84019ea57a88fed63/latest/${mySelect1.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        mySelect1.addEventListener("change", () => mySelect1.value);
        mySelect.addEventListener("change", () => mySelect.value);
        let result =
          myInput.value *
          data.conversion_rates[mySelect1.value] *
          data.conversion_rates[mySelect.value];
        myChange.innerHTML = `${myInput.value} ${
          mySelect1.value
        } = ${result.toFixed(2)} ${mySelect.value}`;
        myBtn.addEventListener("click", () => {
          let result =
            myInput.value *
            data.conversion_rates[mySelect1.value] *
            data.conversion_rates[mySelect.value];
          myChange.innerHTML = `${myInput.value} ${
            mySelect1.value
          } = ${result.toFixed(2)} ${mySelect.value}`;
        });
      });
  });
