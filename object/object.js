function getBill(item){
  returnd{
    name: item.name,
    due: twoWeeksFromNow(),
    total: calculateTotal(item.price)
  }
}

const bill = getBill({name: 'Room Cleaning', price: 30}) //passing the argument as an object

function displayBill(bill){
  return `Your total ${bill.total} for ${bill.name} is due on ${bill.due}`
}
