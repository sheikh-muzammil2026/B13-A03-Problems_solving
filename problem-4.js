/*function signature/sample */

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

console.log(gonoVote(["ha", "na", "ha"]))