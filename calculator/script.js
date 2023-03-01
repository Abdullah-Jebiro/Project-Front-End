function insert(num) {
    document.form.textView.value = document.form.textView.value + num;
}

function equal() {
    let exp = document.form.textView.value;
    if (exp) {
        let x = document.getElementById("r")
        x.innerText = `${exp} = ${eval(exp)}`;

        document.form.textView.value = eval(exp);

    }

}

function clean() {
    document.form.textView.value = "";
}

function backspace() {
    let vas = document.form.textView.value;
    let arr = vas.split('');
    arr.pop();
    document.form.textView.value = arr.join("");
}

function negative() {
    let vas = document.form.textView.value;
    let arr = vas.split('');
    let num = '';
    while (isNaN(arr[arr.length - 1]) == false && arr.length > 0) {
        num += arr.pop();
    }
    num = num.split('').reverse();
    num = num.join('');

    num = parseFloat(num);
    console.log(num);

    if (arr[arr.length - 1] == "-") {
        arr.pop();
        arr.push(num);
    } else {
        num *= -1;
        arr.push(num);
    }
    document.form.textView.value = arr.join("");
}