<?php

    header("Access-Control-Allow-Origin: *");
    // header("Access-Control-Allow-Headers: access");
    header("Access-Control-Allow-Methods: POST");
    header("Content-Type: application/json;");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    include_once('./../../DataBase/DataBase.php');
    include_once('./../JwtOperations/JWTHandeller.php');

    $db_connection=new DataBase();
    $jwt=new JwtHandler();
    $conn=$db_connection->Connection();

    $data=json_decode(file_get_contents("php://input"));

    if($_SERVER["REQUEST_METHOD"]!="POST"):
        $db_connection->Message(0,404,"Page Not Found !");
    
    elseif(
        !isset($data->email) ||
        !isset($data->password) ||
        empty($data->email) ||
        empty($data->password)
    ):
       $db_connection->Message(0,422,"Pleas Fill all The Required Fields !");

    else:
        $email=trim($data->email);
        $password=trim($data->password);

        if(!filter_var($email,FILTER_VALIDATE_EMAIL)):
            $db_connection->Message(0,422,'Invalid Email Format !');
        
        elseif(strlen($password)<8):
            $db_connection->Message(0,422,'Your Password Must Be At Least 8 Characters !');

        else:
            try{

                $stmt=$db_connection->Login($email,$password);

                if($stmt->rowCount()):
                    $row=$stmt->fetch(PDO::FETCH_ASSOC);
                    
                    $token =$jwt->_jwt_encode_data(
                        'http://172.16.1.47/mydbworking/',
                        array("user_id"=>$row['ID'])
                    );
                    echo json_encode(array(
                        'success'=>1,
                        'message'=>'You Have Successfully loggined In .',
                        'token'=>$token
                    ));

                else:
                    $db_connection->Message(0,422,"Invalid Email Or Password !");

                endif;

            }
            catch(PDOException $e)
            {
                $db_connection->Message(0,500,$e->getMessage());
            }

        endif;
    endif;

?>