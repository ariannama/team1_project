/*var imgs = ['img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7'];

$( document ).ready(function(){
    var imageUrl = "url('img1.jpg')"
    var index = 1
    $('.carousel-inner').css('background-image', imageUrl)

   $(".carousel-control-next").on('click', function () {
      if(index < imgs.length - 1){
        index++;
        imageUrl = "url('" + imgs[index] + ".jpg')"
        $('.slideshow').css('background-image', imageUrl);
      }
    })

    $(".carousel-control-prev").on('click', function () {
      if(index > 0){
        index--;
        imageUrl = "url('" + imgs[index] + ".jpg')"
        $(".slideshow").css("background-image", imageUrl);
      }
    })
})
*/


$( document ).ready(function(){
  $('#about').on('click', function () {
    window.location.href = "about.html";
  })

  $('#home').on('click', function () {
    window.location.href = "index.html";
  })

  $('#contact').on('click', function () {
    window.location.href = "contact.html";
  })

  $('body').removeClass('fade-out');

})
