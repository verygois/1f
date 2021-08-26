<!DOCTYPE html>
<html lang="ja">
<head>
<title>Visitors | creative-community.pe.hu</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
<style>
.counter {padding:0; margin:0; width:100%; text-align:right; font-size:1rem;}
</style>
<?php
$counter_file = 'visitors.txt';
$counter_lenght = 8;
$fp = fopen($counter_file, 'r+');
if ($fp) {
    if (flock($fp, LOCK_EX)) {
        $counter = fgets($fp, $counter_lenght);
        $counter++;
        rewind($fp);
        if (fwrite($fp,  $counter) === FALSE) {
            echo ('<p>'.'ファイル書き込みに失敗しました'.'</p>');
        }
        flock ($fp, LOCK_UN);
    }
}
fclose ($fp);

echo '<p class="counter">';
echo ('You are the <b>'.$counter.'</b> visitors.');
echo '</p>';
?>
</body>
</html>
