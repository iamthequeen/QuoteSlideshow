$(function() {
  
    var wrapper2 = $('.wrapper2')
    wrapper2.hide()
    
    
    var first = $('.first')
    first.hide()
   
    
    var arrow = $('.arrow')
    arrow.hide()
    
    
    $('#quote-btn').on('click', function(e) {
      e.preventDefault();
       $('.box').fadeOut(500, function() {
         $('.wrapper').fadeOut(1000, function() {
      wrapper2.css('display', 'flex').fadeIn(3000);
      $('.first').fadeIn(1000);
      $('.arrow').fadeIn(1000);
           if ($('.arrow').css('display', 'block')) {
             console.log("button here!")
           }
         });
       });
    })  
    

    $('.prev').on('click', function() {
      var currentImg = $('.active');
      var prevImg = currentImg.prev();
      
    
      if(prevImg.length == 0){
         currentImg.removeClass('active');
         $('.slideshow-img').last().addClass('active');
         } else {
         currentImg.removeClass('active');
          prevImg.addClass('active');
         }
      
    });
    
    $('.next').on('click', function() {
      var currentImg = $('.active');
      var nextImg = currentImg.next();
      
     
      if(nextImg.length == 0){
         currentImg.removeClass('active');
         } else {
         currentImg.removeClass('active');
          nextImg.addClass('active');
         }
      
      if(currentImg.is('.fourth')) {
         currentImg.removeClass('active');
         $('.slideshow-img').first().addClass('active');
         }
    
    })
    
  });

  
  
  
  
  
  