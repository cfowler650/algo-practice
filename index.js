function foo(a) {
    console.log(a + b);
}

var b = 2;

foo(2);


function foo() {
    function bar() {
        setTimeout(
            () => console.log('John'),
            1000);
    }

    console.log('Ted');
    return bar;
}

let x = foo();
x();
console.log('Rodger');

// Ted Rodger John

x = { 'foo': 'bar' }
y = { 'baz': x }
z = y['baz']['foo']

console.log(z)
// BAR


function summer(list) {
    let output = [];
    for (let i = 0; i < list.length; i++) {
        if (i == 0) {
            output.push(list[i])
        } else {
            output.push(output[i - 1] + list[i])
        }
    }
    console.log(output);
}

//[1,3,6,10]
summer([1, 2, 3, 4])