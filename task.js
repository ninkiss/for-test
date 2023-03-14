let arr = [1, 2, 3, 4, 5, 6], arr1 = [5, 32, 6, 7, 2, 3, 7]
const reverseArray = (array) => {
    array.forEach((temp, elem = 0) => {
        if (elem < array.length - elem - 1) {
            temp = array[elem];
            array[elem] = array[array.length - elem - 1];
            array[array.length - elem - 1] = temp;
            elem++;
            console.log(array);
        }
    })
    return array
}
reverseArray(arr1)

/* const reverseArray = (array) => {
    for (let i = 0; i < array.length - i - 1; i++) {
        let temp = array[i]
        array[i] = array[array.length - i - 1];
        array[array.length - i - 1] = temp
        //     console.log(array)  // для проверки перебора элементов в цикле
    }
    return array
}
console.log(reverseArray(arr1)); */