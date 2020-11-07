
// Question 1

let question_1 = 'Wer hat HTML erfunden?'
let question_1_answer_1 = 'Robbie Williams';
let question_1_answer_2 = 'Lady Gaga';
let question_1_answer_3 = 'Tim Berners-Lee';
let question_1_answer_4 = 'Justin Bieber';

// Question 2

let question_2 = 'Was bedeutet das HTML tag &lt;a&gt;?'
let question_2_answer_1 = 'Kursiv'
let question_2_answer_2 = 'Headline'
let question_2_answer_3 = 'Ein Link'
let question_2_answer_4 = 'Container'


// Progressbar
let question_number = 0;
let progress = 0;
let right_answer;



function nextquestion() {
    hide();

    question_number = question_number + 1;
    progress = question_number * 10;
    document.getElementById('progress-bar').innerHTML = progress + '%';
    document.getElementById('progress-bar').style.width = progress + '%';

    if (question_number == 1) {
        loadqestion1();
    }
    
    if (question_number == 2){ 
        loadqestion2();
        
    }





function answer(a) { 
    if (a == right_answer) { //right answer
        document.getElementById('success').classList.remove('d-none');
        document.getElementById('nonsuccess').classList.add('d-none');

        // show next button
        document.getElementById('next-btn').classList.remove('d-none');
    }

    else { // wrong answer
        document.getElementById('nonsuccess').classList.remove('d-none');
        document.getElementById('success').classList.add('d-none');
    }
}
   
    
    }

function hide() {
    document.getElementById('next-btn').classList.add('d-none');
    document.getElementById('success').classList.add('d-none');
}

    function loadqestion1(){
        document.getElementById('question').innerHTML = question_1;
        document.getElementById('answer1').innerHTML = question_1_answer_1;
        document.getElementById('answer2').innerHTML = question_1_answer_2;
        document.getElementById('answer3').innerHTML = question_1_answer_3;
        document.getElementById('answer4').innerHTML = question_1_answer_4;
        right_answer = 3;
    }

    function loadqestion(){
        document.getElementById('question').innerHTML = question_2;
        document.getElementById('answer1').innerHTML = question_2_answer_1;
        document.getElementById('answer2').innerHTML = question_2_answer_2;
        document.getElementById('answer3').innerHTML = question_2_answer_3;
        document.getElementById('answer4').innerHTML = question_2_answer_4;
        right_answer = 3;
    }  
