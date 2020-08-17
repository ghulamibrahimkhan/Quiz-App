
function quiz(){
    var score = 0;

    // ******Question 1
    var rightAnswer1 = document.getElementById("question-1-right-option")
    var Q1Option1 = document.getElementById("question-1-2nd-option")
    var Q1Option2 = document.getElementById("question-2-2nd-option")
    var Q1Option3 = document.getElementById("question-4-2nd-option")

    if (rightAnswer1.checked == true) {
        score++
        alert("Answer 1 is right")
    }
    else{
        ("Answer 1 is worng")
    }

    // ******Question 2
    var rightAnswer2 = document.getElementById("question-2-4th-option")
    var Q4Option1 = document.getElementById("question-2-1st-option")
    var Q3Option2 = document.getElementById("question-2-2nd-option")
    var Q2Option3 = document.getElementById("question-2-3rd-option")

    if (rightAnswer2.checked == true) {
        score++
        alert("Answer 2 is right")
    }
    else{
        ("Answer 2 is worng")
    }

    // ******Question 3
    var rightAnswer3 = document.getElementById("question-3-3rd-option")
    var Q3Option1 = document.getElementById("question-3-1st-option")
    var Q3Option2 = document.getElementById("question-3-2nd-option")
    var Q3Option3 = document.getElementById("question-3-4th-option")

    if (rightAnswer3.checked == true) {
        score++
        alert("Answer 3 is right")
    }
    else{
        ("Answer 3 is worng")
    }
    console.log(score)
    
    document.write("<h1>"+"Score = "+ score+"</h1>")
}

