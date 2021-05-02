//插入排序
//将待排序序列的第一个元素看作一个有序序列，将第二个到最后一个元素看作未排序序列
//从未排序序列的第一个元素开始，将此元素插入到已排序序列中的正确位置（通过比较和前一个元素的大小并交换来实现）
//如果待插入的元素与有序序列中的某个元素相等，则将待插入元素插入到相等元素的后面
//时间O(n2), 空间O(1)

arr = [0, 2, 1, 0, 2, 1, 4, 5, 9, 3, 5, 8, 6, 7];

function insertionSort(arr) {
    const n = arr.length;
    let preIndex, cur;
    for(let i = 1; i < n; i++) {
        preIndex = i - 1;
        cur = arr[i];
        while(preIndex >= 0 && arr[preIndex] > cur) {
            arr[preIndex + 1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex + 1] = cur;
    }
    return arr;
}

console.log(insertionSort(arr));