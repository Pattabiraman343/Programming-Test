function oddSeries(n) {
    let output = [];
    let number = 1;

    for (let i = 0; i < n; i++) {
        output.push(number);
        number += 2;
    }

    console.log(output);
}

oddSeries(4);
