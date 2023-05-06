player1score = 0
player2score = 0
document.getElementById("player1score").innerHTML = player1score;
document.getElementById("player2score").innerHTML = player2score;
player1name = localStorage.getItem("Player1")
document.getElementById("player1name").innerHTML = player1name + " : "
player2name = localStorage.getItem("Player2")
document.getElementById("player2name").innerHTML = player2name + " : "

document.getElementById("playerQuestion").innerHTML = "Question Turn : " + player1name
document.getElementById("playerAnswer").innerHTML = "Answer Turn : " + player2name

function send() {
n1=document.getElementById("num1").value;
n2=document.getElementById("num2").value;
problem=n1+"X"+n2

   
    Qword = '<h4 id="word_display">Q.'+ problem + '</h4>'
    ibox = '<br>Answer: <input type="text" id="input_check_box">'
    btn = '<br><br><button class="btn btn-info" onclick="check()">check</button>'
    row = Qword + ibox + btn
    document.getElementById("output").innerHTML = row

    document.getElementById("num1").value = ""
    document.getElementById("num2").value = ""

}
questionturn = "p1"
answerturn = "p2"
function check(){
answer=document.getElementById("input_check_box").value
    if (answer == (n1*n2)) {
        if (answerturn == "p1") {
            player1score += 1
            document.getElementById("player1score").innerHTML = player1score;

        }
        else {
            player2score += 1
            document.getElementById("player2score").innerHTML = player2score;

        }
    }
    if (answerturn == "p1") {
        answerturn = "p2"

        questionturn = "p1"
        document.getElementById("playerQuestion").innerHTML = "Question Turn : " + player1name
        document.getElementById("playerAnswer").innerHTML = "Answer Turn : " + player2name
    }
    else {
        answerturn = "p1"
        questionturn = "p2"
        document.getElementById("playerQuestion").innerHTML = "Question Turn : " + player2name
        document.getElementById("playerAnswer").innerHTML = "Answer Turn : " + player1name
    }
document.getElementById("output").innerHTML=""
}
