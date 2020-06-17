var names: string[] = ["Thomas", "Manuela", "Jana", "Laurenz", "Johannes", "Anna", "Marion", "Fabian", "David", "Sarah"];


for (let index in names) {
	console.log(index)
}

for (let value of names) {
	console.log(value)
}

for (let value in names) {
	console.log(value + " " + names[value])
}