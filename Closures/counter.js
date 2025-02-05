const createCounter = (init) => {
    let current = init;
    return {
        increment: () => ++current,
        decrement: () => --current,
        reset: () => {
            current = init;
            return current;
        }
    }
}

let counter = createCounter(5);
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.increment());
console.log(counter.decrement());

