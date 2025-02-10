let x=100; // global 
function varDemo(){
    let x = 20; // local
    console.log("X ben trong ham: ", x);
}
console.log("X ben ngoai ham: ", x);

// Goi ham
varDemo();