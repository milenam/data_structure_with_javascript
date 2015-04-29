// ARRAYS

// Adding, removing elements to the array 

var nums = [1,2,3,4,5]
nums.push(6); // OR
nums[nums.length] = 6;
print(nums); // 1,2,3,4,5,6

var nums = [2,3,4,5]
var newnum = 1;
var N = nums.length;
for (var i = N; i >= 0; --i) {
	nums[i] = nums[i-1];
}
nums[0] = newnum;