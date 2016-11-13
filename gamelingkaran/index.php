<html>
  <head>
    <title>Level 1</title>
    <link rel="stylesheet" type="text/css" href="assets/css/style.css">
    <script src="assets/js/jquery-3.1.1.min.js"></script>
    <script src="assets/js/script.js"></script>
  </head>
  <body>
    <div id="board">
      <img src="assets/images/market.png" id="toko1" class="toko">
      <img src="assets/images/market.png" id="toko2" class="toko">
      <img id="player">
    </div>
    <div id="gameBoard">
      <img src="assets/images/cake.png" id="choose1" class="choose" onclick="chooseImage(1)">
      <img src="assets/images/coin.png" id="choose2" class="choose" onclick="chooseImage(2)">
      <img src="assets/images/tire.png" id="choose3" class="choose" onclick="chooseImage(3)">
      <div class="soal" id="soal"></div>
      <div class="soal" id="jawaban1"></div>
      <div class="soal" id="jawaban2"></div>
      <div class="soal" id="jawaban3"></div>
      <div class="soal" id="jawaban4"></div>
      <div id="message"></div>
    </div>
  </body>
</html>
