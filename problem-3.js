/*function signature/sample */
function finalScore (omr) {
    let totalQues = omr.right + omr.wrong + omr.skip;
    let total_Score = 0;

    if(typeof omr !== "object" || typeof omr === null || Array.isArray(omr) || totalQues > 100 || totalQues < 100 ) return "Invalid";

        total_Score += omr.right * 1;
        total_Score -= omr.wrong * 0.5;
        let finalScore = Math.round(total_Score);
        return finalScore;
    
}  
   

console.log(finalScore({ right: 67, wrong: 23, skip: 10 }))