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
