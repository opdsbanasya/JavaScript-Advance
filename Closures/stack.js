const createStack = (values) => {
    let stack = new Array();
    let val = 0;
    let i = -1;
    const stackOp = {
        push: () => {
            stack[++i] = values[val++];
        },
        pop: () => {
            if(i < 0) return undefined;
            let popped = stack[i];
            stack.length = i--;
            return popped;
        },
        peek: () => stack[i],
        isEmpty: () => i<0,
        display: () => {
            console.log(stack)
        }
    }

    return stackOp;
}

const values = [5,4,6]
let stack = createStack(values);
stack.push();
stack.push();
stack.push();
stack.display();
let popped = stack.pop();
console.log("Popped elem: ",popped);

stack.display();
console.log("is stack empty: ", stack.isEmpty());
let peek = stack.peek();
console.log("Peek elem: ", peek);
