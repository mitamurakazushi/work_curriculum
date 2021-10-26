<?php
$str = '1';
$int = 1;
$arr = array(1,'Hello');
$boo = true;
$nul = NULL;

$a = gettype($str);
$b = gettype($int);
$c = gettype($arr);
$d = gettype($boo);
$e = gettype($nul);

echo "$a".PHP_EOL;
echo "$b".PHP_EOL;
echo "$c".PHP_EOL;
echo "$d".PHP_EOL;
echo "$e".PHP_EOL;