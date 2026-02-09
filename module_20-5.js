/**
 *   ## 🧩 Full Practice Problem–01: Student Management System

### 🎯 ডাটা স্ট্রাকচার

একটি `student` object বানাতে হবে, যেখানে থাকবে—

* `name` (string)
* `roll` (number)
* `isRegular` (boolean)
* `subjects` (array of strings)
* `marks` (object)

  * `bangla`
  * `english`
  * `math`
* `friends` (array of objects)

  * `{ name, roll }`
* `getAverage` নামে একটি method

### ✅ করতে হবে

1. loop ব্যবহার করে সব `subjects` প্রিন্ট করো
2. `friends` array থেকে শুধু friend-এর নাম প্রিন্ট করো
3. `getAverage()` method কল করলে
   👉 তিনটা সাবজেক্টের average রিটার্ন করবে
4. যদি average ≥ 40 হয়
   👉 `"Passed"` প্রিন্ট করো, না হলে `"Failed"`

*/

let student = {
     name : "ahmad",
     roll : 13,
     isRegular : true,
     subjects : [ "Bangla", "Arabic", "English"],
     marks : {
        Bangla: 44,
        Arabic : 55,
        English : 66

     },
     friends : [
        {name : "shakil", roll: 22},
        {name : "farhan", roll: 34},
        {name : "labib", roll: 67}
     ],
    //  getAverage : function (marks){
       
    //     let totalMark =0;
    //     for( const subj in marks){
    //         totalMark += marks[subj];
    //     }
    //    return totalMark / Object.keys(marks).length;

    //  }
    getAverage : function (){
       
        let totalMark =0;
        let average =0;
        let position ="";
        for( const subj in this.marks){
            totalMark += this.marks[subj];
        }
                 average = totalMark / Object.keys(this.marks).length;
                 if(average >= 40){
                    position = "passed";
                 }else {
                    position = "failed";
                 }

        return {
             average,
             position,
        };
     },

      showReport : function (){

        // subjects print
    
        let subjects_names =[];
        let friendsNames =[];
        for (const sub of this.subjects){
            subjects_names.push(sub);
        }
         let subNames = subjects_names.join(", ") ;

        for(const f of this.friends){
            friendsNames.push(f.name);
        }
        let FNames = friendsNames.join(", ") ;
        return {
            subNames,
            FNames

        }
        
      }
     

};

// console.log(student.getAverage(student.marks));

console.log("Subject names : "+JSON.stringify(student.showReport()));
console.log("Published result : "+JSON.stringify(student.getAverage()));
