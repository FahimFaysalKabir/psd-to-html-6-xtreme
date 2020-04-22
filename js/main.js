$(document).ready(function(){
  // sticky menu
  $(".js--sticky-menu").waypoint(function(direction){
    if(direction=="down"){
        $(".nav").addClass("sticky");
    }
    else{
        $(".nav").removeClass("sticky");
    }
  });


  // mix it up portfolio section
 var mixer = mixitup('.container');
});
