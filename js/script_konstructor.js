(function ($) {
    $(document).ready(function () {
        /*выбор активного окна в меню навигации*/

        $(".navigation_li").on('click', function (e) {
            $(".navigation_li").each(function () {
                $(this).removeClass('active');
            });

            $(this).addClass('active');
            let ind = $(this).index();
            let index = ind;

            $(".description_box").each(function () {
                if ($(this).index() != ind) {
                    $(this).addClass('hide');
                } else if ($(this).index() == ind) {
                    $(this).removeClass('hide');
                }

            });

            console.log(index)
            if(ind == 3){
                $('.draw_area').removeClass("hide");
                $('#preview_application_text').removeClass("hide");
            }
            if (index == 2) {

                $(".next_step").addClass('hide');
                $('#collection').empty();

                let collection = [
                    { "fileName": "c11.png" },
                    { "fileName": "c12.png" },
                    { "fileName": "c13.png" },
                    { "fileName": "c14.png" },
                    { "fileName": "c15.png" },
                    { "fileName": "c16.png" }
                ];

                collection.forEach(function (item) {
                    let text = '<img class="collections_preview_images" src="assets/collection1/' + item.fileName + '" />';
                    $('#collection').append(text);

                });
                $('#preview_application_image').removeClass("hide");
                $('.draw_area').removeClass("hide");
                $(".collections_preview_images").on('click', function (e) {
                    console.log($(this).attr('src'));
                    let src = $(this).attr('src');
                    $('#preview_application_image_img').attr('src', src);


                });
            }
        else{$(".next_step").removeClass('hide');}


          


            



        });
        $('.logo_language').click(function(){
     $('.logo_language').each(function () {
                $(this).removeClass('active');
            });

            $(this).addClass('active');
    
     
 });
        /*CANVAS*/
        var example = document.getElementById("example");
        example.width = 380;
        example.height = 400;
        var canvas = example.getContext('2d'); // Контекст
        var pic = new Image();              // "Создаём" изображение
        pic.onload = function () {    // Событие onLoad, ждём момента пока загрузится изображение
            canvas.drawImage(pic, 0, 0, example.width, example.height);  // Рисуем изображение от точки с координатами 0, 0

        }
        pic.src = "assets/tShirts/RoundTshirt/basic_model_construktor1/white-1.png";

        /*section 1 sex_and_style*/

        $(".description_sex_and_style .description_topChoose_li").on('click', function (e) {
            $(".description_sex_and_style .description_topChoose_li").each(function () {
                $(this).removeClass('active');
            });
            $(this).addClass('active');
        });

        $(".description_sex_and_style .description_bottomChoose_li").on('click', function (e) {
            let ind = $(this).index();
            console.log(ind)
            $(".description_sex_and_style .description_bottomChoose_li").each(function () {
                $(this).removeClass('active');
            });
            $(this).addClass('active');



            /*размещение базисной модели*/

            if (ind == 1) {
                canvas.clearRect(0, 0, example.width, example.height);
                pic.src = "assets/sweatshirts/basic_model_construktor1/sweat1.jpg";
                let i = 1;
                $(".preview_smallImages_li img").each(function () {
                    let path = "assets/sweatshirts/basic_model_construktor1/sweat" + i + ".jpg ";
                    $(this).attr("src", path);
                    i++;
                });


            } else if (ind == 0) {
                canvas.clearRect(0, 0, example.width, example.height);
                pic.src = "assets/tShirts/RoundTshirt/basic_model_construktor1/white-1.png";
                let i = 1;
                $(".preview_smallImages_li img").each(function () {
                    let path = "assets/tShirts/RoundTshirt/basic_model_construktor1/white-" + i + ".png ";
                    $(this).attr("src", path);
                    i++;
                });

            }

        });
        $(".preview_smallImages_li img").on('click', function (e) {
            canvas.clearRect(0, 0, example.width, example.height);
            let path = $(this).attr("src");
            pic.src = path;
        });

        /*END section 1 sex_and_style*/

        /*section 2 type_and_color*/

        $(".description_type_and_color .description_topChoose_li").on('click', function (e) {
            $(".description_type_and_color .description_topChoose_li").each(function () {
                $(this).removeClass('active');
            });
            $(this).addClass('active');

            let ind = $(this).index();
            if (ind == 1) {
                canvas.clearRect(0, 0, example.width, example.height);
                pic.src = "assets/tShirts/VtShirt/basic_model_konstruktor1/red-1.svg";
                let i = 1;
                $(".preview_smallImages_li img").each(function () {
                    let path = "assets/tShirts/VtShirt/basic_model_konstruktor1/red-" + i + ".png ";
                    $(this).attr("src", path);
                    i++;
                });


            } else if (ind == 0) {
                canvas.clearRect(0, 0, example.width, example.height);
                pic.src = "assets/tShirts/RoundTshirt/basic_model_construktor1/white-1.png";
                let i = 1;
                $(".preview_smallImages_li img").each(function () {
                    let path = "assets/tShirts/RoundTshirt/basic_model_construktor1/white-" + i + ".png ";
                    $(this).attr("src", path);
                    i++;
                });

            }
        });
       
        /*END section 2 type_and_color*/

        /*section 3 image*/

        let count = 0;
        $(".description_image .description_topChoose_li").on('click', function (e) {

            let ind = $(this).index();
            $(".description_image .description_topChoose_li").each(function () {
                $(this).removeClass('active');
            });
            $(this).addClass('active');


            $(".telecharger_wrapper").each(function () {
                if ($(this).index() != ind) {
                    $(this).addClass('hide');
                } else if ($(this).index() == ind) {
                    $(this).removeClass('hide');
                }

            });
        });

        /*UPLOAD*/


        function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {

                    $('#userFoto').attr('src', e.target.result).removeClass("hide");
                }

                reader.readAsDataURL(input.files[0]);
            }
        }

        $("#imgInp").change(function () {
            readURL(this);
        });




        /*END UPLOAD*/

        /*instagram */
        /*$("#description_image_instagram").click(function(){*/
        /*access_token=1464468331.500a2fa.acb5ee4886c94a82b8e98d0b1090e44d*/
        /*
        https://instagram.com/oauth/authorize/?client_id=500a2fa049384949b9e391b0af36d7a0&redirect_uri=http://ls-web.ru&response_type=token 
        */
        /*var tok = '1464468331.500a2fa.acb5ee4886c94a82b8e98d0b1090e44d',
            username = 'ya_latan', // имя пользователя
            kolichestvo = 4;
         
        $.ajax({ // первый ajax запрос возвратит нам ID пользователя
            url: 'https://api.instagram.com/v1/users/search',
            dataType: 'jsonp',
            type: 'GET',
            data: {access_token: tok, q: username}, // по сути это просто поиск пользователя по его имени
            success: function(result){
                console.log(result);
                $.ajax({
                    url: 'https://api.instagram.com/v1/users/' + result.data[0].id + '/media/recent', // указываем ID первого найденного
                    dataType: 'jsonp',
                    type: 'GET',
                    data: {access_token: tok, count: kolichestvo},
                    success: function(result2){
                        console.log(result2);
                        for(x in result2.data){
                            $('ul').append('<li><img src="'+result2.data[x].images.thumbnail.url+'"></li>');  
                        }
                        },
                    error: function(result2){
                        console.log(result2);
                    }
                });
            },
            error: function(result){
                console.log(result);
            }
        });
        });
        ////////
        /*Collections*/
        $(".collections_names_li").on('click', function (e) {
            $(".collections_names_li").each(function () {
                $(this).removeClass('collections_active');
            });

            $(this).addClass('collections_active');
            let ind = $(this).index();
            index = ind;

            if (index == 0) {

                $('#collection').empty();
                let collection = [
                    { "fileName": "c11.png" },
                    { "fileName": "c12.png" },
                    { "fileName": "c13.png" },
                    { "fileName": "c14.png" },
                    { "fileName": "c15.png" },
                    { "fileName": "c16.png" }
                ];

                collection.forEach(function (item) {
                    let text = '<img alt ="no image" class="collections_preview_images" src="assets/collection1/' + item.fileName + '" />';
                    $('#collection').append(text);
                })
            };

            if (index == 1) {

                $('#collection').empty();
                let collection = [
                    { "fileName": "c11.png" },
                    { "fileName": "c12.png" },
                    { "fileName": "c13.png" },
                    { "fileName": "c14.png" },
                    { "fileName": "c15.png" },
                    { "fileName": "c16.png" }
                ];

                collection.forEach(function (item) {
                    let text = '<img alt ="no image" class="collections_preview_images" src="assets/collection2/' + item.fileName + '" />';
                    $('#collection').append(text);
                })
            };
            if (index == 2) {

                $('#collection').empty();
                let collection = [
                    { "fileName": "c11.png" },
                    { "fileName": "c12.png" },
                    { "fileName": "c13.png" },
                    { "fileName": "c14.png" },
                    { "fileName": "c15.png" },
                    { "fileName": "c16.png" }
                ];

                collection.forEach(function (item) {
                    let text = '<img alt ="no image" class="collections_preview_images" src="assets/collection3/' + item.fileName + '" />';
                    $('#collection').append(text);
                })
            };

            if (index == 3) {

                $('#collection').empty();
                let collection = [
                    { "fileName": "c11.png" },
                    { "fileName": "c12.png" },
                    { "fileName": "c13.png" },
                    { "fileName": "c14.png" },
                    { "fileName": "c15.png" },
                    { "fileName": "c16.png" }
                ];

                collection.forEach(function (item) {
                    let text = '<img alt ="no image" class="collections_preview_images" src="assets/collection4/' + item.fileName + '" />';
                    $('#collection').append(text);
                })
            };




            $(".collections_preview_images").on('click', function (e) {
                console.log($(this).attr('src'));
                let src = $(this).attr('src');
                $('#preview_application_image_img').attr('src', src);


            });
        });



        /*end collections*/
        $(".description_image .description_bottomChoose_li").on('click', function (e) {

            $(".description_image .description_bottomChoose_li").each(function () {
                $(this).removeClass('active');
            });
            $(this).addClass('active');
        });
        /*END section 3 image*/







        /*section 4 input text*/

        /*делаем красивый текст в select*/
        let classSelectOption = $("#select option:selected").attr('class');
        let classSelectSize = $("#size option:selected").val();
        $('select').addClass(classSelectOption);
        $("select").change(function () {
            let classSelectOption1 = $("#select option:selected").attr('class');
            $('select').removeAttr('class');
            $('select').addClass(classSelectOption1);
            console.log(classSelectOption1);
            $("#inputText").removeAttr('class');
            $("#inputText").addClass(classSelectOption1);
        });
        $("#size").change(function () {
            let classSelectSize1 = $("#size option:selected").val();
            $("#inputText").css("font-size", classSelectSize1 + "px");
        });
        /*изменяем поле ввода*/
        let colorText;
        $('#description_text_choose_color svg').on('click', function () {

            colorText = $(this).css('fill');

            $("#inputText").css("color", colorText);
        });
        /*изменяем поле ввода*/
        let textForApplication;
        $("#inputText").on('input', function () {
            let classSelectOption1 = $("#select option:selected").attr('class');
            $("#inputText").addClass(classSelectOption1);

            let classSelectSize1 = $("#size option:selected").val();
            $("#inputText").css("font-size", classSelectSize1 + "px");



            textForApplication = $(this).val();
            console.log(textForApplication);

        });
        $(".btn_set_textApplication").on('click', function () {
            let classSelectOption1 = $("#select option:selected").attr('class');
            let classSelectSize1 = $("#size option:selected").val();
            $("#preview_application_text").css("color", colorText);
            $('#preview_application_text').addClass(classSelectOption1);
            $('#preview_application_text').css("font-size", classSelectSize1 + "px");
            console.log(textForApplication);

            $('#preview_application_text span').text(textForApplication);

        });

/*перемещение текста по рисунку*/
$("#preview_application_text").on('click', function(){
    $("#preview_application_text").addClass('preview_application_text_content')



});




        $("#preview_application_text").mousedown(function (e) {
            let x_start = e.pageX;
            let y_start = e.pageY;
            let x_end;
            let y_end;

            $(".preview_bigImage").mouseup(function (e) {
                x_end = e.pageX;
                y_end = e.pageY;
                console.log(x_end, y_end);

                /*координаты холста*/

                let x2 = $(".preview_bigImage").position().left + $(".preview_bigImage").width();

                let y2 = $(".preview_bigImage").position().top + $(".preview_bigImage").height();
                console.log(x2, y2);
                let x = x_end - $("#preview_application_text").width() / 2;
                let y = y_end - $("#preview_application_text").height() / 2;
                if (x_end < x2) {

                    $('#preview_application_text').css("left", x + "px");
                }
                if (y_end < y2) {
                    $('#preview_application_text').css("top", y + "px");
                }




            });

        });

        /*END section 4 input text*/


        /*section 5 size and amount */

        $(".description_size_and_amount .description_topChoose_li").on('click', function (e) {
            $(".description_size_and_amount .description_topChoose_li").each(function () {
                $(this).removeClass('active');
            });
            $(this).addClass('active');
        });




        /*форма обратной связи */
        $('#lp-fb1').wiFeedBack({
            fbScript: 'blocks/wi-feedback.php',
            fbLink: '.lp-fb1-link',
            fbColor: 'rgba(65, 107, 87, 0.75);'
        });
        $('.form_for_save_inputs').after('<span class="span_required">*</span>');
        $("#confirm_1").after('<label for="confirm_1" class="form_for_save_label_checkbox">Text text text</label>');
        $("#confirm_2").after('<label for="confirm_2" class="form_for_save_label_checkbox">not robot</label>');
        /////////////////////////




/*IMAGE TOOLS*/
$('#magnifier').on('click', function(){
    $('#example').addClass('magnifier');
    $('#example').on('click', function(){
        $('#example').removeClass('magnifier');  
    });
});



    });
})(jQuery);


/*
document.addEventListener("DOMContentLoaded", function ready() {
    function addActive(event) {
        console.log(event);
        let listClasses = document.getElementsByClassName(event);
        console.log(listClasses);
        for(let i=0; i<listClasses.length; i++ ){
            listClasses[i].classList.remove("active");
           };
        let element = event.target.id;
        document.getElementById(element).classList.add("active");

    };



    document.getElementsByClassName("description_topChoose_li").onclick = function () { addActive();};

});*/








/*
window.onload = function() {
    var drawingCanvas = document.getElementById('smile');
    if(drawingCanvas && drawingCanvas.getContext) {
     var context = drawingCanvas.getContext('2d');
     // Создаем объект изображения
var img = new Image();

// Привязываем функцию к событию onload
// Это указывает браузеру, что делать, когда изображение загружено
img.onload = function() {
	context.drawImage(img, 10, 10);
};

// Загружаем файл изображения
img.src = "assets/collection1/ts_big_white_round.png";
    }
   }*/
