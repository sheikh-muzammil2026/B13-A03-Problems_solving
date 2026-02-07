/*function signature/sample */
function finalScore (omr) {
    let total_Score = 0;

    if(typeof omr !== "object" || omr === null || Array.isArray(omr) ) return "Invalid";  // null check করতে হলে সবসময় === null ব্যবহার করো, typeof নয়
    let totalQues = omr.right + omr.wrong + omr.skip;  // Property access সবসময় validation এর পরে হবে
    if ( totalQues !== 100 ) return "Invalid";
        total_Score += omr.right * 1;
        total_Score -= omr.wrong * 0.5;
        let finalScore = Math.round(total_Score);
        return finalScore;
    
}  
   

console.log(finalScore({ right: 67, wrong: 23, skip: 10 }))