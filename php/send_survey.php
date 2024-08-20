<?php

$token = "7090713063:AAHAnxgBAXscTYjc6GgfH6vsOCVdKtz4v6s";
$chat_id = "-4292609130";


$rooms = ($_POST['rooms']);
$additional = ($_POST['additional']);
$sum = ($_POST['sum']);

$date = ($_POST['date']);
$time = ($_POST['time']);

$phone = ($_POST['phone']);
$address = ($_POST['address']);
$message = ($_POST['message']);

$arr = array(
    'Сайт:' => 'vodoleykin.by',
    'Тема:' => $theme,
    'Телефон:' => $phone,
    '' => '',
    'Ответы на вопросы:' => ' ',
    '1. Количество комнат' => $rooms,
    '2. Дополнительные функции:' => implode(", ", $additional),
    '3. Дата уборки:' => $date,
    '4. Время уборки:' => $time,
    '5. Адрес:' => $address,
    '6. Сообщение:' => $message,
    '7. Расчетная  стоимость:' => $sum,
);

foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

?>
