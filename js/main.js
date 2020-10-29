//level SD

function turbulenceSD(soal){
    
    chosenIdx = generateNonZero(4)-1
    console.log(chosenIdx)
    options = []
    let ans
    switch (soal) {
        case "standardOP":
            let n = generateNonZero(3)+2
            let limit = 10
            for (let i = 0;i<4;i++){
                do{
                    temp = standardOP(n,limit,true)
                }while(options.includes(temp[0]))
                if (i===chosenIdx){
                    soal = temp[0]
                    ans = i
                }
                options.push(temp[1])
            }
            console.log(soal,options,ans)
            return[soal,options,ans]
        case "kpk":
            arrp1 = []
            arrp2 = []
            for (let i = 0;i<4;i++){
                do{
                    p1 = generateNonZero(8)+2
                    p2 = generateNonZero(8)+2
                    hasilkpk=kpk(p1,p2)[1]
                }while((options.includes(hasilkpk))||(p1===p2)||(hasilkpk===p1)||(hasilkpk===p2)||(hasilkpk===p1*p2))
                arrp1.push(p1)
                arrp2.push(p2)
                options.push(hasilkpk)
                if (i===chosenIdx){
                    soal = kpk(p1,p2)[0]
                    ans = i
                }
            }
            console.log(soal,options,ans)
            return[soal,options,ans]
        case "fpb":
            arrp1 = []
            arrp2 = []
            for (let i = 0;i<4;i++){
                do{
                    p1 = generateNonZero(30)+3
                    p2 = generateNonZero(30)+3
                    hasilfpb=fpb(p1,p2)[1]
                }while((options.includes(hasilfpb))||(p1===p2)||(hasilfpb===p1)||(hasilfpb===p2)||(hasilfpb<3))
                arrp1.push(p1)
                arrp2.push(p2)
                options.push(hasilfpb)
                if (i===chosenIdx){
                    soal = fpb(p1,p2)[0]
                    ans = i
                }
            }
            console.log(soal,options,ans)
            return[soal,options,ans]
        case "luas":
            bangun = ['persegipanjang','lingkaran','segitiga','layang-layang','trapesium']
            cari = generateNonZero(bangun.length)-1
            for (let i = 0;i<4;i++){
                do{
                    temp = luas(bangun[cari])
                }while(options.includes(temp[1]))
                options.push(temp[1])
                if (i===chosenIdx){
                    soal = temp[0]
                    ans = i
                }
            }
            console.log(soal,options,ans)
            return[soal,options,ans]
        case "keliling":
            bangun = ["persegipanjang","lingkaran","segitiga"]
            cari = generateNonZero(bangun.length)-1
            for (let i = 0;i<4;i++){
                do{
                    temp = keliling(bangun[cari])
                }while(options.includes(temp[1]))
                options.push(temp[1])
                if (i===chosenIdx){
                    soal = temp[0]
                    ans = i
                }
            }
            console.log(soal,options,ans)
            return[soal,options,ans]
        case "persen":
            for (let i = 0;i<4;i++){
                do{
                    dec = Number((generateNonZero(200)/generateNonZero(50)).toFixed(2))
                    pembilang = generateNonZero(10)
                    penyebut = generateNonZero(9)+1
                    temp = persen(dec,pembilang,penyebut)
                }while(options.includes(temp[1])||(temp[1]>1000))
                options.push(temp[1])
                if (i===chosenIdx){
                    soal = temp[0]
                    ans = i
                }
            }
            console.log(soal,options,ans)
            return[soal,options,ans]
        case "konversiVolume":
            soal = konversiVolume()
            ans = soal[1]
            soal = soal[0]
            for (let j = 0; j < 4; j++) {
                options.push(0);
            }
            options[chosenIdx]=ans
            for (let i = 0;i<4;i++){
                if (i!==chosenIdx){
                    do{
                        temp=ans*(10**(generateNonZero(5)-3))
                    }while(options.includes(temp))
                    options[i]=temp
                }
                }
            console.log(soal,options,chosenIdx)
            return[soal,options,chosenIdx]
        case "konversiPanjang":
            soal = konversiPanjang()
            while (soal[1]<1 || soal[1]>100000 || Number.isInteger(soal[1])===false){soal = konversiPanjang()}
            ans = soal[1]
            soal = soal[0]
            for (let j = 0; j < 4; j++) {
                options.push(0);
            }
            options[chosenIdx]=ans
            for (let i = 0;i<4;i++){
                if (i!==chosenIdx){
                    do{
                        temp=ans*(10**(generateNonZero(5)-3))
                    }while(options.includes(temp))
                    
                    if (Number.isInteger(temp)===false){temp = Number(temp.toFixed(2))}
                    options[i]=temp
                }
                }
            console.log(soal,options,chosenIdx)
            return[soal,options,chosenIdx]   
        case "statistikaSDSMP":
            soal = statistikaSDSMP("SD")
            ans = soal[1]
            soal = soal[0]
            for (let j = 0; j < 4; j++) {
                options.push(0);
            }
            options[chosenIdx]=ans
            if (typeof ans !== 'string'){//khusus modus, ada opsi "no correct answer"
                for (let i = 0;i<4;i++){
                    if (i!==chosenIdx){
                        do{
                            if (Number.isInteger(ans)){temp=ans+generateNonZero(5)-3}
                            else{
                                temp = ans+0.1*(generateNonZero(5)-3)
                                temp = Number(temp.toFixed(2))
                            }
                        }while(options.includes(temp))
                        options[i]=temp
                    }
                }
                do{
                    idString = generateNonZero(4)-1
                }while(idString===chosenIdx)
                options[idString] = "no correct answer"
            }else{
                for (let i = 0;i<4;i++){
                    if (i!==chosenIdx){
                        do{
                            temp = generateNonZero(5)
                        }while(options.includes(temp))
                        options[i]=temp
                    }
                }
            }
            for (let k = 0; k < options.length; k++) {
                if (typeof options[k] !== 'string'){options[k]=options[k].toString()}
            }
            console.log(soal,options,chosenIdx)
            return[soal,options,chosenIdx]
        default:
            break;
    }
}

