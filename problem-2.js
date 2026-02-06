/*function signature/sample */
function validOtp(otp) {

         if( typeof otp != "string" ) return "Invalid";

         if(!otp.startsWith("ph-") || otp.length !==8) return false;
         return true;        
}

console.log(validOtp("ph-12345"));
