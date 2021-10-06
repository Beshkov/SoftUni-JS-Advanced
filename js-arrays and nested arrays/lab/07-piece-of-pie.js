function solve(arr, flavor1, flavor2){
    let start = 0;
    let end = 0;
    let newArr = []

    for (let i = 0; i < arr.length; i++){
        if (arr[i] == flavor1){
            start = i;
        } else if (arr[i] == flavor2){
            end = i;
        }
    }

    newArr = arr.slice(start, end+1);
    return newArr
}

function solve2(arr, flavor1, flavor2){
    let startIndex = arr.indexOf(flavor1);
    let endIndex = arr.indexOf(flavor2);
    return arr.slice(startIndex, endIndex+1)
}

console.log(solve2(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'))
console.log(solve2(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'))