// factorial algorithim without iteration//
var limit =1;
function factorial(x){
    
    // this creates a positive integer
	var y = Math.abs(x);
	if(y==0||y==1){return 1}
    
	var result = y
	while(y!=limit){
		y--
		result = y*result
	}
	// this checks if the original number had a positive or negative
	if (Math.sign(x) == 1){
		return result
	}else{
		return -result
	}
	
}

console.log(factorial(-4));
