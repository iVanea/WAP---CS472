/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
"use strict";
var timerOn=false;
var timer;

function runSubmit(){
    var result = document.getElementById("resultText");
    if(!timerOn){
        timer = setInterval(increaseFont,2500);  
        
        result = "Pressed Button Big Decorations and timer runs";
    }else{
        clearInterval(timer);
        
        result = "timer stopped";
    }
    timerOn=!timerOn;
    
}

function clearDecorations(){
    document.getElementById("checkBlink").unchecked="false";   
    var result = document.getElementById("resultText");
    result="";
    var textarea = document.getElementById("textField");
         textarea.style.color = "black";
         textarea.style.textDecoration="none";
         textarea.style.fontWeight="normal";
         textarea.style.fontSize=12+"pt";
    document.body.style.background = "url('')";
}


function oncheck_Bling(){
    document.body.style.background = "url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
     var checkBox = document.getElementById("checkBlink");
     var textarea = document.getElementById("textField");
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
    var textarea = document.getElementById("textField");
    var theCSSprop = window.getComputedStyle(textarea, null).getPropertyValue("font-size");
    var fontsize=parseInt(theCSSprop);
    console.log("size =", fontsize);
    fontsize+=2;
    console.log("size =", fontsize);
    textarea.style.fontSize=fontsize+"pt";
}

//add Pig latin
function pressedIgpay(){
    var text = document.getElementById("textField").value.split(" ");
    if(text.length===0){
        alert("Insert text in textarea");
    }
    for(let i=0;i<text.length; i += 1){
        if(text[i].charAt(0) === "a" ||text[i].charAt(0) === "e" || text[i].charAt(0) === "i"
             || text[i].charAt(0) === "o" || text[i].charAt(0) === "u" || text[i].charAt(0) === "y"){
             text[i]= text[i].concat("ay");
                }
                else{
                    var s = text[i].substring(0, 1);
                    text[i]= text[i].concat(""+s+"ay");
                    text[i] = text[i].substring(1, text[i].length);
                }
    }
    document.getElementById("textField").value= text.join(" ");
}