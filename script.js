const header = document.querySelector('h1');
const text = document.querySelector('p');

let count = 0;

const debounce = (func, delay) => {
  let timeout;

  return function executedFunction(...args) {
    const later = () => {
      timeout = null;
      func(...args);
    }
    clearTimeout(timeout);

    timeout = setTimeout(later, delay)
  }
}

const increment = debounce( function() {
  count++;
  text.innerHTML = count;
}, 500)

header.addEventListener('click', increment)