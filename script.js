document.getElementById("alertName").onclick = function () {
    alert('I am Usman Shahid.')
    document.getElementById('result').innerHTML = "I Am Muahmmad Usman Shahid."
    document.getElementById('Statement').innerHTML = "alert('I Am Muahmmad Usman Shahid.')"

}
document.getElementById("alertNumber").onclick = function () {
    alert("03027175981")
    document.getElementById('result').innerHTML = "03027175981"
    document.getElementById('Statement').innerHTML = "alert('03027175981')"

}

document.getElementById("variableName").onclick = function () {
    var abc = "In order to show you the most <code>userNameEnterQuick</code> relevant results, we have omitted some entries very similar to the 10 already. <br> In order to show you the most <code>userNameEnterQuick</code> relevant results, we have omitted some entries very similar to the 10 already.<br>In order to show you the most <code>userNameEnterQuick</code> relevant results, we have omitted some entries very similar to the 10 already.<br>In order to show you the most <code>userNameEnterQuick</code> relevant results, we have omitted some entries very similar to the 10 already.<br>In order to show you the most <code>userNameEnterQuick</code> relevant results, we have omitted some entries very similar to the 10 already.<br>In order to show you the most <code>userNameEnterQuick</code>  relevant results, we have omitted some entries very similar to the 10 already."
    // document.getElementById('result').innerHTML=
    document.getElementById('Statement').innerHTML = abc

}
document.getElementById("camelCase").onclick = function () {
    var abc = "<code>userName</code> <br><code>userNameEnter</code><br><code>userNameEnterQuick</code>"
    // document.getElementById('result').innerHTML=
    document.getElementById('Statement').innerHTML = abc

}
document.getElementById("sum2").onclick = function () {
    let num1 = 9
    let num2 = 5
    let sum = num1 + num2
    // document.getElementById('Statement').innerHTML = statement
    document.getElementById('result').innerHTML = sum
    let statement="let num1 ="+ num1 +"<br> let num2 ="+ num2 +""
document.getElementById('Statement').innerHTML=statement
}
document.getElementById('subtract').onclick = function(){
    let num1= 9;
    let num2= 8;
    let subtract =num1 - num2
    document.getElementById('result').innerHTML=subtract

    let statement="let num1 ="+ num1 +"<br> let num2 ="+ num2 +""
document.getElementById('Statement').innerHTML=statement
}
document.getElementById('multiply').onclick = function(){
    let num1= 9;
    let num2= 8;
    let multiply =num1 * num2
    document.getElementById('result').innerHTML=multiply

    let statement="let num1 ="+ num1 +"<br> let num2 ="+ num2 +""
document.getElementById('Statement').innerHTML=statement
}
document.getElementById('divide').onclick = function(){
    let num1= 9;
    let num2= 8;
    let divide =num1 / num2
    document.getElementById('result').innerHTML=divide

    let statement="let num1 ="+ num1 +"<br> let num2 ="+ num2 +""
document.getElementById('Statement').innerHTML=statement
}
document.getElementById('Calculate').onclick = function(){
    let num1= 9;
    let num2= 8;
    let calculater =num1+num2-num1;
    document.getElementById('result').innerHTML=calculater
    
    let statement="let num1 ="+ num1 +"<br> let num2 ="+ num2 +"<br>num1+num2-num1"
    document.getElementById('Statement').innerHTML=statement
    }