function disc(coef){
    return coef[1]**2 - 4*coef[2]*coef[0];
}

function abc(coef){
    let soal,ans;
    soal = `${displayF(coef)}<br>`;
    soal += `Find the roots from equation above`;
    let d = disc(coef);
    let x1,x2;
    if(disc(coef)>0){
        let round = isRound(Math.sqrt(d));
        if(round){
            x1 = (coef[1]*-1 + Math.sqrt(d))/(2*(coef[2]));
            x2 = (coef[1]*-1 - Math.sqrt(d))/(2*(coef[2]));
        }else{
            x1 = `(${coef[1]*-1} + &#8730 ${d})/(${2*coef[2]})`;
            x2 = `(${coef[1]*-1} - &#8730 ${d})/(${2*coef[2]})`;
        }
        ans = [x1,x2];
    }else if(disc(coef==0)){
        x1 = (coef[1]*-1)/(2*(coef[2]));
        ans = x1;
    }else{
        ans = "no real root";
    }
    
    // console.log(x1,x2);
    
    return[soal,ans];
}

function compSquare(coef){
    let soal,ans;
    soal = `${displayF(coef)}<br>`;
    soal += `Inverse of the equation above will be equal to..`;
    let a = coef[2];
    let b = coef[1];
    let c = coef[0];
    ans = `(x + ${b}/${2*a})${("2").sup()} = ${disc(coef)}/${4*(a**2)}`;
    inv = disc(coef)<0?'No inverse':`x = (${disc(coef)}/${4*(a**2)}) - ${b}/${2*a}`;
    // console.log(`(x + ${b}/${2*a})${("2").sup()} = ${disc(coef)}/${4*(a**2)}`); 
    return [soal,ans,inv];
}

function integral(pol){
    let soal,ans;
    soal = `&#8747 ${displayF(pol)}`;
    res = ["C"];
    for(let i = 0;i<pol.length;i++){
        res.push(`${near(pol[i]/(i+1),3)}`);
    }
    //console.log(res);
    ans = displayF(res);
    return [soal,ans];
}

function definiteIntegral(pol,low,high){
    let soal,ans;
    soal = `What is the value of &#8747 ${displayF(pol)} from ${low} to ${high}?`
    res1 = 0;
    res2 = 0;
    for(let i = 0;i<pol.length;i++){
        res1 += (pol[i]/(i+1))*(high**(i+1));
        res2 += (pol[i]/(i+1))*(low**(i+1));
    }
    ans = res1-res2;
    return [soal,near(ans,3)];
}

function subsIntegral(pol,pow){
    let soal = `&#8747 (${displayF(dx(pol))}) (${displayF(pol)})${sup(pow)} dx`;
    let jawaban = `1/${pow+1} * (${displayF(pol)})${sup(pow+1)}`;
    // console.log(soal);
    // console.log(jawaban);
    return [soal,jawaban];
}

function dx(pol){
    res = [];
    for(let i = 1; i<pol.length; i++){
        res.push(`${pol[i]*i}`);
    }
    // console.log(res);
    return res;
}

function generateMatrix(r,c,n){
    matrix = [];
    for(let i = 0; i<r; i++){
        row = [];
        for(let j = 0;j<c; j++){
            row.push(generateNonZero(n*2)-n);
        }
        matrix.push(row);
    }
    return matrix;
}

function displayMatrix(mtx){
    r = mtx.length;
    c = mtx[0].length;
    res = "<table class='mtx'>";
    for(let i = 0; i<r; i++){
        res+="<tr>";
        for(let j = 0; j<c; j++){
            res+=`<td>${mtx[i][j]}</td>`;
        }
        res+="</tr>"
    }
    res += "</table>"
    return res;
}

function opMatrix(a,op,b){
    res = a;
    r = a.length;
    c = a[0].length;
    c2 = b[0].length;
    switch(op){
        case "+":
            for(let i =0; i<r; i++){
                for(let j=0; j<c; j++){
                    res[i][j] = a[i][j] + b[i][j];
                }
            }
        ;break;
        case "-":
            for(let i = 0; i<r; i++){
                for(let j = 0; j<r; j++){
                    res[i][j] = a[i][j] - b[i][j]
                }
            }
        ;break;
        case "*":
            res = [];
            for(let i = 0;i<r; i++){
                row=[];
                for(let j = 0; j<c2; j++){
                    ans = 0;
                    for(let k = 0; k<c; k++){
                        ans += a[i][k] * b[k][j];
                    }
                    row.push(ans);
                }
                res.push(row);
            }  
            //console.log(res);
        ;break;
    }
    return res;
}

