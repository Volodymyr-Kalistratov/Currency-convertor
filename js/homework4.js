let form = document.querySelector('.form');
let cost = document.querySelector('.js-cost');
let rate = document.querySelector('.js-rate');
let submit = document.querySelector('.js-submit');
let resultSpan = document.querySelector('.js-span');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  let value = cost.value;
  let amount = rate.value;

  let result = value * amount;

  resultSpan.innerText = result.toFixed(2);
});
