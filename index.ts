console.log('helloworld')

import { person } from "./personality.js"

import inquirer from 'inquirer'
class main{
async main(){
try{
    const answer=await inquirer.prompt([{
         type:'input',
         message:'Type 1:\n If you talk to others or \n Type 2:\n If you would rather keep to yourself:',
         name:'choice'
    }])
    const userchoice:number = parseInt(answer.choice)
    const personalitytype=new person()
    personalitytype.askquestion(userchoice);

    console.log(`You are ${personalitytype.getpersonality()}`)

}
catch{
    console.log('Invalid choice.Enter 1 or 2')
}
}
}

const index=new main()
index.main()