function discriminant(a){
    if (a.length > 2){
        return "";
    }else{
        return(a[0][0]*a[1][1] - a[1][0]*a[0][1]);
    }
}

function adjoint(a){
    if (a.length > 2){
        return "";
    }else{
        return [[a[1][1],-1*a[0][1]], [-1*a[1][0], a[0][0]]];
    }
}

function scalarMatrixMul(k,a){
    let res = a.map((row)=> row.map((x)=> k*x));
    console.log(res);
    return res;
}

function inverse(a){
    return scalarMatrixMul((1/discriminant(a)), adjoint(a));
}

function transpose(a){
    let res = new Array(a[0].length).fill(0).map(()=> new Array(a.length).fill(0));
    for(let i = 0; i<res.length; i++){
        row = [];
        for(let j = 0; j<res[0].length;j++){
            row.push(a[j][i]);
        }
        res[i] = row;
    }
    
    // console.log(res);
    // res = res.map((row,index)=>{
    //     i = index;
    //     row = row.map((index)=>a[index][i]);
    //     console.log(row);
    //     return row;
    // })
    // console.log(res);
    return res;
}

function cosFormula(){
    let deg = [0,30,45,60,90,37,53];
    let AB = generateNonZero(10)+10;
    let BC = generateNonZero(10)+10;
    let degB = deg[generateNonZero(6)];

    //console.log(`AB:${AB}, BC:${BC}, ${degB}`);

    let soal = `An ABC triangle with AB = ${AB}cm and BC = ${BC}cm, what's the length of AC if the angle at B is &#8728${degB}` 

    let res = AB**2 + BC**2 - 2*AB*BC*Math.cos(toRad(degB));

    if(isRound(Math.sqrt(res))){
        res = Math.sqrt(res);
    }else{
        res=`&#8730 ${res.toFixed(2)}`;
    }

    return [soal,res];
}

function sinFormula(){
    let deg = [0,30,45,60,37,53];
    let A = generateNonZero(10)+10;
    let degA = deg[generateNonZero(6)];
    let degB = deg[generateNonZero(6)];
    let soal = `An ABC triangle with angle A = ${degA} and the opposite side of the angle has length of ${A}cm, what's the length of the opposite side of angle B = ${degB}`;
    let res = A * Math.sin(toRad(degB)) / Math.sin(toRad(degA));
    //console.log(res);
    return [soal,res];
}

function countTrig(trig,pol,val){
    switch(trig){
        case "sin":
            return Math.sin(toRad(countF(pol,undefined,val)));
        ;break;
        case "cos":
            return Math.cos(toRad(countF(pol,undefined,val)));
        ;break;
        case "tan":
            return Math.tan(toRad(countF(pol,undefined,val)));
        ;break;
        case "csc":
            return 1/Math.sin(toRad(countF(pol,undefined,val)));
        ;break;
        case "sec":
            return 1/Math.cos(toRad(countF(pol,undefined,val)));
        ;break;
        case "cot":
            return 1/Math.tan(toRad(countF(pol,undefined,val)));
        ;break;
        default:
            return 0
    }
}

function displayTrig(trig,pol){
    return (`${trig}(${displayF(pol)})`);
}

function dxTrig(trig,pol){
    let k = dx(pol);
    pol = displayF(pol);
    soal = `Which one is the first derivatives of ${trig}(${pol})`;
    switch(trig){
        case "sin":
            trig = `cos(${pol})`;
        ;break;
        case "cos":
            trig = `-sin(${pol})`;
        ;break;
        case "tan":
            trig = `sec${sup(2)}(${pol})`;
        ;break;
        case "csc":
            trig = `-csc(${pol})cot(${pol})`;
        ;break;
        case "sec":
            trig = `sec(${pol})tan(${pol})`;
        break;
        case "cot":
            trig = `-csc${sup(2)}(${pol})`;
        ;break;
    }
    jawaban = `${displayF(k)} ${trig}`;
    return [soal,jawaban];
}

