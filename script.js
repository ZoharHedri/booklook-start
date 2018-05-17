

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
var checkNumOfBooks = 0;

var fetch = function (isbn) {
  $.ajax({
    method: "GET",
    url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn,//isbn->0439023521 
    success: function(data) {
      //debugger;
      console.log(data);//good
      checkNumOfBooks = 0;
      $book.empty();
      checkData(data);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(textStatus);
    }
  }); 
};

//put the invoke after the implementation of 'fetch' function!
$('button').on('click',function(){
  fetch($('#isbn').val());//send the ISBN of the book
}); 


var checkData = function(data){
  //console.log(data.items.length);//good
  if(data.totalItems == 0){
    alert("There is no book with this ISBN.\nEnter another ISBN")
    $('#isbn').val("");
    //key  = '';
  }
  else{

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
  
  }//else
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
    
  checkNumOfBooks++;
  console.log(checkNumOfBooks);//give my 10 books
  
}