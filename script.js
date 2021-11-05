const isSubsetSum = (target, input) => {
    const progress = {}

    for (let i = 0; i < input.length; i += 1) {
        const number = input[i];
        if (progress[number] !== undefined) {
            // Uncomment to see chosen solution
            progress[number].push(number);
            console.log(progress[number])
            return true;
        }

        const currentValues = Object.keys(progress);
        currentValues.forEach(value => {
            const missing = value - number;
            const subset = [...progress[value]];
            subset.push(number);

            progress[missing] = subset;
        })

        progress[target - number] = [number];
    }

    return false;
}

console.log(isSubsetSum(23, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,]));

