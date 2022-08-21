// code your solution here

// saturdayFun function
const satFun = 'roller-skate!'

function saturdayFun(satFun = 'roller-skate!') {
    return `This Saturday, I want to ${satFun}` 
}

saturdayFun()



// mondayWork function
function mondayWork(monWork = 'go to the office') {
    return `This Monday, I will ${monWork}`
}

mondayWork()



//wrapAdjective function
function wrapAdjective(wrap = "*"){
    return function (adjective = "a hard worker"){
        return `You are ${wrap}${adjective}${wrap}!`;
    }
}


function wrapAdjective(wrap = "||"){
    return function (adjective = "a dedicated programmer"){
        return `You are ${wrap}${adjective}${wrap}!`;
    }
}











