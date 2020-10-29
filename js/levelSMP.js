function randomMin(num){
    let angka = 5
    let isNeg = Math.random()*angka
    if(isNeg<(angka/2)){
        return (-1)*(num)
    }else{
        return num
    }
}

function convertNeg(num){
    if(notZero){
        if (num<0){return ("-"+(num*(-1)).toString())}else{return ("+"+(num).toString())
    }}}
function notZero(num){if(num!==0) return(true)}
function notOne(num){if((num!==1)&&(num!==(-1))) {return true}else{return false}}
function printXY(num,xy,urutan){
    //if(xy===""){xy="1"}
    if(notZero(num)){
    if (urutan===1){       
        if(notOne(num)){return ((num).toString()+xy)}
        else{return xy}}
    else{
        if(notOne(num)){return (convertNeg(num)+xy)}
        else{if(num>0){return ("+"+xy)}else{return("-"+xy)}}}
        }
    else{return""}}

function spldv(x,y){
    let pers=[[0,0,0],[0,0,0]]
    for (let i = 0; i < pers.length; i++) {
        for (let j = 0; j < pers[0].length; j++) {
            while ((pers[i][j])===0){pers[i][j] = (generateNonZero(8)-4)}
            if (j===2){pers[i][j] = (pers[i][0])*(x)+(pers[i][1])*(y)}
        }}
    //console.log(`${x} ${y}`)
    //console.log(`${printXY(pers[0][0],"x",1)}${printXY(pers[0][1],"y",2)}=${pers[0][2]}`)
    //console.log(`${printXY(pers[1][0],"x",1)}${printXY(pers[1][1],"y",2)}=${pers[1][2]}`)
    return([[`${printXY(pers[0][0],"x",1)}${printXY(pers[0][1],"y",2)}=${pers[0][2]}`,`${printXY(pers[1][0],"x",1)}${printXY(pers[1][1],"y",2)}=${pers[1][2]}`],[x,y]])
}

function spltv(x,y,z){
    let pers=[[0,0,0,0],[0,0,0,0],[0,0,0,0]]
    for (let i = 0; i < pers.length; i++) {
        for (let j = 0; j < pers[0].length; j++) {
            while ((pers[i][j])===0){pers[i][j] = (generateNonZero(6)-3)}
            if (j===3){pers[i][3] = (pers[i][0])*(x)+(pers[i][1])*(y)+(pers[i][2])*(z)}
        }}
    //console.log(`${x} ${y} ${z}`)
    //console.log(`${printXY(pers[0][0],"x",1)}${printXY(pers[0][1],"y",2)}${printXY(pers[0][2],"z",3)} = ${pers[0][3]}`)
    //console.log(`${printXY(pers[1][0],"x",1)}${printXY(pers[1][1],"y",2)}${printXY(pers[1][2],"z",3)} = ${pers[1][3]}`)
    //console.log(`${printXY(pers[2][0],"x",1)}${printXY(pers[2][1],"y",2)}${printXY(pers[2][2],"z",3)} = ${pers[2][3]}`)
    return ([[`${printXY(pers[0][0],"x",1)}${printXY(pers[0][1],"y",2)}${printXY(pers[0][2],"z",3)} = ${pers[0][3]}`,
    `${printXY(pers[1][0],"x",1)}${printXY(pers[1][1],"y",2)}${printXY(pers[1][2],"z",3)} = ${pers[1][3]}`,
    `${printXY(pers[2][0],"x",1)}${printXY(pers[2][1],"y",2)}${printXY(pers[2][2],"z",3)} = ${pers[2][3]}`],[`${x} ${y} ${z}`]])
}

/*function displayF(f,op=new Array(f.length-1).fill("+")){
    let res = ""
    let i;
    for(i = 0; i<f.length-1;i++){
        if (i==0){
            res = `${op[i]} ${handleNegative(f[i])}` + res
        }else if(i==1){
            res = `${op[i]} ${handleNegative(f[i])}x` + res
        }else{
            res = `${op[i]} ${handleNegative(f[i])}x${i.toString().sup()}` + res
        }
    }
    res = (i>1)?`${handleNegative(f[i])}x${i.toString().sup()}` + res:`${f[i]}x` +res
    //console.log(res);
    return res
}*/

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
    //console.log(res)
    return res
}

function perkalianPolinom(arr1,arr2){
    let total = []
    for(var i = 0; i < (arr1.length+arr2.length-1); i++) {
        total.push(0);
    }
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            total[i+j]+=arr1[i]*arr2[j]
    }}
    //console.log(`(${(arr1)})(${(arr2)})`)
    //console.log(total)
    displayF(total)
    return total
}

