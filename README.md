# autocomplete

## What?
Create an autocomplete search bar

## Why?
To practice node and writing back-end things.

## How?
###Front-end
- Create webpage with input field to submit
- XHR on keypress
- Update <div> with retrieved search suggestions

###Back-end
- Import word list as variable (API? txt file?) (pair A)
- Create end point for requests (a server)      (pair B)
- Send response of search suggestions back to front-end

###Testing
- Unit testing as we go

###Stretch Goals
- Modularise files
- Set up Continuous integration with Travis, and code coverage using Codecov and istanbul.
- Look at categorising words ie. trousers in Menswear

###Folder Structure
public {
  index.html
  style.css
  index.js
  test{
    test.html
    spec.js
  }
}
src{
  server.js
  dictionary.txt
  wordlist.js
  handler.js
  test{
    test.js
  }
}