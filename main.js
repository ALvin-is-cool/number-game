

function login() {
    var player1 = document.getElementById("player1").value;
    var player2 = document.getElementById("player2").value;
    window.location = "gamepage.html";
    localStorage.setItem("player1", player1);
    localStorage.setItem("player2", player2);
    console.log(player1);
}
















