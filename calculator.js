var input = document.getElementById("Answer");
var flag = false;

function EnterNumber(x) {
    //console.log(x);
    if (flag == false) {
        input.value += x;
    } else {
        input.value = "";
        input.value += x;    }
}
function EnterOperator(x) {
    //console.log(x);
    input.value += x;
    flag = false;
}

function EnterEqual() {
    var res;
    //console.log(input.value);
    res = eval(input.value);
    //console.log(res);
    input.value = "";
    input.value = res;
    flag = true;
    if (res == "Infinity") {
        input.value = "NAN";
    }
}

function EnterClear() {
    input.value = "";
}