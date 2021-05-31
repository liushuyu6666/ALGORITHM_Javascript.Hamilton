

const counter = (function counter() {
    let value = 0;
    return {
        getValue: function() {
            return value;
        },
        changeBy: function(k) {
            value += k;
        },
    }
})();

function getFixedCounter(k) {
    let value = 0;
    const getValue = () => {
        return value;
    }
    const myIncrement = () => {
        value += k;
    }
    const decrement = () => {
        value -= k;
    }
    const stepCounter = () => {
        return{
            getValue: getValue,
            increment: myIncrement,
            decrement: decrement,
        }
    };
    return stepCounter(k);
}

function main() {

    const c = getFixedCounter(2);

    const str = ['+', '+', '?', '-', '?'];
    for (let i = 0; i < str.length; ++i) {
        let op = str[i];
        if (op === '+') {
            c.increment();
        } else if (op === '-') {
            c.decrement();
        } else if (op === '?') {
            console.log(c.getValue());
        }
    }
}

main();
