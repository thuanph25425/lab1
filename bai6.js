var arrSort = [3, 4, -1, 5, 7, 8, 1];

// sắp xếp giảm dần
var decrease = [...arrSort];
decrease.sort((a, b) => {
  return b - a;
});
//console.log(decrease);

// sắp xết tăng dần Selection sort
function sortSelection(arr) {
  let currentValueNewIndex;
  for (let i = 0; i < arr.length; i++) {
    currentValueNewIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[currentValueNewIndex] > arr[j]) {
        currentValueNewIndex = j;
      }
    }
    if (i !== currentValueNewIndex) {
      [arr[i], arr[currentValueNewIndex]] = [arr[currentValueNewIndex], arr[i]];
    }
  }

  return arr;
}

console.log(sortSelection(arrSort));
