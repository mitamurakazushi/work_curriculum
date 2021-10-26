<?php
class Tax{
    public $price;
    public function cal(){
        $intax = $this->price * 1.1;
        echo "税抜き{$this->price}円，税込み{$intax}円".PHP_EOL;
    }
}

$tax = new Tax();
$tax -> price = $argv[1];
$tax -> cal();
?>