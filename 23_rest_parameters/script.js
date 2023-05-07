function sum(...a) {
    console.log(a);
    let res = 0;
    for(let i = 0; i < a.length; i++)
    {
        res += a[i];
    }
    console.log(res);
}
sum(4,5,6,2,3);