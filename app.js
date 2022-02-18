
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];


// This function is to ignore any of the three letter from the array and replace with blank 
function strip(bandName) {
  return bandName.replace(/^(a |the |an )/i, '').trim();
}

// The trim() method removes whitespace from both sides of a string.

// this arrange the string into alphabetic order.
// the strip function is called which is the new element with elemenation of a an the
const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);
// if ? -1 : 1 then its in desending order 
// if ? 1 : -1 then its in ascending order 

//This displays the array in the html element. 
document.querySelector('#bands').innerHTML =
  sortedBands
    .map(band => `<li>${band}</li>`)
    .join('');