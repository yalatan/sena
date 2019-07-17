<?php
/*
$uploaddir = './uploads/';
$uploadfile = $uploaddir . basename($_FILES['userfile']['name']);

echo '<pre>';
if (move_uploaded_file($_FILES['userfile']['tmp_name'], $uploadfile)) {
    echo "Файл корректен и был успешно загружен.\n";
} else {
    echo "Возможная атака с помощью файловой загрузки!\n";
}

echo 'Некоторая отладочная информация:';
print_r($_FILES);

print "</pre>";

?>
<?php

foreach ($_FILES["pictures"]["error"] as $key => $error) {
    if ($error == UPLOAD_ERR_OK) {
        $tmp_name = $_FILES["pictures"]["tmp_name"][$key];
        // basename() может спасти от атак на файловую систему;
        // может понадобиться дополнительная проверка/очистка имени файла
        $name = basename($_FILES["pictures"]["name"][$key]);
        move_uploaded_file($tmp_name, "data/$name");
    }
}*/


 
 
 
 // Здесь нужно сделать все проверки передаваемых файлов и вывести ошибки если нужно
  
 // Переменная ответа
  
 $data = array();
  
 if( isset( $_GET['uploadfiles'] ) ){
     $error = false;
     $files = array();
  
     $uploaddir = './php/uploads/'; // . - текущая папка где находится submit.php
  
     // Создадим папку если её нет
  
     if( ! is_dir( $uploaddir ) ) mkdir( $uploaddir, 0777 );
  
     // переместим файлы из временной директории в указанную
     foreach( $_FILES as $file ){
         if( move_uploaded_file( $file['tmp_name'], $uploaddir . basename($file['name']) ) ){
             $files[] = realpath( $uploaddir . $file['name'] );
         }
         else{
             $error = true;
         }
     }
  
     $data = $error ? array('error' => 'Ошибка загрузки файлов.') : array('files' => $files );
  
     echo json_encode( $data );
 }
 ?>