<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: access");
    header("Access-Control-Allow-Methods: GET");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    require __DIR__.'./../../DataBase/DataBase.php';
    require __DIR__.'./../JwtOperations/Auth.php';

    $allHead=getallheaders();

    $dbcon=new DataBase();
    $conn=$dbcon->Connection();

    $auth=new Auth($conn,$allHead);

    if($_SERVER["REQUEST_METHOD"] != "GET"):
        $dbcon->Message(0,401,"Unauthorized");

    else:
        if($auth->isAuth()):
            echo json_encode($auth->isAuth());

        endif;
    endif;

?>