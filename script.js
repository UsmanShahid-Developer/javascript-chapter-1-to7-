document.getElementById("alertName").onclick = function (){
    alert('I am Usman Shahid.')
    document.getElementById('result').innerHTML="I Am Muahmmad Usman Shahid."
    document.getElementById('Statement').innerHTML="alert('I Am Muahmmad Usman Shahid.')"

}
document.getElementById("alertNumber").onclick = function (){
    alert("03027175981")
    document.getElementById('result').innerHTML="03027175981"
    document.getElementById('Statement').innerHTML="alert('03027175981')"

}

document.getElementById("variableName").onclick = function (){    
    var abc = "In order to show you the most <code>userNameEnterQuick</code> relevant results, we have omitted some entries very similar to the 10 already. <br> In order to show you the most <code>userNameEnterQuick</code> relevant results, we have omitted some entries very similar to the 10 already.<br>In order to show you the most <code>userNameEnterQuick</code> relevant results, we have omitted some entries very similar to the 10 already.<br>In order to show you the most <code>userNameEnterQuick</code> relevant results, we have omitted some entries very similar to the 10 already.<br>In order to show you the most <code>userNameEnterQuick</code> relevant results, we have omitted some entries very similar to the 10 already.<br>In order to show you the most <code>userNameEnterQuick</code>  relevant results, we have omitted some entries very similar to the 10 already."
    // document.getElementById('result').innerHTML=
    document.getElementById('Statement').innerHTML=abc

}
document.getElementById("camelCase").onclick = function (){    
    var abc = "<code>userName</code> <br><code>userNameEnter</code><br><code>userNameEnterQuick</code>"
    // document.getElementById('result').innerHTML=
    document.getElementById('Statement').innerHTML=abc

}