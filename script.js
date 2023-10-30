//1)JSON For loop
var obj =[{
    "names":"joe",
    "age":"20",
    
},
{
    "names":"john",
    "age":"20"
},
{
    "names":"Doe",
    "age":"30"
},
{
    "names":"Wick",
    "age":"40"
}
]
for(var i=0;i<obj.length;i++){
    console.log(obj[i].names,obj[i].age)
}
//for in
for(var key in obj){
    console.log(obj[key].names,obj[key].age)
}
//for of
for(var val of obj){
    console.log(val.names,val.age)
}

//2)resume data in JSON
var resume={
    "name":"Santhosh G",
    "age":23,
    "DOB":"05.09.2001",
    "Qualification":["10","12","BE-Mechanical engineering"],
    "Maritial":"No",
    "City":"Dindigul",
    "Organization":"CTS",
    "Experience":2,
    "Working location":"CBE",
    "Domain":"Automation Testing",
    "Designation":"Programer Analyst",
    "Area of intrest":"Programing",
    "Hobbies":"Traveling"

}
console.log(resume)