let input = []
function Num(num) {
    if (input.length < 2) {
        input.push(num);
        if (input.length == 1) {
            document.getElementById("Num1").textContent = input[0]
        }
        else{
            document.getElementById("Num2").textContent = input[1]
        }
    }
}
function Clear() {
    input = []
    document.getElementById("Num1").textContent = ''
    document.getElementById("Num2").textContent = ''
}