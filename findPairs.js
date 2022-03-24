function findPair(a, k) {
    let start = 0, end = a.length - 1;
    let res = [];
    while(start < end) {
        if (a[start] + a[end] === k) {
            res.push([a[start], a[end]]);
            start++;
            end--;
        } else if (a[start] + a[end] > k){
            end--;
        } else {
            start++;
        }
    }
    return res;
}
let ap = [-4, 2, 3, 5, 8, 11];
let kl = 7;
console.log(findPair(ap, kl));