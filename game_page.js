player_1= localStorage.getItem("name1");
player_2= localStorage.getItem("name2");
document.getElementById("p1_name").innerHTML=player_1;
document.getElementById("p2_name").innerHTML=player_2;
document.getElementById("question_turn").innerHTML="Question Turn:"+player_1;
document.getElementById("answer_turn").innerHTML="Answer Turn:"+player_2;
player_1_score=0;
player_2_score=0;
document.getElementById("p1_score").innerHTML=":"+player_1_score;
document.getElementById("p2_score").innerHTML=":"+player_2_score; 

function enter() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    acutal_answer=parseInt(number1) * parseInt(number2);
    question_number = "<h4> " + number1 + " x " + number2 + "<h4>";
    input_box = "<br> Answer: <input type:'text' id:'input_check_box'>";
    check_button = " <br><br> <button onclick= 'check()' class='btn btn-info' > Check </button>";
    row= question_number + input_box + check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
      
}