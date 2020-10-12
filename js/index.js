$('#activity-carousel').on('slide.bs.carousel', function (e) {
    var nextH = jQuery(e.relatedTarget).height();
    jQuery(this).find('.active.carousel-item').parent().animate({
        height: nextH+100
    }, 500);
});



// Wrap every letter in a span
var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  change_numbers = Array.from(document.getElementsByClassName("display-num"));
  var run_interval = 40;
  
  var change_number_interval = setInterval(function changeNumbers(){

    for(i=0 ; i<change_numbers.length; i++){
      random_number = Math.floor(Math.random() * 13);
      change_numbers[i].getElementsByClassName("num-center")[0].innerHTML = random_number;
      if(i== 0 && random_number == 0){
        change_numbers.shift();
      }
    }

    if(change_numbers == {}){
      clearInterval(change_number_interval);
      startConfetti();
    }

  }, run_interval, change_numbers);