function integralTrig(trig,pol){
    //console.log(`integral ${displayF(dx(pol))} ${trig}(${displayF(pol)})`);
    arrPol = pol;
    pol = displayF(pol);
    soal = `&#8747 ${displayF(dx(arrPol))} ${trig}(${pol})`
    switch(trig){
        case "sin":
            trig = `- cos(${pol}) + C`;
        ;break;
        case "cos":
            trig = `+ sin(${pol}) + C`;
        ;break;
        case "tan":
            trig = `- ln[cos(${pol})] + C`;
        ;break;
        case "csc":
            trig = `- ln[csc(${pol}) + cot(${pol})] + C`;
        ;break;
        case "sec":
            trig = `+ ln[sec(${pol}) + tan(${pol})] + C`;
        break;
        case "cot":
            trig = `+ ln[sin(${pol})] + C`;
        ;break;
    }
    jawaban = `1/(${displayF(dx(arrPol))}) ${trig}`;
    return[soal,jawaban];
    //console.log(`1/(${displayF(dx(arrPol))}) ${trig}`);
}

function logarithm(mode,num1,num2){
    let multiplier1 = generateNonZero(3)+1
    let multiplier2 = generateNonZero(3)+1
    let soal;
    let hasil
    switch (mode) {
        case "multiply":
            let rand_num = num1*multiplier1*num2*multiplier2
            hasil = Math.log10(rand_num).toFixed(2)
            soal = `if log ${num1} = ${Math.log10(num1).toFixed(2)} and log ${num2} = ${Math.log10(num2).toFixed(2)}, find log ${rand_num}`;
            //console.log(soal)
            //console.log(hasil)
            break;
        case "sum":
            //Nilai dari (3log 5 – 3 log 15 + 3log 9)
            let num3 = multiplier1*num1
            let num4 = multiplier2*num1
            let op1 = generateNonZero(6)%2===0?"+":"-"
            let op2 = op1==="+"?"-":"+"
            op1==="+"?(num3 = num1**multiplier1):(num3 = num2*num1**multiplier2)
            op2==="+"?(num4 = num1**multiplier1):(num4 = num2*num1**multiplier2)
            hasil = op1==="+"?(Math.log10(num2)/Math.log10(num1)+Math.log10(num3)/Math.log10(num1)):(Math.log10(num2)/Math.log10(num1)-Math.log10(num3)/Math.log10(num1))
            hasil = Math.round(op2==="+"?(hasil+Math.log10(num4)/Math.log10(num1)):(hasil-Math.log10(num4)/Math.log10(num1)))
            soal = `${num1}log${num2} ${op1} ${num1}log${num3} ${op2} ${num1}log${num4} =`;
            // console.log(soal)
            // console.log((hasil))
            break;
        default:
            break;
    }
    return [soal,hasil];
}

function statisticSHS(mode){
    let array = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]//batasbawah,batasatas,frekuensi,rerata
    let init = generateNonZero(4)-1
    let range = generateNonZero(2)+1
    let sum = 0
    let count = 0
    let tempcounter = 0
    let j = 0
    let soal,ans;
    for (let i = 0; i < array.length; i++) {
        init+=1
        array[i][0]=init;
        init+=range
        array[i][1]=init;  
        array[i][2]=generateNonZero(3)+1 
        array[i][3]=(array[i][0]+array[i][1])/2
        sum+=(array[i][2]*array[i][3])
        count+=array[i][2]
    }
    console.log(array)
    let data = array;
    switch (mode) {
        case "mean":
            let mean = (sum/count).toFixed(2)
            console.log(`mean: ${mean}`)
            soal = 'Find the mean of grouped data above!';
            ans = mean;
            break;
        case "median":
            let imed = count/2
            console.log(imed)
            while (tempcounter<imed){
                tempcounter+=array[j][2]
                j+=1
            }
            j-=1
            //console.log(array[j+1])
            let median = ((array[j][0]-0.5)+((range+1)*(0.5*count-(tempcounter-array[j][2]))/array[j][2])).toFixed(2)
            //console.log(`median: ${median}`)
            ans = median;
            soal = 'Find the median of grouped data above!';
            break;
        case "Q1":
            let iq1 = count/4
            //console.log(iq1)
            while (tempcounter<iq1){
                tempcounter+=array[j][2]
                j+=1
            }
            j-=1
            let q1 = ((array[j][0]-0.5)+((range+1)*(0.25*count-(tempcounter-array[j][2]))/array[j][2])).toFixed(2)
            //console.log(`Q1: ${q1}`)
            ans = q1;
            soal = "Find the lower quartile (Q1) of grouped data above!";
            break;
        case "Q3":
            let iq3 = count*0.75
            //console.log(iq3)
            while (tempcounter<iq3){
                tempcounter+=array[j][2]
                j+=1
            }
            j-=1
            let q3 = ((array[j][0]-0.5)+((range+1)*(0.75*count-(tempcounter-array[j][2]))/array[j][2])).toFixed(2)
            //console.log(`Q3: ${q3}`)
            ans = q3;
            soal = "Find the higher quartile (Q3) of grouped data above!";
            break;
        case "std_dev": //tidakkah ini terlalu jahat? :v
            let avg = (sum/count).toFixed(2)
            //console.log(`hint: mean = ${avg}`)
            for (j ; j < array.length; j++) {
                tempcounter+=array[j][2]*((array[j][3]-avg)**2)
            }
            std_dev = ((tempcounter/count)**0.5).toFixed(2)
            //console.log(`standard deviation: ${std_dev}`)
            ans = std_dev;
            soal = "Find the standard deviation of grouped data above!";
            break;
        default:
            break;
    }
    return [soal,ans,data];
}

