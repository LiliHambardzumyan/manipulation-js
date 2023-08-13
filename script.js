function funcIsArray(array){
    return Array.isArray(array);
}
console.log(funcIsArray([5,6,7]));

function cloneArray(array){
    let clone = [];
    for(let i = 0; i < array.length; i++){
        clone.push(array[i])
    }
    return clone;
}
console.log(cloneArray([5,6,8]))

function firstElement(array, n){
    if(array.length === 0){
        return 'Array is empty';
    }
    if(n == null){
        return array[0];
    }
    if(n < 0){
        return 'Number is negative'
    }
    return array.slice(0,n);
}
console.log(firstElement([7, 9, 0, -2],2))

function lastElement(array,n){
    if(array.length === 0){
        return 'Array is empty';
    }
    if(n == null){
        return [array.pop()];
    }
    if(n < 0){
        return 'Number is negative';
    }
    if(n > array.length){
        return array;
    }
    return array.slice(array.length - n, array.length);
}
console.log(lastElement([7, 9, 0, 2], 3))

function joinElements(array){
    return array.join(',');
}
console.log(joinElements(['Red', 'Green', 'White', 'Black']))

function evenNumbers(number){
    let array = number.split('');
    for(let i = 0; i<array.length; i++){
        if(array[i] %2 === 0 && array[i+1]%2 === 0){
            array.splice(i+1,0,'-')
        }
    }
    return array.join('');
}
console.log(evenNumbers('025468423568'))

function sorting(array){
    return array.sort((x,y) => x-y).join(',');
}
console.log(sorting([ -3, 8, 7, 6, 5, -4, 3, 2, 1 ]))

function frequentItem(array){
    let maxcount = 1;
    let count = 0;
    let item;
    for(let i = 0; i< array.length; i++) {
        for(let j = i; j <array.length; j++){
            if(array[i] === array[j]){
                count++;
            }
            if(maxcount < count){
                maxcount = count;
                item = array[i];
            }
        }
        count = 0;
    }
    return (item + ' (' + maxcount + ' times' +')')
}
console.log(frequentItem([3, 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]))

function swapping(str){
    let array = [];
    str.split('').map(element => {
        element === element.toUpperCase() ? array.push(element.toLowerCase()) : array.push(element.toUpperCase());
        })
    return array.join('')
}
console.log(swapping('The Quick Brown Fox.'))

