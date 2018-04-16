// with iteration

function addNums(n){
	var Sum = 0;
	for(i=1; i<=n; i++){
	   Sum += i
	}
	return Sum
}

// console.log(addNums(100000000))

// without iteration

function sum(n){
	return n*(n+1)/2

}
console.log(sum(100000000))
