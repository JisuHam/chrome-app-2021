const quotes = 
[{
    quote : "I am a Woman Phenomenally.\nPhenomenal Woman, that's me.",
    author : "Maya Angelou",
},
{
    quote : "Remember you’re the one who can fill the world with sunshine.",
    author : "[Snow White]",
},
{ 
    quote : "The choice is always yours.\nWhatever society may claim, it can't control you.",
    author : "[Enola Holms]",
},
{
    quote : "I'm tough, ambitious, and I know exactly what I want.\nIf that makes me a bitch, okay.",
    author : "Madonna",
},
{
    quote : "Feminism isn't about making women stronger.\nWomen are already strong, it's about changing the way the world perceives that strength.",
    author : "G.D. Anderson",
},
{
    quote : "There is no limit to what we, as women, can accomplish.",
    author : "Michelle Obama",
},
{
    quote : "I am a woman with thoughts and questions and shit to say.\nI say if I'm beautiful. I say if I'm strong.\nYou will not determine my story—I will.",
    author : "Amy Schumer",
},
{
    quote : "I am who I am and I have the need to be",
    author : "[Little Prince], Antoine de Saint-Exupery",
},
{
    quote : "I am too intelligent, too demanding, and too resourceful for anyone to be able to take charge of me entirely.\nNo one knows me or loves me completely. I have only myself",
    author : "Simone de Beauvoir",
},
{
    quote : "Never bend your head.\nAlways hold it high.\nLook the world straight in the face.",
    author : "Helen Keller",
}, 
{
    quote : "It is never too late to be what you might have been.",
    author : "George Eliot",
},
{
    quote : "Most of the shadows of this life are caused by standing in one's own sunshine.",
    author : "Ralph Waldo Emerson",
},
{
    quote : "No one can make you feel inferior without your consent.",
    author : "Eleanor Roosevelt",
}
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `\nby. ${todaysQuote.author}`;