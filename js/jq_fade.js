$(function(){
  $('ul li a').on('click', function(e){
    var pic = $(this).attr('href');
    $('#main').prepend('<img src="'+pic+'">');
    $('#main img:last').fadeOut(300, function(){
      $('#main img:not(:eq(0))').remove();
    });
    return false
  });
});