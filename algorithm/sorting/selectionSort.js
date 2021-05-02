//选择排序
//在未排序序列中找到最小元素，放到排序序列的起始位置
//再从剩余未排序序列中继续寻找最小元素，放到已排序序列的末尾
//重复第二步直到数组排序完毕
//时间O(n2), 空间O(1)

arr = [0, 2, 1, 0, 2, 1, 4, 5, 9, 3, 5, 8, 6, 7];

function selectionSort(arr) {
    const n = arr.length;
    let minIndex, tmp;
    for(let i = 0; i < n - 1; i++) {
        minIndex = i;
        for(let j = i + 1; j < n; j++) {
            if(arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        tmp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = tmp;
    }
    return arr;
}

console.log(selectionSort(arr));