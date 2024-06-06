//It is an array method.
//It works like a loop.
//It doesnot work on an empty array.
//It returns a new array and does not modify an original array.
//It takes 3 parameters i.e current element , index and reference array.
//syntax: .map((elem,index,refarr)=>{

//})

//The map() method returns a new array with the same length as the original array, but with the transformed elements.

let numbers: number[] = [2, 3, 4, 5, 7, 1, 9];

//scenerio-1
let doubled_numbers: number[] = numbers.map((elem) => {
  return elem * 2;
});
console.log(doubled_numbers);

//scenerio-2:
let newArr: number[] = numbers.map((element, index, refArr) => {
  console.log("Index:", index); //shows index.
  //console.log("ReferenceArray:",refArr);//shows original Array.
  return element + 10;
});
console.log(newArr);

//scenerio-3:
let Student_obj = [
  { name: "Huma", id: 12345, course: "GenAI" },
  { name: "Saima", id: 456789, course: "GenAI" },
  { name: "Zimmal", id: 987345, course: "GenAI" },
];

let newObj = Student_obj.map((obj) => {
  return { name: obj.name, course: obj.course }; // return a new object with only name and course properties
});

console.log(newObj);

//scenerio-4:
let arr = [1, 2, 3, 4];
let finalarray = arr.map((elem, i, refArr) => {
  return {
    Value: elem,
    Index: i,
    refArr: refArr,
  };
});
console.log(finalarray);

//Author-Huma Mohsin
