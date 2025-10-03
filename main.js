
//arrays
// //-const name=['preetham','technologia','niggers'];
////name[3]='brownie'
//console.log(Array.isArray('negro'))
//name.push('liar')
//name.unshift('elephant')
//name.pop()
//console.log(name.indexOf('brownie'))
//console.log(name)

//object literals
//const guy={
   // name:'preetham',
//    age:18,
  //  hobbies:['eat','sleep','binge'],
   // address:{
     //   street:'thota',
       // pincode:500018,
   // }
//}
//const {name,age}=guy;
//console.log(guy)

//for(let i=0;i<=10;i++){
//   console.log(i);
//}
function Person(name,dob){
   this.name=name
   this.dob=new Date(dob)
   this.getFullName=function(){
       return `${this.name} ${this.name}`
   }
}
   const person= new Person('preetham','2005-06-15')


console.log(person)

