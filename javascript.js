let levy = {
    age: 24,
    second_name: 'Omolo'
};
console.log(levy.age);
if(levy.age < 28)
{
    console.log("You can't be a president!");

}
else{
    console.log("Proceed to the campaigns. Good Luck!");
}
let color = ["blue", "green", "red"];
console.log(color[1]);
if(typeof color[2] == 'string'){
    console.log("Confirmed!");
}

// Function

function analysis(second_name){
    console.log("Hello " + second_name);

}

analysis('Levy');

function hirePurchase(p,r,t){
    hp = p * r/100 * t;
    console.log(hp);
}
hirePurchase(10000, 10, 24);