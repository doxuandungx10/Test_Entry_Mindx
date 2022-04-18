/*
Problem Solving (30’)
Viết một hàm nhập vào 2 mảng A1 và A2, đầu ra trả về một mảng mới chứa các phần tử không trùng nhau của hai mảng kia. Ví dụ A1 = [1, 2, "a"]; A2 = [1, 3, "b"] thì output ra được là [2, "a", "b", 3].
*/

function nonDuplicate(arr1, arr2) {
  return arr1
    .filter((x) => !arr2.includes(x))
    .concat(arr2.filter((x) => !arr1.includes(x)));
}
console.log(nonDuplicate([1, 2, "a"], [1, 3, "b"]));

/*
Viết chương trình xếp hạng rank theo số điểm các đội bóng đạt được trong giải đấu. Biết rằng tên của các đội bóng không thể trùng nhau, nếu số điểm trùng nhau thì xếp đội xếp trên có hiệu số bàn thắng bại (GD: Goal Difference) ít hơn, rồi mới xét đến Alphabet nếu 2 đội trùng cả điểm số lẫn hiệu số bàn thắng. 
*/
function swap(arr, xp, yp) {
  let temp = arr[xp];
  arr[xp] = arr[yp];
  arr[yp] = temp;
}
function rank(arr) {
  let i, j, min_idx;
  for (i = 0; i < arr.length; i++) {
    min_idx = i;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j].points < arr[min_idx].points) min_idx = j;
      else if (arr[j].points == arr[min_idx].points) {
        if (arr[j].GD < arr[min_idx].GD) min_idx = j;
        else if (arr[j].GD < arr[min_idx].GD) {
          if (arr[j].name < arr[min_idx].name) min_idx = j;
        }
      }
    }
    swap(arr, min_idx, i);
  }
  return arr.reverse().map((obj, i) => ({ ...obj, position: i + 1 }));
}

console.log(
  rank([
    {
      name: "Arsenal",
      points: 99,
      GD: 45,
    },
    {
      name: "Chelsea",
      points: 75,
      GD: 39,
    },
    {
      name: "Manchester United",
      points: 60,
      GD: 29,
    },
    {
      name: "Liverpool",
      points: 88,
      GD: 39,
    },
  ])
);
