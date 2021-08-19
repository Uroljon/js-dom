// 1-shart
function divideOrMultiply(a=0, b=1){
    return a>b ? a/b : a*b;
}
console.log(`1-shart bajarildi: divideOrMultiply(10, 5) === ${divideOrMultiply(10, 5)}`);
// 2-shart
function middle(array){
    let sum = 0;
    array.forEach(element => {
        if(Number(element) !== element){
            console.log(`2-shart. Xatolik. Arrayda son kiriting`);
            return 0;
        }else{
            sum+=Number(element);
        }
    });
    return Math.round(sum/array.length);
}
console.log(`2-shart. middle([1,2,3] === ${middle([1,2,3])})`)
// 3-shart
function palindrom(son){
    let reversed = "";
    son = String(son);
    for(let i=son.length-1; i>=0; i--){
        reversed += son[i];
    }
    // console.log(son,reversed)
    return (son===reversed)? " bu son pallindrom raqam": " bu son pallindrom raqam emas"
}
console.log(`3-shart. palindrom(-121) === ${palindrom(-121)}`);
// 4-shart
function valRemover(nums, val){
    let newNums = nums.map(function(elem){
        if(elem===val){
            elem = "_";
        }
        return elem;
    })
    return newNums;
}
console.log(`4-shart bajarildi. valRemover([1,2,3,4,5,6,7,8,9], 4) === ${valRemover([1,2,3,4,5,6,7,8,9], 4)}`)
// 5-shart //22:35:15 PM
let clock = document.createElement("div");
setInterval(()=>showTime(new Date()), 1000);

function showTime(current){
    let hour = current.getHours();
    let minute = current.getMinutes();
    let second = current.getSeconds();
    clock.innerText = `${hour}:${minute}:${second} ${current.getHours()>12 ? "PM" : "AM"}`;
}

document.body.appendChild(clock);