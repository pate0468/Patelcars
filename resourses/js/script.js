$(document).ready(function(){
    
    /* Nav bar=================================================================================================== */
   $('.js-basic-info').waypoint(function(direction){
       
       if(direction == "down"){
           
           $('nav').addClass('sticky');
       }else{
            $('nav').removeClass('sticky');
       }
       
   },{
       offset:'100px'
   });
    
   
      /* Two header buttons=================================================================================================== */
    $('.js--btn1').click(function(){
        
       $('html,body').animate({scrollTop:$('.js--money').offset().top},1000) ;
    });
    
    $('.js--btn2').click(function(){
        
       $('html,body').animate({scrollTop:$('.js-basic-info').offset().top},1000); 
        
    });
    
    
      /* Header menu=================================================================================================== */
    $(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
        });
        
          /* animation=================================================================================================== */
        
        $('.js--wp-1').waypoint(function(direction){
            
            $('.js--wp-1').addClass('animated rotateIn');
            
        },{
            offset:'50%'
        });
        
  $('.js--wp-2').waypoint(function(direction){
            
            $('.js--wp-2').addClass('animated rotateIn');
            
        },{
            offset:'50%'
        });
        

    
    $('.js--wp-3').waypoint(function(){
       
        $('.js--wp-3').addClass('animated fadeInLeft');
        
    },{
        offset:'50%'
    });
    
    
    var map=new GMaps({
  div: '.maps',
  lat:  45.3624152,
  lng: -75.730737
});
    
    
    map.addMarker({
  lat:  45.3624152,
  lng: -75.730737,
  title: 'Ottawa',
  infoWindow: {
  content: '<p>Our home branch is here</p>'
}
});
    
});