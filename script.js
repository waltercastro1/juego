document.getElementById('player').addEventListener("onmouseover",sumarPuntos);

puntos= 0;
tiempo = 30;
necesarios = 30;
function sumarPuntos(){
   puntos++;
   document.getElementById("puntos").innerHTML = "puntos:<b>" + puntos + "/" + necesarios + "</b>";
   randNum = Math.round(Math.random()*100);
   randNum2 = Math.round(Math.random()*100);
   document.getElementById("player").style.marginTop = randNum + "px";
   document.getElementById("player").style.marginLeft = randNum2 + "px";
   if (puntos == 30) {
    alert("Grande Messi")

    
   }
}
document.getElementById('player2').addEventListener("mouseover",restarpuntos);
puntos= 0;
tiempo = 30;
necesarios = 30;
function restarpuntos(){
   puntos--;
   document.getElementById("puntos").innerHTML = "puntos:<b>" + puntos + "/" - necesarios + "</b>";
   randNum = Math.round(Math.random()*100);
   randNum2 = Math.round(Math.random()*100);
   document.getElementById("player2").style.marginTop = randNum  + "px";
   document.getElementById("player2").style.marginLeft = randNum2 +"px";
   if (puntos == 30) {
    alert("Campeón Francia")

    
   }
}
document.getElementById('player3').addEventListener("mouseover",sumarPuntos);

puntos= 0;
tiempo = 30;
necesarios = 30;
function sumarPuntos(){
   puntos++;
   document.getElementById("puntos").innerHTML = "puntos:<b>" + puntos + "/" + necesarios + "</b>";
   randNum = Math.round(Math.random()*100);
   randNum2 = Math.round(Math.random()*100);
   document.getElementById("player3").style.marginTop = randNum + "px";
   document.getElementById("player3").style.marginLeft = randNum2 + "px";
   if (puntos == 30) {
    alert("Gano Argentina")

    
   }
}
document.getElementById('player4').addEventListener("mouseover",restarpuntos);
puntos= 0;
tiempo = 30;
necesarios = 30;
function restarpuntos(){
   puntos--;
   document.getElementById("puntos").innerHTML = "puntos:<b>" + puntos + "/" - necesarios + "</b>";
   randNum = Math.round(Math.random()*80);
   randNum2 = Math.round(Math.random()*80);
   document.getElementById("player4").style.marginTop = randNum  + "px";
   document.getElementById("player4").style.marginLeft = randNum2 +"px";
   if (puntos == 30) {
    alert("Campeón Francia")

    
   }
}




function restarTimpo(){
    tiempo --
    document.getElementById("tiempo").innerHTML ="&nbsp;&nbsp;&nbsp Tiempo:" + tiempo ;
    if (tiempo == 0) {
        alert("Gano Francia");
        tiempo = 0;
        puntos = 0;
        
    }
}

setInterval(restarTimpo,1000);{
    if (restarTiempo==0) {
        clearInterval(tiempo);
        
    }
}