function generateSD(){
    let daftar = ["standardOP","kpk","fpb","luas","keliling","persen","konversiVolume","konversiPanjang","statistikaSDSMP"]
    id = generateNonZero(daftar.length)-1
    turbulenceSD(daftar[id])
}

function generateSMP(){
    let daftar = ["spldv","spltv","persgaris","probability","similarity","arithmetic","geometric","sets","inequality","manipulateMean","statistikaSMP"]
    id = generateNonZero(daftar.length)-1
    console.log(daftar[id])
    turbulenceSMP(daftar[id])
}

function turbulenceSMP(soal){
    
    chosenIdx = generateNonZero(4)-1
    console.log(chosenIdx)
    options = []
    let ans
    switch (soal) {
        case "spldv":
            arrnum1 = []
            arrnum2 = []
            arrcek = []
            for (let i = 0; i < 4; i++) {
                do{
                    num1 = generateNonZero(11)-6
                    num2 = generateNonZero(11)-6
                    arrcek.push(num1*num2)
                }while((options.includes(num1*num2))||(num1===0)||(num2===0))
                arrnum1.push(num1)
                arrnum2.push(num2)
                options.push(`(${num1},${num2})`)
            }
            ans = spldv(arrnum1[chosenIdx],arrnum2[chosenIdx])
            soal = ans[0]
            ans = chosenIdx
            console.log(soal,options,ans)
            return[soal,options,ans]

        case "spltv": 
            arrnum1 = []
            arrnum2 = []
            arrnum3 = []
            arrcek = []
            for (let i = 0; i < 4; i++) {
                do{
                    num1 = generateNonZero(9)-5
                    num2 = generateNonZero(9)-5
                    num3 = generateNonZero(9)-5
                    arrcek.push(num1*num2*num3)
                }while((options.includes(num1*num2*num3))||(num1===0)||(num2===0)||(num3===0))
                arrnum1.push(num1)
                arrnum2.push(num2)
                arrnum3.push(num3)
                options.push(`(${num1},${num2},${num3})`)
            }
            ans = spltv(arrnum1[chosenIdx],arrnum2[chosenIdx],arrnum3[chosenIdx])
            soal = ans[0]
            ans = chosenIdx
            console.log(soal,options,ans)
            return[soal,options,ans]

        case "persgaris":
            arrx1 = []
            arrx2 = []
            arry1 = []
            arry2 = []
            arrcek = []
            for (let i = 0; i < 4; i++) {
                do{
                    x1 = generateNonZero(9)-5
                    x2 = generateNonZero(9)-5
                    y1 = generateNonZero(9)-5
                    y2 = generateNonZero(9)-5
                    arrcek.push(x1+x2+y1+y2)
                }while((options.includes(x1+x2+y1+y2))||(x2-x1===0)||(y2-y1===0))
                arrx1.push(x1)
                arrx2.push(x2)
                arry1.push(y1)
                arry2.push(y2)
                temp = persGaris2Titik([x1,y1],[x2,y2])
                if (i===chosenIdx){
                    soal = temp[0]
                }
                options.push(temp[1])
            }
            ans = chosenIdx
            console.log(soal,options,ans)
            return[soal,options,ans]

        case "probability":
            type = (generateNonZero(2)>1)?"coin":"dice"
            n = (type==="coin")?(generateNonZero(2))+5:(generateNonZero(2))
            for (let i = 0; i < 4; i++) {
                do{
                    temp = probability_JHS(type,n)
                }while(options.includes(temp[1]))
                options.push(temp[1])
                if (i===chosenIdx){
                    soal = temp[0]
                }
            }
            ans = chosenIdx
            console.log(soal,options,ans)
            return[soal,options,ans]

       
        case "similarity":
            tabel = ["triangle","trapezoid","flipped"]
            type = tabel[generateNonZero(3)-1]
            temp = similarity(type)
            ans = temp[1]
            soal = temp[0]
            gambar = temp[2]
            for (let j = 0; j < 4; j++) {
                options.push(0);
            }
            options[chosenIdx]=ans
            for (let i = 0;i<4;i++){
                if (i!==chosenIdx){
                    do{
                        temp=ans+(generateNonZero(11)-6)
                    }while(options.includes(temp))
                    options[i]=temp
                    }
                }
            console.log(soal,options,chosenIdx,gambar)
            return[soal,options,chosenIdx,gambar]

        case "arithmetic":
            tabel = ["unit","sum","advUnit","advSum"]
            type = tabel[generateNonZero(4)-1]
            temp = arithmetic(type)
            ans = temp[1]
            soal = temp[0]
            for (let j = 0; j < 4; j++) {
                options.push(0);
            }
            options[chosenIdx]=ans
            for (let i = 0;i<4;i++){
                if (i!==chosenIdx){
                    do{
                        temp=ans+(generateNonZero(15)-8)
                    }while(options.includes(temp))
                    options[i]=temp
                    }
                }
            console.log(soal,options,chosenIdx)
            return[soal,options,chosenIdx] 
        case "geometric":
            tabel = ["unit","sum"]
            type = tabel[generateNonZero(2)-1]
            temp = geometric(type)
            ans = temp[1]
            soal = temp[0]
            for (let j = 0; j < 4; j++) {
                options.push(0);
            }
            options[chosenIdx]=ans
            for (let i = 0;i<4;i++){
                if (i!==chosenIdx){
                    do{
                        temp=ans+generateNonZero(10,true)
                    }while(options.includes(temp))
                    options[i]=temp
                    }
                }
            console.log(soal,options,chosenIdx)
            return[soal,options,chosenIdx] 

        case "sets":
            tabel = ["and","or"]
            type = tabel[generateNonZero(2)-1]
            temp = sets(type)
            ans = temp[1]
            soal = temp[0]
            for (let j = 0; j < 4; j++) {
                options.push("");
            }
            options[chosenIdx]=ans
            for (let i = 0;i<4;i++){
                if (i!==chosenIdx){
                    do{
                        temp=sets(type)[1]
                    }while(options.includes(temp))
                    options[i]=temp
                    }
                }
            console.log(soal,options,chosenIdx)
            return[soal,options,chosenIdx] 

        case "inequality":
            temp = inequality()
            ans = temp[1]
            soal = temp[0]
            for (let j = 0; j < 4; j++) {
                options.push("");
            }
            options[chosenIdx]=ans
            for (let i = 0;i<4;i++){
                if (i!==chosenIdx){
                    do{
                        temp=inequality()[1]
                    }while(options.includes(temp))
                    options[i]=temp
                    }
                }
            console.log(soal,options,chosenIdx)
            return[soal,options,chosenIdx]           

        case "manipulateMean":
            tabel = ["outlier","multiOutlier"]
            type = tabel[generateNonZero(2)-1]
            temp = manipulateMean(type)
            ans = temp[1]
            soal = temp[0]
            for (let j = 0; j < 4; j++) {
                options.push(0);
            }
            options[chosenIdx]=ans
            for (let i = 0;i<4;i++){
                if (i!==chosenIdx){
                    do{
                        temp=ans+(generateNonZero(7)-4)
                    }while(options.includes(temp))
                    options[i]=temp
                    }
                }
            console.log(soal,options,chosenIdx)
            return[soal,options,chosenIdx] 

        case "statistikaSMP":
                soal = statistikaSDSMP("SMP")
            ans = soal[1]
            soal = soal[0]
            for (let j = 0; j < 4; j++) {
                options.push(0);
            }
            options[chosenIdx]=ans
            if (typeof ans !== 'string'){//khusus modus, ada opsi "no correct answer"
                for (let i = 0;i<4;i++){
                    if (i!==chosenIdx){
                        do{
                            if (Number.isInteger(ans)){temp=ans+generateNonZero(5)-3}
                            else{
                                temp = ans+0.1*(generateNonZero(5)-3)
                                temp = Number(temp.toFixed(2))
                            }
                        }while(options.includes(temp))
                        options[i]=temp
                    }
                }
                do{
                    idString = generateNonZero(4)-1
                }while(idString===chosenIdx)
                options[idString] = "no correct answer"
            }else{
                for (let i = 0;i<4;i++){
                    if (i!==chosenIdx){
                        do{
                            temp = generateNonZero(5)
                        }while(options.includes(temp))
                        options[i]=temp
                    }
                }
            }
            for (let k = 0; k < options.length; k++) {
                if (typeof options[k] !== 'string'){options[k]=options[k].toString()}
            }
            console.log(soal,options,chosenIdx)
            return[soal,options,chosenIdx]
        default:
            break;
    }
}

