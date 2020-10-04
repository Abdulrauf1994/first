function getNumber(num){
    var result = document.getElementById("result")
    result.value +=num;
}

function cresult(){
    var result = document.getElementById("result")
    result.value = "";
}

function finalResult(){
    var result = document.getElementById("result")
    result.value = eval(result.value)
}