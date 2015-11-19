$(document).ready(function(){
  $('.about').click(function(){
    $("html, body").animate({scrollTop: 0}, "slow");
  });

  $('.portfolio').click(function(){
    var offset = $('#about').height() + 60;
    $("html, body").animate({scrollTop: offset}, "slow");
  });

  $('.skills').click(function(){
    var offset = $('#about').height() + $('#portfolio').height() + 160;
    $("html, body").animate({scrollTop: offset}, "slow");
  });
});