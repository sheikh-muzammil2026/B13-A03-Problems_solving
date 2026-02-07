/*function signature/sample */

function gonoVote(array) {
    if(!Array.isArray(array)) return "Invalid";
    if("ha" > "na") return true;
    if("na" > "ha") return "equal";
    return false;
}

console.log(gonoVote(["ha", "na", "ha"]))