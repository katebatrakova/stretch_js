const flatten = ((arr) => {
  const flattenedArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        flattenedArr.push(arr[i][j]);
      }
    } else {
      flattenedArr.push(arr[i]);
    }
  }
  console.log(flattenedArr, 'flattenedArr');
});

flatten([1, 2, [3, 4], 5, [6]]);