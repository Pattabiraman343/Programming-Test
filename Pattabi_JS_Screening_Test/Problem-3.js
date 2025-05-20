function conditionalOddSeries(n) {
    let output = [];

    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            output.push(i * 2 - 1);
        }
    }

    console.log(output);
}

conditionalOddSeries(6);
