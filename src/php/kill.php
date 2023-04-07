<?php
    $host = "localhost"; // اسم الهوست
    $username = "root"; // اسم المستخدم للاتصال بقاعدة البيانات
    $pass = "123456789"; // باسورد المستخدم
    $namedata ="myweb"; // اسم الداتا بيس
    $connect = mysqli_connect($host,$username,$pass,$namedata) OR die("هناك خطأ في الاتصال") ;
?>