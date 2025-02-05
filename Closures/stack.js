const createStack = () => {
    let stack = new Array();
    let i = -1;
    const stackOp = {
        push: (elem) => {
            stack[++i] = elem
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

let stack = createStack();
stack.push(5);
stack.push(4);
stack.push(6);
stack.push(8);
stack.display();
let popped = stack.pop();
console.log("Popped elem: ",popped);

stack.display();
console.log("is stack empty: ", stack.isEmpty());
let peek = stack.peek();
console.log("Peek elem: ", peek);
