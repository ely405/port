$(document).ready(function(){
  //menu
  $(".button-collapse").sideNav({
    menuWidth: 200,
    closeOnClick: true
  });
  $('#log-in').click(()=>{
    $('#log-in-container').toggle('waves-block');
  });
  $('.parallax').parallax();
  $('.modal').modal();
  $('.slider').slider();
});