function point2line(mode,s){
    let tabel
    let opsi
    let hasil
    let soal
    switch (mode) {
        case "facediagonal":
            tabel = [["G","BE"],["A","HC"],["F","AH"],["H","FC"]]
            opsi = tabel[generateNonZero(4)-1]
            if(s%3===0){hasil = (s/3).toString()}
            else{hasil = s.toString()+"/3"}
            hasil+=`&radic;6`
            soal = `if the side length of a cube is ${s}, find the distance between ${opsi[0]} to ${opsi[1]}!`;
            //console.log(soal)
            //console.log(hasil)
            break;
        case "spacediagonal":
            if (s%2!==0){s+=1}//biar genap
            tabel = [["X","EH","AG"],["Y","EF","HB"],["Z","FG","EC"]]
            opsi = tabel[generateNonZero(3)-1]
            let AM2 = (s**2)+((s/2)**2)
            hasil = AM2-(((s/2)**2)*3)
            let akar
            for (let i = 0; i < hasil; i++) {
                if (hasil%(i**2)===0){
                    akar=i
                }}
            if (akar===1) {
                hasil = `&radic;`+hasil.toString()
            } else {
                hasil = akar+`&radic;`+(hasil/(akar**2)).toString()
            }
            soal = `if the side length of a cube is ${s}, and ${opsi[0]} lies in the middle ${opsi[1]}, calculate the distance between x to ${opsi[2]}`;
            console.log(hasil)
            break;
        default:
            break;
    }
    return [soal,hasil];
}

function circle (a,b,r,cari){//pusat x,y, jari2, "rad/center/eq"
    let eq = [1,1,(-2)*a,(-2)*b,a**2+b**2-r**2] //x2,y2,Ax,By,C
    let pers=`x${(2).toString().sup()} + y${(2).toString().sup()}`
    let satuan = ["x2","y2","x","y",""]
    let soal,ans;
    for (let i = 2; i < 5; i++) {
        if (eq[i]!==0){
            if (eq[i]<0){pers +=` - ${Math.abs(eq[i])}`}
            else{pers +=` + ${eq[i]}`} 
            pers+=satuan[i]  
        }
    }
    switch (cari) {
        case "rad":
            soal = `Suppose ${pers} is an equation of a circle. Find the radius of the circle!`;
            ans = r;
            // console.log(`${pers} is an equation of a circle.`)
            // console.log(`find the radius of the circle!`)
            // console.log(`r`)
            break;
        case "center":
            soal = `Suppose ${pers} is an equation of a circle. Find the center point of the circle!`;
            ans = [a,b];
            // console.log(`${pers} is an equation of a circle.`)
            // console.log(`find the center of the circle!`)
            // console.log(`(${a},${b})`)
            break;
        case "eq":
            let pers_eq = `(x`
            if (a!==0){
                if (a<0){pers_eq +=` + ${Math.abs(a)}`}
                else{pers_eq +=` - ${a}`}
            }
            pers_eq+=`)(y`
            if (b!==0){
                if (b<0){pers_eq +=` + ${Math.abs(b)})`}
                else{pers_eq +=` - ${b})`}
            }
            pers_eq+=` = ${r**2}`
            let B
            soal = `Suppose ${pers_eq} is an equation of a circle. Find the equivalent equation of the circle!`;
            ans = pers;
            // console.log(`${pers_eq} is an equation of a circle.`)
            // console.log(`find the equivalent equation of the circle!`)
            // console.log(`${pers}`)
            break;
        default:
            break;
    }
    return [soal,ans];
}

