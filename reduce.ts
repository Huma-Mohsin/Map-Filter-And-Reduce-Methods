//The reduce() method is a powerful array method in JavaScript that applies a function to each element in the array, reducing it to a single output value. 

//syntax:
//arr.reduce(callbackFunction(accumulator, currentValue, index, array), initialValue)

//Example-1
let arr2:number[]=[3,6,9,12,15,18]
let redarray:number=arr2.reduce((total,currentvalue,index,array)=>{
console.log("reference array:",array);
console.log("Index:",index);
return total+currentvalue;
},0);//0 is the initial value of total.
console.log(redarray);

//Example-2
let str:string[]=["TypeScript","Is","Superset","Of","JS"];
let sentence=str.reduce((acc, current) => acc + ' ' + current, '');//In this example, the reduce() method applies a function to each element in the words array, concatenating each element to the accumulator (acc) with a space in between. The initial value of the accumulator is an empty string ('').
console.log(sentence);
//Author-Huma Mohsin