/*function signature/sample */
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

console.log(analyzeText(""));