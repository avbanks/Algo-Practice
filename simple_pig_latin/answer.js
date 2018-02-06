function pigIt(str) {
	return null
}

z = 'aaax lsl'
console.log(z[0])
z[-1] = 'b'
console.log(z[-1])
b = [1,2,3]
console.log(b.splice(-1,1,'Z'))
console.log(b)
console.log(z)


wordArr = z.split(" ")
wordArr.push(wordArr[0].slice(0,1)+'ay')
console.log(wordArr)

p = [1,23,2]

z = 'some'
z = z.split("")
z.push(z[0]+'ay')
console.log('here',z)
z.splice(0,1)
console.log(z.join(''))


p.push(3)
console.log(p)
d = 'abc'
console.log(d.slice(0,1))
console.log(d)
/*['aaa','bb','ccc'].forEach((word) => {
	console.log(word)
})

'aaa bbb'.split(" ").forEach( word => {
	word.split("")

})

'aaa bbb'.split(" ").map( word => {
	
})

*/
