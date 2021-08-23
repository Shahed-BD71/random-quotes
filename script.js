const quotes = document.getElementById("quote");
const authors = document.getElementById("author");
const quoteBtn = document.getElementById('quoteBtn');

quoteBtn.addEventListener('click', () => generateQuote());

generateQuote();

// // /.then way
// function generateQuote() {
//   url = `https://api.quotable.io/random?minLength=100&maxLength=140`
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   };
//   fetch(url, config)
//     .then((res) => res.json())
//     .then((data) => (quotes.innerHTML = data.content));
// }


// async await way.......//////

async function generateQuote() {
  try {
    const url = `https://api.quotable.io/random?minLength=100&maxLength=140`
    const config = {
      headers: {
        Accept: 'application/json',
      },
    };
    const res = await fetch(url, config);
    const data = await res.json();
    quotes.innerHTML = data.content;
    authors.innerHTML = data.author;
  } catch (err) {
    quotes.innerHTML = `<p><strong>${err.name}</strong></p><p>${err.message}</p>`;
  }
}