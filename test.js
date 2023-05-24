var pattern = [];
var empty = [];
var level = 0;
var started = true;
var squar = ["greem", "blue", "red", "yellow"];
$(".startbut").click(function () {
  if (started) {
    nextSquare();
    $("h1").text("level " + level);
    started = false;
  }
});
$(".but").click(function () {
  var clickedbutton = $(this).attr("id");
  empty.push(clickedbutton);
  sound(clickedbutton);
  anime(clickedbutton);
  check(empty.length-1);

});
function nextSquare() {
  empty=[];
  level++;
  var rednum = Math.floor(Math.random() * 3) + 1;

  var selectedsquare = squar[rednum];
  pattern.push(selectedsquare);
  sound(selectedsquare);
  anime(selectedsquare);

}

function sound(ammar) {
  var audio = new Audio("sounds/" + ammar + ".mp3");
  audio.play();
}
function anime(amm) {
  $("#" + amm).addClass("animation");
  setTimeout(function(){
    $("#" + amm).removeClass("animation")}, 1000)
} //empty.add(selectedsquare)
function check(currentsquare){
  if(empty[currentsquare]===pattern[currentsquare]){
    console.log("yes");
    if(empty.length===pattern.length){
      setTimeout(function(){nextSquare();},2000);
      $("h1").text("level " + level);
    }

}
else{
  $("body").addClass("over")
  $("h1").text("GAME OVER");
  sound("wrong");
  setTimeout(function(){restart();},2000);
}
};
function restart (){
  empty=[];
  pattern=[];
  started=true;
  level=0;
  $("h1").text("level "+level);
  $("body").removeClass("over");
//    nextSquare();
}
