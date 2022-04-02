player_1 = localStorage.getItem("name1");
player_2 = localStorage.getItem("name2");
document.getElementById("p1_name").innerHTML = player_1;
document.getElementById("p2_name").innerHTML = player_2;
document.getElementById("question_turn").innerHTML = "Question Turn:" + player_1;
document.getElementById("answer_turn").innerHTML = "Answer Turn:" + player_2;
player_1_score = 0;
player_2_score = 0;
document.getElementById("p1_score").innerHTML = ":" + player_1_score;
document.getElementById("p2_score").innerHTML = ":" + player_2_score;

function inputword() {
    word = document.getElementById("word").value;
    second_letter = word.charAt(1);
    console.log(word);
    first_replace = word.replace(second_letter, "_");
    console.log(first_replace);
    second_last_letter = word.charAt(word.length - 2);
    second_replace = first_replace.replace(second_last_letter, "_");
    console.log(second_replace);
    middle_letter = word.charAt(Math.floor(word.length / 2));
    third_replace = second_replace.replace(middle_letter, "_");
    console.log(third_replace);
    question_html = "<h2 id='display_word'> " + third_replace + " </h2> ";
    input_html = "<br> <input id='answer'>";
    button_html = " <br> <button onclick= 'check()' class='btn btn-secondary' > Check </button>";
    document.getElementById("output").innerHTML = question_html + input_html + button_html;
    document.getElementById("word").value="";
}
question_turn = player_1;
answer_turn = player_2;

function check() {
    answer = document.getElementById("answer").value.toUpperCase();
    word = word.toUpperCase()

    if (word == answer) {
        if (answer_turn == player_1) {
            player_1_score = player_1_score + 1;
        }

        else if (answer_turn == player_2) {
            player_2_score = player_2_score + 1;
        }

        document.getElementById("p1_score").innerHTML=player_1_score;
        document.getElementById("p2_score").innerHTML=player_2_score;
        
    }

    if (answer_turn == player_1) {
        answer_turn = player_2;
        question_turn = player_1;
    }

    else if (answer_turn == player_2) {
        answer_turn = player_1;
        question_turn = player_2;
    }

    document.getElementById("output").innerHTML="";
    document.getElementById("question_turn").innerHTML= "Question Turn: " + question_turn;
    document.getElementById("answer_turn").innerHTML= "Answers Turn: " + answer_turn;
}

