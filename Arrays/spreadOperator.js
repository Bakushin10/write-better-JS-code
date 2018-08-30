function removeItem(items, removable){
  const updated = []
  for(let i = 0; i < items.length; i++){
    if(items[i] !== removable){
      updated.push(items[i])
    }
  }
  return updated;
}

function removaItem2(items, removable){
  const index = items.indexOf(removable)
  items.splice(index, 1)
  return items;
}

function removeItem3(items, removable){
  const index = items.indexOf(removable)
  return [...items.slice(0, index), ...items.slice(index + 1)]
}

const items = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const removable = "Lemon"

console.log(removeItem3(items, removable))
