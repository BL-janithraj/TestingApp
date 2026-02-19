const name  =  "hello world";
console.log(name);

const age  = 20;
function demo() {
    const age = 30;
    if(true) {
        const age = 40;
        
        
        console.log(age);
    } 
    console.log(age);
}
demo();
console.log(age);