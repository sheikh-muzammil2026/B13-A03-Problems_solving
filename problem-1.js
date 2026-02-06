/*function signature/sample */

function newPrice(currentPrice , discount ) {
         let finalPrice =0;
        
    if(typeof currentPrice != "number" || typeof discount != "number"  || discount < 0 || discount > 100 ){  // typeof return string, তাই comparison always "number" বা "string" এর সাথে করতে হবে অর্থাৎ Number type-এর জন্য quotes লাগবে। 
        return "Invalid";

    }else{
         let disAmount = (currentPrice * discount) / 100;
          finalPrice = currentPrice - disAmount;  // return এর সাথে assignment একসাথে করা যাবে না। toFixed(3) হল একটা নির্দেশনা। নতুন করে কিছু যোগ করা। কিন্তু রিটার্ন মেথড তা গ্রহন করে না । 
           let newPrice = finalPrice.toFixed(3);
           return newPrice;
    }
}

console.log(newPrice(90,30));



