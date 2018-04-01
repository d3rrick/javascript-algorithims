// factorial algorithim without iteration//

var limit =1;

function factorial(x){
    // this creates a positive integer
	var y = Math.abs(x);
	if(y==0||y==1){return 1}
    
	var result = y
	while(y!=limit){
		y--;
		result = y*result;
	}

	return Math.sign(x) == 1?result: -result;
	
}
 // test out with both positive and negative numbers.
console.log(factorial(-4));   ans = 24
console.log(factorial(4));   ans = -24
