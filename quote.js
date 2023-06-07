let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
  {
    quote: '"The Way Get Started Is To Quit Talking And Begin Doing."',
    person: "Walt Disney",
  },
  {
    quote:
      '""',
    person: "",
  },

  {
    quote: '"Don’t Let Yesterday Take Up Too Much Of Today."',
    person: "Will Rogers",
  },

  {
    quote:
      '"You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character."',
    person: "Unknown",
  },
  {
    quote: '"It’s Not Whether You Get Knocked Down, It’s Whether You Get Up."',
    person: "Vince Lombardi",
  },
  {
    quote:
      '"Live as if you were to die tomorrow. Learn as if you were to live forever"',
    person: "Mahatma Gandhi",
  },
  {
    quote:
      '"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that."',
    person: "Martin Luther King Jr",
  },

  {
    quote: '"Strive not to be a success, but rather to be of value."',
    person: "Albert Einstein",
  },
  {
    qoute: '"I attribute my success to this: I never gave or took any excuse."',
    person: "Florence Nightingale",
  },
  {
    quote:
      '"I missed more than 9000 shots in my career. I lost almost 300 games. 26 times I been trusted to take the game winning shot and missed. I failed over and over and over again in my life. And that is why I succeed."',
    person: "Michael Jordan",
  },
  {
    quote: '"Every strike brings me closer to the next home run."',
    person: "Babe Ruth",
  },
  {
    quote:
      '"Life is what happens to you while you’re busy making other plans."',
    person: "John Lennon",
  },
  { quote: '"We become what we think about."', person: "Earl Nightingale" },
  {
    quote:
      '"Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover."',
    person: "Mark Twain",
  },
  {
    quote: '"Life is 10% what happens to me and 90% of how I react to it."',
    person: "Charles Swindoll",
  },
  {
    quote: '"The mind is everything. What you think you become."',
    person: "Buddah",
  },
  {
    quote:
      '"The best time to plant a tree was 20 years ago. The second best time is now."',
    person: "Chinese Proverb",
  },
  {
    quote: '"Eighty percent of success is showing up."',
    person: "Woody Allen",
  },
  {
    quote:
      '"Your time is limited, so don’t waste it living someone else’s life."',
    person: "Steve Jobs",
  },
  {
    quote: '"Winning isn’t everything but wanting to win is."',
    person: "Vince Lombardi",
  },
  {
    quote:
      '"I am not a product of my circumstances. I am a product of my decisions. "',
    person: "Stephen Covey",
  },
  {
    quote:
      '"You can never cross the ocean until you have the courage to lose sight of the shore."',
    person: "Christopher Columbus",
  },
  {
    quote:
      '"I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. "',
    person: "Maya Angelou",
  },
  {
    quote: '"Either you run the day, or the day runs you."',
    person: "Jim Rohn",
  },
  {
    quote: '"Whether you think you can or you think you can’t, you’re right."',
    person: "Henry Ford",
  },
  { quote: '"The best revenge is massive success."', person: "Frank Sinatra" },
  {
    quote:
      '"People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily."',
    person: "Zig Ziglar",
  },
  {
    quote:
      '"There is only one way to avoid criticism do nothing, say nothing, and be nothing"',
    person: "Aristotle",
  },
  {
    quote:
      '"Ask and it will be given to you; search, and you will find; knock and the door will be opened for you."',
    person: "Jesus",
  },
  {
    quote:
      '"The only person you are destined to become is the person you decide to be."',
    person: "Ralph Waldo Emerson",
  },
  {
    quote:
      '"Go confidently in the direction of your dreams.  Live the life you have imagined."',
    person: "Henry David Thoreau",
  },
  {
    quote:
      '"When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me."',
    person: "Erma Bombeck",
  },
  {
    quote:
      '"Few things can help an individual more than to place responsibility on him, and to let him know that you trust him."',
    person: "Booker T. Washington",
  },
];

btn.addEventListener("click", function () {
  let index = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[index].quote;
  person.innerText = quotes[index].person;
});
