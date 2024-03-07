console.log('helloworld');
import { person } from "./personality.js";
class student extends person {
    name;
    constructor(name) {
        super();
        this.name = '';
    }
    getname() {
        return this.name;
    }
    setname(name) {
        this.name = name;
    }
}
const myclass = new student('amna');
//myclass.getpersonality()
myclass.getname;
myclass.setname;
