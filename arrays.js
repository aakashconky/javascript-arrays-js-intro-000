var chocolateBars = [snickers, hundredgrand, kitkat, skittles];

function addElementToEndOfArray (array, element){
return [element,...array]
}
function destructivelyAddElementToEndOfArray (array, element) {
  array.unshift(element)
return array
}

function addElementToEndOfArray (array, element){
return [...array, element]
}
function destructivelyAddElementToEndOfArray (array, element) {
  array.push(element)
return array
}

function accessElementInArray(array, index) {
  return array[01]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  array.slice()
  return array
}
