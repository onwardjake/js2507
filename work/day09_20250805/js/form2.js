function myFunction() {
    // get the value of the input field with id="num"
    let x = document.getElementById("num").value;

    // if x is not a number or less than one or greater than 10.
    let resultText;
    if (isNaN(x) || x < 1 || x > 10)
        resultText = "Input not valid";
    else
        resultText = "Input OK";
    
    document.getElementById("demo").textContent = resultText;
}