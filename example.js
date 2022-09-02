// function checkoccurrence() {
//   const count = [];
//   const arr = ["a", "b", "c", "d", "a", "b", "a", "a", "d"];
//   for (let i = 0; i < arr.length; i++) {
//     let keys = arr[i];
//     count[keys] = ++count[arr[i]] || 1;
//   }
//   console.log(count["a"]);
// }
// checkoccurrence();

function checkData() {
  const data = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];

  function count(arr = []) {
    return arr.reduce(
      (prev, curr) => ({ ...prev, [curr]: ++prev[curr] || 1 }),
      {}
    );
  }

  console.log(count(data));
}
checkData();
