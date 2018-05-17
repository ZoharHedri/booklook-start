
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




/*INDIVIDUAL EXERCISE 1
At the moment our ajax request is hard-coded so that it always returns :Hunger Games" data.
This is great if you are a fan of only the Hunger Games books.
But let's say you're not? We actually want the user to type an ISBN
and receive the data on that book.
Change your code so that it takes the user's input and makes the AJAX request based onthat input.

TIP: Remember what we learned about the query string above!
*/
//isbn = 0299118649 => Cinderella Book


var $book = $('.book');
var flagCheckNumOfBooks = 0;

var fetch = function () {
  $.ajax({
    method: "GET",
    url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:',//isbn->0439023521
    success: function(data) {
      //debugger;
      console.log(data);//good
      flagCheckNumOfBooks = 0;
      $book.empty();
      checkData(data);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(textStatus);
    }
  }); 
};

//put the invoke after the implementation of 'fetch' function!
$('button').click(fetch); //or /* $('button').on('click',fetch); */


var checkData = function(data){
  //console.log(data.items.length);//good
  
  var size = data.items.length;
  var titleBook, describeBook, authorBook, imageBook;

  for(var i=0; i<size; i++){
    //title
    if(data.items[i].volumeInfo.title == undefined){
      titleBook = "no title";
    }
    else{
      titleBook = data.items[i].volumeInfo.title;
    }
    //description
    if(data.items[i].volumeInfo.description == undefined){
      describeBook = "no description"
    }
    else{
      describeBook = data.items[i].volumeInfo.description;
    }
    //authors
    if(data.items[i].volumeInfo.authors == undefined){
      authorBook = "no author";
    }
    else{
      authorBook = data.items[i].volumeInfo.authors;
    }
    
    //debugger;
    //image
    if(data.items[i].volumeInfo.imageLinks != undefined){
      if(data.items[i].volumeInfo.imageLinks.thumbnail != undefined){
        imageBook = data.items[i].volumeInfo.imageLinks.thumbnail;
      }
      else{
        imageBook = "no image";
      }
    }
    else{
      imageBook = "no image";
    }
    
    console.log(titleBook + '--' + authorBook + '--' + describeBook + '--' + imageBook);//good
    var bookArr = [titleBook, authorBook, describeBook, imageBook];
    renderPage(bookArr);
  }//for loop

  //$book.find('#isbn').hide();

};

var renderPage = function(arrOfBook){
  //console.log(arrOfBook.length);//good -> 4 items
  
  var titleOfBook = '<h1>' + arrOfBook[0] + '</h1>'; //<h1>  class="title"
  var describeOfBook = '<p class="describe">' + arrOfBook[2] + '</p>';
  var authorOfBook = '<h3>' + "Written by: " + arrOfBook[1] + '</h3>'; // class="author"
  var imageOfBook = '<img src=' + arrOfBook[3] + 'alt="image-book">' ;
  var ISBNBook = '<div class="book-container">' + titleOfBook + describeOfBook + authorOfBook 
  + imageOfBook + '</div>';

  //console.log(hunBook);//good
  //alert(hunBook);//awesome

  //$book.append(titleOfBook);
  $book.append(ISBNBook);
    
  flagCheckNumOfBooks++;
  console.log(flagCheckNumOfBooks);//give my 10 books
  
}