function persGaris2Titik(point1,point2){ //([x1,y1],[x2,y2])
    let konst_x = point2[1]-point1[1]
    let konst_y = point2[0]-point1[0]
    let konst = (-1)*(konst_x)*(point1[0])+(konst_y)*(point1[1])
    //(konst_y)y = (konst_x)x+konst
    //console.log(`${point1} ${point2} ${konst_x} ${konst_y} ${konst}`)
    //console.log(`persamaan garis: ${printXY(konst_y,"y",1)}=${printXY(konst_x,"x",1)}${printXY(konst,"",2)}`)
    let soal = [`(${point1[0]},${point1[1]}); (${point2[0]},${point2[1]})`,`from those two points, find the linear equation!`]
    let jawaban = `${printXY(konst_y,"y",1)}=${printXY(konst_x,"x",1)}${printXY(konst,"",2)}`
    return [soal,jawaban]
}

function factorial(n) {return (n !== 0) ? n * factorial(n - 1) : 1;}
function combination(num1,num2){return factorial(num1)/(factorial(num1-num2)*factorial(num2))}
function permutation(num1,num2){return factorial(num1)/factorial(num1-num2)}

function probability_JHS(type,n){//n>0, type="coin"/"dice"
    let soal
    let jawaban
    if (type==="coin"){
        let face = (generateNonZero(6)>3?"head":"tail")
        let nums = generateNonZero(n)
        //console.log(`probability to get ${nums} ${face}(s):`)
        probability = combination(n,nums)
        //console.log(`${probability}`)
        soal = `from ${n} coins, the probability to get ${nums} ${face}(s) is:`
        jawaban = probability
        return [soal,jawaban]
    }else{
        let dice_sum = generateNonZero(6*n)
        //console.log(`probability to get more than ${dice_sum} when rolling ${n} dices:`)
        let valid = 0
        if (n===1){
            valid = 6-dice_sum
        }else{//2 dices
            for (let i = 0; i < 6; i++) {
                for (let j = 0; j < 6; j++) {
                    if(i+j+2>dice_sum){valid+=1}}
        }}
        //console.log(`${valid}`)
        soal = `probability to get more than ${dice_sum} when rolling ${n} dices:`
        jawaban = valid
        return [soal,jawaban]
    }}

function similarity(type){//triangle,trapezoid,flipped
    let arraytriangle = [[1,2],[2,3],[3,4],[4,5]]
    let chosen = arraytriangle[generateNonZero(4)-1]
    let fac1 = generateNonZero(3)+1
    let fac2 = generateNonZero(4)+1
    let soal
    let jawaban
    while (fac2<=fac1){fac2 = generateNonZero(4)+1}
    switch (type) {
        case "triangle":
            let AB = chosen[1]*fac2
            let EB = chosen[1]*fac1
            let AC = chosen[0]*fac2
            let EF = chosen[0]*fac1
            //console.log(`if AC=${AC}cm, EF=${EF}cm, and AE=${AB-EB}cm, find x!`)
            //console.log(EB)
            soal = `if AC=${AC}cm, EF=${EF}cm, and AE=${AB-EB}cm, find x!`
            jawaban = EB
            return [soal,jawaban,"triangle-sim"]
            break;
        case "trapezoid":
            let DC = generateNonZero(5)+1
            let DE = chosen[1]*fac1
            let EA = (chosen[1]*fac2)-DE
            let BA = (chosen[0]*fac2)+DC
            //console.log(`if DC=${DC}cm, DE=${DE}cm, EA=${EA}cm, and AB=${BA}cm, find EF!`)
            let FE = ((DC*EA)+(BA*DE))/(EA+DE)
            //console.log(FE)
            soal = `if DC=${DC}cm, DE=${DE}cm, EA=${EA}cm, and AB=${BA}cm, find EF!`
            jawaban = FE
            return [soal,jawaban,"trapezoid-sim"]
            break;
        case "flipped":
            let triplet = [[3,4,5],[5,12,13],[8,15,17],[7,24,25]]
            let small = triplet[generateNonZero(4)-1]
            let x = small[0]
            let y = small[1]
            let z = small[2]
            let scale = generateNonZero(3)+1
            let a = x*scale
            let b = z*scale
            let c = y*scale
            //console.log(`ABC and CDE are similar triangles.`)
            //console.log(`if AE=${c+y}, AB=${x}, and DE=${a}, find BD!`)
            let BD = b+z
            //console.log(BD)
            soal = [`ABC and CDE are similar triangles.`,`if AE=${c+y}, AB=${x}, and DE=${a}, find BD!`]
            jawaban = BD
            return [soal,jawaban,"flipped-sim"]
        default:
            break;
    }
}

