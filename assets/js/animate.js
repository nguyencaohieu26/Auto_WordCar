  // 
  var $top = $(".video__index-content");
  $top.waypoint(function(direction){
    if(direction == 'down'){
      $(".animate-car-right").addClass("animate__animated animate__fadeInRight animate__delay-0.4s");
      $(".animate-car-left").addClass("animate__animated animate__fadeInLeft animate__delay-0.4s");
    }else{
      $(".animate-car-right").removeClass("animate__animated animate__fadeInRight animate__delay-0.4s");
      $(".animate-car-left").removeClass("animate__animated animate__fadeInLeft animate__delay-0.4s");
    }
  },{offet:400})
  // 
  var $featureMotors = $(".feature-motors");
  $featureMotors.waypoint(function(direction){
    if(direction == 'down'){
      $(".animate-motor-right").addClass("animate__animated animate__fadeInRight animate__delay-0.2s");
      $(".animate-motor-left").addClass("animate__animated animate__fadeInLeft animate__delay-0.2s"); 
    }else{
      $(".animate-motor-right").removeClass("animate__animated animate__fadeInRight animate__delay-0.2s");
      $(".animate-motor-left").removeClass("animate__animated animate__fadeInLeft animate__delay-0.2s"); 
    }
  },{offset: '85%'})
  // 
  var $toppage = $(".car-product__info");
  var $testdrive__button = $(".testdrive__button");
  $toppage.waypoint(function(direction){
    if(direction == 'down'){
      $testdrive__button.css("display","block")
      $testdrive__button.addClass("animate__animated animate__bounceInRight animate__slow")
     
    }else{
      $testdrive__button.css("display","none")
      $testdrive__button.removeClass("animate__animated animate__bounceInRight animate__slow")
    }
  },{offset: '50%'});



