function insert(num) {
    document.form.box.value = document.form.box.value + num;
}

function equal(num) {
    var exp = document.form.box.value;
    // if (exp)
    document.form.box.value = eval(exp);
}

function clean() {
    document.form.box.value = " ";
}

function back() {
    var exp = document.form.box.value;
    document.form.box.value = exp.substring(0, exp.length - 1);
}