var chocolateBars = ['snickers', 'hundredgrand', 'kitkat', 'skittles'];

function addElementToEndOfArray (array, element){
return [...array, element]
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

}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
  }

function destructivelyRemoveElementFromBeginningOfArray(array){
 array.pop()
 return array
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}