function generateSMA(){
    soal = ["logaritma","inverse","disc","findX","abc","findF",
    "akar2","extreme","tangent","circle","point2line","statisticSHS",
    "opMatrix","invMatrix","tranpose","cosFormula","sinFormula","dx","integral",
    "subsIntegral","definitIntegral","dxTrig","integralTrig"];
    n = generateNonZero(soal.length)-1;
    return turbulenceSMA(soal[n%soal.length]);
}

function turbulenceSMA(soal){
    chosenIdx = generateNonZero(4)-1; //ngacak lokasi jawaban bener
    options = [] //semua jawaban A,B,C,D
    switch(soal){
        case "logaritma":
            let p1,p2;
            for(let i = 0; i<4; i++){
                mode = generateNonZero(2);
                mode = (mode%2==0?"sum":"multiply");
                do{
                    p1 = generateNonZero(4)+1;
                    p2 = generateNonZero(4)+1;
                    temp = logarithm(mode,p1,p2);
                }while(options.includes(temp[1])) //generate unique answer
                if(i==chosenIdx){
                    soal = temp[0];//ambil soal benerannya
                }
                options.push(temp[1]);
            }
            return [soal,options,chosenIdx];
        case "inverse":
            for(let i =0;i<4;i++){
                eq = generateF(2)[0];
                do{
                    temp = compSquare(eq);
                }while(options.includes(temp[2]));
                if(i==chosenIdx){
                    soal = temp[0];//ambil soal benerannya
                }
                options.push(temp[2]);
            }
            return [soal,options,chosenIdx];
        case "disc":
            roots = generateNonZero(3)-1;
            switch(roots){
                case 0 :
                    soal = `Which of these equation that has no real roots`;
                    for(let i =0;i<4;i++){
                        if(i==chosenIdx){
                            do{
                                eq = generateF(2)[0];
                            }while(disc(eq)>=0 || options.includes(eq))
                        }else{
                            do{
                                eq = generateF(2)[0];
                            }while(disc(eq)<0 || options.includes(eq))
                        }
                        options.push(displayF(eq));
                    }
                ;break;
                case 1 :
                    soal = `Which of these equation that has one real roots`
                    for(let i =0;i<4;i++){
                        if(i==chosenIdx){
                            do{
                                eq = generateF(2)[0];
                            }while(disc(eq)!=0 || options.includes(eq))
                        }else{
                            do{
                                eq = generateF(2)[0];
                            }while(disc(eq)==0 || options.includes(eq))
                        }
                        options.push(displayF(eq));
                    }
                ;break;
                case 2 :
                    soal = `Which of these equation that has two real roots`
                    for(let i =0;i<4;i++){
                        if(i==chosenIdx){
                            do{
                                eq = generateF(2)[0];
                            }while(disc(eq)<=0 || options.includes(eq))
                        }else{
                            do{
                                eq = generateF(2)[0];
                            }while(disc(eq)>0 || options.includes(eq))
                        }
                        options.push(displayF(eq));
                    }
            }
            return [soal,options,chosenIdx];
        case "findX":
            ans = [generateNonZero(5)];
            ans.push(generateNonZero(5));
            template = [];
            soal = `The equation ${generatePreF(ans)} have roots..`
            for(let i =0;i<4;i++){
                if(i==chosenIdx){
                    options.push(ans);
                }else{
                    do{
                        temp = [generateNonZero(5)];
                        temp.push(generateNonZero(5));
                    }while(generatePreF(temp)==generatePreF(ans) || template.includes(generatePreF(temp)));
                    template.push(generatePreF(temp));
                    options.push(temp);
                }
            }
            return[soal,options,chosenIdx];
        case "abc":
            tempEq = [];
            for(let i = 0; i<4; i++){
                do{
                    eq = generateF(2)[0];
                }while(tempEq.includes(eq) || options.includes(abc(eq)[1]));
                tempEq.push(eq);
                if(i==chosenIdx){
                    soal = `The equation ${displayF(eq)} have roots..`
                }
                options.push(abc(eq)[1]);
            }
            return[soal,options,chosenIdx];
        case "findF":
            tempEq = [];
            for(let i = 0; i<4; i++){
                do{
                    eq = generateF(1)[0];
                }while(tempEq.includes(eq) || options.includes(eq));
                tempEq.push(eq);
                if(i==chosenIdx){
                    a = generateNonZero(5);
                    do{
                        b = generateNonZero(5);
                    }while(a==b)
                    soal = `Given f(x)=ax+b, f(${a})=${countF(eq,undefined,a)} and f(${b})=${countF(eq,undefined,b)}. From the given information, f(x) will be equal to:`;
                }
                options.push(displayF(eq));
            }
            return[soal,options,chosenIdx];
        case "akar2":
            x1 = generateNonZero(5);
            x2 = generateNonZero(5);
            mode = generateNonZero(4);
            mode = (mode%2==0)?"sum":"mul";

            set = akar2perskuadrat(x1,x2,mode);
            soal = set[0];
            ans = set[1];

            for(let i =0; i<4; i++){
                if(i==chosenIdx){
                    options.push(ans);
                }else{
                    do{
                        nX1 = generateNonZero(10);
                        nX2 = generateNonZero(10);
                        temp = generatePreF([nX1,nX2]);
                    }while(temp==ans || options.includes(temp));
                    options.push(temp);
                }
            }

            return[soal,options,chosenIdx];
        case "extreme":
            xp = generateNonZero(5);
            yp = generateNonZero(5);
            
            set = ExtremePoint(xp,yp);
            soal = set[0];
            ans = set[1]; //[xp,yp]

            tempAns = generatePreF(ans);
            template = [];

            for(let i =0; i<4; i++){
                if(i==chosenIdx){
                    options.push(ans);
                }else{
                    do{
                        xp2 = generateNonZero(10);
                        yp2 = generateNonZero(10);
                        temp = generatePreF([xp2,yp2]);
                    }while(temp==tempAns || template.includes(temp));
                    options.push([xp2,yp2]);
                    template.push(temp);
                }
            }
            return [soal,options,chosenIdx]
        case "tangent":
            for(let i = 0; i<4; i++){
                do{
                    pol = generateF(2)[0];
                    sejajar = generateNonZero(2);
                    temp = garissinggungSMA(pol, generateNonZero(4), sejajar%2==0);
                }while(options.includes(temp[1]));
                options.push(temp[1]);
                if(i==chosenIdx){
                    soal = temp[0];
                }
            }
            return [soal, options, chosenIdx]
        case "circle":
            seek = ["rad","center","eq"]
            mode = seek[generateNonZero(3)%3];
            for(let i = 0; i<4; i++){
                do{
                    a = generateNonZero(10);
                    b = generateNonZero(10);
                    r = generateNonZero(5);
                    temp = circle(a,b,r,mode);
                }while(options.includes(temp[1]));
                options.push(temp[1]);
                if(i==chosenIdx){
                    soal = temp[0];
                }
            }
            return [soal,options,chosenIdx]
        case "point2line":
            mode = ["facediagonal","spacediagonal"]
            for(let i = 0; i<4; i++){
                do{
                    temp = point2line(mode[generateNonZero(2)%2], generateNonZero(10))
                }while(options.includes(temp[1]));
                options.push(temp[1]);
                if(i ==chosenIdx){
                    soal = temp[0];
                }
            }
            return [soal,options,chosenIdx,'kubus.png'];
        case "statisticSHS":
            mode = ["mean","median","Q1","Q3","std_dev"];
            for(let i = 0; i<4; i++){
                do{
                    temp = statisticSHS(mode[generateNonZero(5)%5]);
                }while(options.includes(temp[1]))
                options.push(temp[1]);
                if(i==chosenIdx){
                    soal = temp[0];
                    data = temp[2]
                }
            }
            return [soal,options,chosenIdx,data];
        case "opMatrix":
            op = ["+","-","*"];
            chosenOp = op[generateNonZero(3)%3];
            r = generateNonZero(2)+1;
            c = generateNonZero(2)+1;
            A = generateMatrix(r,c,20);
            for(let i = 0; i<4; i++){
                if(chosenOp=="*"){
                    do{
                        r2 =generateNonZero(2)+1;
                    }while(c!=r2)
                    c2 = generateNonZero(2)+1;
                    B = generateMatrix(r2,c2,20);
                }else{
                    B = generateMatrix(r,c,20);
                }
                do{
                    res = displayMatrix(opMatrix(A,chosenOp,B));
                }while(options.includes(res));
                options.push(res);
                if(i==chosenIdx){
                    soal = [`Given A = ${displayMatrix(A)} and B = ${displayMatrix(B)}`];
                    soal.push(`find A${chosenOp}B!`);
                }
            }
            return [soal,options, chosenIdx];
        case "invMatrix":
            for(let i = 0; i<4; i++){
                do{
                    A = generateMatrix(2,2,10);
                    res = inverse(A);
                }while(options.includes(res));
                options.push(res);
                if(i==chosenIdx){
                    soal = `Given A= ${displayMatrix(A)}, find A${sup("-1")}!`;
                }
            }
            return [soal,options,chosenIdx];
        case "tranpose":
            r = generateNonZero(2)+2;
            c = generateNonZero(2)+2;
            for(let i = 0; i<4; i++){
                do{
                    A = generateMatrix(r,c,10);
                    res = transpose(A);
                }while(options.includes(res));
                options.push(res);
                if(i==chosenIdx){
                    soal = `Given A= ${displayMatrix(A)}, find A${sup("T")}!`;
                }
            }
            return [soal,options,chosenIdx];
        case "cosFormula":
            for(let i =0; i<4; i++){
                do{
                    temp = cosFormula();
                }while(options.includes(temp[1]))
                options.push(temp[1]);
                if(i==chosenIdx){
                    soal = temp[0];
                }
            }
            return [soal,options,chosenIdx,'triangle.png'];
        case "sinFormula":
            for(let i = 0; i<4; i++){
                do{
                    temp = sinFormula();
                }while(options.includes(temp[1]))
                options.push(temp[1]);
                if(i==chosenIdx){
                    soal = temp[0];
                }
            }
            return [soal,options,chosenIdx,'triangle.png'];
        case "dx":
            for(let i = 0; i<4; i++){
                do{
                    pol = generateF(generateNonZero(2)+2)[0];
                    temp = displayF(dx(pol));
                }while(options.includes(temp));
                options.push(temp);
                if(i == chosenIdx){
                    soal = `Find the first derrivatives of ${displayF(pol)}`;
                }
            }
            return [soal,options, chosenIdx]
        case "integral":
            for(let i = 0; i<4; i++){
                do{
                    pol = generateF(generateNonZero(2)+2)[0];
                    temp = integral(pol);
                }while(options.includes(temp[1]))
                options.push(temp[1]);
                if(i == chosenIdx){
                    soal = temp[0];
                }
            }
            return [soal,options,chosenIdx]
        case "definitIntegral":
            for(let i = 0;i<4; i++){
                do{
                    pol = generateF(generateNonZero(2)+1)[0];
                    low = generateNonZero(5,true);
                    high = low + generateNonZero(5);
                    temp = definiteIntegral(pol,low,high);
                }while(options.includes(temp[1]))
                options.push(temp[1]);
                if(i==chosenIdx){
                    soal = temp[0];
                }
            }
            return [soal,options, chosenIdx]
        case "subsIntegral":
            for(let i = 0; i<4; i++){
                do{
                    pol = generateF(generateNonZero(2)+1)[0];
                    pow = generateNonZero(5);
                    temp = subsIntegral(pol,pow);
                }while(options.includes(temp[1]));
                options.push(temp[1]);
                if(i==chosenIdx){
                    soal = temp[0];
                }
            }
            return [soal,options,chosenIdx]
        case "dxTrig":
            trig = ["sin","cos","tan","csc","sec","cot"];
            for(let i = 0; i<4; i++){
                do{
                    pol = generateF(2)[0];
                    temp = dxTrig(trig[generateNonZero(6)%6], pol)
                }while(options.includes(temp[1]))
                options.push(temp[1]);
                if(i==chosenIdx){
                    soal = temp[0];
                }
            }
            return [soal,options, chosenIdx];
        case "integralTrig":
            trig = ["sin","cos","tan","csc","sec","cot"];
            for(let i = 0; i<4; i++){
                do{
                    pol = generateF(2)[0];
                    temp = integralTrig(trig[generateNonZero(6)%6], pol)
                }while(options.includes(temp[1]))
                options.push(temp[1]);
                if(i==chosenIdx){
                    soal = temp[0];
                }
            }
            return [soal,options, chosenIdx];
    }
}