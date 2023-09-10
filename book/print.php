<?php
$ip = $_SERVER["REMOTE_ADDR"];

echo "<h1>IP <i>" . $ip . "</i></h1>";
echo "<h2>Printed on ".date('Y/m/d H:i:s')."</h2>";
?>