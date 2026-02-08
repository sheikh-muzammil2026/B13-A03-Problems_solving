//Problem-01: New Price for Eid Sale
function newPrice(currentPrice , discount ) {
         let finalPrice =0;
        
    if(typeof currentPrice != "number" || typeof discount != "number"  || discount < 0 || discount > 100 ){   
        return "Invalid";

    }else{
         let disAmount = (currentPrice * discount) / 100;
          finalPrice = currentPrice - disAmount;   
           let newPrice = finalPrice.toFixed(3);
           return newPrice;
    }
}

//Problem-02: OTP Validation for Zapshift
function validOtp(otp) {

         if( typeof otp != "string" ) return "Invalid";

         if(!otp.startsWith("ph-") || otp.length !==8) return false;
         return true;        
}


//Problem-03: BCS Final Score Calculator
function finalScore (omr) {
    let totalQues = omr.right + omr.wrong + omr.skip;
    let total_Score = 0;

    if(typeof omr !== "object" || typeof omr === null || Array.isArray(omr) || totalQues > 100 || totalQues < 100 ) return "Invalid";

        total_Score += omr.right * 1;
        total_Score -= omr.wrong * 0.5;
        let finalScore = Math.round(total_Score);
        return finalScore;
    
}  

//Problem-04: Upcoming Gono Vote
function gonoVote(array) {
    let ha =0;
    let na =0;
    if(!Array.isArray(array)) return "Invalid";
    for(const vote of array){
        if(vote === "ha") ha++;
        if(vote === "na") na ++;
    }
    if( ha > na) return true;
    if( na == ha) return "equal";
    return false;
}


//Problem-05: Text Analyzer for an AI Company
function  analyzeText(str) {
    let output = {
        longwords: "",
        token: 0,
    };
         if(typeof str !== "string" || str.trim().length === 0){
            return "Invalid";
         }else{
            for(const char of str){
                if(char !== " "){
                       output.token ++;
                }
            }
            let sentence = str.split(" ");
            for(const word of sentence ){
                if(output.longwords.length < word.length){
                    output.longwords =  word;
                }
            }
            
         }
         return output;
}

