const funFact = [
  {
    title: "Most powerful explosion ever detected by satellites",
    fact: "On July 9, 1969, there was a really big explosion on the far side of the Moon. It was so powerful, like 20 million big explosions all at once! But, even today, scientists are not exactly sure why it happened."
  },
  {
    title: "Similarity of banana DNA to human DNA",
    fact: "Did you know that the DNA in bananas is kind of like the DNA in people? It's about 50% similar, which is pretty cool!"
  },
  {
    title: "The world's longest highway",
    fact: "Did you know that in Australia, there's a super-duper long highway called the Stuart Highway? It stretches for about 17,000 kilometers, making it the longest highway in the whole wide world!"
  },
  {
    title: "Time-Delayed Stardust",
    fact: "Imagine this: some stars are so far away that it takes thousands and thousands of years for their light to travel to Earth. So, when we look at those stars, we're actually seeing how they looked a very, very long time ago!"
  }
];

const randomIndex = Math.floor(Math.random() * funFact.length);
const randomFacts = funFact[randomIndex];
const fucFactContainer = document.querySelector("#fun-fact-container");

fucFactContainer.innerHTML = `
<h3>${randomFacts.title}👀</h3>
<h4>${randomFacts.fact}</h4>
`