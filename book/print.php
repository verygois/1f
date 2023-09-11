<?php
date_default_timezone_set('Asia/Tokyo');
echo "<p>This Book was published by printing a website.</p>";
echo "<h2>by <i>".$_SERVER["REMOTE_ADDR"]."</i></h2>";
echo "<h3>on <span>".date('Y/m/d H:i:s')."</span></h3>";
?>