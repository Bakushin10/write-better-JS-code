///////////////////////////
//example 1
///////////////////////////
const team = [
  'Joe',
  'Dyan',
  'Bea',
  'Theo'
]

function alphabetizeTeam(team){
  return [...team].sort()
}
//console.log(alphabetizeTeam(team))

///////////////////////////
//example 2
///////////////////////////

const game1 ={
  player : 'Jim Jones',
  hits : 2,
  runs : 1,
  errors : 0
}

const games2 ={
  player : 'Jim Jones',
  hits : 3,
  runs : 0,
  errors : 1
}

const total = {}
const stats = Object.keys(game1);
for(let i = 0; i < stats.length; i++){
  const stat = stats[i];
  if(stat !== 'player'){
    total[stat] = game1[stat] + games2[stat];
  }
}

//console.log(total)


///////////////////////////
//example 3, page 22
///////////////////////////


const dogPair =[
  ['dog','Don'],
  ['color','black']
]

function getName(dog){
  return dog.find(attribute => {
    return attribute[0] === 'name'
  })[1]
}

///////////////////////////
//example 4, page 23
///////////////////////////

const sections = ['shipping','shipping','shipping' ]

// function displayShipping(sections){
//   if(sections.indexOf('shipping')){
//     return true;
//   }else{
//     return false;
//   }
// }

function displayShipping(sections){
  const a = sections.map(x => {
    if(x.indexOf('shipping') > -1){
      return true
    }else {
      return false
    }
  })
  return a
}

console.log(displayShipping(sections))
