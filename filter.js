//It is an important array method.
//It is used to filterout something from an array.
//It returns a new array and doesnot change original array.
//It does not work on an empty array.
//It takes 3 parameters also.
//syntax:
//.filter(()=>{})
//scenerio-1
var arr1 = [1, 2, 3, 4, 5];
var newarr = arr1.filter(function (elem) {
    return elem == 4 || elem > 2; // o/p[3,4,5]
    //return elem==4  &&  elem>2;//o/p [4]
});
console.log(newarr);
//scenerio-2
var newarr1 = arr1.filter(function (elem, i, referencearray) {
    console.log("OriginalArray:", referencearray);
    console.log("index:", i);
    return elem < 4 && elem > 2;
});
console.log(newarr1);
//scenerio-3
var faculty = [
    {
        name: "Miss Hina",
        id: 123,
        job: "Instructor",
    },
    {
        name: "Sir Tahir",
        id: 789,
        job: "Assistant",
    },
    {
        name: "Miss Ayesha",
        id: 653,
        job: "Instructor",
    },
];
var newarr2 = faculty.filter(function (obj) {
    //Create a new array with the names of all faculty members who have a job title of 'Instructor'".
    return obj.job === "Instructor";
}).map(function (obj) { return obj.name; });
//- filter() filters the array based on a condition, but keeps the original objects intact.
// map() transforms each object in the array, allowing us to extract specific properties (like name in this case).
console.log(newarr2);
//Author-huma Mohsin
