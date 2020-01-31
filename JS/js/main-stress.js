let books = [];
$.ajax({
  method: 'GET',
  url: "https://api.myjson.com/bins/zyv02",
  dataType: 'json'
}).done(function (data) {
  console.log(data);
  let books = data.books;
  console.log(books);
  printBooks(books)
});

function printBooks(books) {
  console.log(books)
  let bookDiv = document.getElementById("bookStore");
  for (i = 0; i < books.length; i++) {
    let bookCover = books[i].cover;
    // console.log(bookCover);
    let bookTitle = books[i].title;
    let bookDescription = books[i].description;
    let button = document.createElement("button");
    button.append("More info");
    let image2 = books[i].detail;

    button.setAttribute("data-fancybox", "gallery")
    button.setAttribute("href", image2)

    let imageJ = document.createElement("img");
    imageJ.setAttribute("src", bookCover);
    imageJ.setAttribute("alt", "Cover");
    imageJ.style.width = "300px";
    imageJ.style.height = "500px";
    let titleJ = document.createElement("h2");
    titleJ.append(bookTitle);
    let descriptionJ = document.createElement("p");
    descriptionJ.append(bookDescription);

    let flipCard = document.createElement("div");
    flipCard.className = "flip-card";
    bookDiv.appendChild(flipCard);

    let flipInner = document.createElement("div");
    flipInner.className = "flip-card-inner ";
    flipCard.appendChild(flipInner);

    let flipFront = document.createElement("div");
    flipFront.className = "flip-card-front";
    flipInner.appendChild(flipFront);

    flipFront.appendChild(imageJ);

    let flipBack = document.createElement("div");
    flipBack.className = "flip-card-back";
    flipInner.appendChild(flipBack);

    flipBack.appendChild(titleJ);
    flipBack.appendChild(descriptionJ);
    flipBack.appendChild(button);
  }
}



// function myFunction() {
//   // Declare variables
//   var input, filter, ul, li, a, i, txtValue;
//   input = document.getElementById('myInput');
//   filter = input.value.toUpperCase();
//   ul = document.getElementById("myUL");
//   li = ul.getElementsById('bookStore');

//   // Loop through all list items, and hide those who don't match the search query
//   for (i = 0; i < li.length; i++) {
//     a = li[i].getElementsByTagName("a")[0];
//     txtValue = a.textContent || a.innerText;
//     if (txtValue.toUpperCase().indexOf(filter) > -1) {
//       li[i].style.display = "";
//     } else {
//       li[i].style.display = "none";
//     }
//   }
// }
