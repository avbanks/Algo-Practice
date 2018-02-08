function getLengthOfMissingArray(arr) {
	if(arr.length === 0)	return 0 
	else{
	return arr.map( ar => {
		return ar.length}).sort()
			.filter((ar,idx) => {
				return ar != (idx+1) 
			})[0]-1
	}
}

//console.log(getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]))
//console.log(getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]))
//console.log(getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]))
//console.log(getLengthOfMissingArray([ [ null ], [ null, null, null ] ]))
console.log(getLengthOfMissingArray([ ]))

