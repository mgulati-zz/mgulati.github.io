var numberOfPictures = 1; //how many pictures to cycle through
var slide = $('#background');
var fade_time = 75;
var skip = $('#skip');
var projects = $('.project');
var showHack = $('#7');

function slideshow(slideNumber, maxSlides, increment) {
  $('#' + slideNumber).fadeIn();
  if (slideNumber === maxSlides) skip.fadeOut();
  setTimeout(function(){
  // slide.fadeOut(fade_time, function(){
        // slide.css("background-image", 'url(img/' + ((slideNumber % numberOfPictures) + 1) + '.png)');
        // slide.fadeIn(fade_time);
        if (slideNumber < (maxSlides+increment))
          timeout = setTimeout(function(){slideshow(slideNumber+increment,maxSlides,increment);}, 
            (fade_time * 5) + 700 );
    },fade_time);
}

skip.click(function() {
  $('.slide').fadeIn();
  skip.fadeOut();
});

showHack.click(function() {
  slideshow(71,73,1)
})

projects.click(function() {
  window.location = $(this).attr('href');
})

projects.hover(function() {
    $(this).css('opacity',1).find('.project-info').fadeIn();
  }, function() {
    $(this).css('opacity',0.6).find('.project-info').fadeOut();
})

$(function() {
  slideshow(1,7,1);
})