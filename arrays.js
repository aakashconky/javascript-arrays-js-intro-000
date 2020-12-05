var chocolateBars = [snickers, hundredgrand, kitkat, skittles];

function addElementToEndOfArray (array, element){
return [...array, element]
}
function destructivelyAddElementToEndOfArray (array, element) {
  array.unshift(element)
return array
}
