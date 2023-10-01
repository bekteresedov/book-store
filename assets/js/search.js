const bookList = [
  {
    imgUrl:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTzNhzT5pcgnT1mf9AAF6zS9Bsc_1puBhh4vmFuPkETUcpRzZgV",
    content: {
      bookName: "Suc ve Ceza",
      authorName: "Baktar Asad",
      title:
        "lorem ipsum dolor sit amet, consectetur adip occ sapien sed diam nonumy eirmod tempor invid id in reprehenderit",
    },
  },
  {
    imgUrl:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTzNhzT5pcgnT1mf9AAF6zS9Bsc_1puBhh4vmFuPkETUcpRzZgV",
    content: {
      bookName: "sss ve Ceza",
      authorName: "Baktar Asad",
      title:
        "lorem ipsum dolor sit amet, consectetur adip occ sapien sed diam nonumy eirmod tempor invid id in reprehenderit",
    },
  },
  {
    imgUrl:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTzNhzT5pcgnT1mf9AAF6zS9Bsc_1puBhh4vmFuPkETUcpRzZgV",
    content: {
      bookName: "alma ve Ceza",
      authorName: "Baktar Asad",
      title:
        "lorem ipsum dolor sit amet, consectetur adip occ sapien sed diam nonumy eirmod tempor invid id in reprehenderit",
    },
  },
  {
    imgUrl:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTzNhzT5pcgnT1mf9AAF6zS9Bsc_1puBhh4vmFuPkETUcpRzZgV",
    content: {
      bookName: "ok ve Ceza",
      authorName: "Baktar Asad",
      title:
        "lorem ipsum dolor sit amet, consectetur adip occ sapien sed diam nonumy eirmod tempor invid id in reprehenderit",
    },
  },
];

let data = [];

const bookContainer = document.querySelector(".book-container");
const next = document.querySelector(".next");
const back = document.querySelector(".back");
const right = document.querySelector(".search-container .right");
const button = document.querySelector(".button");
const error = document.querySelector(".error");

button.addEventListener("click", () => {
  const input = document.getElementById("heyva");
  let inputValue = input.value.trim().toUpperCase();
  if (!inputValue) {
    return;
  }
  input.value = "";
  data = bookList.filter((book) =>
    book.content.bookName.toLocaleUpperCase().includes(inputValue)
  );
  if (!data.length) {
    right.style.display = "none";
    error.style.display = "flex";
    right.appendChild(h2);
  } else if (data.length) {
    error.style.display = "none";

    bookContainer.innerHTML = "";
    right.style.display = "flex";
    let bookCount = 0;
    let e = data[bookCount];
    main(e);
    next.addEventListener("click", () => {
      if (bookCount == data.length - 1) {
        bookContainer.innerHTML = "";
        bookCount = -1;
      }

      bookContainer.innerHTML = "";
      bookCount++;
      e = data[bookCount];
      getDataView(e);
    });

    back.addEventListener("click", () => {
      if (bookCount == 0) {
        bookCount = data.length;
        bookContainer.innerHTML = "";
      }
      bookContainer.innerHTML = "";
      bookCount--;
      e = data[bookCount];
      getDataView(e);
    });
  }
});
if (!data.length) right.style.display = "none";

function main(e) {
  getDataView(e);
  if (data.length == 1) {
    next.style.display = "none";
    back.style.display = "none";
  }
}
function getDataView(data) {
  //left
  const bookLeft = document.createElement("div");

  bookContainer.append(bookLeft);
  const img = document.createElement("img");
  img.setAttribute("src", data.imgUrl);
  img.setAttribute("alt", data.content.bookName + "-book");
  img.setAttribute("class", "img");
  bookLeft.append(img);

  //right
  const bookRight = document.createElement("div");
  bookContainer.append(bookRight);
  const h2 = document.createElement("h2");
  h2.innerHTML = data.content.bookName;
  bookRight.append(h2);
  const h3 = document.createElement("h3");
  h3.innerHTML = data.content.authorName;
  bookRight.append(h3);
  const p = document.createElement("p");
  p.innerHTML = data.content.title;
  bookRight.append(p);
}
