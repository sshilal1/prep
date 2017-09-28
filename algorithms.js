// start at 1, missing 1 number
function missingMumber(arr) {
	const len = arr.length;
	for (let num=1; num<len; i++) {
		var numFound = false;
		for (let i=0;i<len;i++) {
			if (num == arr[i] && i!=0) {
				numFound = true;
			}
		}
		if (!numFound) {return num; }
	}
}

function findFirstNonRep(str) {
	var arr = str.split('');
	const len = arr.length;
	for (let i=0; i<len; i++) {
		var duplicates = false;
		for (let j=0; j<len; j++) {
			if (arr[i] == arr[j] && i != j) {
				duplicates = true;
			}
		}
		if (!duplicates) { return arr[i]; }
	}
	return null;
}

function findFirstRep(str) {
	var arr = str.split('');
	const len = arr.length;
	for (let i=0; i<len; i++) {
		for (let j=i+1; j<len; j++) {
			if (arr[i] === arr[j]) {
				return arr[j];
			}
		}
	}
	return null;
}

// largest sum of 2 elements from 2 arrays
function largestSum(arr1,arr2) {
	var largest1 = arr1[0];
	var largest2 = arr2[0];
	for (let i=0;i<arr1.length;i++) {
		if (arr1[i] > largest1) {
			largest1 = arr1[i];
		}
	}
	for (let j=0;j<arr2.length;j++) {
		if (arr2[j] > largest2) {
			largest2 = arr2[j];
		}
	}
	return largest1 + largest2;
}

// From an unsorted array, check whether there are any two numbers that will sum up to a given number?
//[3,6,9,4,1,0,2]
// to do this, i think we have to use i as an iterator
function sumOf2Exists(arr,sum) {
	const len = arr.length;
	for (let i=0;i<len;i++) {
		for (let j=0;j<len;j++) {
			if (arr[i] + arr[j] == sum  && i!=j) {
				return ("2 nums are " arr[i] + " and " + arr[j]);
			}
		}
	}
}

// remove duplicate members from an array
//[3,6,3,4,1,0,2,6]
function removeDuplicates(arr) {
	const len = arr.length;
	for (let i=0;i<len;i++) {
		for (let j=0;j<len;j++) {
			if (arr[i] == arr[j] && i!=j) {
				arr.splice(j,1);
			}
		}
	}
	return arr;
}

//reverse string
function reverse(str) {
	const len = str.length;
	var returnStr = '';
	for (let i=len-1;i>=0;i--) {
		returnStr += str[i];
	}
	return returnStr;
}