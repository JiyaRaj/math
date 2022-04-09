function adduser(){
    player1=document.getElementById("player_1").value;
    player2=document.getElementById("player_2").value;
    localStorage.setItem("name1", player1);
    localStorage.setItem("name2", player2);
    window.location="game.html";
 }

