var source = ['1', '1', 'foo', '2', '3', '5', 'bar', '8', '13'];

var result = source
				.map(x => parseInt(x))    //[1, 1, NaN, 2, 3, 5, NaN, 8, 13]
				.filter(x => !isNaN(x))   //[1, 1, 2, 3, 5, 8, 13]
                .reduce((x, y) => x + y); //33

				console.log(result);