function printsElements(array){
    for(let i = 0; i<array.length; i++){
        console.log(('row ' + i));
        for(let j = 0; j< array[i].length; j++){
            console.log(array[i][j]);
        }
    }
    return '';
}
console.log(printsElements([[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]))

function sumOfSquares(array){
    let sum = 0;
    for(let i = 0; i<array.length; i++){
        sum += Number(array[i]) ** 2;
    }
    return sum;
}
console.log(sumOfSquares([1,2,3,4,5]))

function sumAndProduct(array){
    let sum = 0;
    let product = 1;
    for(let i = 0; i< array.length; i++){
        sum += Number(array[i]);
        product *= Number(array[i]);
    }
    return (sum + ','+ product);
}
console.log(sumAndProduct([1, 2, 3, 4, 5, 6]))

const input = document.querySelector('input')
const add = document.getElementById('add');
const display = document.getElementById('display');
add.addEventListener('click', () => {
    let index = 0;
    alert('Element: ' + input.value + ' added at index ' + index);
    index++;
    input.value = '';

display.addEventListener('click', () => {
    const list = document.createElement('div');
    list.classList.add('list');

    const newDiv = document.createElement('li');
    newDiv.innerHTML = alert.innerHTML;
    newDiv.classList.add('list-item');
    list.appendChild(newDiv);
    console.log(newDiv);
})
})

function removeDuplicate(array){
    for(let i = 0; i< array.length; i++){
        for(let j = i+1; j <array.length; j++){
            if(array[i] === array[j]){
                array.splice(j,1);
            }
        }
    }
    return array;
}
console.log(removeDuplicate([1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6]))

function colors(array){
    let ends = ["th","st","nd","rd"];
    let result;
    for(let i = 0; i<array.length; i++){
        if(i+1 >= ends.length){
            result = i+1 + ends[0] + ' choice is ' + array[i];
        }else {
        result = i+1 + ends[i+1] + ' choice is ' + array[i];
        }
       console.log(result);
    }
    return '';
}
console.log(colors(["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "]))

function leapYears(starts,ends){
    let array = [];
    for(let i = starts; i<= ends; i++){
        if(i %4 === 0){
            array.push(i);
        }
    }
    return array;
}
console.log(leapYears(2000,2012));

// function shuffling(array) {
//
// }
// console.log(shuffling([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]))

function binarySearch(array,number){
    return array.indexOf(number);
}
console.log(binarySearch([1, 2, 3, 4, 5, 7, 8, 9],5))

function sumOfArrays(array1,array2){
    let array = [];
    for(let i = 0; i < Math.max(array1.length, array2.length); i++){
        if(i >= Math.min(array1.length, array2.length)){
            if(array1.length === Math.max(array1.length, array2.length)){
                array.push(array1[i]);
            }
            if (array2.length === Math.max(array1.length, array2.length)) {
                array.push(array2[i]);
            }
        }else {
            array.push(array1[i] + array2[i]);
        }
    }
    return array;
}
console.log(sumOfArrays([1,0,2,3,4,5], [3,5,6,7,8,13,1]))

function duplicates(array){
    let arr = [];
    for(let i = 0; i< array.length; i++){
        for(let j = i+1; j <array.length; j++){
            if(array[i] === array[j] && !arr.includes(array[i])){
                arr.push(array[i]);
            }
        }
    }
    return arr;
}
console.log(duplicates([1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 7,1, 3, 6]))

function flattingArray(array,number){
    if(!number){
        return array.flat(array.length);
    }else
        if(number){
       return array.flat(number);
    }
}
console.log(flattingArray([1, [2], [3, [[4]]],[5,6]]))

function unionOfArrays(array1,array2){
    for(let i = 0; i<array2.length; i++){
        if(!array1.includes(array2[i])){
            array1.push(array2[i]);
        }
    }
    return array1;
}
console.log(unionOfArrays([1, 2, 3], [100, 2, 1, 10]))

function differencesOfArrays(array1,array2){
    let array = array1.concat(array2);
    return array.filter(element => !array1.includes(element) || !array2.includes(element));
}
console.log(differencesOfArrays([1, 2, 3], [100, 2, 1, 10]))

function removeValues(array){
    return array.filter(element => !element === null || !element === 0 || !element === "" || !element === false || !element === undefined || isNaN(!element))
}
console.log(removeValues([NaN, 0, 15, false, -22, '',undefined, 47, null]))

function sortObject(array){
    return array.sort((a,b) => (a.title > b.title) ? 1 : (a.title < b.title) ? -1 : 0)
}
console.log(sortObject([
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
]))

function specificSum(array,number){
    for(let i = 0; i< array.length; i++){
       if((array[i] + array[i+1]) === number){
           return i + ',' + (i+1);
       }
    }
}
console.log(specificSum([10,20,10,40,50,60,70], 50))

function retrieveValues(array){
    let arr = [];
    for(let i = 0; i<array.length; i++){
        if(Number(array[i])){
            arr.push(array[i]);
        }
    }
    return arr;
}
console.log(retrieveValues([NaN, 0, 15, false, -22, '',undefined, 47, null]))

function longestCommonStarting(array){
    let str = '';
    for(let i = 0; i< array[0].length; i++){
        if(array[0][i] === array[1][i]) {
            str += array[0][i];
        }
    }
    return str;
}
console.log(longestCommonStarting(['SQLInjection', 'SQLTutorial']))

function fillArray(starts,ends,count){
    let array = [];
    let i = starts.charCodeAt(0);
    let j = ends.charCodeAt(0);
    for (; i <= j; i += count) {
        array.push(String.fromCharCode(i));
    }
    return array;
}
console.log(fillArray("a", "z", 2))

function mergeArrays(array1, array2){
    let array = array1.concat(array2);
    for(let i = 1; i<=array.length; i++){
        if(array2.includes(array1[i-1])){
            array1.splice(i-1,1);
            i--;
        }
    }
    return array = array1.concat(array2);
}
console.log(mergeArrays([1, 2, 3, 30],[2, 30, 1]))

function removeSpecificElement(array,element){
     array.splice(array.indexOf(element),1);
     return array;
}
console.log(removeSpecificElement([2, 5, 9, 6],5))

function findSpecificElement(array,number){
    return array.find(element => element === number) ? true : false;
}
console.log(findSpecificElement([2, 5, 9, 6], 5))

function emptyArray(array){
    console.log(array);
     array.length = 0;
    return array;
}
console.log(emptyArray([2, 5, 9, 6]))

function nthLargest(array,number){
    let max = array[0];
    let arr = [];
    for(let j = 0; j < number; j++) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] > max) {
                max = array[i];
            }
        }
        arr.push(max);
        array.splice(array.indexOf(max),1);
        max = 0;
    }
    return arr[arr.length-1];
}
console.log(nthLargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4))

