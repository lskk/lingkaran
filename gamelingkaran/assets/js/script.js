window.onload = init;

var player = null;
var movement = null;
var gameBoard = null;
var choose1 = null;
var choose2 = null;
var choose3 = null;
var message = null;
var soal = null;
var jawaban1 = null;
var jawaban2 = null;
var jawaban3 = null;
var jawaban4 = null;

function init() {
  player = document.getElementById("player");
  player.src = "assets/images/Player Cowok0004.png";
  player.style.top = "200px";
  player.style.left = "300px";
  movement = setInterval(function() {movePlayer()}, 250);
  message = document.getElementById("message");
  message.style.visibility = "hidden";
  gameBoard = document.getElementById("gameBoard");
  gameBoard.style.visibility = "hidden";
  choose1 = document.getElementById("choose1");
  choose1.style.top = "200px";
  choose1.style.left = "150px";
  choose1.style.visibility = "hidden";
  choose2 = document.getElementById("choose2");
  choose2.style.top = "200px";
  choose2.style.left = "350px";
  choose2.style.visibility = "hidden";
  choose3 = document.getElementById("choose3");
  choose3.style.top = "200px";
  choose3.style.left = "550px";
  choose3.style.visibility = "hidden";
  soal = document.getElementById("soal");
  soal.style.visibility = "hidden";
  jawaban1 = document.getElementById("jawaban1");
  jawaban1.style.visibility = "hidden";
  jawaban2 = document.getElementById("jawaban2");
  jawaban2.style.visibility = "hidden";
  jawaban3 = document.getElementById("jawaban3");
  jawaban3.style.visibility = "hidden";
  jawaban4 = document.getElementById("jawaban4");
  jawaban4.style.visibility = "hidden";
}

function movePlayer() {
  if(parseInt(player.style.left) < 485) {
    player.style.left = parseInt(player.style.left) + 4 + "px";
  } else {
    player.src = "assets/images/Player Cowok0001.png";
  }
  if(parseInt(player.style.top) < 415) {
    player.style.top = parseInt(player.style.top) + 4 + "px";
  }
  if(player.style.top == "416px" && player.style.left == "488px") {
    stopPlayer();
  }
}

function stopPlayer() {
  clearInterval(movement);
  movement = null;
  gameBoard.style.visibility = "visible";
  message.innerHTML = "Pilih salah satu";
  message.style.visibility = "visible";
  choose1.style.visibility = "visible";
  choose2.style.visibility = "visible";
  choose3.style.visibility = "visible";
}

function chooseImage(num) {
  switch(num) {
    case 1 :
      choose2.style.visibility = "hidden";
      choose3.style.visibility = "hidden";
      game(num);
      break;
    case 2 :
      choose1.style.visibility = "hidden";
      choose3.style.visibility = "hidden";
      game(num);
      break;
    case 3 :
      choose1.style.visibility = "hidden";
      choose2.style.visibility = "hidden";
      game(num);
      break;
  }
}

function game(num) {
  pengenalan(num);
}

function pengenalan(num) {  
  switch(num) {
    case 1 :
      choose1.style.left = "350px";
      message.innerHTML = "Ini adalah kue pie yang berbentuk lingkaran<br>dengan menggunakan rumus luas dan keliling lingkaran kita dapat menghitung luas dan keliling koin tersebut<br>luas lingkaran adalah phi / 22/7 / 3,14 * jari-jari<sup>2</sup><br>keliling lingkaran adalah phi / 22/7 / 3,14 * 2 * jari-jari";
      break;
    case 2 :
      message.innerHTML = "Ini adalah koin yang berbentuk lingkaran<br>dengan menggunakan rumus luas dan keliling lingkaran kita dapat menghitung luas dan keliling koin tersebut<br>luas lingkaran adalah phi / 22/7 / 3,14 * jari-jari<sup>2</sup><br>keliling lingkaran adalah phi / 22/7 / 3,14 * 2 * jari-jari";
      break;
    case 3 :
      choose3.style.left = "350px";
      message.innerHTML = "Ini adalah roda yang berbentuk lingkaran<br>dengan menggunakan rumus luas dan keliling lingkaran kita dapat menghitung luas dan keliling roda tersebut<br>luas lingkaran adalah phi / 22/7 / 3,14 * jari-jari<sup>2</sup><br>keliling lingkaran adalah phi / 22/7 / 3,14 * 2 * jari-jari<br>tetapi karena roda memiliki velg maka<br>luas roda = luas lingkaran seluruhnya - luas lingkaran velg";
      break;
  }
  setTimeout(function() {showQuestion(num)}, 15000);
}

function showQuestion(num) {
  message.innerHTML = "Soal ke-1<br>klik pada pilihan jawaban yang menurut Anda benar";
  switch(num) {
    case 1 :
      choose1.style.left = "150px";
      soal.innerHTML = "Berapakah luas dan keliling kue pie disamping jika jari-jarinya 28cm?";
      jawaban1.innerHTML = "a. 44cm<sup>2</sup>";
      jawaban2.innerHTML = "b. 64cm<sup>2</sup>";
      jawaban3.innerHTML = "c. 88cm<sup>2</sup>";
      jawaban4.innerHTML = "d. 100cm<sup>2</sup>";
      break;
    case 2 :
      choose2.style.left = "150px";
      soal.innerHTML = "Berapakah luas dan keliling koin disamping jika jari-jarinya 7cm?";
      jawaban1.innerHTML = "a. 6cm<sup>2</sup>";
      jawaban2.innerHTML = "b. 12cm<sup>2</sup>";
      jawaban3.innerHTML = "c. 22cm<sup>2</sup>";
      jawaban4.innerHTML = "d. 20cm<sup>2</sup>";
      break;
    case 3 :
      choose3.style.left = "150px";
      soal.innerHTML = "Berapakah luas dan keliling roda disamping jika jari-jarinya 700cm?";
      jawaban1.innerHTML = "a. 0,06m<sup>2</sup>";
      jawaban2.innerHTML = "b. 0.12m<sup>2</sup>";
      jawaban3.innerHTML = "c. 0,22cm<sup>2</sup>";
      jawaban4.innerHTML = "d. 0.2m<sup>2</sup>";
      break;
  }
  soal.style.visibility = "visible";
  jawaban1.style.visibility = "visible";
  jawaban2.style.visibility = "visible";
  jawaban3.style.visibility = "visible";
  jawaban4.style.visibility = "visible";
  $("#jawaban1").click(function() {
    checkQuestion(1);
  });
  $("#jawaban2").click(function() {
    checkQuestion(2);
  });
  $("#jawaban3").click(function() {
    checkQuestion(3);
  });
  $("#jawaban4").click(function() {
    checkQuestion(4);
  });
}

function checkQuestion(num) {
  if(num == 3) {
    message.innerHTML = "Benar<br>Tekan disini untuk kembali ke awal";
  } else {
    message.innerHTML = "Salah<br>Tekan disini untuk kembali ke awal";
  }
  $("#jawaban1").off("click");
  $("#jawaban2").off("click");
  $("#jawaban3").off("click");
  $("#jawaban4").off("click");
  $("#message").click(function() {
    location.reload();
  });
}