const  quotes = 
[
"The best way to get started is to quit talking and begin doing. — Walt Disney",
"Don’t let yesterday take up too much of today. — Will Rogers",
"It’s not whether you get knocked down, it’s whether you get up. — Vince Lombardi",
"Success is not final, failure is not fatal: it is the courage to continue that counts. — Winston Churchill",
"Believe you can and you’re halfway there. — Theodore Roosevelt",
"Your time is limited, so don’t waste it living someone else’s life. — Steve Jobs",
"Dream big and dare to fail.” — Norman Vaughan",
"Act as if what you do makes a difference. It does. — William James",
"The only limit to our realization of tomorrow will be our doubts of today. — Franklin D. Roosevelt",
]

const usedindexes = new Set()
const quoteText = document.getElementById("quote")

function generateQuote(){
    if (usedindexes.size === quotes.length){
        usedindexes.clear()
    }
    while(true){
        const randomIdx = Math.floor(Math.random() * quotes.length)
        if(usedindexes.has(randomIdx)) continue
        usedindexes.add(randomIdx)
        const quote = quotes[randomIdx]
        quoteText.innerHTML = quote
        
        break
    }

}