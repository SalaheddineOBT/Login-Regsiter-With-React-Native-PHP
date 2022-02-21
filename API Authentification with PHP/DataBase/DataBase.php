<?php

    class DataBase{

        private $con;
        private $db_host = "localhost";
        private $db_name = "mydbworking";
        private $db_username = "root";
        private $db_password = "";

        public function Connection(){

            $this->con=null;
            try{
                $this->con = new PDO('mysql:host='.$this->db_host.';dbname='.$this->db_name,$this->db_username,$this->db_password);
                $this->con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                return $this->con;

            }catch(PDOException $ex){
                echo "Connection Error ! ".$ex->getMessage();
                exit;
            }

        }

        public function Message($success,$status,$message)
        {
            echo json_encode(array(
                'success'=>$success,
                'status'=>$status,
                'message'=>$message
            ));
        }
        
        public function Login($email,$password)
        {

            $sql='SELECT ID FROM users WHERE Email="'.$email.'" AND Password="'.$password.'";';
            $stmt=$this->con->prepare($sql);
            $stmt->execute();

            return $stmt;

        }

        public function Register($username,$email,$password)
        {
            
            $sql='INSERT INTO users (UserName,Email,Password) VALUES("'.$username.'","'.$email.'","'.$password.'");';
            $stmt=$this->con->prepare($sql);

            if($stmt->execute()):
                return true;

            endif;

            echo ''.$stmt->error;
            return false;

        }

        public function SelectById($id)
        {
            $sql='SELECT UserName FROM users WHERE ID='.$id;
            $stmt=$this->con->prepare($sql);
            $stmt->execute();

            return $stmt;
        }

        public function SelectedByEmail($email)
        {
            
            $sql='SELECT * FROM users WHERE Email="'.$email.'"';
            $stmt=$this->con->prepare($sql);
            $stmt->execute();
            if($stmt->rowCount()):
                return true;

            endif;

            return false;

        }

    }

?>