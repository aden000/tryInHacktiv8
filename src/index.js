/** Math
 * Function
 */

/*let tim1 = 0,
  tim2 = 0;
let nama_tim1 = "Bejo";
let nama_tim2 = "Joko";
let gol = false;

alert("Skornya " + nama_tim1 + " " + tim1);
alert("dan Skornya " + nama_tim2 + " " + tim2);

tim1 = 10;
tim2 = 30;

alert("Sekarang Skornya " + nama_tim1 + " " + tim1);
alert("Dan juga Skornya " + nama_tim2 + " " + tim2);
*/

/**
 * Greeting
 */

/*
let greeting = "Welcome to my website ~";
let motd = "Never give up and believe";
alert(greeting + motd.toUpperCase());
console.log("Somebody visit your weebsite");
*/

/**
 * Conditional IF
 */

/*let comicBook = 25000;
let money = 25000;

alert("The price of Comic book is " + comicBook);
alert("you have money")
//let kere = money < comicBook;
if (money < comicBook) {
  alert("Go Home and take your money!");
} else if (money == comicBook) {
  alert("You can buy the book, but after that you can't go home");
} else {
  alert("You can buy the comic");
}
*/

/**
 * FUnction~~~
 */

/*let loginCheck = (user = "") => {
  if (user !== "") {
    greeting(user);
    console.log(user + " has been login in your website");
  } else if (user === "") {
    alert("Please login first");
  }
};

//loginCheck();
function greeting(pengguna) {
  alert("Welcome " + pengguna);
}

const kali = (a, b) => {
  return a * b;
};

alert("Hasil Kali = " + kali(5, 6));
*/
/**
 * For do-while and while Looping ~
 */
/*let pageMax = 100;
let pageNow = 1;
while (pageNow <= pageMax) {
  alert("Page now = " + pageNow + ", Let's read the book!");
  pageNow++;
}
alert("the end of book :*");
*/

/**
 * Array in java script
 */

let mangkok = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(mangkok.length);
console.log(mangkok);
mangkok.push(11);
for (let idx = 0; idx < mangkok.length; idx++) {
  console.log("idx ke 0 = " + mangkok[idx]);
}