function garissinggungSMA(arr,x,sejajar){//arr = [x2,x,k], sejajar: true, false (tegak lurus)
    arr = arr.reverse();
    let turunan = [2*(arr[0]),arr[1]]
    let y = (arr[0])*(x**2) + (arr[1])*x + arr[2]
    let titiksinggung = `(${x},${y})`
    let m = turunan[0]*x + turunan[1]
    let pers=`F(x) = ${arr[0]}x${(2).toString().sup()}`
    let satuan = ["x2","x",""]
    let soal,ans;
    for (let i = 1; i <= 2; i++) {
        if (arr[i]!==0){
            if (arr[i]<0){pers +=` + ${Math.abs(arr[i])}`}
            else{pers +=` - ${arr[i]}`}  
            pers+=satuan[i]
        }
    }
    let c
    let hasil
    switch (sejajar) {
        case true:
            soal = pers + `Find the equation of the line that is parallel to F(x) in the point ${titiksinggung}`;
            // console.log(pers)
            // console.log(`Find the equation of the line that is parallel to F(x) in the point ${titiksinggung}`)
            c=(-1)*x*m+y
            hasil = `y = ${m}x`
            if (c!==0){
                if (c<0){c=` - ${Math.abs(c)}`}
                else{c=` + ${c}`}  
                hasil+=c
            }
            // console.log(hasil)
            ans = hasil;
            break;
        default: //tegak lurus
            soal = pers + `Find the equation of the line that is perpendicular to F(x) in the point ${titiksinggung}`;
            // console.log(pers)
            // console.log(`Find the equation of the line that is perpendicular to F(x) in the point ${titiksinggung}`)
            m=((-1/m)).toFixed(2)
            c=(-1)*x*m+y
            hasil = `y = ${m}x`
            if (c!==0){
                if (c<0){c=` - ${Math.abs(c)}`}
                else{c=` + ${c}`}   
                hasil+=c
            }
            // console.log(hasil)
            ans = hasil;
            break;
    }
    return [soal,ans];
}

function akar2perskuadrat(akar1,akar2,mode){ //mode: "sum","multiply"
    let soal,ans;
    soal = `Given ${generatePreF([akar1,akar2])} = 0<br/>If the roots of the quadratic equation above are x${("1".sub())} and x${("2".sub())},`
    // console.log(`${generatePreF([akar1,akar2])} = 0`)
    // console.log(`if the roots of the quadratic equation above are x1 and x2,`)
    let k1
    let k2
    let a = 0
    if (mode==="sum"){
        while (a===0){a = generateNonZero(5)-3}
        k1 = akar1+a
        k2 = akar2+a
        // console.log(a)
        soal+= `the equation below that have the roots (x${("1").sub()}+${handleNegative(a)}) and (x${("2".sub())}+${handleNegative(a)}) is:`;
        // console.log(`the equation below that have the roots (x1+${handleNegative(a)}) and (x2+${handleNegative(a)}) is:`)
        ans = generatePreF([k1,k2])
    }else{
        while (a===0 || a===1){a = generateNonZero(7)-4}
        k1 = akar1*a
        k2 = akar2*a
        // console.log(a)
        soal+= `the equation below that have the roots (${handleNegative(a)}.x${("1").sub()}) and (${handleNegative(a)}.x${("2".sub())}) is:`;
        // console.log(`the equation below that have the roots (${handleNegative(a)}.x1) and (${handleNegative(a)}.x2) is:`)
        ans = generatePreF([k1,k2])
    }

    return [soal,ans];
}

function ExtremePoint(xp,yp){//x dan y ekstrem
    let soal,ans;
    let kuadrat = [xp**2,(-2)*xp,1]
    let a = 0
    while (a===0 || a===1) {a=generateNonZero(9)-5}
    kuadrat = [a*kuadrat[0]+yp,a*kuadrat[1],a*kuadrat[2]]
    let find = (kuadrat[0]>0)?"minimum":"maximum"
    soal = `Find the ${find} point of y = ${displayF(kuadrat)}`;
    // console.log(`Find the ${find} point of y = ${displayF(kuadrat)}`)
    // console.log(`(${xp},${yp})`)
    ans = [xp,yp];
    return [soal,ans];
}

function tes(){
    console.log("MASUK!!");
}