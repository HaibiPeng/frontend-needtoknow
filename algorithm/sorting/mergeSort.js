//建立在归并操作上的排序算法，是分治法的典型应用
//性能不受输入数据的影响，始终为O(nlogn)的时间复杂度，但需要额外内存空间，空间复杂度O(n)
//自上而下递归，递归出口为序列长度小于2(即只有一个序列)
//1.申请一个result空间，大小为两个已排序序列之和，存放合并后的序列
//2.设定两个指针，分别指向两个已排序序列的起始位置
//3.比较两个指针所指向元素的大小，选择相对较小的元素放入合并空间，然后移动指针到下一个位置
//4.重复3，直到某个序列为空
//5.将另一个序列剩下所有元素直接复制到合并空间尾部

arr = [0, 2, 1, 0, 2, 1, 4, 5, 9, 3, 5, 8, 6, 7]

function mergeSort(arr) {
    let len = arr.length;
    if(len < 2) return arr;
    let middle = Math.floor(len / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    //1.申请一个result空间，大小为两个已排序序列之和，存放合并后的序列
    let result = [];

    //2.设定两个指针，分别指向两个已排序序列的起始位置
    while(left.length && right.length) {
        //3.比较两个指针所指向元素的大小，选择相对较小的元素放入合并空间，然后移动指针到下一个位置
        //此处直接使用js数组方法，避免申请额外指针
        //4.重复3，直到某个序列为空
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    //5.将另一个序列剩下所有元素直接复制到合并空间尾部
    while(left.length) {
        result.push(left.shift());
    }
    while (right.length) {
        result.push(right.shift());
    }

    return result;
}

console.log(mergeSort(arr));