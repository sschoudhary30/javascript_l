function addCard(...item) {
  return item.reduce((acc, curr) => acc + curr, 0);
}

console.log(addCard(100, 200, 300, 400));
