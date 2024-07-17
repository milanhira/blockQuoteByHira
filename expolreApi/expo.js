
const displayApiRandomQuote = ()=>{
    const url = fetch('https://api.kanye.rest/')
    .then(url => url.json())
    .then(data => displayQuit(data))
}

const displayQuit = (data)=>{
    document.getElementById('loadQuote').innerText = data.quote;
}
document.getElementById('loadQuote').innerText = 'I am the best!';