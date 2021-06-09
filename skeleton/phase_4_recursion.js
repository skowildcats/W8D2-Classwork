function range(start, end) {
  if (start === end) {
    return [];
  }
  return [start].concat(range(start + 1, end));
}

function sumRec(arr) {
  if (arr.length = 0) {
    return 0;
  } else if (arr.length = 1) {
    return arr[0];
  }

  return arr[0] + sumRec(arr.slice(1));

  
}