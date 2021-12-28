function Calculate(){
    
    let points = 0;
    if (document.getElementById("correct1").checked){
        // document.getElementById("correct1").style.backgroundColor = "blue";
        points++;
    }
    if (document.getElementById("correct2").checked){
        points++;
    }
    if (document.getElementById("correct3").checked){
        points++;
    }
    if (document.getElementById("correct4").checked){
        points++;
    }
    if (document.getElementById("correct5").checked){
        points++;
    }

    let score = `${points}/5 `;
    let incorrect = 5 - points;
    let correctRes = `${points} correct and ${incorrect} incorrect` ;

    document.getElementById("result").innerHTML = "Your score is : " + score + "that is " + correctRes;

}



