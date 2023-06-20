// Start phần bài 1
// const array1 = [1,2,3,4,5,6];
// const array2 = [3,4,8,9,12];
// console.log(array2) // 
// console.log(array1) // 
// const intersection = array1.filter(element => {
// 	return array2.includes(element);
//   });
  
//   console.log(intersection); 
//  End phần bài 1
// Start phần bài 2
// {function greatestSum(arr) {
  
//     let max1 = 0;
//     let max2 = 0;
  
//     for (let i = 2; i < arr.length; i++) {
//       if (arr[i] > max1) {
//         max2 = max1;
//         max1 = arr[i];
//       } else if (arr[i] > max2) {
//         max2 = arr[i];
//       }
//     }
  
//     return [max1, max2];
//   }
  
//   const array = [1, 7, 9, 2, 5, 3, 8];
//   const result = greatestSum(array);
//   console.log(result);}
//  End phần bài 2
//
//  Start phần bài 3
// function findPairs(arr,sum) {
//     const pairs = [];
//     for (i=0; i<arr.length -1;i++){
//         for(j=1;j<arr.length; j++){
//             if (arr[i]+arr[j]== sum){
//                 pairs.push([arr[i],arr[j]])
//             }
//         }
//     }
// }
//     return pairs;
//  End phần bài 3
//  Start phần bài 4
// function uniqueArray(arr){
//     const set = new Set(arr);
//     const uniqueArr = Array.from(set)
//     return uniqueArr
// }
// function uniqueArray(arr){
//     const  uniqueArr = [];
//     const obj = {};
//     for (const item of arr){
//         if (!obj[item]){
//             uniqueArr.push(item);
//             obj[item]= true;
//         }
//     }
//     return uniqueArr 
// }
//  End phần bài 4
//  Start phần bài 5
// function duplicateArray(arr1,arr2){
//     const duplicateArr=[];
//     for(const item of arr1){
//         if(arr2.includes(item) && !duplicateArr.includes(item)){
//             duplicateArr.push(item)
//         }
//     }
//     return duplicateArr;
// }
//  End phần bài 5
//  Start phần bài 6
// function findDuplicates(arr){
//     const count={};
//     const duplicate=[]
//     for(const item of arr){
//         count[item]= (count[item] || 0) + 1
//     }
//     for (const item in count){
//         if( count[item]>1){
//             duplicate.push(item)
//         }
//     }
//     return duplicate
// }
//  End phần bài 6
//  Start phần bài 7
const arr=['face','zalo','face','gmail','zalo','zalo']
let result={};
for (let item of result){
    count=0;
    for(let item1 of result){
        if( item === item1){
            count ++;
            result[item1]= count;
        }
    }
}
console.log(result);
//  End phần bài 7