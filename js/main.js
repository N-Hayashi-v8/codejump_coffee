'use strict';

$(function(){
  var $root = $('html, body');
  var isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var duration = isReducedMotion ? 0 : 600;

  $('a[href^="#"]').on('click',function(e){
    var href = $(this).attr('href');
    if(!href || href === '#')return;

    var $target = $(href);
    if(!$target.length) return;

    e.preventDefault();

    $root.stop().animate(
      { scrollTop: $target.offset().top},
      duration,
      'swing'
    );

    if(history.replaceState){
      history.replaceState(null,'',href);
    }
  });
});