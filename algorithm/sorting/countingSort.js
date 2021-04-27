//计数排序
//1.找到待排序数组arr的最大值maxValue，开辟一个以maxValue+1的数组空间bucket，待排序arr的每个值都能在bucket中找到对应下标
//2.遍历待排序数组arr，每出现一个数，就将bucket中下标与此数对应的值+1，遍历完后得到的bucket是arr中每个数出现的次数
//3.根据bucket中的值，由大到小/由小到大在arr中依次修改对应位置的值，最后输出排序后的arr
//时间复杂度O(n + k), 空间复杂度O(k), k为数组中最大值
//注意：计数排序要求输入数据必须是有确定范围的整数

arr = [0, 2, 1, 0, 2, 1, 4, 5, 9, 3, 5, 8, 6, 7]

function countingSort(arr) {
    //var maxValue = Math.max(...arr);
    var maxValue = Math.max.apply(null, arr);
    var bucket = new Array(maxValue + 1).fill(0);
    var arrLength = arr.length;
    var sortedIdx = 0;

    for (let i = 0; i < arrLength; i++) {
        bucket[arr[i]]++;
    }

    for(let j = 0; j < maxValue + 1; j++) {
        while(bucket[j] > 0) {
            arr[sortedIdx++] = j;
            bucket[j]--;
        }
    }
    
    return arr;
}

console.log(countingSort(arr));