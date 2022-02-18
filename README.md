# JS--Bands-Sort

This project is the seventeen JS-30 challenge where I learned about ```The use of Regex```, ```replace```, ```how to put them in HTML```  and ```sort```.


## Demo

[Click Here](https://skyz03.github.io/JS--CSS-Variables/)

## Features

- [The power of Regex and its meaning.](https://regex101.com/r/nVFnxR/1)
- The use of function to replace A, An, The with blank space.
- The power of arranging things in ascending & descending order.

## Lessons Learned

As this is one of the seventeen JS challenge, here I understood about the use of regex and the use of replace, map and innerHTML.

```MAKING THE REGEX AS PER OUR NEED => REPLACING THE REGEX WITH BLANK THINGS => SORTING THEM AND PRESENTING THEM IN INNER HTML```.

```
HTML 
  <ul id="bands"></ul>


JS

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
```

HERE, the regex is very useful the use of ```regex101``` is an awesome site to understand them.

## Optimizations

Can find better ways to target all the different types of the article.

## Screenshots



## Tech Stack

**Client:** HTML, CSS/SCSS & JS

## Documentation

Learned about the trim function which removes the white space then about regex to eleminate the articles with space and then arranging them in ascending order.

# Notes 
