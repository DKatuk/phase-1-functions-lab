// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
    return Math.abs(blocks-42); // returning absolute value
}
console.log(distanceFromHqInBlocks(50));

// function distanceFromHqInFeet(block){
//     return distanceFromHqInBlocks(block)*264;
// }
// console.log(distanceFromHqInFeet(50));

function distanceFromHqInFeet(block){
    return Math.abs(block-42)*264;
}

let result = distanceFromHqInFeet(50);
console.log(distanceFromHqInBlocks(result));

function distanceTravelledInFeet(start, destionation){
    return Math.abs(start-destionation)*264;
}

console.log(distanceTravelledInFeet(38,34));


function calculatesFarePrice(st, dest){
    let fare = distanceTravelledInFeet(st,dest);
    if (fare <= 400){
        let free= 0;
        return free;
    } else if( fare> 400 && fare <=2000) {
        return (fare-400)*0.02;
    } else if( fare>2000 && fare<=2500) {
        let price = 25;
        return price;
    } else {
        return "cannot travel that far"
    }
}
console.log(calculatesFarePrice(38,34));
