var names: string[] = ["Thomas", "Thomas", "Thomas", "Thomas", "Thomas", "Thomas", "Thomas", "Thomas", "Thomas", "Thomas"];
var surnames: string[] = ["Blieberger", "Blieberge", "Blieberge", "Blieberge", "Blieberge", "Blieberge", "Blieberge", "Blieberge", "Blieberge", "Blieberge"];

names.forEach(function (value){
	document.write(value)
}
)

setTimeout(()=>{
	surnames.forEach(function (value){
	document.write(value)
})}, 5000)