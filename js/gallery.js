var imgs = ['img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7'];

$( document ).ready(function(){
    var imageUrl = "url('img1.jpg')"
    var index = 1
    $('.slideshow').css('background-image', imageUrl)

   $(".next").on('click', function () {
      if(index < imgs.length - 1){
        index++;
        imageUrl = "url('" + imgs[index] + ".jpg')"
        $('.slideshow').css('background-image', imageUrl);
      }
    })

    $(".prev").on('click', function () {
      if(index > 0){
        index--;
        imageUrl = "url('" + imgs[index] + ".jpg')"
        $(".slideshow").css("background-image", imageUrl);
      }
    })
})
