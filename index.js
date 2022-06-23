var answer = document.querySelector("#answer");
buttons = document.querySelectorAll(".input");
var answerValue = "";

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(e) {
        var inputText = e.target.innerText;
        if (inputText == "C") {
            answerValue = "";
            answer.value = answerValue;
        } else if (inputText == "=") {
            answer.value = calculate(answerValue);
        } else {
            answerValue += inputText;
            answer.value = answerValue;
        }
    });
}

function calculate(val) {
    console.log(val);
    for (var i = 0; i < val.length; i++) {
        if (val[i] == "+") {
            var first = Number(val.slice(0, i));
            var last = Number(val.slice(i + 1, val.length));
            console.log(typeof first);
            answerValue = first + last;
        } else if (val[i] == "-") {
            var first = Number(val.slice(0, i));
            var last = Number(val.slice(i + 1, val.length));
            answerValue = first - last;
        } else if (val[i] == "*") {
            var first = Number(val.slice(0, i));
            var last = Number(val.slice(i + 1, val.length));
            answerValue = first * last;
        } else if (val[i] == "/") {
            var first = Number(val.slice(0, i));
            var last = Number(val.slice(i + 1, val.length));
            answerValue = first / last;
        }
    }
    return answerValue;
}