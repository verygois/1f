<?php
date_default_timezone_set('Asia/Tokyo');
echo "<h2>Printed by <i>" . $_SERVER["REMOTE_ADDR"] . "</i></h2>";
echo "<h3>on <strong>" . date('Y/m/d H:i:s JST') . "</strong></h3>";
echo "Copyright © 2022 Very Gois, All Rights Reserved.";