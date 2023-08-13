let output=document.getElementById("result");

function display(num){
    output.value+=num;
}

function calculate(){

    try{
        output.value=eval(output.value);
    }

catch(err){
    alert("Numbers only allowed")
}
}

