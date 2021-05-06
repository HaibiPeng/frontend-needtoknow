//堆排序

//1.堆
//堆是具有以下性质的完全二叉树：
//每个结点的值都大于或等于其左右孩子结点的值，称为大顶堆
//或者每个结点的值都小于或等于其左右孩子结点的值，称为小顶堆
//大顶堆：arr[i] >= arr[2i + 1] && arr[i] >= arr[2i + 2]
//小顶堆：arr[i] <= arr[2i + 1] && arr[i] <= arr[2i + 2]

//2.堆排序思想及步骤
//a.构造初始堆。将给定无序序列构造成一个大顶堆（一般升序采用大顶堆，降序采用小顶堆)
//b.将堆顶元素与末尾元素进行交换，使末尾元素最大。然后继续调整堆，再将堆顶元素与末尾元素交换，得到第二大元素
//如此反复进行交换、重建、交换
//时间O(nlogn) 空间O(1)原地排序 不稳定

arr = [0, 2, 1, 0, 2, 1, 4, 5, 9, 3, 5, 8, 6, 7];


function heapSort(arr) {
    const n = arr.length;
    //1.构建大顶堆
    buildHeap(arr);

    //2.调整堆结构+交换堆顶元素与末尾元素
    for(let i = n - 1; i > 0; i--) {
        swap(arr, 0, i); //将堆顶元素与末尾元素进行交换
        heapify(arr, 0, i);//重新对堆进行调整
    }

    return arr;
}


//构建大顶堆
function buildHeap(arr) {
    const n = arr.length;
    for(let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        //从第一个非叶子结点从下至上，从右至左调整结构
        heapify(arr, i, n);
    }
}

function heapify(arr, i, length) {
    let tmp = arr[i];//取出当前元素（父节点）

    //从i结点的左子结点开始，也就是2i+1处开始
    for(let k = 2 * i + 1; k < length; k = 2 * k + 1) {
        //如果左子结点小于右子结点，k指向右子结点（从右至左）
        if(k + 1 < length && arr[k] < arr[k + 1]) {
            k++;
        }

        //如果子节点大于父节点，将子节点值赋给父节点（不用进行交换）
        if(arr[k] > tmp) {
            arr[i] = arr[k];
            i = k;
        } else { //否则跳出循环
            break;
        }
    }
    arr[i] = tmp;
}

function swap(arr, a, b) {
    let tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
}

console.log(heapSort(arr));