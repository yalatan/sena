let models = [{
        sex: "man",
        style: "tshirts",
        cutoutType: "round",
        color: "black",
        type: "jpg"
    },
    {
        sex: "man",
        style: "tshirts",
        cutoutType: "round",
        color: "turquoise",
        type: "jpg"
    },
    {
        sex: "man",
        style: "tshirts",
        cutoutType: "round",
        color: "white_and_black",
        type: "png"
    }
];
let model_man_tshirts_vthirt = [{
        color: "green",
        type: "jpg"
    },
    {
        color: "red",
        type: "png"
    },
    {
        color: "white",
        type: "jpg"
    },

];

(function ($) {
    $(document).ready(function () {
        var cutout_Section2;
        var image_application_method;
        var text_application_method;
        let index;
        /*CANVAS*/
        //  // Создаем объект изображения
        var pic = new Image();
        //  //создаём переменную для фото майки
        let srcPic = "assets/man/tshirts/round/model_white_and_black/1.png";
        var canvas = new fabric.Canvas('example');
        fabric.Image.fromURL(srcPic, function (pic) {

            pic.scale(0.85);
            pic.set('selectable', false);
            canvas.add(pic);
            canvas.renderAll();

        });

        function setSrcCanvas(src, ext) {
            canvas.clear();
            srcPic = src + 1 + '.' + ext;
            fabric.Image.fromURL(srcPic, function (pic) {
                pic.scale(0.85);
                pic.set('selectable', false);
                canvas.add(pic);
                canvas.renderAll();
            });
            let i = 1;
            $(".preview_smallImages_li img").each(function () {
                let path = src + i + "." + ext;
                $(this).attr("src", path);
                i++;
            });
        };
        setSrcCanvas("assets/man/tshirts/round/model_white_and_black/", 'png');


        /*выбор активного окна в меню навигации*/

        $(".navigation_li").on('click', function (e) {
            $(".navigation_li").each(function () {
                $(this).removeClass('active');
            });

            $(this).addClass('active');
            let ind = $(this).index();
            index = ind;

            $(".description_box").each(function () {
                if ($(this).index() != ind) {
                    $(this).addClass('hide');
                } else if ($(this).index() == ind) {
                    $(this).removeClass('hide');
                }

            });
            if (ind == 3) {
                $('.draw_area').removeClass("hide");
                $('#preview_application_text').removeClass("hide");
            }
            if (index == 2) {

                $(".next_step").addClass('hide');
                $('#collection').empty();

                let collection = [{
                        "fileName": "c11.png"
                    },
                    {
                        "fileName": "c12.png"
                    },
                    {
                        "fileName": "c13.png"
                    },
                    {
                        "fileName": "c14.png"
                    },
                    {
                        "fileName": "c15.png"
                    },
                    {
                        "fileName": "c16.png"
                    }
                ];

                collection.forEach(function (item) {
                    let text = '<img class="collections_preview_images" src="assets/collection1/' + item.fileName + '" />';
                    $('#collection').append(text);

                });
                $('#preview_application_image').removeClass("hide");
                $('.draw_area').removeClass("hide");
                $(".collections_preview_images").on('click', function (e) {

                    let src = $(this).attr('src');
                    var imgObj = new Image();
                    imgObj.src = src;
                    imgObj.onload = function () {
                        var image = new fabric.Image(imgObj);
                        image.set({
                            angle: 0,
                            padding: 10,
                            cornersize: 10,
                            height: 110,
                            width: 110,
                        });
                        canvas.centerObject(image);
                        canvas.remove(canvas.getActiveObject());

                        canvas.add(image).setActiveObject(image);
                        canvas.renderAll();
                    }


                });
            } else {
                $(".next_step").removeClass('hide');
            }
        });

        $('.logo_language').click(function () {
            $('.logo_language').each(function () {
                $(this).removeClass('active');
            });
            $(this).addClass('active');
        });

        /*section 1 sex_and_style*/
        let srcCanvas;
        let activeSex;
        let activeStyle;

        function sex_and_style() {
            if (activeSex == "Man" || activeSex == undefined) {
                if (activeStyle == undefined || activeStyle == "T-shirt") {
                    setSrcCanvas("assets/man/tshirts/round/model_white_and_black/", 'png');
                } else {
                    setSrcCanvas("assets/man/sweat/hood/model_white/", 'jpg');
                }
            } else if (activeSex == "Woman") {
                if (activeStyle == undefined || activeStyle == "T-shirt") {
                    setSrcCanvas("assets/woman/tshirts/round/model_white/", 'jpg');
                } else {
                    setSrcCanvas("assets/woman/sweat/hood/model_pink/", 'jpg');
                }
            } else if (activeSex == "Child") {
                if (activeStyle == undefined || activeStyle == "T-shirt") {
                    setSrcCanvas("assets/child/tshirts/round/model_white/", 'jpg');
                } else {
                    setSrcCanvas("assets/child/sweat/hood/model_white/", 'jpg');
                }
            }
        };

        $(".description_sex_and_style .description_topChoose_li").on('click', function (e) {
            $(".description_sex_and_style .description_topChoose_li").each(function () {
                $(this).removeClass('active');
            });
            $(this).addClass('active');
            activeSex = $(this).text();
            sex_and_style();


        });

        $(".description_sex_and_style .description_bottomChoose_li").on('click', function (e) {
            let ind = $(this).index();
            console.log(ind)
            $(".description_sex_and_style .description_bottomChoose_li").each(function () {
                $(this).removeClass('active');
            });
            $(this).addClass('active');
            activeStyle = $(this).text();
            sex_and_style();


        });

        $(".preview_smallImages_li img").on('click', function (e) {
            canvas.clear();
            srcPic = $(this).attr("src");
            fabric.Image.fromURL(srcPic, function (pic) {
                pic.scale(0.85);
                pic.set('selectable', false);
                canvas.add(pic);
            });

        });

        /*END section 1 sex_and_style*/

        /*section 2 type_and_color*/

        $(".description_type_and_color .description_topChoose_li").on('click', function (e) {
            $(".description_type_and_color .description_topChoose_li").each(function () {
                $(this).removeClass('active');
            });
            $(this).addClass('active');

            let ind = $(this).index();
            if (ind == 0) {
                cutout_Section2 = "Round";
                sex_and_style();
                $(".models_men_tshirts_round").removeClass("hide");
                $(".models_men_tshirts_vshirt").addClass("hide");
            } else if (ind == 1) {
                cutout_Section2 = "V-Shaped";
                if (activeSex == "Man" || activeSex == undefined) {
                    if (activeStyle == undefined || activeStyle == "T-shirt") {

                        setSrcCanvas("assets/man/tshirts/vshirt/model_white/", 'jpg');
                    } else {
                        setSrcCanvas("assets/man/sweat/sweat/model_white/", 'jpg');
                    }
                } else if (activeSex == "Woman") {
                    if (activeStyle == undefined || activeStyle == "T-shirt") {
                        setSrcCanvas("assets/woman/tshirts/vshirt/model_white/", 'jpg');
                    } else {
                        setSrcCanvas("assets/woman/sweat/sweat/model_white/", 'jpg');
                    }
                } else if (activeSex == "Child") {
                    if (activeStyle == undefined || activeStyle == "T-shirt") {
                        setSrcCanvas("assets/child/tshirts/vshirt/model_white/", 'jpg');
                    } else {
                        setSrcCanvas("assets/child/sweat/sweat/model_green/", 'jpg');
                    }
                };
                $(".models_men_tshirts_round").addClass("hide");
                $(".models_men_tshirts_vshirt").removeClass("hide");
            }
        });
        $(".description_type_and_color .description_color svg").on('click', function (e) {
            let color = $(this).index();
            let src = srcPic;
            src = src.split("");
            let ind = src.indexOf("_");
            src = src.slice(0, ind + 1).join("");
            if (activeSex == "Man" || activeSex == undefined && activeStyle == undefined ||
                activeStyle == "T-shirt") {
                if ($("#description_type_round").hasClass('active')) {
                    setSrcCanvas(src + models[color]["color"] + "/", models[color]["type"]);
                } else if ($("#description_type_vShaped").hasClass('active')) {
                    setSrcCanvas(src + model_man_tshirts_vthirt[color]["color"] + "/", model_man_tshirts_vthirt[color]["type"]);
                }

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

        var image;
        var obj;

        function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {

                    $('#userFoto').attr('src', e.target.result).removeClass("hide");
                    var img = new Image();
                    img.onload = function () {
                        image = new fabric.Image(img, {
                            left: 100,
                            top: 60,
                            scaleX: 0.3,
                            scaleY: 0.3
                        });
                        canvas.centerObject(image);
                        canvas.remove(canvas.getActiveObject());

                        canvas.add(image).setActiveObject(image);
                        canvas.renderAll();
                    }
                    img.src = e.target.result;

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
                let collection = [{
                        "fileName": "c11.png"
                    },
                    {
                        "fileName": "c12.png"
                    },
                    {
                        "fileName": "c13.png"
                    },
                    {
                        "fileName": "c14.png"
                    },
                    {
                        "fileName": "c15.png"
                    },
                    {
                        "fileName": "c16.png"
                    }
                ];

                collection.forEach(function (item) {
                    let text = '<img alt ="no image" class="collections_preview_images" src="assets/collection1/' + item.fileName + '" />';
                    $('#collection').append(text);
                })
            };

            if (index == 1) {

                $('#collection').empty();
                let collection = [{
                        "fileName": "c11.png"
                    },
                    {
                        "fileName": "c12.png"
                    },
                    {
                        "fileName": "c13.png"
                    },
                    {
                        "fileName": "c14.png"
                    },
                    {
                        "fileName": "c15.png"
                    },
                    {
                        "fileName": "c16.png"
                    }
                ];

                collection.forEach(function (item) {
                    let text = '<img alt ="no image" class="collections_preview_images" src="assets/collection2/' + item.fileName + '" />';
                    $('#collection').append(text);
                })
            };
            if (index == 2) {

                $('#collection').empty();
                let collection = [{
                        "fileName": "c11.png"
                    },
                    {
                        "fileName": "c12.png"
                    },
                    {
                        "fileName": "c13.png"
                    },
                    {
                        "fileName": "c14.png"
                    },
                    {
                        "fileName": "c15.png"
                    },
                    {
                        "fileName": "c16.png"
                    }
                ];

                collection.forEach(function (item) {
                    let text = '<img alt ="no image" class="collections_preview_images" src="assets/collection3/' + item.fileName + '" />';
                    $('#collection').append(text);
                })
            };

            if (index == 3) {

                $('#collection').empty();
                let collection = [{
                        "fileName": "c11.png"
                    },
                    {
                        "fileName": "c12.png"
                    },
                    {
                        "fileName": "c13.png"
                    },
                    {
                        "fileName": "c14.png"
                    },
                    {
                        "fileName": "c15.png"
                    },
                    {
                        "fileName": "c16.png"
                    }
                ];

                collection.forEach(function (item) {
                    let text = '<img alt ="no image" class="collections_preview_images" src="assets/collection4/' + item.fileName + '" />';
                    $('#collection').append(text);
                })
            };




            $(".collections_preview_images").on('click', function (e) {

                let src = $(this).attr('src');
                var imgObj = new Image();
                imgObj.src = src;
                imgObj.onload = function () {
                    image = new fabric.Image(imgObj);
                    image.set({
                        angle: 0,
                        padding: 10,
                        cornersize: 10,
                        height: 110,
                        width: 110,
                    });
                    canvas.centerObject(image);
                    canvas.remove(canvas.getActiveObject());

                    canvas.add(image).setActiveObject(image);
                    canvas.renderAll();
                }
            });
        });



        /*end collections*/
        $(".description_image .description_bottomChoose_li").on('click', function (e) {

            $(".description_image .description_bottomChoose_li").each(function () {
                $(this).removeClass('active');
            });
            $(this).addClass('active');
            image_application_method = $(this).text();
        });
        /*END section 3 image*/
        /*section 4 input text*/

        /*делаем красивый текст в select*/
        let fontFamily;
        let fontsize;
        let classSelectOption = $("#select option:selected").attr('class');
        let classSelectSize = $("#size option:selected").val();
        $('select').addClass(classSelectOption);
        $("select").change(function () {
            let classSelectOption1 = $("#select option:selected").attr('class');
            $('select').removeAttr('class');
            $('select').addClass(classSelectOption1);

            fontFamily = classSelectOption1;
            $("#inputText").removeAttr('class');
            $("#inputText").addClass(classSelectOption1);
        });
        $("#size").change(function () {
            let classSelectSize1 = $("#size option:selected").val();
            $("#inputText").css("font-size", classSelectSize1 + "px");
            fontsize = classSelectSize1;
        });
        /*изменяем поле ввода*/
        let colorText;
        $(".text_bold").on('click', function () {
            $("#inputText").toggleClass("bold")
        });

        $('#description_text_choose_color svg').on('click', function () {

            colorText = $(this).css('fill');

            $("#inputText").css("color", colorText);
        });
        /*изменяем поле ввода*/
        let textForApplication;
        let boldText;
        $("#inputText").on('input', function () {

            let classSelectOption1 = $("#select option:selected").attr('class');
            $("#inputText").addClass(classSelectOption1);

            let classSelectSize1 = $("#size option:selected").val();
            $("#inputText").css("font-size", classSelectSize1 + "px");

            textForApplication = $(this).val();
        });



        $(".btn_set_textApplication").on('click', function () {
            colorText = $("#inputText").css("color");
            boldText = $("#inputText").css("font-weight");
            if(fontsize == undefined){fontsize = "12px"}
            var textbox = new fabric.IText(textForApplication, {
                left: 50,
                top: 50,
                width: 150,
                fontFamily: fontFamily,
                fontSize:  fontsize + "",
                fill: colorText + "",
                fontWeight: boldText + "",
                
            });
            canvas.add(textbox).setActiveObject(textbox);
            canvas.renderAll();
        });
        $('.btn_del_textApplication').on('click', function () {
            canvas.remove(canvas.getActiveObject());
        });
        $(".description_text .description_bottomChoose_li").on('click', function (e) {

            $(".description_text .description_bottomChoose_li").each(function () {
                $(this).removeClass('active');
            });
            $(this).addClass('active');
            text_application_method = $(this).text();
        });
  /*END section 4 input text*/

        /*section 5 size and amount */

        $(".description_size_and_amount .description_topChoose_li").on('click', function (e) {
            $(".description_size_and_amount .description_topChoose_li").each(function () {
                $(this).removeClass('active');

            });

            $(this).addClass('active');
            let ind = $(this).index();
            let i = 0;

            $(".description_size_and_amount_input_number").each(function () {
                $(this).removeAttr("disabled");
                if (i != ind) {
                    $(this).attr("disabled", "disabled");
                }
                i++;
            });
        });
        ////////////////////////////
        /*result popup*/
        $('.next_step_button').click(function () { //по клику на save
            var object = canvas.toObject(); //достаём содержимое canvas и конверитруем в объект 
            var canvas2 = new fabric.StaticCanvas('popup__canvas'); //создаём новый canvas
            canvas2.loadFromJSON(object); // переписываем содержимое canvas в canvas 2

            //в это же время забераем значения для попапа и выводим их в попап

            if (activeSex == undefined) {
                activeSex = "Man"
            }
            if (activeStyle == undefined) {
                activeStyle = "T-Shirt"
            }
            if (cutout_Section2 == undefined) {
                cutout_Section2 = "Round"
            }
            if (image_application_method == undefined) {
                image_application_method = "Seridraphie"
            }
            if (text_application_method == undefined) {
                text_application_method = "Seridraphie"
            }
            $('.result__sex').text(activeSex); //записываем выбранный пол
            $('.result__style').text(activeStyle); //записываем выбранный стиль
            $('.result__cutout').text(cutout_Section2);
            $('.result__image_application_method').text(image_application_method);
            $('.result__text_application_method').text(text_application_method);
            //перебираем выбранные размеры и записываем значение тех,, у которых класс active в массив valSize
            $(".description_size_and_amount_input_number").each(function () {
                let id = "#result__amount" + $(this).index();
                $(id).text($(this).val());
            });
        });
        //    скачиваем готовое изображение

        $('#download__pdf').click(function () {
            $('#example').get(0).toBlob(function (blob) {
                saveAs(blob, 'myIMG.png');
            })
        });

        /*форма обратной связи */
    $('#lp-fb1').wiFeedBack({
            fbScript: 'blocks/wi-feedback.php',
            fbLink: '.lp-fb1-link',
            fbColor: '#EA6C18;'
        });
        $('.form_for_save_inputs').after('<span class="span_required">*</span>');
        $("#confirm_1").after('<label for="confirm_1" class="form_for_save_label_checkbox">Text text text</label>');
        $("#confirm_2").after('<label for="confirm_2" class="form_for_save_label_checkbox">not robot</label>');
        /////////////////////////
        
        












        function saveImage() {
            var dataURL = canvas.toDataURL();
            $.ajax({
                type: "POST",
                url: "script.php",
                data: { 
                   imgBase64: dataURL
                }
              }).done(function(o) {
                console.log('saved'); 
                // If you want the file to be visible in the browser 
                // - please modify the callback in javascript. All you
                // need is to return the url to the file, you just saved 
                // and than put the image in your browser.
              });
          };

        /*IMAGE TOOLS*/
        $('#magnifier').on('click', function () {
            $('#example').addClass('magnifier');
            $('#example').on('click', function () {
                $('#example').removeClass('magnifier');
            });
        });
    });
})(jQuery);



document.addEventListener("DOMContentLoaded", function ready() {
            document.querySelector('#chooseColor').addEventListener('click', function () {
                this.classList.toggle('chooseColor_active');

                if (document.querySelector('#chooseColor').classList.contains('chooseColor_active')) {
                    document.getElementById('color_picker').innerHTML = '<div id="color-picker" class="cp-default"> <div class="picker-wrapper"> <div id="picker" class="picker"></div>' +
                        '<div id="picker-indicator" class="picker-indicator"></div>' +
                        '</div> <div class="pcr-wrapper">  <div id="pcr" class="pcr"></div>   <div id="pcr-indicator" class="pcr-indicator"></div>' +
                        '</div>     </div>';
                    document.getElementById('color-picker').style.top = '0px';
                    document.getElementById('color-picker').style.left = '0px';

                    cp = ColorPicker(document.getElementById('pcr'), document.getElementById('picker'),
                        function (hex, mousePicker, mousepcr) {
                            currentColor = hex;
                            ColorPicker.positionIndicators(
                                document.getElementById('pcr-indicator'),
                                document.getElementById('picker-indicator'),
                                mousepcr, mousePicker);
                            document.querySelector('#picker').addEventListener('click', function () {
                                document.getElementById("inputText").style.color = hex;

                            });
                        });
                    cp.setHex('#D4EDFB');
                } else {
                    document.getElementById('color_picker').innerHTML = " ";
                }
            });
});
