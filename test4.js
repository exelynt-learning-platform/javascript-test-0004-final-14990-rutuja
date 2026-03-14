function generatePattern(n) {
    let size = 2 * n - 1;

    for (let i = 0; i < size; i++) {
        let row = "";

        for (let j = 0; j < size; j++) {
            let distance = Math.max(
                Math.abs(i - (n - 1)),
                Math.abs(j - (n - 1))
            );

            row += (distance + 1) + " ";
        }

        console.log(row);
    }
}

generatePattern(4);