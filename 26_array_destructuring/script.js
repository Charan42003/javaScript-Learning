let[namee, page, price] = ["Advance JS", 200, 3000];
console.log(namee);
console.log(page);
console.log(price);

let[a1, a2, [b1, b2]] = ["a_value1", "a_value2", ["b_value1", "b_value2"]];
console.log(a1 + " " + a2 + " " + b1 + " " + b2);

function rand() {
    return [true, false, "NaN"];
}
let[t, f, n] = rand();
console.log(t + ", " + f + ", " + n);