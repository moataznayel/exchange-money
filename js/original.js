let mySelectFrom = document.querySelector(".select-from");
let mySelectTo = document.querySelector(".select-to");
let myInput = document.querySelector(".form-control");
let myBtn = document.querySelector(".btn");
let myChange = document.querySelector(".change");
let exchange = document.querySelector("i");
myInput.value = 1;

fetch(`https://v6.exchangerate-api.com/v6/e81264b84019ea57a88fed63/latest/usd`)
  .then((r) => r.json())
  .then((data) => {
    console.log(data.conversion_rates.EGP);
    for (let ele in data.conversion_rates) {
      let myOption = `<option>${ele}</option>`;
      mySelectFrom.innerHTML += myOption;
      mySelectTo.innerHTML += myOption;
    }
    mySelectTo.value = "EGP";
    myChange.innerHTML = `1 USD = ${data.conversion_rates.EGP.toFixed(2)} ${
      mySelectTo.value
    }`;
  });

myBtn.addEventListener("click", () => {
  fetch(
    ` https://v6.exchangerate-api.com/v6/e81264b84019ea57a88fed63/latest/${mySelectFrom.value}`
  )
    .then((res) => res.json())
    .then((data) => {
      myChange.innerHTML = `${parseInt(myInput.value)} ${
        mySelectFrom.value
      } = ${(
        data.conversion_rates[mySelectTo.value] * parseInt(myInput.value)
      ).toFixed(2)} ${mySelectTo.value}`;
    });
});

exchange.addEventListener("click", () => {
  let to = mySelectTo.value;
  let from = mySelectFrom.value;
  mySelectFrom.value = to;
  mySelectTo.value = from;
  fetch(
    ` https://v6.exchangerate-api.com/v6/e81264b84019ea57a88fed63/latest/${mySelectFrom.value}`
  )
    .then((res) => res.json())
    .then((data) => {
      myChange.innerHTML = `${parseInt(myInput.value)} ${
        mySelectFrom.value
      } = ${(
        data.conversion_rates[mySelectTo.value] * parseInt(myInput.value)
      ).toFixed(2)} ${mySelectTo.value}`;
    });
});
