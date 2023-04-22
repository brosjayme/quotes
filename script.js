const quoteText =document.querySelector('.quote'),
quotBtn = document.querySelector('button');


function randomQuote() {
    // this fetches random quotes/data from the API and parsing it into javaScript object
fetch('https://api.quotable.io/random').then(res => res.json()).then( result => {
console.log(result)
quoteText.innerText = result.content;
})
}

quotBtn.addEventListener('click', randomQuote);
