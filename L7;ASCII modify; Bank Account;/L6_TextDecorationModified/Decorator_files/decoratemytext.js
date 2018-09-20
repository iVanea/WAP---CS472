/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function(){
"use strict";
function listenEvents(){
    document.getElementById("decor_btn").onclick = runSubmit;
    document.getElementById("reset_btn").onclick = clearDecorations;
    document.getElementById("igpay").onclick = pressedIgpay;
    document.getElementById("checkBlink").onchange = oncheck_Bling;
}

var myTimer = (function() {
  var timer;

  function privateMethod () {
    // ...
  }

  return {
      // public interface
    start: function () {
      // all private members are accesible here
      timer = setInterval(increaseFont,2500);
    },
    stop: function () {
        clearInterval(timer);
    }
  };
})();

function runSubmit(){
    let result = document.getElementById("resultText");
    let button = document.getElementById("decor_btn");
//    alert(button.title);
    if(button.title === "1"){
        myTimer.start();
        result = "Pressed Button Big Decorations and timer runs";
        button.title = "0";
    }else{
        button.title = "1";
        myTimer.stop();
        
        result = "timer stopped";
    }
}


function clearDecorations(){
    document.getElementById("checkBlink").unchecked="false";   
    let result = document.getElementById("resultText");
    result="";
    let textarea = document.getElementById("textField");
         textarea.style.color = "black";
         textarea.style.textDecoration="none";
         textarea.style.fontWeight="normal";
         textarea.style.fontSize=12+"pt";
    document.body.style.background = "url('')";
}


function oncheck_Bling(){
    document.body.style.background = "url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
     let checkBox = document.getElementById("checkBlink");
     let textarea = document.getElementById("textField");
     if(checkBox.checked){
         textarea.style.color="green";
         textarea.style.textDecoration="underline";
         textarea.style.fontWeight="bold";
     }else{
         textarea.style.color = "black";
         textarea.style.textDecoration="none";
         textarea.style.fontWeight="normal";
     }
}

//timer
function increaseFont(){
    let textarea = document.getElementById("textField");
    let theCSSprop = window.getComputedStyle(textarea, null).getPropertyValue("font-size");
    let fontsize=parseInt(theCSSprop);
    console.log("size =", fontsize);
    fontsize+=2;
    console.log("size =", fontsize);
    textarea.style.fontSize=fontsize+"pt";
}

//add Pig latin
function pressedIgpay(){
    let text = document.getElementById("textField").value.split(" ");
    if(text.length===0){
        alert("Insert text in textarea");
    }
    for(let i=0;i<text.length; i += 1){
        if(text[i].charAt(0) === "a" ||text[i].charAt(0) === "e" || text[i].charAt(0) === "i"
             || text[i].charAt(0) === "o" || text[i].charAt(0) === "u" || text[i].charAt(0) === "y"){
             text[i]= text[i].concat("ay");
                }
                else{
                    let s = text[i].substring(0, 1);
                    text[i]= text[i].concat(""+s+"ay");
                    text[i] = text[i].substring(1, text[i].length);
                }
    }
    document.getElementById("textField").value= text.join(" ");
}

window.onload = listenEvents;
})();