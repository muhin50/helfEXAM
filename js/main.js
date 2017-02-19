
$(document).ready(function(){
$("#btn").click(function(){
    var ur=$("#user").val();
    var ps=$("#pass").val();
    if (ur==""){
        $(".error").text("Please Enter Username");
    }else if(ps==""){
        $(".error").text("Please Enter Password");
    }
});




$("#Reset").click(function(){
	$("#user").val("");
	$("#pass").val("");
});






			$("#content-slider").lightSlider({
                loop:true,
                keyPress:true
            });
            $('#image-gallery').lightSlider({
                gallery:true,
                item:1,
                thumbItem:9,
                slideMargin: 0,
                speed:500,
                auto:true,
                loop:true,
                onSliderLoad: function() {
                    $('#image-gallery').removeClass('cS-hidden');
                }  
            });


  $( function() {
    $( "#datepicker" ).datepicker();
  } );
 


var maxLength = 100;
$('textarea').keyup(function() {
  var length = $(this).val().length;
  var length = maxLength-length;
  $('#chars').text(length);
});
});
