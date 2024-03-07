console.log('helloworld')

 export class person{
    private personality:string


    constructor(){
        this.personality='mystery'
    }

    askquestion(userchoice:number){
        if(userchoice===1){
            this.personality='extrovert'}
         else if(userchoice===2){
             this.personality='introvert'
         }   
         else{
            this.personality==='mystery';
         }
        }
     
     getpersonality(){
        return this.personality
     }

    }
 




