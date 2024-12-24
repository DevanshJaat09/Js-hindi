// IIFE Immediately Invoked Function Expression 

(function devansh (){
    // named IIFE 
    console.log(`DB Connected`);
    
})();
// DB Connected

// IIFE ko end krne ke liye ; lagana hota hai 

( (name) => {
    console.log(`DB Connected TO ${name}`);
    }
)("Devansh")
// DB Connected TO Devansh