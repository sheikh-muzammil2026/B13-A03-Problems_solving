let numbers = [1,2,3,4,5,6,7];

let result =[];

for(const num of numbers){
    result.unshift(num);
}

console.log(result);