(function ($) {
    $(document).ready(function () {  

        function cookie() {
            $("#cookie_top").removeClass("hide");
          }
          
          setTimeout(cookie, 3000);
$(".cookie_btn_ok").click(function(){
    $("#cookie_top").addClass("hide");
});
$(".cookie_top_orangeText, #cookies_bottom").click(function(){
    $(".po-pup").removeClass("hide");
});
$(".close_popup_main").click(function(){
    $(".po-pup").addClass("hide");
});

    
 $('.logo_language').click(function(){
     $('.logo_language').each(function () {
                $(this).removeClass('active');
            });

            $(this).addClass('active');
    
     
 });
    
    
    
 $('.owl-carousel').owlCarousel({
    loop:true,
      autoplay:true,
    autoplayTimeout: 2000,
    autoplayHoverPause:true,
    margin:10,
   
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});
    
    
    
    
    
    
    
    
});
})(jQuery);



//choosing language//
let app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $http) {

  $http.get('assets/langMain.json')
             .then(function(res){
                $scope.language = res.data;     
                console.log($scope.language);   
                $scope.mainlang = res.data.fr;  
                console.log($scope.mainlang);       
              });

   
   $scope.chooseLang = function(elem){
    
    $scope.mainlang = $scope.language[elem];
    console.log($scope.mainlang);
   };
  

   
});