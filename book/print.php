<?php
$ip = $_SERVER["REMOTE_ADDR"];

echo "<h2>IP <i>" . $ip . "</i></h2>";
echo "<h3>Printed on <span>".date('Y/m/d H:i:s')."</span></h3>";
?>