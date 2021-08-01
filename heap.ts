/***
 * 堆排序
 * 参考：https://mp.weixin.qq.com/s/Tshg2pZ72tWkjJwJGiTvRw
 */
type HeapOperator = <T>(item: T, arr: Array<T>) => Array<T>;
type HeapExchangeType = <T>(index: number, arr: Array<T>) => Array<T>;

let heapExchange: HeapExchangeType = function (index, arr) {
  if (index >= 1) {
    let item = arr[index];
    let parentIndex = parseInt(String(index / 2));
    if (arr[parentIndex] <= item) {
      arr[index] = arr[parentIndex];
      arr[parentIndex] = item;
      arr = heapExchange(parentIndex, arr);
    }
  }
  return arr;
}

let heapInserter: HeapOperator = function (item, arr) {
  arr.push(item);
  let len = arr.length;
  arr = heapExchange(len - 1, arr);
  return arr;
}

let heapExchangeReverse: HeapExchangeType = function (index, arr) {
  let len = arr.length;
  if(index!==len-1){
    let item = arr[index];
    //左孩子
    let leftIndex = (index+1)*2-1;
    if (arr[leftIndex] >= item) {
      arr[index] = arr[leftIndex];
      arr[leftIndex] = item;
      arr = heapExchangeReverse(leftIndex, arr);
    } else {
      //右孩子
      let rightIndex = (index + 1) * 2;
      if (arr[rightIndex] >= item) {
        arr[index] = arr[rightIndex];
        arr[rightIndex] = item;
        arr = heapExchangeReverse(rightIndex, arr);
      }
    }
  }
  return arr;
}

//大根堆
function initHeap<T>(arr: Array<T>): Array<T> {
  let result = [];
  arr.map((num) => {
    result = heapInserter(num, result);
  });
  return result;
}

let heapDelete: HeapOperator = function (item, arr) {
  let len = arr.length;
  let temp = arr[len - 1];
  arr[len - 1] = item;
  arr.pop();
  let index = arr.indexOf(item);
  arr[index] = temp;
  arr = heapExchangeReverse(index, arr);
  return arr;
}

let heap = initHeap([7, 5, 6, 4, 2, 9]);
console.log(heap);//[9, 7, 6, 4, 2, 5]
console.log(heapDelete(9, heap));//[7, 5, 6, 4, 2]
