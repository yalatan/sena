
  (function ($) {
      $(document).ready(function () {


  // Создаём холст

  canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");

  // Создаем объект изображения
  var img = new Image();

  //создаём переменную для фото майки

  var imgshirt = "./img/1.jpg"

  // Загружаем файл изображения
  img.src = imgshirt;

  // Прорисовываем изображение. 

  img.onload = function () {

      context.drawImage(img, 0, 0, 400, 400);

  };

          
          
          
          
          //убираем у ссылок поведение по умолчанию

          $('a').on('click', function (e) {
              e.preventDefault();
          });


          //      Выбор этапов

          $('.constructor__stages__ul li').click(function () {
              $('.stage path.active').css('fill', "#8B8B8B");
              $('.constructor__stages__ul li').removeClass('stage__active');


              $(this).addClass('stage__active');
              $('.stage path.active').removeClass('active');

              $("path", $(this)).addClass('active');
          });

          //Закрашиваем svg при наведении
          $('.stage').mouseenter(function () {
              $("path", $(this)).css('fill', "#000");

          });

          //убираем закрашивание     

          $(".stage").mouseleave(function () {
              var actClass = $("path", $(this)).hasClass('active');

              if (actClass) {
                  return
              } else {

                  $("path", $(this)).css('fill', "#8B8B8B");
              }
          });


          //     перекидываем класс active  в constructor__sex
          
          var valSex = 'Man';  //в этой переменной храним текущеее значение Sex
          
          $('.constructor__sex__ul li a').click(function () {
              $(".constructor__sex__ul li a.active").removeClass('active');
              $(this).addClass('active');
              
              valSex = $(this).text();

              
          });


          //     перекидываем класс active  в constructor__style    
          
          var valStyle = 'T-shirt';
          
          $('.constructor__style__ul li a').click(function () {
              $(".constructor__style__ul li a.active").removeClass('active');
              $(this).addClass('active');
              
              valStyle = $(this).text();
              
           
          });


          //      меняем фото в canvas

          $('.canvas__img img').click(function () { //по клику на изображение

              imgshirt = $(this).attr('src'); //достаю значение атрибута src и записываю 

              img.src = imgshirt; //загружаем новый путь изображения

              // Прорисовываем изображение. 

              img.onload = function () {
                  context.drawImage(img, 0, 0, 400, 400);
              }
          });


        
  //поведение кнопки woman
          //меняем в canvas одежду на женскую

          $(".constructor__sex__ul__li__woman").click(function () { // по клику на woman

$('.canvas__img img').each(function () { //перебераем все img устанавливаем новый путь. Путь считаем по индексу, по этому нумеровать обязательно по порядку.
   
    $(this).attr('src', function () {
        
          var valSrc = 'img/woman/' + (($(this).index()) + 1) + '.jpg';
                      return valSrc;
        
    });  
});
              $('#img1').addClass('active'); //устанавливаем класс актив на  первое фото новой одежды.
              
              //загружаем в canvas новые майки
              imgshirt = 'img/woman/1.jpg';
              img.src = imgshirt; //загружаем новый путь изображения
              // Прорисовываем изображение. 
              img.onload = function () {
                  context.drawImage(img, 0, 0, 400, 400);
              }
          });
          
          
            //поведение кнопки man
          //меняем одежду на мужскую
           $(".constructor__sex__ul__li__man").click(function () { // по клику на woman

$('.canvas__img img').each(function () { //перебераем все img устанавливаем новый путь. Путь считаем по индексу, по этому нумеровать обязательно по порядку.
   
    $(this).attr('src', function () {
        
          var valSrc = 'img/' + (($(this).index()) + 1) + '.jpg';
                      return valSrc;
        
    });  
});
              $('#img1').addClass('active'); //устанавливаем класс актив на  первое фото новой одежды.
              
              //загружаем в canvas новые майки
              imgshirt = 'img/1.jpg';
              img.src = imgshirt; //загружаем новый путь изображения
              // Прорисовываем изображение. 
              img.onload = function () {
                  context.drawImage(img, 0, 0, 400, 400);
              }
          });
          
          
          
          //поведение кнопки child
//          меняем одежду на десткую
          
           $(".constructor__sex__ul__li__child").click(function () { // по клику на woman

$('.canvas__img img').each(function () { //перебераем все img устанавливаем новый путь. Путь считаем по индексу, по этому нумеровать обязательно по порядку.
   
    $(this).attr('src', function () {
        
          var valSrc = 'img/child/' + (($(this).index()) + 1) + '.jpg';
                      return valSrc;
        
    });  
});
              $('#img1').addClass('active'); //устанавливаем класс актив на  первое фото новой одежды.
              
              //загружаем в canvas новые майки
              imgshirt = 'img/child/1.jpg';
              img.src = imgshirt; //загружаем новый путь изображения
              // Прорисовываем изображение. 
              img.onload = function () {
                  context.drawImage(img, 0, 0, 400, 400);
              }
          });
          
          
    
//                 перекидываем класс active  в canvas__img         
          $('.canvas__img img').click(function () {              
              $(".canvas__img img.active").removeClass('active');
              $(this).addClass('active');
          });
          
          
          
          
       
          //поведение кнопки sweatshirt при включённом man
          

           $(".constructor__style__sweatshirts").click(function () { // по клику на sweatshirts
               
               if (valSex == 'Man') {        //проверяем, что находится в valSex 
//                   а дальше по накатанной
                  $('.canvas__img img').each(function () { //перебераем все img устанавливаем новый путь. Путь считаем по индексу, по этому нумеровать обязательно по порядку.
   
    $(this).attr('src', function () {
        
          var valSrc = 'img/man_sweat/' + (($(this).index()) + 1) + '.jpg';
                      return valSrc;
        
    });  
});
              $('#img1').addClass('active'); //устанавливаем класс актив на  первое фото новой одежды.
              
              //загружаем в canvas новые майки
              imgshirt = 'img/man_sweat/1.jpg';
              img.src = imgshirt; //загружаем новый путь изображения
              // Прорисовываем изображение. 
              img.onload = function () {
                  context.drawImage(img, 0, 0, 400, 400);
              }
    
               } if (valSex == 'Woman') {
                   
                   $('.canvas__img img').each(function () { //перебераем все img устанавливаем новый путь. Путь считаем по индексу, по этому нумеровать обязательно по порядку.
   
    $(this).attr('src', function () {
        
          var valSrc = 'img/woman/woman_sweat/' + (($(this).index()) + 1) + '.jpg';
                      return valSrc;
        
    });  
});
              $('#img1').addClass('active'); //устанавливаем класс актив на  первое фото новой одежды.
              
              //загружаем в canvas новые майки
              imgshirt = 'img/woman/woman_sweat/1.jpg';
              img.src = imgshirt; //загружаем новый путь изображения
              // Прорисовываем изображение. 
              img.onload = function () {
                  context.drawImage(img, 0, 0, 400, 400);
              }
    
               } if (valSex == 'Child') {
                   
                         $('.canvas__img img').each(function () { //перебераем все img устанавливаем новый путь. Путь считаем по индексу, по этому нумеровать обязательно по порядку.
   
    $(this).attr('src', function () {
        
          var valSrc = 'img/child/child_sweat/' + (($(this).index()) + 1) + '.jpg';
                      return valSrc;
        
    });  
});
              $('#img1').addClass('active'); //устанавливаем класс актив на  первое фото новой одежды.
              
              //загружаем в canvas новые майки
              imgshirt = 'img/child/child_sweat/1.jpg';
              img.src = imgshirt; //загружаем новый путь изображения
              // Прорисовываем изображение. 
              img.onload = function () {
                  context.drawImage(img, 0, 0, 400, 400);
              }
      
               }
        
          });
          
          
//          поведение для кнопки t-shirt

          
          $(".constructor__style__tshirt").click(function () { // по клику на sweatshirts
               
               if (valSex == 'Man') {        //проверяем, что находится в valSex 
//                   а дальше по накатанной
                  $('.canvas__img img').each(function () { //перебераем все img устанавливаем новый путь. Путь считаем по индексу, по этому нумеровать обязательно по порядку.
   
    $(this).attr('src', function () {
        
          var valSrc = 'img/' + (($(this).index()) + 1) + '.jpg';
                      return valSrc;
        
    });  
});
              $('#img1').addClass('active'); //устанавливаем класс актив на  первое фото новой одежды.
              
              //загружаем в canvas новые майки
              imgshirt = 'img/1.jpg';
              img.src = imgshirt; //загружаем новый путь изображения
              // Прорисовываем изображение. 
              img.onload = function () {
                  context.drawImage(img, 0, 0, 400, 400);
              }
    
               } if (valSex == 'Woman') {
                   
                   $('.canvas__img img').each(function () { //перебераем все img устанавливаем новый путь. Путь считаем по индексу, по этому нумеровать обязательно по порядку.
   
    $(this).attr('src', function () {
        
          var valSrc = 'img/woman/' + (($(this).index()) + 1) + '.jpg';
                      return valSrc;
        
    });  
});
              $('#img1').addClass('active'); //устанавливаем класс актив на  первое фото новой одежды.
              
              //загружаем в canvas новые майки
              imgshirt = 'img/woman/1.jpg';
              img.src = imgshirt; //загружаем новый путь изображения
              // Прорисовываем изображение. 
              img.onload = function () {
                  context.drawImage(img, 0, 0, 400, 400);
              }
    
               } if (valSex == 'Child') {
                   
                         $('.canvas__img img').each(function () { //перебераем все img устанавливаем новый путь. Путь считаем по индексу, по этому нумеровать обязательно по порядку.
   
    $(this).attr('src', function () {
        
          var valSrc = 'img/child/' + (($(this).index()) + 1) + '.jpg';
                      return valSrc;
        
    });  
});
              $('#img1').addClass('active'); //устанавливаем класс актив на  первое фото новой одежды.
              
              //загружаем в canvas новые майки
              imgshirt = 'img/child/1.jpg';
              img.src = imgshirt; //загружаем новый путь изображения
              // Прорисовываем изображение. 
              img.onload = function () {
                  context.drawImage(img, 0, 0, 400, 400);
              }
      
               }
        
          });
          
          


      });
  })(jQuery);