function randomItem(array){
    return array[Math.floor(Math.random() * array.length)];
}
console.log(randomItem([254, 45, 212, 365, 2543]))

function filledArray(count,number){
    let array =[];
    let i = 0;
    while(i < count){
        array.push(number)
        i++;
    }
    return array
}
console.log(filledArray(4, 11))

function filledString(count,string){
    let array = [];
    let i = 0;
    while(i < count){
        array.push(string);
        i++;
    }
    return array;
}
console.log(filledString(4, 'password'))

function moveItem(array,itemIndex,movedIndex){
    if(itemIndex < 0 && movedIndex < 0){
        itemIndex = array.length - Math.abs(itemIndex);
        movedIndex = array.length - Math.abs(movedIndex);
        array.splice(movedIndex, 0, array[itemIndex]);
        array.splice(itemIndex+1,1);
    }
    else
    {
        array.splice(movedIndex + 1, 0, array[itemIndex]);
        array.splice(itemIndex, 1)
    }
    return array;
}
console.log(moveItem([10, 20, 30, 40, 50], -1, -2))

function filterValue(array){
  return array.filter(element => !element === false || !element === null || !element === '' || !element === 0)
}
console.log(filterValue([58, '', 'abcd', true, null, false, 0]))

function generateArray(start,count){
    let array = [];
    while(count>0){
        array.push(start)
        count--;
        start++;
    }
    return array;
}
console.log(generateArray(-6,4))

function uniqueElements(array1,array2){
   return array1.concat(array2.filter(element => !array1.includes(element)));
}
console.log(uniqueElements([1, 2, 3], [100, 2, 1, 10]))

function unzipArrays(array){
    let numbers =[];
    let letters = [];
    let bool = [];
    let new_array = array.join(',').split(',');
     for(let i = 0; i < new_array.length; i++){
         Number(new_array[i]) ? numbers.push(new_array[i]) : (new_array[i] === 'true' || new_array[i] === 'false') ? bool.push(new_array[i]) : letters.push(new_array[i]);
         }
     return [letters,numbers,bool]
}
console.log(unzipArrays([['a', 1, true], ['b', 2]]));

function createObject() {

}
console.log(createObject())

function uniqueNumbers(array){
    let arr = [];
    for(let i = 0; i< array.length; i++){
        !arr.includes(array[i]) ? arr.push(array[i]) : null;
    }
    return arr;
}
console.log(uniqueNumbers([1, -2, -2, 3, 4, -5, -6, -5]))