var score = 0;
var finalscore=0;
var count;
var newHit;
function makeBubble() {
    var str = "";
    for(var i=0;i<=90;i++) {
    str += `<div id="bub" class="bubble">${Math.floor((Math.random())*10)}</div>`;
    }
    document.querySelector("#bottom-panel").innerHTML=str;
}
function runTimer() {
    count=59;
    var fn = setInterval(function() {
        if(count > 0) {
        count--;
        document.querySelector("#timer").textContent= count;
    }
    else {
            clearInterval(fn);
            var audio = new Audio('gamecompleted.wav');
            audio.play();
            document.querySelector("#top-panel").innerHTML = `<h2>GAME OVER !!!</h2>`;
            document.querySelector("#bottom-panel").innerHTML=`<h3>SCORE : ${finalscore}🚩 </h3><br><i><bold>Refresh to Restart the Game</bold><i>`
        } 
    },1000);
}
function setHit() {
    newHit = Math.floor(Math.random()*10);
    document.querySelector(".hitcount").textContent = newHit;
}
function increaseScore() {
    score+=10;
    finalscore = score;
    document.querySelector("#scoreval").textContent=score;
}
function resetScore() {
    score -= 10;
    finalscore = score;
    document.querySelector("#scoreval").textContent=score;
}            
function scoreCount() {
                score += 10;
                document.querySelector("#scoreval").textContent=score;
}
var audio = new Audio('newgamestart.mp3');
audio.play();
makeBubble();
runTimer();
setHit();

document.querySelector("#bottom-panel").addEventListener("click",function(dec) {
    var value =Number(dec.target.textContent);
    if(value === newHit) {
        var audio = new Audio('bonus.wav');
        audio.play();
        increaseScore();
        setHit();
        makeBubble();
        runTimer();
    }
    else {
        var audio = new Audio('fail.wav');
        audio.play();
        resetScore();
    }
}); 
            
            