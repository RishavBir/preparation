


function printNum (start,end){

    console.log(start)

    if(start < end){
        printNum((start+1),end)
    }

}
printNum(1,100)