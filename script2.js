// function Q1Good(){
//     document.getElementById('answerq1').innerHTML =" C'est une bonne réponse";
//     document.getElementById('answerq1').style.color ="green";
    
//     document.getElementById('q1good').disabled=true;
//     document.getElementById('q1false').disabled=true;
   
    
// }

// function Q1False(){
//     document.getElementById('answerq1').innerHTML =" C'est une mauvaise réponse";
//     document.getElementById('answerq1').style.color ="red" ;
   
//     document.getElementById('q1good').disabled=true;
//     document.getElementById('q1false').disabled=true;
   
// }

var score = 0 ;

function Q1(ans) {
    const ans1 = document.querySelector("#answerq1")
    // Affiche reponse 
    if (ans =="good") {
        ans1.innerHTML = "Bonne réponse" ;
        ans1.classList.add("alert-success")
        score = score + 1 
    } else {
        ans1.innerHTML = "Mauvaise réponse" ;
        ans1.classList.add("alert-danger")
    }

    // disable button
    const btn1 = document.querySelectorAll(".btn1") ;
    for(i = 0; i < btn1.length; ++i) {
        btn1[i].disabled= true;
    }
}


function Q2submit(){
    var answer_submitted2 = document.getElementById('choix').value;
    const ans2 = document.getElementById("answerq2")
    
    if (answer_submitted2 == "3") {
        ans2.innerHTML = "Bonne réponse" ;
        ans2.classList.add("alert-success")
        score = score + 1 
    }
    else{
        ans2.innerHTML = "Mauvaise réponse" ;
        ans2.classList.add("alert-danger")
    }
    document.getElementById('q2submit').disabled=true;
}


function Q3submit(){
    var answer_submitted3 = document.getElementById('q3').value;
    const ans3 = document.getElementById("answerq3")

    if (answer_submitted3 == "0") {
        ans3.innerHTML = "Bonne réponse" ;
        ans3.classList.add("alert-success")
        score = score + 1 
    }
    else{
        ans3.innerHTML = "Mauvaise réponse" ;
        ans3.classList.add("alert-danger")
    }
    document.getElementById('q3submit').disabled=true;    
}


function Q4(ans) {
    const ans4 = document.querySelector("#answerq4")
    // Affiche reponse 
    if (ans =="good") {
        ans4.innerHTML = "Bonne réponse" ;
        ans4.classList.add("alert-success")
        score = score + 1 
    } else {
        ans4.innerHTML = "Mauvaise réponse" ;
        ans4.classList.add("alert-danger")
    }

    // disable button
    const btn4 = document.querySelectorAll(".btn4") ;
    for(i = 0; i < btn4.length; ++i) {
        btn4[i].disabled= true;
    }
}


function Q5submit(){
    var answer_submitted5 = document.getElementById('q5').value;
    const ans5 = document.getElementById("answerq5")

    if (answer_submitted5 == "-b/a") {
        ans5.innerHTML = "Bonne réponse" ;
        ans5.classList.add("alert-success")
        score = score + 1 
    }
    else{
        ans5.innerHTML = "Mauvaise réponse" ;
        ans5.classList.add("alert-danger")
    }
    document.getElementById('q5submit').disabled=true;    
}


function affiche_score() {
    const divscore = document.getElementById("score");
    if (score == 5){
        divscore.classList("alert-success")
    } else if (score >= 3){
        divscore.classList.add("alert-warning")
    } else {
        divscore.classList.add("alert-danger")
    }

    divscore.innerHTML = "Votre score est de " + score + " / 5";
}

