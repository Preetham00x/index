function Person(name,dob){
   this.name=name
   this.dob=new Date(dob)
   this.getFullName=function(){
       return `${this.name} ${this.name}`
   }
}
   const person= new Person('preetham','2005-06-15')


console.log(person)

