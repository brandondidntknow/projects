const players = [{
  name: "Brandon",
  score: 95
},
{
  name: "Sarah",
  score: 85
},
{
  name: "John",
  score: 75
}];
const topNames = players.filter(player => player.score >= 80).map(player => player.name);
console.log(topNames)
