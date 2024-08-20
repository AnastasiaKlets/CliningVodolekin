<?php

$token = "7243538546:AAGpadMB8B0_mSnr4tqpXVuOc4ggBsM-PC0";
$chat_id = "-4226805402";


$rooms = ($_POST['rooms']);
$additional = ($_POST['additional']);
$sum = ($_POST['sum']);

$date = ($_POST['date']);
$time = ($_POST['time']);

$phone = ($_POST['phone']);
$address = ($_POST['address']);
$message = ($_POST['message']);

$arr = array(
    'Сайт:' => '...',
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
