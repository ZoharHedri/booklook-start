//PARTNER EXERCISE 1
/*
Add the function into your "script.js" file, then with your partner,
add the event listener and handler needed to invoke it when the search button is clicked
(just ignore the input for now)!
*/

/*var fetch = function () {
    $.ajax({
      method: "GET",
                                              //q=isbn:0439023521 -give the hunger game book
      url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:9654487659',
      success: function(data) {
        //debugger;
        console.log(data);//good
        renderPage(data);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log(textStatus);
      }
    }); 
  };

//put the invoke after the implementation of 'fetch' function!
$('button').click(fetch); //or  $('button').on('click',fetch); 
 
var $book = $('.book');

var renderPage = function(data){
  var titleBook = data.items[0].volumeInfo.title;     //title
  var describeBook = data.items[0].volumeInfo.description;//description
  var authorBook = data.items[0].volumeInfo.authors;//authors
  var imageBook = data.items[0].volumeInfo.imageLinks.thumbnail;//image
  //console.log(titleBook + '--' + authorBook + '--' + describeBook + '--' + imageBook);//good
  
  var titleOfBook = '<h1>' + titleBook + '</h1>'; //<h1>
  var describeOfBook = '<p class="describe">' + describeBook + '</p>';
  var authorOfBook = '<h3>' + "Written by: " + authorBook + '</h3>';
  var imageOfBook = '<img src=' + imageBook + 'alt="hunger-game">' ;
  var hunBook = '<div class="hunger-container">' + titleOfBook + describeOfBook + authorOfBook 
   + imageOfBook + '</div>';
  
  //console.log(hunBook);//good
  //alert(hunBook);//awesome

  //$book.append(titleOfBook);
  $book.append(hunBook);
};
*/

//PARTNER EXERCISE 2
/*
Access the properties of the data using the techniques you learned in "Intro to JSON".
In particular find the book title.
How would you write a javascript statement to access it?
Answer: 

## data.items[0].volumeInfo.title ##

Now do a similar thing to find the 'author', 'description' and 'image'.
*/
//data.items[0].volumeInfo.authors;//author
//data.items[0].volumeInfo.description;//description
//data.items[0].volumeInfo.imageLinks;//image


//need to put in the "index.html" in the end of the body this script:
//<script src="partner_ex1_ex2.js"></script>
