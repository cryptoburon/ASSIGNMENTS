// ASSIGNMENTS!!

// Adds a string to the name you input.
function favoriteAnimal(animal) {
    console.log(animal + " are my favorite animal!")
  }
 
  favoriteAnimal('Sharks')



// Adds a number + 7
  function add7(number) {
    console.log(number + 7)
  }

  add7(7)


// Multiplies two separate numbers times 2
  function multiply(originals, options) { 
    //console.log(originals * 2, options * 2)
    console.log((originals) *2, (options) *2)
  }

  multiply(4, 5)




  function add(a, b) {
    return a + b;
}

function average(a, b) {
    return add(a, b) / 2;
}

let x = average(10, 20);
console.log(x)



// Capitalize first letter of a string.
function capitalize(string) {   
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase(),
  console.log(string.charAt(0).toUpperCase() + string.slice(1).toLowerCase());
}  


capitalize('AmAzIng, TeSt')



const str = 'abcde';
// get last character of a string using charAt()
const last = str.charAt(str.length - 1);
console.log(last); // e

// Get last character of a string using slice()
const lst = str.slice(-1);
console.log(lst); // 'e'

const lst2 = str.slice(-2);
console.log(lst2); // 'de'


// Takes the last letter from a string.
function lastLetter(word) {
  return word.slice(-1),
  console.log(word.slice(-1))
}

lastLetter('Ferdinan')