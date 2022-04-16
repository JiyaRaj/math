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
question_turn=player_1;
answer_turn=player_2; 

function enter() {
    number1 = document.getElementById("number1").value;
    number2 =document.getElementById("number2").value;
    acutal_answer=parseInt(number1) * parseInt(number2);
    question_number = "<h4> " + number1 + " x " + number2 + "<h4>";
    input_box = "<br> Answer: <input type='text' id='input_check_box'>";
    check_button = " <br><br> <button onclick= 'check()' class='btn btn-info' > Check </button>";
    row= question_number + input_box + check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
      
}

function check() {
    user_answer=Number(document.getElementById("input_check_box").value);
    if (question_turn==player_1){
        if (user_answer==acutal_answer){
            player_1_score=player_1_score + 1
     
         }
         question_turn=player_2;
         answer_turn=player_1;
    }

    if (question_turn==player_2){
        if (user_answer==acutal_answer){
            player_2_score=player_2_score + 1 
         }
         question_turn=player_1;
         answer_turn=player_2;
    }
    document.getElementById("question_turn").innerHTML="Question Turn:"+question_turn;
         document.getElementById("answer_turn").innerHTML="Answer Turn:"+answer_turn;

    document.getElementById("output").innerHTML="";
}