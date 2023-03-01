function isChecked(){
    activity = 0;
    if(document.getElementById("Sedentary").checked){
        activity = 1.2
    }
    else if(document.getElementById("minimally").checked){
        activity = 1.375
    }
    else if(document.getElementById("moderately").checked){
        activity = 1.55
    }
    else if(document.getElementById("very").checked){
        activity = 1.725
    }
    else if(document.getElementById("extra").checked){
        activity = 1.9
    }
}
function addNum(){
    var age = parseInt(document.getElementById("age").value);
    var weight = parseInt(document.getElementById("weight").value);
    var height = parseInt(document.getElementById("height").value);
    var result = document.getElementById("result");
    result.value =((10*weight)+(6.25*height)-(5*age)+5)*activity;
}