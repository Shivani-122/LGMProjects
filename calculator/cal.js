function display(val) {
    document.getElementById('input').value += val;
}


function solve() {
    let result = document.getElementById('input');

    try {
        result.value = eval(result.value);
    }
    catch (err) {
        alert('Enter the valid Input');
    }
}

function clr() {
    let result = document.getElementById('input');
    result.value=" ";
}

function del() {
    let result = document.getElementById('input');
    result.value=result.value.slice(0,-1);
}