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
players.sort((a,b) => b-a);
console.log(players);
