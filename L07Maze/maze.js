/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
   "use strict"; 
   var init = function(){
       $("#start").click(newGame);
   };
   var initiateBorders = function(){
       $("div.boundary").mouseover(boundary);
       $("#end").mouseover(winner);
       $("#maze").mouseleave(cheater);
   }
   var newGame = function(){
       $("div.boundary").removeClass("youlose");
        initiateBorders();
        $("#status").text("Good Luck!");
   };
   var boundary = function(){
       $("div.boundary").addClass("youlose");
       $("#status").text("Sorry, you lose.");
       disableBorders();
       setTimeout(run,3000);
   };
   var winner = function(){
        $("#status").text("You Win!");
        disableBorders();
        setTimeout(run,5000);
   };
  
    var run = function(){
       $("#status").text("Click the \"S\" to begin.");
   };
   
    function cheater(){
       boundary();
       $("#status").text("Ha-Ha, you tried to cheat, I like it! Press \"S\" to win $100.");
       disableBorders();
   }
   
   function disableBorders(){
        $("div.boundary").unbind('mouseover');
        $("#end").unbind('mouseover');
        $("#maze").unbind('mouseleave');
   };
   window.onload = init;
});
