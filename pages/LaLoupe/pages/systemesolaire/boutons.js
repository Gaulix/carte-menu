
$(function(){


$("#play").click(function(){
  $("#video")[0].play();

  });

$("#pause").click(function(){
  $("#video")[0].pause();

});


$("#stop").click(function(){
  $("#video")[0].pause();
  $("#video")[0].currentTime=0;

});

  $("#plus").click(function(){
  $("#video")[0].volume+=0.1;

});

  $("#moins").click(function(){
  $("#video")[0].volume-=0.1;


});

            });