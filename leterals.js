function yell(name){
  return `Hi, ${name.toUpperCase()}`
}

function leapYearConverter(age){
  return `You'd be ${Math.floor(age / 4)} if born on a leap year`
}

function generateLink(image, width){
  return `http://${getProvider()}/${image}?width=${parseInt(width, 10)}`
}

console.log(leapYearConverter("8"))
