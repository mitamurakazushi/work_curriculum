<?php
class Animal{
    public $cry;
    public function bow(){
        echo "{$this -> cry}".PHP_EOL;
    }
}
class Dog extends Animal{
    public $cry = "wanwan!";
}
class Cat extends Animal{
    public $cry = "nya-nya-!";
}

$ins = new Animal();
$ins -> cry = "bowbow!";
$ins -> bow();
$dog = new Dog();
$dog -> bow();
$cat = new Cat();
$cat -> bow();
?>

