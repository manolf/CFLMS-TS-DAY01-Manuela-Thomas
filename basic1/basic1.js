// for (let i= 1; i<11; i++){
// 	for(let j = 1; j<11; j++)
// 	{
// 		let result = i*j;
// 		console.log(j + " X " + i + " = "  + result );
// 	} 
// }
;
// 1
// 2
// 3
var array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
array2.forEach(function (value) {
    var i = value;
    array2.forEach(function (value) {
        console.log(value + " x " + i + " = " + i * value);
    });
});
