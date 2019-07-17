//Функция- Загрузка фотографии на страницу

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
let  userFoto = document.getElementById("userFoto");
            userFoto.setAttribute('src', e.target.result);
            userFoto.classList.remove("hide");
        }

        reader.readAsDataURL(input.files[0]);
    }
}
/////////////////////////////////////


//
function getJsonData () {
       
    let newNote = {
      sex: document.querySelector('input[class="sex"]:checked').getAttribute("data-sex"),
      model: document.querySelector('input[class="model"]:checked').getAttribute("data-model"),
      cutout: document.querySelector('input[class="cutout"]:checked').getAttribute("data-cutout")
      
    };
    let path1 = "assets/models/"+ newNote.sex+"/"+ newNote.model+"/"+ newNote.cutout +"/"+"fotoName.png";
    newNote.path1 = path1;
  
};
////////////////////////////////////////





(function ($) {
    $(document).ready(function () {
        // Переменная куда будут располагаться данные файлов
        let arrJson={};
        $.getJSON('../php/notes.json', function(data) { 
            arrJson = data;
            console.log("get json", arrJson);
        });
var files;
 
// Вешаем функцию на событие
// Получим данные файлов и добавим их в переменную
 
$('input[type=file]').change(function(){
    files = this.files;
    console.log(files);
    readURL(this);
});
// Вешаем функцию ан событие click и отправляем AJAX запрос с данными файлов
 let models= [];


//функция - отправка данных на сервер
let scrImage;

$('.submit.button').click(function( event ){
    event.stopPropagation(); // Остановка происходящего
    event.preventDefault();  // Полная остановка происходящего
 
    // Создадим данные формы и добавим в них данные файлов из files
 
    var data = new FormData();
    $.each( files, function( key, value ){
        data.append( key, value );
        
    });
 
    // Отправляем запрос
    $.when(
        $.ajax({
            url:     './uploadFiles.php?uploadfiles',
            type:     "POST", //метод отправки
           cache: false,
           dataType: 'json',
            data: data,  // Сеарилизуем объект
            processData: false, // Не обрабатываем файлы (Don't process the files)
            contentType: false, // Так jQuery скажет серверу что это строковой запрос
            success: function( respond, textStatus, jqXHR ) { //Данные отправлены успешно
                
                // Если все ОК
     
                if( typeof respond.error === 'undefined' ){
                    // Файлы успешно загружены, делаем что нибудь здесь
     
                    // выведем пути к загруженным файлам в блок '.ajax-respond'
     
                    var files_path = respond.files;
                   let  pathnew = {"path":files_path};
                   
                    var html = '';
                    $.each( files_path, function( key, val ){ html += val +'<br>'; } )
                    $('.ajax-respond').html( html );
                    console.log(pathnew.path[0]);
               let t = pathnew.path[0].indexOf("php");
               scrImage = "../" + pathnew.path[0].substring(t, pathnew.path[0].length);
                    

                }
                else{
                    console.log('ОШИБКИ ОТВЕТА сервера: ' + respond.error );
                }
            },
            error: function(jqXHR, textStatus, errorThrown) { // Данные не отправлены
                $('.ajax-respond').html('Ошибка. Данные не отправлены.ОШИБКИ AJAX запроса:  $`{textStatus}`');
            }
         })
    
    ).then(function(){
        console.log(scrImage);

        let newNote = {
            sex: document.querySelector('input[class="sex"]:checked').getAttribute("data-sex"),
            model: document.querySelector('input[class="model"]:checked').getAttribute("data-model"),
            cutout: document.querySelector('input[class="cutout"]:checked').getAttribute("data-cutout"),
            path1: scrImage
          };
          
         arrJson.push(newNote);
         console.log("arrJson", arrJson);
         function respond() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {} else {}
          }
      /*  sendAjaxForm('.ajax-respond2', jsonData, './php/file.php?file');*/
      if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
          } else { // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
          }
          var myJsonString = JSON.stringify(arrJson);
          xmlhttp.onreadystatechange = respond;
          xmlhttp.open("POST", "php/file.php", true);
          xmlhttp.send(myJsonString);

    });
    
   
    
  
    
});   
   
});
})(jQuery);

var app = angular.module('note', []);
app.controller('noteCtrl',
  function noteCtrl($scope, $http) {

    //получаю данные из json для отображения списка titles       
    $http.get('php/notes.json').then(function (res) {
        $scope.notes = res.data;
      }).catch(function (err) {
        $scope.reqStatus = err.status;
        $scope.reqStatusText = err.statusText;
      });
      ////////////////////
  });