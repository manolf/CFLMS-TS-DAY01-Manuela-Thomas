var names = ["Thomas", "Thomas", "Thomas", "Thomas", "Thomas", "Thomas", "Thomas", "Thomas", "Thomas", "Thomas"];
var surnames = ["Blieberger", "Blieberge", "Blieberge", "Blieberge", "Blieberge", "Blieberge", "Blieberge", "Blieberge", "Blieberge", "Blieberge"];
names.forEach(function (value) {
    document.write(value);
});
setTimeout(function () {
    surnames.forEach(function (value) {
        document.write(value);
    });
}, 5000);
