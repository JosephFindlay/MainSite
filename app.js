console.log("Init.");


$(function () {
  $('nav ').on('click', 'li:not(.is-active)',function (e) {
    $('.is-active').removeClass('is-active');
    $(this).addClass('is-active');
    $('nav').removeClass('is-open');
    e.preventDefault();
  });

  $('nav').on('click', '.is-active', function (e) {
    $('nav').toggleClass('is-open');    
    e.preventDefault();
  });


  $('nav .menu-btn').click(function (e) {
    $('nav').addClass('is-open');
  })
});