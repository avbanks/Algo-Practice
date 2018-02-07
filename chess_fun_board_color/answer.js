function chessBoardCellColor(cell1, cell2) {
	return (cell1.split("")[0].charCodeAt()%2 == cell1.split("")[1]%2) == 
		(cell2.split("")[0].charCodeAt()%2 == cell2.split("")[1]%2) 
}

console.log(chessBoardCellColor('A1','C2'))

