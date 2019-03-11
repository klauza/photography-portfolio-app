
    
            
  
    


$(document).ready(function(){
    

    
    
    function backgroundDel(){
        setTimeout(function(){
            var backG = document.getElementsByClassName('biegie')[0];
            backG.classList="";
        }, 1000);
    }
    
    backgroundDel();
    
    
   function pageEnterAnimation(){
        setTimeout(function() {
            $('.nav-dot:eq( 0 )').css({ "left": "0"});  
        }, 1000);

        setTimeout(function() {
            $('.nav-dot:eq( 1 )').css({ "left": "0"});  
        }, 1125);

        setTimeout(function() {
            $('.nav-dot:eq( 2 )').css({ "left": "0"});  
        }, 1250);

        setTimeout(function() {
            $('.nav-dot:eq( 3 )').css({ "left": "0"});  
        }, 1375);

        setTimeout(function() {
            $('.nav-dot:eq( 4 )').css({ "left": "0"});  
        }, 1500);
   
    
        //$(".h1-h3").delay(1500).fadeIn(1000);
       
   }
    setTimeout(function(){
        pageEnterAnimation();
    }, 500);
    
    //padding-left clicking on any button
    $('.nav-dot').click(function(){
        $(this).addClass('aktive'); 
        $(this).siblings().removeClass('aktive'); 
        

            
        
        
    })
    

    
 /*   
        // PLUS MINUS BUTTONS IN SECTION-4
    $('.button_plus:eq( 0 )').on('click', function() {
        $('.comp-wrapper:eq( 0 ) > img').fadeOut(300);
        setTimeout(function(){
            $( ".comparison:eq( 0 )" ).css({ "width": "100%"});
     
        }, 500);
    });
    
    $('.button_minus:eq( 0 )').on('click', function() {
        $( ".comparison:eq( 0 )" ).css({ "width": "60%"} );  
        $('.comp-wrapper:eq( 0 ) > img').delay(900).fadeIn(250);
    });
    
    
    $('.button_plus:eq( 1 )').on('click', function() {
        $('.comp-wrapper:eq( 1 ) > img').fadeOut(300);
        setTimeout(function(){
            $( ".comparison:eq( 1 )" ).css({ "width": "100%"});
     
        }, 500);
    });
    
    $('.button_minus:eq( 1 )').on('click', function() {
        $( ".comparison:eq( 1 )" ).css({ "width": "60%"} );  
        $('.comp-wrapper:eq( 1 ) > img').delay(900).fadeIn(250);
    });
    
*/
   
    
   
 
    
    

    
    

    $('.page-slider').each(function() {
      var $slider =  $(this);
      console.log($slider);
      //var numberOfSlides = $slider.find('.panel').length;

 
      $slider.find('.panel:eq(0)').addClass('_active'); // po wczytaniu sie strony, daje pierwsza kropke jako aktywną 
      $slider.find('.nav-dot:eq(0)').addClass('active aktive');




        $('.nav-dot').on('click', function() {

            var slideToGo = $(this).data('slide');
            goToSlide(slideToGo);
            $('*').delay(500).animate({ scrollTop: 0 });
           // $('.hor-panel').delay(500).animate({ left: 0 });
            
     
         
            $('.nav-item').siblings().removeClass('active show');
            $('.nav-item:nth-child(1)').addClass('active show');
        });

        
   

      $slider.on('slide.changed', function() {
     
  
        $('.nav-dot').removeClass('active');

        var $activeDot = $('.nav-dot[data-slide="'+$('.panel._active').data('slide')+'"]');
        $activeDot.addClass('active');
        });

    

      function goToSlide(slideToGo) {
          $('.panel._active').removeClass('_active');
          $slider.find('.panel').eq(slideToGo -1).addClass('_active');
          $activeSlide = $slider.find('.panel').eq(slideToGo -1).addClass('_active');
          $slider.trigger('slide.changed');  
          document.body.scrollTop = 0; // For Safari
          document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
          }
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
         $('*').scroll(function(){
                var scrollbarLocation = $(this).scrollTop();
                
                //console.log(scrollbarLocation)
            });
        
        
    }); //('.page-slider') END
}); //(document).ready END


// SECTION - 2
 var horPanel = $('.hor-panel').css('width');
    
    var width = horPanel.replace('px',''); //replacing pixels with null string
    
    var i=0; 
    
    $('.tabs-container ul li').each(function(){  //how many li tags is in our code
    i++;
    });
    // = 3
    
    
    //getting the width of the first tab
    var width1 = width/i;
    
    $('.hor-panel').css('width',width1 + 'px'); //selecting first button, addping px
    
    $('.tabs-container ul li:nth-child(1)').on('click', function(){
        $('.hor-panel').animate({
            left: '0px'
        })
    });
    
    $('.tabs-container ul li:nth-child(2)').on('click', function(){
        $('.hor-panel').animate({
            left: width1 + 'px' //-10 left margin
        })
    });
    
     $('.tabs-container ul li:nth-child(3)').on('click', function(){
        $('.hor-panel').animate({
            left: width1 + width1 + 'px' 
        })
    });
