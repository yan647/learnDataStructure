var heapExchange = function (index, arr) {
    if (index >= 1) {
        var item = arr[index];
        var parentIndex = parseInt(String(index / 2));
        if (arr[parentIndex] <= item) {
            arr[index] = arr[parentIndex];
            arr[parentIndex] = item;
            arr = heapExchange(parentIndex, arr);
        }
    }
    return arr;
};
var heapInserter = function (item, arr) {
    arr.push(item);
    var len = arr.length;
    arr = heapExchange(len - 1, arr);
    return arr;
};
var heapExchangeReverse = function (index, arr) {
    var len = arr.length;
    if (index !== len - 1) {
        var item = arr[index];
        //左孩子
        var leftIndex = (index + 1) * 2 - 1;
        if (arr[leftIndex] >= item) {
            arr[index] = arr[leftIndex];
            arr[leftIndex] = item;
            arr = heapExchangeReverse(leftIndex, arr);
        }
        else {
            //右孩子
            var rightIndex = (index + 1) * 2;
            if (arr[rightIndex] >= item) {
                arr[index] = arr[rightIndex];
                arr[rightIndex] = item;
                arr = heapExchangeReverse(rightIndex, arr);
            }
        }
    }
    return arr;
};
//大根堆
function initHeap(arr) {
    var result = [];
    arr.map(function (num) {
        result = heapInserter(num, result);
    });
    return result;
}
var heapDelete = function (item, arr) {
    var len = arr.length;
    var temp = arr[len - 1];
    arr[len - 1] = item;
    arr.pop();
    var index = arr.indexOf(item);
    arr[index] = temp;
    arr = heapExchangeReverse(index, arr);
    return arr;
};
var heap = initHeap([7, 5, 6, 4, 2, 9]);
console.log(heap); //[9, 7, 6, 4, 2, 5]
console.log(heapDelete(9, heap)); //



