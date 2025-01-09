let dolphinsCore = [97, 108, 89]
let koalasCore = [109, 95, 106]

let dolphinsAvgCore = (dolphinsCore[0] + dolphinsCore[1] + dolphinsCore[2]) / 3;
let koalasAvgCore = (koalasCore[0] + koalasCore[1] + koalasCore[2]) / 3;

let result;
if(dolphinsAvgCore < 100 && koalasAvgCore < 100){
    result = 0
} else if(dolphinsAvgCore > 100 || koalasAvgCore > 100){
    if(dolphinsAvgCore == koalasAvgCore){
        result = 1
    } else if(dolphinsAvgCore > koalasAvgCore){
        result = 2
    } else{
        result = 3
    }
}

if(result == 0){
    console.log(`Dolphins team core : ${dolphinsAvgCore.toFixed(2)}. Koalas team core : ${koalasAvgCore.toFixed(2)}. No team wins the trophy`)
} else if(result == 1){
    console.log(`Dolphins team core : ${dolphinsAvgCore.toFixed(2)}. Koalas team core : ${koalasAvgCore.toFixed(2)}. Both teams drew`)
}else if(result == 2){
    console.log(`Dolphins team core : ${dolphinsAvgCore.toFixed(2)}. Koalas team core : ${koalasAvgCore.toFixed(2)}. Dolphins team win`)
} else{
    console.log(`Dolphins team core : ${dolphinsAvgCore.toFixed(2)}. Koalas team core : ${koalasAvgCore.toFixed(2)}. Koalas team win`)
}