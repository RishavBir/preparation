

let arr = [{
    msg: "ji",
    time: 43
},
{
    msg: "hlo",
    time: 49
},
{
    msg: "hiii",
    time: 23
},
{
    msg: "mam",
    time: 47
},
{
    msg: "sir",
    time: 19
}]


arr.sort(function(a,b){
    return a.time - b.time
})

console.log(arr)