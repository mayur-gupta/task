function tinyPairs(a, b, k) {

    let res = [];
    if (!a || !b || !a.length || !b.length || a.length !== b.length) {
        return 0;
    }
    k = k.toString();
    for (let i = 0; i < a.length; i++) {
        if (a[i].toString() + b[b.length - 1 - i].toString() < k) {
            res.push([a[i], b[b.length - 1 - i]]);
        }
    }
    return res.length;
}
let a  = [3,4,4,4,7,9,1,6,1, 0, 3];
let b = [1, 2, 3,0,4,1,3,9,0,3,2];
let k = 10;
console.log(tinyPairs(a, b , k));