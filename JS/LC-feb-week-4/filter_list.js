// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

const list1 = [1, 2, "a", "b"];
const list2 = [1, "a", "b", 0, 15];
const list3 = [1, 2, "aasf", "1", "123", 123];

// 1.
function filter_list1(list) {
  return list.filter((value) => typeof value === "number");
}

console.log(filter_list1(list1));
console.log(filter_list1(list2));
console.log(filter_list1(list3));

// 2.
function filter_list2(list) {
  return list.filter((value) => Number.isInteger(value));
}

console.log(filter_list2(list1));
console.log(filter_list2(list2));
console.log(filter_list2(list3));
