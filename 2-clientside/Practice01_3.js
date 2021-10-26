function omikuji(){
    const message = ["大吉","中吉","小吉"];
    const messageNo =　Math.floor(Math.random()*message.length);
    alert(message[messageNo]);
}

function slot(){
    timer1 = setInterval(rename1, 10);
    timer2 = setInterval(rename2, 10);
    timer3 = setInterval(rename3, 10);
}

function rename1(){
    n1 = Math.floor(Math.random()*10);
    document.getElementById("No1").innerHTML = "<p>" + n1 + "</p>";
}
function rename2(){
    n2 = Math.floor(Math.random()*10)
    document.getElementById("No2").innerHTML = "<p>" + n2 + "</p>";
}
function rename3(){
    n3 = Math.floor(Math.random()*10)
    document.getElementById("No3").innerHTML = "<p>" + n3 + "</p>";
}

function stop1(){
    clearInterval(timer1);
}
function stop2(){
    clearInterval(timer2);
}
function stop3(){
    clearInterval(timer3);
    if ((n1==n2)&(n2==n3)){
        alert("あたり！");
    }
    else{
        alert("はずれ");
    }
}