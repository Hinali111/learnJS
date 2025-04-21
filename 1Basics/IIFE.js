//  Immediately Invoked Function Expression
//  self invoking function
(function DBCall(){
    console.log(`DB Connected`);
})();

// ()()
// (definition) - (call)

(function two(server){
    console.log(`DB Connected with ${server}`);
})("Server2");

((name)=>{
    console.log(`DB Connected for ${name}`);
})("Siya");