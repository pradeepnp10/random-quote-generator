let btn = document.getElementById('btn');
let container1 = document.getElementById('container1');

let rquotes= [
    '"I have always believed that each man makes his own happiness and is responsible for his own problems. It is a simple philosophy."',
    '"No one would have crossed the ocean if he could have gotten off the ship in the storm."',
    '"Appreciate those early influences and what they have  done for you."',
    '"Life is a mirror and will reflect back to the thinker what he thinks into it."'
];

btn.addEventListener('click',function (){
    var RandomQuotes = rquotes[Math.floor(Math.random() *rquotes.length)]
    container1.innerHTML= RandomQuotes;
    











})



