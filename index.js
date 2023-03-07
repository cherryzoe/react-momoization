import './style.css';
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<div class="container"><h1>Memoization</h1><span>Algochurn</span>
<p>Please read the description to start solving the problem.</p></div>`;

const memo = (fn, context) => {
  let cache = {};

  return function (...args) {
    let stringifiedArgs = JSON.stringify(args);
    if (!cache[stringifiedArgs]) {
      cache[stringifiedArgs] = fn.call(context || this, ...args);
    }
    console.log(stringifiedArgs, cache[stringifiedArgs]);
    return cache[stringifiedArgs];
  };
};

const product = (num1, num2) => {
  // Expensive function.
  for (let i = 0; i < 400000; i++);
  return num1 * num2;
};

const memoProduct = memo(product);

const first = performance.now();
console.log(`Result: `, memoProduct(123893, 1299123));
console.log('Time: ', performance.now() - first);

const second = performance.now();
console.log(`Result:`, memoProduct(123893, 1299123));
console.log('Time: ', performance.now() - second);
