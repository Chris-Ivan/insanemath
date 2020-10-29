//bikin jadi subscript
function sub(n){
    return n.toString().sub();
}
//bikin jadi superscript
function sup(n){
    return n.toString().sup();
}
//kasih kurung
function handleNegative(n){
    if (n<0){
        return `(${n})`;
    }else{
        return `${n}`;
    }
}
//kasih kurung ditengah 2 operand 1 operator
function mixKurung(num1, num2, operand){
    return `(${num1} ${operand} ${num2})`;
}
//cek apakah sebuah angka adalah bulat
function isRound(n){
    return n%1==0;
}
//membulatkan angka dengan ketelitian n angka di belakang koma entah 2.000 atau 2.999
function near(num, n){
    detail = "";
    detail2 = "";
    for(let i=0; i<n; i++){
        detail+="9";
        detail2+="0";
    }
    detail = parseInt(detail);
    detail2 = parseInt(detail2);
    if(Math.floor((num*(10**n))%(10**n))==detail || Math.floor((num*(10**n))%(10**n))==detail2){
        return Math.round(num);
    }else{
        return Number(num.toFixed(n));
    }
}
//fungsi favorit
function generateNonZero(range, isNegative=false){
    let res;
    do{
        if(isNegative){
            res = (Math.round(Math.random() * (range*2))) - range;
        }else{
            res = (Math.round(Math.random() * range));
        }    
    }while(res==0);
    return res;
}

//entah
function randomMin(num){
    let angka = 5
    let isNeg = Math.random()*angka
    if(isNeg<(angka/2)){
        return (-1)*(num)
    }else{
        return num
    }
}
//entah
function convertNeg(num){
    if(notZero){
        if (num<0){return ("-"+(num*(-1)).toString())}else{return ("+"+(num).toString())
    }}
}
//cek apakah sebuah angka adalah 0
function notZero(num){
    if(num!==0) return(true)
}
//cek apakah sebuah angka adalah 1
function notOne(num){
    if((num!==1)&&(num!==(-1))) {return true}else{return false}
}
//perkalian [pol][pol]
function perkalianPolinom(arr1,arr2){
    let total = []
    for(var i = 0; i < (arr1.length+arr2.length-1); i++) {
        total.push(0);
    }
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            total[i+j]+=arr1[i]*arr2[j]
    }}
    // console.log(`(${(arr1)})(${(arr2)})`)
    // console.log(total)
    displayF(total)
    return total
}
//display [pol] menjadi fungsi
function displayF(array){
    let res = ""
    let satuan = [``,`x`]
    for (let i = 2; i < array.length; i++) {
        satuan.push(`x${(i).toString().sup()}`);
    }
    for (i=0;i<array.length;i++){
        if(i===0){ //digit terakhir
            if(array[i]!==0){//kalo 0 ga dicetak
                if (array[i]===1 || array[i]===-1){ //kalau nilainya 1
                    if (array[i]<0){res =` - 1`+res}
                    else {res =` +1`+ res}
                }
                else{ //kasus umum
                    if (array[i]<0){res =` - ${Math.abs(array[i])}`+satuan[i]+res}
                    else {res =` + ${array[i]}`+satuan[i]+res}
                }
            }
        } else {
            if(i===array.length-1){//pertama
                if (array[array.length-1]===1 || array[array.length-1]===-1){
                    if (array[i]<0){res =`- ${satuan[i]}` + res}
                    else {res =`${satuan[i]}` + res}
                }else{
                    if (array[array.length-1]<0){res =` - ${Math.abs(array[array.length-1])}`+satuan[i]+res}
                    else{res=`${Math.abs(array[array.length-1])}`+satuan[i]+res
                    }
                }
            }else{
                if(array[i]!==0){//kalo 0 ga dicetak
                    if (array[i]===1){ //kalau nilainya 1
                        res = ` + ${satuan[i]}` + res
                    }
                    else{ //kasus umum
                        if (array[i]<0){res =` - ${Math.abs(array[i])}`+satuan[i]+res}
                        else {res =` + ${array[i]}`+satuan[i]+res}
                    }
                }
            }
        }
    }
    // console.log(res)
    return res
}
//menghilangkan duplikat dari array
function filterUnique(set){
    set = set.filter((item,index)=>set.indexOf(item) == index);
    return set;
}
//membuat polinom orde tertentu
function generateF(orde){
    let operand = ["+","-"];
    let num = [];
    let op = [];

    for(let i = 0; i<orde+1; i++){
        if(i==orde){
            num.push(generateNonZero(2));
        }else{
            num.push(generateNonZero(10));
        }
        if(i<orde){
            op.push(operand[generateNonZero(10)%2]);
        }
    }

    return [num,op];
}
//membuat fungsi dari [akar-akar]
function generatePreF(x){ //generate fungsi dari akar-akar
    res = [-x[0],1];
    for(let i = 1; i<x.length; i++){
        res = perkalianPolinom(res,[-1*x[i],1]);
    }
    return displayF(res);
}
//menghitung f dengan x tertentu
function countF(f,op=new Array(f.length-1).fill("+"),x){
    let res = "";
    let i;
    displayF(f,op);
    for (i = 0; i<f.length-1; i++){
        res = ` ${op[i]} ${handleNegative(f[i])} * ${x}**${i}` + res;
    }
    res = `${handleNegative(f[i])} * ${x}**${i} ${res}`;
    // console.log(res);
    // console.log(eval(res));
    return eval(res);
}
//mengubah derajat ke radian
function toRad(n){
    return (n/360)*2*Math.PI;
}