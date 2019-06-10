
<?php
 /*$filename = $img['tmp_name'];*/
// Пути загрузки файлов
$path = 'imageUser/';
$tmp_path = 'imageUser/';
// Массив допустимых значений типа файла
$types = array('image/gif', 'image/png', 'image/jpeg');
// Максимальный размер файла
$size = 1024000;
 
// Обработка запроса
if ($_SERVER['REQUEST_METHOD'] == 'POST')
{
 // Проверяем тип файла
 if (!in_array($_FILES['picture']['type'], $types))
 die('File type is not correct. <a href="?">Try another file?</a>');
 
 // Проверяем размер файла
 if ($_FILES['picture']['size'] > $size)
 die('Too big file. <a href="?">Try another file?</a>');
 
 // Загрузка файла и вывод сообщения

else  $path.$_FILES['picture']['name'];
/* if (!@copy($_FILES['picture']['tmp_name'], $path . $_FILES['picture']['name']))
 echo 'Что-то пошло не так';
 else
 $f="path/".$_FILES["filename"]["name"];
*/
 /*echo 'Загрузка удачна <a href="' . $path . $_FILES['picture']['name'] . '">Посмотреть</a> ' ;*/
}
 
?>