<?php

include_once('./../../JWT/JWT.php');
include_once('./../../JWT/ExpiredException.php');
include_once('./../../JWT/BeforeValidException.php');
include_once('./../../JWT/SignatureInvalidException.php');

use \Firebase\JWT\JWT;

class JwtHandler{
    protected $jwt_secrect;
    protected $token;
    protected $issuedAt;
    protected $expire;
    protected $jwt;

    public function __construct(){

        // set your default time-zone
        date_default_timezone_set('Asia/Kolkata');
        $this->issuedAt=time();

        // Token Validity (3600 second = 1hr)
        $this->expire=$this->issuedAt + 3600;

         // ENCODING THE TOKEN
         $this->jwt_secrect="sdcgykjytez";

    }

    public function _jwt_encode_data($iss,$data){

        $this->token=array(
            //Adding the identifier to the token (who issue the token)
            "iss"=>$iss,
            "aud"=>$iss,
            // Adding the current timestamp to the token, for identifying that when the token was issued.
            "iat"=>$this->issuedAt,
            // Token expiration
            "exp"=>$this->expire,
            // Payload
            "data"=>$data
        );

        $this->jwt=JWT::encode($this->token,$this->jwt_secrect);
        return $this->jwt;  

    }

    public function _jwt_decode_data($jwt_token){
        try{
            $decode=JWT::decode($jwt_token,$this->jwt_secrect,array("HS256"));
            return[
                "auth"=>1,
                "data"=>$decode->data
            ];

        }
        catch(\Firebase\JWT\SignatureInvalidException $e){
            return $this->_errMsg($e->getMessage());
        }
        catch(\Firebase\JWT\BeforeValidException $e){
            return $this->_errMsg($e->getMessage());
        }
        catch(\DomainException $e){
            return $this->_errMsg($e->getMessage());
        }
        catch(\InvalidArgumentException $e){
            return $this->_errMsg($e->getMessage());
        }
        catch(\UnexpectedValueException $e){
            return $this->_errMsg($e->getMessage());
        }
    }

}

?>