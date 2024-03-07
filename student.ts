console.log('helloworld')
import { person } from "./personality.js"

class student extends person{
   private name:string;
    
   constructor(name:string){
     
    super()
    this.name='';
    
    }

    getname(){
        return this.name;
    }
    setname(name:string){
        this.name=name;
    }

}
 const myclass=new student('amna')

 //myclass.getpersonality()
 myclass.getname
 myclass.setname