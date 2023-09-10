export function linearSearch(arr,x){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==x){
            console.log("found the number tha is given to find",x);
        }
    }

    console.log("given number",x," is not present in the array");
    return NaN;
}


function binarySearch(arr,x){
    // implementation of binary search;
}


// default export

export default function fun(){
    console.log("default exporting");
}



// named export

export {
    
    binarySearch
}