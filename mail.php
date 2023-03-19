<?php

$method = $_SERVER['REQUEST_METHOD'];

//Script Foreach
$c = true;

$project_name = 'roboxod.ru';
$admin_emails  = [
    'robotohod@yandex.ru',
    'firstrinat@gmail.com'
    ];
$form_subject = 'Пробное занятие';
$message = '<h4>Письмо с сайта Roboxod</h4>';

$params = $method === 'POST' ? $_POST : ($method ===  'GET' ? $_GET : []);
$notAllowedKeys = ["project_name", "admin_email", "form_subject"];

foreach ($params as $key => $value) {
    if(!isset($value) || $value === '' || in_array($key, $notAllowedKeys)) continue;
    if ($key === "Адрес" && $value === "Выбрать адрес") {
        $value = "Не выбран";
    }
    if ($key === "Набор") {
        if ($value === "Выбрать набор") $value = "Не выбран";
        $form_subject = "Покупка набора";
    }
    $message .= "
    " . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
	<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
	<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
	</tr>";
}


$message = "<table style='width: 100%;'>$message</table>";

function adopt($text) {
	return '=?UTF-8?B?'.Base64_encode($text).'?=';
}


$headers = "MIME-Version: 1.0" . PHP_EOL .
"Content-Type: text/html; charset=utf-8" . PHP_EOL;

$result = false;

try {
    foreach ($admin_emails as $admin_email) {
        $result = $result || mail($admin_email, adopt($form_subject), $message, $headers );
    }
} catch (Exception $e) {
    header("HTTP/1.1 500 Server Error");;
    exit();
}
if (!$result) header("HTTP/1.1 500 Server Error");
else header("HTTP/1.1 200 OK");
exit();