//分治思想，把一个串行分为两个子串行
//时间复杂度最坏O(n2), 平均情况下O(nlogn),空间复杂度O(logn)
//1.从数列中挑出一个‘基准’元素(pivot)
//2.重新排序数列，比基准小的数放在基准前，比基准大的放在基准后。成为分区(partition)操作
//3.递归地把小于基准值的子数列和大于基准值的子数列排序

arr = [0, 2, 1, 0, 2, 1, 4, 5, 9, 3, 5, 8, 6, 7];

function partition(arr, low, high) {
    let pivot = arr[low];
    //分区，比基准小的数放在基准前，比基准大的放在基准后
    while(low < high) {
        //倒序查找小于pivot的数
        while(low < high && arr[high] >= pivot) {
            high--;
        }
        //将这个数赋值给arr[low]
        arr[low] = arr[high];
        //正序查找大于pivot的数
        while(low < high && arr[low] <= pivot) {
            low++;
        }
        //将这个数赋值给arr[high]
        arr[high] = arr[low];
    }
    arr[low] = pivot;
    return low;
}

function quickSort(arr, low, high) {
    if(low < high) {
        let pivot = partition(arr, low, high);
        quickSort(arr, low, pivot - 1);
        quickSort(arr, pivot + 1, high);
    }
    return arr;
}

console.log(quickSort(arr, 0, arr.length - 1));