function arithmetic(mode){
    let a = generateNonZero(10,true)
    let b = generateNonZero(10,true)
    let start1, start2, target,ans, soal;
    switch(mode){
        case "unit": //cari Un
            target = generateNonZero(20);
            ans = unitArithmetic(a,b,target);
            // //console.log(`a = ${a}, b = ${b}, U${target}=${ans}`);
            soal = `An arithmetic sequence starts with a=${a} with common difference b=${b}. Find U${target.toString().sub()}!`;
        ;break;
        case "sum": //cari Sn
            target = generateNonZero(10)*2;
            ans = sumArithmetic(a,b,target);
            soal = `An arithmetic sequence starts with a=${a} with common difference b=${b}. Find S${target.toString().sub()}!`;
        ;break;
        case "advUnit": //cari Un jika diketahui Ua dan Ub
            do{
                start1 = generateNonZero(20)+1;
                start2 = generateNonZero(20)+1;
            }while(start1==start2);
            target = generateNonZero(50);
            // //console.log(`a=${a},b=${b}`)
            // //console.log(`U${start1},U${start2},U${target}`);
            target1 = unitArithmetic(a,b,start1);
            target2 = unitArithmetic(a,b,start2);
            soal = `An arithmetic sequence has U${start1.toString().sub()}=${target1} and U${start2.toString().sub()}=${target2}. Find U${target.toString().sub()}!`;
            ans = unitArithmetic(a,b,target)
            // //console.log(`${start1},${start2},${ans}`);
        ;break;
        case "advSum":
            do{
                start1Idx = generateNonZero(5)*2;
                target = generateNonZero(20);
            }while(start1==target)
            // //console.log(`a=${a} b=${b} S${start1}, S${target}`);
            start1 = sumArithmetic(a,b,start1);
            ans = sumArithmetic(a,b,target);
            soal = `An arithmetic sequence starts with a=${a} and its S${start1Idx.toString().sub()} is ${start1}. Find S${target.toString().sub()}`
            // //console.log(`${start1}, ${target}`);
        ;break;
    }
    return [soal,ans];
}

function geometric(mode){
    let a = generateNonZero(5);
    let r = generateNonZero(4);
    let fraction = (r%2==0)?true:false;
    let target;
    r = (r%2==0)?generateFraction():generateNonZero(3)+1;
    switch(mode){
        case "unit":
            target = (fraction?generateNonZero(2)+1:generateNonZero(5)+1);
            soal = `Given a geometric sequence starts with a=${a}, and continues with ratio r=${r}. Find U${sub(target)}`;
            // //console.log(`U${target}`);
            ans = near(unitGeometric(a,r,target),3);
            // //console.log(`${a},${r},${target}`);
        break;
        case "sum":
            target = (fraction?"unlimited":generateNonZero(5)+1);
            // //console.log(`S${target}`);
            soal = `Given a geometric sequence starts with a=${a}, and continues with ratio r=${r}. Find S${sub(target)}`;
            ans = near((fraction?sumUnlimitedGeometric(a,r):sumGeometric(a,r,target)),3);
            // //console.log(`${a},${r},${target}`);
        break;
    }
    return [soal,ans];
}

function generateFraction(){
    return generateNonZero(10)/10;
}

function unitArithmetic(a,b,n){
    return a+(n-1)*b;
}

function sumArithmetic(a,b,n){
    return (a+unitArithmetic(a,b,n))*n/2;
}

function unitGeometric(a,r,n){
    return a*(r**(n-1));
}

function sumGeometric(a,r,n){
    return (a*(r**n - 1))/(r-1);
}

function sumUnlimitedGeometric(a,r){
    return a/(1-r);
}

function sets(mode){
    let setA = [];
    let setB = [];
    let res = "";
    for(let i=0; i<5; i++){
        setA.push(generateNonZero(9));
        setB.push(generateNonZero(9));
    }
    setA = filterUnique(setA).sort();
    setB = filterUnique(setB).sort();
    //console.log(mode)
    //console.log(`[${setA}],[${setB}]`);
    switch(mode){
        case "and":
            soal = `Given sets A=(${setA.toString()}) and B=(${setB.toString()}). Find A &#8745 B!`
            setA = setA.filter((item)=> setB.includes(item)).sort();
            res = (setA==[])?"{}":`{${setA.toString()}}`;
            //console.log(`${res}`);
        break;
        default:
            soal = `Given sets A=(${setA.toString()}) and B=(${setB.toString()}). Find A &#8746 B!`
            setA = filterUnique(setA.concat(setB)).sort();
            res = (setA==[])?"{}":`{${setA.toString()}}`;
            //console.log(`${res}`);
    }
    return [soal,res];
}

