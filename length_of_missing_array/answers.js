/*function getLengthOfMissingArray(arr) {
	if(arr.length === 0)	return 0 
	else{
	return arr.map( ar => {
		return ar.length}).sort()
			.filter((ar,idx,arr) => {
				
				return ar != (idx+1) 
			})[0]-1
	}
}*/



function getLengthOfMissingArray(arr) {
	if(arr.length === 0) return 0
	else {
		let nArr = arr.map( ar => { 
			return ar.length}).sort()

		
		if(nArr[0] === 0) {	
			for (let i = 0; i < nArr.length; i++) {
				if (nArr[i] != i){
					let val = i 
					return val
				}
			} 
		} 
		else {
			for (let i = 0; i< nArr.length; i++) {
				if(nArr[i] != i+1){
					let val = i+1
					return val
				}
			}
		}
		return val
	}



}



console.log(getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]))
console.log(getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]))
console.log(getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]))
console.log(getLengthOfMissingArray([ [ null ], [ null, null, null ] ]))

console.log(getLengthOfMissingArray([ [],[2,2],[2,2,2] ]))

