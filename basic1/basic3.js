var names = ["Thomas", "Manuela", "Jana", "Laurenz", "Johannes", "Anna", "Marion", "Fabian", "David", "Sarah"];
for (var index in names) {
    console.log(index);
}
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var value = names_1[_i];
    console.log(value);
}
for (var value in names) {
    console.log(value + " " + names[value]);
}
