var btn = document.getElementById("quote-btn");
var qoute = document.getElementById("qoute");
var autherr = document.getElementById("autherr");

var quotes = [
    {
        dayQoute :"“Be yourself; everyone else is already taken.”" , 
        auther : "― Oscar Wilde"
    },
    {
        dayQoute :"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        auther : "― Albert Einstein"
    },
    {
        dayQoute :"“So many books, so little time.”" , 
        auther :"― Frank Zappa"
    },
    {
        dayQoute :"“A room without books is like a body without a soul.”" , 
        auther :"― Marcus Tullius Cicero"
    },
    {
        dayQoute :"“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”" , 
        auther :"― Dr. Seuss"
    },
    {
        dayQoute :"“Be the change that you wish to see in the world.”" , 
        auther :"― Mahatma Gandhi"
    },
    {
        dayQoute :"“If you tell the truth, you don't have to remember anything.”" , 
        auther :"― Mark Twain"  
    },
    {
        dayQoute :"“A friend is someone who knows all about you and still loves you.”" , 
        auther :"― Elbert Hubbard"  
    },
    {
        dayQoute :"“To live is the rarest thing in the world. Most people exist, that is all.”" , 
        auther :"― Oscar Wilde" 
    },
    {
        dayQoute :"“Always forgive your enemies; nothing annoys them so much.”" , 
        auther :"― Oscar Wilde" 
    },
]


function generateQuote() {
        var random = Math.floor(Math.random() *quotes.length);
        qoute.innerHTML = quotes[random].dayQoute;
        autherr.innerHTML = quotes[random].auther;
}
btn.onclick = function() {
    generateQuote()
    
}