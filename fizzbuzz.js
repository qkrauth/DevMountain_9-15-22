// for loop that counts numbers 1-50
for (let i = 1; i <= 50; i++) {
    console.log(i)
}

// fizzbuzz problem, list numbers 1-50, numbers divisable by 3 print FIZZ, numbers divisible by 5 print BUZZ, divisible by both
// numbers print FIZZBUZZ
for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizzbuzz");
    } else if (i % 5 === 0) {
        console.log("buzz");
    } else if (i % 3 === 0) {
        console.log("fizz");
    } else console.log(i);
}
