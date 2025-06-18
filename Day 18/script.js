const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;

function convert(){
    if(toFahrenheit.checked){
        temp = textBox.value;
        temp = Number(temp);
        temp = temp *9/5 + 32;
        result.textContent = temp.toFixed(1) /*adds precision to 1 decimal*/ + "°F";
        

    }
    else if(toCelsius.checked){
         temp = textBox.value;
        temp = Number(temp);
        temp = (temp-32)*(5/9);
        result.textContent = temp.toFixed(1) + "°C";

        //  result.textContent = "You selected toCelsius";
    }
    else{
        result.textContent = "Select a unit";
    }
}