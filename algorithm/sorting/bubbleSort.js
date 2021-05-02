//冒泡排序
//比较相邻元素，如果第一个比第二个大，则交换两个元素
//对每一对相邻元素都做一样的操作，从开始第一对到最后一对，完成之后最后一个元素会是最大的数
//时间O(n2), 空间O(1)

arr = [0, 2, 1, 0, 2, 1, 4, 5, 9, 3, 5, 8, 6, 7];

function bubbleSort(arr) {
    let n = arr.length;
    //这里注意是 i < n - 1, 因为是arr[j]和arr[j + 1]比较，所以不包括最后一个数
    for(let i = 0; i < n - 1; i++) {
        //这里减i是因为前一轮已经排好一个数了，所以末尾需要减去前i个已经移到最后的数的空间
        for(let j = 0; j < n - 1 - i; j++) {
            if(arr[j] > arr[j + 1]) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort(arr));