function inequality(){
    let symbols = [">","<",">=","<="];
    let choice = symbols[generateNonZero(3)];
    let x = generateNonZero(10);
    // //console.log(x);
    let coef1,coef2,k1,k2,op1,op2;
    do{
        coef1 = generateNonZero(10);
        coef2 = generateNonZero(10);
        k1 = generateNonZero(20);
        op1 = generateOperand("",true);
        op2 = generateOperand("",true);
    }while(coef1==coef2)
    
    k2 = `${op2} (${(coef1-coef2)*x} ${op1} ${k1})`;
    k2 = handleNegative(eval(k2));
    soal = `Given the inequality ${coef1}x ${op1} ${k1} ${choice} ${coef2}x ${op2} ${k2}, find all possible x!`;
    // //console.log(`${coef1}x ${op1} ${k1} ${choice} ${coef2}x ${op2} ${k2}`);
    if(coef1 > coef2){
        ans = `x ${choice} ${x}`;
        // //console.log(`x ${choice} ${x}`);
    }else{
        ans = `${x} ${choice} x`;
        // //console.log(`${x} ${choice} x`);
    }
    return [soal,ans];
}

function manipulateMean(mode){
    let numA = generateNonZero(5)*10;
    let avgA = generateNonZero(10)*5+50;
    let numB = 1;
    let avgB = generateNonZero(10)*5+50;
    let soal,jawaban;
    switch(mode){
        case "outlier":
            soal = `A class consists of ${numA} students and their average score is {avgA}. if one of them is exempted, their average score becomes ${avgB}. Find this student's score!`
            //console.log(`${numA} : ${avgA} | ${numB} : ${avgB}`);
            //console.log(`${(numA*avgA - avgB)/(numA-1)}`)
            jawaban = `${(numA*avgA - avgB)/(numA-1)}`
            return [soal,jawaban]
        break;
        case "multiOutlier":{
            do{
                numB = generateNonZero(10);
            }while(numB>numA || numB<=1)
            soal = `A class consists of ${numA} students and their average weight is {avgA}. if ${numB} of them are exempted, their average weight becomes ${avgB}. Find these students' average weight!`
            //console.log(`${numA} : ${avgA} | ${numB} : ${avgB}`);
            //console.log(`${(numA*avgA - numB*avgB)/(numA-numB)}`)
            jawaban = `${(numA*avgA - numB*avgB)/(numA-numB)}`
            return [soal,jawaban]
        }break;
        default :
            soal = `A class consists of ${numA} students and their average score is {avgA}. if one of them is exempted, their average score becomes ${avgB}. Find this student's score!`
            numB = generateNonZero(5)*10;
            //console.log(`${numA} : ${avgA} | ${numB} : ${avgB}`);
            //console.log(`${(numA*avgA + numB*avgB)/(numA+numB)}`)
            jawaban = `${(numA*avgA - avgB)/(numA-1)}`
            return [soal,jawaban]
    }
}

function manipulateMean(mode){
    let numA = generateNonZero(5)*10;
    let avgA = generateNonZero(10)*5+50;
    let numB = 1;
    let avgB = generateNonZero(10)*5+50;
    switch(mode){
        case "outlier":
            soal = `A class consists of ${numA} students and their average score is {avgA}. if one of them is exempted, their average score becomes ${avgB}. Find this student's score!`;
            // //console.log(`${numA} : ${avgA} | ${numB} : ${avgB}`);
            ans = (numA*avgA - avgB)/(numA-1);
        break;
        case "multiOutlier":{
            do{
                numB = generateNonZero(10);
            }while(numB>=numA || numB<=1 )
            soal = `There is a group of ${numA} people in which the average weight is ${avgA} kg. When another group of ${numB} people with average weight of ${avgB} kg joined the group, find the new average of the group of ${numA+numB} people!`;
            // //console.log(`${numA} : ${avgA} | ${numB} : ${avgB}`);
            ans = (numA*avgA - numB*avgB)/(numA-numB);
        }break;
        default :
            numB = generateNonZero(5)*10;
            soal = `A class consists of ${numA} students and their average score is {avgA}. if one of them is exempted, their average score becomes ${avgB}. Find this student's score!`;
            // //console.log(`${numA} : ${avgA} | ${numB} : ${avgB}`);
            ans=(numA*avgA + numB*avgB)/(numA+numB);
    }
    ans = near(ans,2);
    return [soal,ans];
}