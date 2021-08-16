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
        //将这个数赋值给arr[low]，即放到pivot前面
        arr[low] = arr[high];
        //正序查找大于pivot的数
        while(low < high && arr[low] <= pivot) {
            low++;
        }
        //将这个数赋值给arr[high]，即放到pivot后面
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

function _quickSort(num, left, right) {
    var list = [[left, right]]; // 将[left,right]存入数组中，类似于递归入栈
    while (list.length > 0) { // 若list不为空，循环弹出list最后一个数组进行快排
        // 弹出list末尾。(也可用list.shift()取出list第一个数组，但在数据量较大时，这种方式效率较低)
        var [curLeft, curRight] = list.pop(); 
        // 若左右指针相遇，待排序数组长度小宇1，则无需进行快排(注意不能写成curLeft==curRight，这里curLeft是有可能大于curRight的
        if (curLeft >= curRight) {
            continue;
        }
        var low = curLeft, high = curRight, pivot = curLeft; // 以下与递归方法相同，请参考上面的递归详解
        while (low < high) {
            while (num[high] >= num[pivot] && low < high) {
                high--;
            }
            // if (low >= high) {
            //     break;
            // }
            while (num[low] <= num[pivot] && low < high) {
                low++;
            }
            let temp = num[pivot];
            num[pivot] = num[high];
            num[high] = num[low];
            num[low] = temp;
            pivot = low;
        }
        list.push([curLeft, pivot - 1]); // 将pivot左边数组作为待排序数组，只需将左右指针放入list即可。
        list.push([pivot + 1, curRight]); // 将pivot右边数组作为待排序数组，只需将左右指针放入list即可。
    }
    return num;
}


console.log(_quickSort(arr, 0, arr.length - 1));