var a = document.getElementById("a"),
    b = document.getElementById("b"),
    op = document.getElementById("op"),
    result = document.getElementById("result");
function buttonclick() {
    var aNum = parseInt(a.value);
    var bNum = parseInt(b.value);
    var opVal = op.value;
    var res = calc(aNum, bNum, opVal);
    result.value = String(res);
}

function calc(x, y, ope) {
    var res;
    if (ope == '+') {
        res = x + y;
    }
    else if (ope == '-') {
        res = x - y;
    }
    else if (ope == '/') {
        res = x / y;
    }
    else if (ope == '*') {
        res = x * y;
    }
    else {
        res = 0;
    }
    return res;
}
