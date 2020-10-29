function standardOP(n, limit, ableNegative, level="SD"){
    let minus = 0;
    let number = [];
    let operand = [];
    let adaKurung = false;
    let newop;
    if(ableNegative){
        minus = limit;
        limit *=2;
    }
    for(let i = 0; i<n; i++){
        let num = Math.round(Math.random(n) * limit) - minus
        while (num===0){num = Math.round(Math.random(n) * limit) - minus}
        number.push(num)
        if (i<n-1){
            newop = (generateOperand(level, adaKurung));
            if (newop=="()"){
                adaKurung=true;
            }else{
                adaKurung=false;
            }
            operand.push(newop);
        }
    }
    //console.log(number);
    //console.log(operand);
    res = transform(number,operand, level);
    //console.log(res);
    //console.log(eval(res));
    let soal = res
    let jawaban = eval(res)
    if (Number.isInteger(jawaban)===false){jawaban = jawaban.toFixed(2)}
    else{jawaban = jawaban.toFixed(0)}
    return [soal,jawaban]
}

function generateOperand(level,isKurung){
    let operandDB = ["+","-","*","/","()","sqrt","^","log","ln","integral","dx"]
    let n;
    n = Math.round(Math.random(n)*11);
    while(isKurung && (n==4 || n%5==4 || n%9==4)){
        n = Math.round(Math.random(n)*11);
    }
    switch(level){
        case "SD" : return operandDB[n%5];
        case "SMP" : return operanDB[n%9];
        case "SMA" : return operanDB[n];
        default: return operandDB[n%2];
    }
}

function handleNegative(n){
    if (n<0){
        return `(${n})`;
    }else{
        return `${n}`;
    }
}

function transform(number, operand, level="SD"){
    let res = "";
    for(let i = 0; i<number.length; i++){
        if(operand[i]=="()"){
            addOp = generateOperand(level,true);
            res+= `(${handleNegative(number[i])} ${addOp} ${handleNegative(number[i+1])})`;
            i+=1;
            if(i<operand.length){
                res+= operand[i];
            }
        }else{
            res += handleNegative(number[i]);
            res += i+1<number.length?` ${operand[i]} `:"";
        }
    }
    //console.log(res);
    return(res);
}

function mixKurung(num1, num2, operand){
    return `(${num1} ${operand} ${num2})`;
}

function kpk(num1,num2){
    let i = 1;
    while(((i%num1)!==0) || ((i%num2)!==0)){
        i+=1;
    }
    //console.log(`${num1},${num2}, ${i}`)
    let soal = `Find the Lowest Common Multiple (LCM) between ${num1} and ${num2}`
    return [soal,i]
}

function fpb(fac1,fac2){
    let min = fac1
    if (fac2<fac1){min=fac2}
    for (let i = min; i >= 1; i--) {
        if ((fac1%i==0)&&(fac2%i==0)){
            res=i
            //console.log(i)
            break;
        }
    }
    let soal = `Find the Greatest Common Divisor (GCD) between ${fac1} and ${fac2}`
    return [soal,res]
}

function luas(shape){
    let bangun = ['persegipanjang','lingkaran','segitiga','layang-layang','trapesium']
    let panjang
    let lebar
    let luas = 0
    let a
    let b
    let d1
    let d2
    let r
    let soal,jawaban
    let pi = Math.PI;
    switch(shape){
        case bangun[0] :
            lebar = generateNonZero(10)+3
            panjang = generateNonZero(20)+3
            while (panjang<=lebar){
                panjang = generateNonZero(20)+3
            }
            luas = panjang*lebar
            console.log(`${shape},${panjang},${lebar},${luas}`)
            soal = `Find the area of a rectangle that has a length of ${panjang}cm and width of ${lebar}cm!`
            jawaban = `${luas}cm`+("2").sup()
            return [soal,jawaban]
        case bangun[1] : 
            r = Math.floor(Math.random() * (15 - 6 + 1) + 6)
            luas = +((pi*r*r).toFixed(2))
            console.log(`${shape},${r},${luas}`)
            soal = `A circle has a radius of ${r}cm. Find the area of the circle!`
            jawaban = `${luas}cm`+("2").sup()
            return [soal,jawaban]
        case bangun[2] :
            panjang = Math.floor(Math.random() * (10 - 7 + 1) + 7)
            tinggi = Math.floor(Math.random() * (19 - 7 + 1) + 7)
            luas = panjang*tinggi*0.5
            console.log(`${shape},${panjang},${tinggi},${luas}`) 
            soal = `Find the area of a triangle that has a base of ${panjang} and height of ${tinggi}!`
            jawaban = `${luas}cm`+("2").sup()
            return [soal,jawaban]
        case bangun[3] :
            d1 = Math.floor(Math.random() * (10 - 7 + 1) + 7)
            d2 = Math.floor(Math.random() * (9 - 5 + 1) + 5)
            luas = d1*d2*0.5
            console.log(`${shape},${d1},${d2},${luas}`)   
            soal = `A kite has two diagonals, d1 and d2. If d1 = ${d1}cm and d2 = ${d2}cm, find its area!`
            jawaban = `${luas}cm`+("2").sup()
            return [soal,jawaban]
        case bangun[4] :
            a = Math.floor(Math.random() * (7 - 4 + 1) + 4)
            b = Math.floor(Math.random() * (10 - 7 + 1) + 7)
            while (b<=a) {
                b = Math.floor(Math.random() * (10 - 7 + 1) + 7)
            }
            tinggi = Math.floor(Math.random() * (5 - 3 + 1) + 3)
            luas = (a+b)*0.5*tinggi
            console.log(`${shape},${a},${b},${tinggi},${luas}`) 
            soal = `A trapezoid has 2 parallel bases, b1 and b2. If b1 = ${a}cm ,b2 = ${b}cm, and its height is ${tinggi}cm, find its area!`
            jawaban = `${luas}cm`+("2").sup()
            return [soal,jawaban]
        default:
            panjang = Math.floor(Math.random() * (19 - 11 + 1) + 11)
            lebar = Math.floor(Math.random() * (9 - 7 + 1) + 7)
            luas = panjang*lebar
            console.log(`${shape},${panjang},${lebar},${luas}`)
            soal = `Find the area of a rectangle that has a length of ${panjang}cm and width of ${lebar}cm!`
            jawaban = `${luas}cm`+("2").sup()
            return [soal,jawaban]
    }
}

function keliling(shape){
    let bangun = ["persegipanjang","lingkaran","segitiga"]
    let triplet = [[3,4,5],[5,12,13],[8,15,17],[7,24,25]]
    let i_triplet = Math.floor(Math.random() * triplet.length)
    let pi = Math.pi
    let diameter
    let tinggi,sisi,lebar,panjang
    let pengali
    let keliling
    let soal,jawaban
    switch(shape){
        case bangun[0] :
            lebar = generateNonZero(20)+3
            panjang = generateNonZero(30)+3
            while (panjang<=lebar){panjang = generateNonZero(30)+3}
            keliling = 2*(lebar+panjang)
            console.log(`${bangun[0]},${panjang},${lebar},${keliling}`)
            soal = `Find the perimeter of a rectangle that has a length of ${panjang}cm and width of ${lebar}cm!`
            jawaban = `${keliling}cm`
            return [soal,jawaban]
        case bangun[1] :
            diameter = (generateNonZero(5)+2)*7
            pi = 22/7
            keliling = pi*diameter
            console.log(`${bangun[1]},${diameter},${keliling}`)
            soal = `A circle has a radius of ${diameter/2}cm. Find the perimeter of the circle!`
            jawaban = `${keliling}cm`
            return [soal,jawaban]
        case bangun[2] :
            pengali = Math.floor(Math.random() * 3) + 1
            tinggi = triplet[i_triplet][1]*pengali
            sisi = (triplet[i_triplet][0])*pengali
            keliling = (triplet[i_triplet][0]+triplet[i_triplet][1]+triplet[i_triplet][2])*pengali
            console.log(`${bangun[2]},${tinggi},${sisi},${keliling}`)
            soal = `Find the perimeter of a triangle that has a base of ${sisi} and height of ${tinggi}!`
            jawaban = `${keliling}cm`
            return [soal,jawaban]
        default:
            lebar = generateNonZero(20)+3
            panjang = generateNonZero(30)+3
            while (panjang<=lebar){panjang = generateNonZero(30)+3}
            keliling = 2*(lebar+panjang)
            console.log(`${bangun[0]},${panjang},${lebar},${keliling}`)
            soal = `Find the perimeter of a rectangle that has a length of ${panjang}cm and width of ${lebar}cm!`
            jawaban = `${keliling}cm`
            return [soal,jawaban]
    }
}

function persen(decimal,pembilang,penyebut){
    frac = pembilang/penyebut
    total = Number(((decimal+frac)*100).toFixed(2))
    //console.log(`${decimal}+${pembilang}/${penyebut} = ${total}%`)
    let soal = `${decimal}+${pembilang}/${penyebut} = ? %`
    let jawaban = total
    return [soal,jawaban]
    }

function konversiVolume(){
    //let konversi = ["litretocubic", "cubictolitre"]
    let con_volume = [1,2,3]//"mL","L","kL"
    let human_volume = ["mL","L","kL"]
    let con_length = [4,5,6]//"cm","dm","m"
    let human_length = [`cm`+("3").sup(),`dm`+("3").sup(),`m`+("3").sup()]
    let satuanawal
    let satuanakhir
    let soal,jawaban
    i_konversi = Math.floor(Math.random() * 2)
    if (i_konversi === 0) { //liter ke kubik
        i_awal = (generateNonZero(3))-1
        satuanawal = con_volume[i_awal]
        human_satawal = human_volume[i_awal]
        i_akhir = (generateNonZero(3))-1
        satuanakhir = con_length[i_akhir]
        human_satakhir = human_length[i_akhir]
        let angka = (Math.floor(Math.random() * 10)+1)*1000
        soal = `${angka} ${human_satawal} = ... ${human_satakhir}`
        let temp = angka
        // console.log(satuanawal)
        // console.log(satuanakhir)
        // console.log(temp)
        if (satuanawal===1) {
            angka = angka/1000
        } else {
            if (satuanawal===3) {
            angka = angka*1000
        } else {
            angka=angka}       
        }

        if (satuanakhir===4) {
            angka = angka*1000
        } else {
            if (satuanakhir===6) {
            angka = angka/1000
        } else {
            angka=angka}       
        }
        //console.log(`${satuanawal},${satuanakhir},${temp},${angka}`)
        jawaban = angka
        //console.log(soal)
        return [soal,jawaban]
        
    } else { //kubik ke liter
        i_awal = (generateNonZero(3))-1
        i_akhir = (generateNonZero(3))-1
        satuanawal = con_length[i_awal]
        satuanakhir = con_volume[i_akhir]
        human_satawal = human_length[i_awal]
        human_satakhir = human_volume[i_akhir]
        let angka = (Math.floor(Math.random() * 10)+1)*1000
        let temp = angka
        soal = `${angka} ${human_satawal} = ... ${human_satakhir}`
        // console.log(satuanawal)
        // console.log(satuanakhir)
        // console.log(temp)
        if (satuanawal===4) {
            angka = angka*0.001
        } else {
            if (satuanawal===6) {
            angka = angka*1000
        } else {
            angka=angka}       
        }
        if (satuanakhir===1) {
            angka = angka*1000
        } else {
            if (satuanakhir===3) {
            angka = angka/1000
        } else {
            angka=angka}       
        }
        //console.log(`${satuanawal},${satuanakhir},${temp},${angka}`)
        jawaban = angka
        //console.log(soal)
        return [soal,jawaban]
    }
}

function konversiPanjang(){
    let konversi = ["mm","cm","dm","m","dam","hm","km"]
    let i_satuanawal = Math.floor(Math.random() * konversi.length)
    let satuanawal = konversi[i_satuanawal]
    let i_satuanakhir = Math.floor(Math.random() * konversi.length)
    let satuanakhir = konversi[i_satuanakhir]
    let bilangan = (Math.floor(Math.random() * 199)+1)*500
    let hasil = Math.round(bilangan*Math.pow(0.1,(i_satuanakhir-i_satuanawal)))
    console.log(`${satuanawal},${satuanakhir},${bilangan},${hasil}`)
    soal = `${bilangan} ${satuanawal} = ... ${satuanakhir}`
    jawaban = hasil
    return [soal,jawaban]
}

function statistikaSDSMP(level){
    let operasi = ["mean","median","mode","standard deviation","variance"]
    let arrayStat = []
    let banyak_operasi = (level==="SD"?2:4)
    let pilihanop = Math.floor(Math.random() * (banyak_operasi+1))
    let banyakangka = (level==="SD"?5:8)
    let temp
    let soal = ``
    let jawaban
    let Jumlah = 0
    for (let i = 0; i<banyakangka; i++) {
        temp = Math.floor(Math.random() * banyakangka)+1
        arrayStat.push(temp)
        if (i==banyakangka-1){soal=soal+temp.toString()}
        else{soal=soal+temp.toString()+`, `}
        Jumlah+=temp
    }
    let avg
    let total = 0
    //console.log(arrayStat.sort())
    soal = [soal,`Find the ${operasi[pilihanop]} of the data above!`]
    //console.log(soal)
    switch (operasi[pilihanop]) {
        case "mean":
            let mean = Number((Jumlah/(arrayStat.length)).toFixed(2))
            //console.log(`${operasi[pilihanop]},${mean}`)
            jawaban = mean
            return [soal,jawaban]
        case "median":
            let median
            if(level==="SD"){
                median = arrayStat[2]}
            else{
                median = (arrayStat[3]+arrayStat[4])/2
            }
            //console.log(`${operasi[pilihanop]},${median}`)
            jawaban = median
            return [soal,jawaban]
        case "mode":
            let counter=[0,0,0,0,0,0,0,0]
            for (let i = 0; i<banyakangka; i++) {
                counter[arrayStat[i]-1]+=1
            }
            let maks=1
            let imaks=0
            let nilaimaks = 1
            let modus = ""
            for (let i = 0; i<banyakangka; i++) {
                if (counter[i]>maks){imaks=i;nilaimaks=counter[i]}
            }
            let countmax = 0
            for (let i = 0; i<banyakangka; i++) {
                if (counter[i]===nilaimaks){countmax+=1}
            }
            //console.log(counter)
            if (countmax!==1){modus="no correct answer"}
            else{modus=imaks+1}
            //console.log(`${operasi[pilihanop]},${modus}`)
            jawaban = modus
            return [soal,jawaban]
        case "standard deviation":
            avg = Jumlah/(banyakangka-1)
            for (let i = 0; i<banyakangka; i++) {
                total+=Math.pow((arrayStat[i]-avg),2)
            }
            let std = Number((Math.pow(total/(arrayStat.length-1),0.5)).toFixed(2))
            //console.log(`${operasi[pilihanop]},${std}`)
            jawaban = std
            return [soal,jawaban]
        case "variance":
            avg = Jumlah/(banyakangka-1)
            for (let i = 0; i<banyakangka; i++) {
                total+=Math.pow((arrayStat[i]-avg),2)
            }
            let rag = Number((total/(arrayStat.length-1)).toFixed(2))
            //console.log(`${operasi[pilihanop]},${rag}`)
            jawaban = rag
            return [soal,jawaban]
        default:
            break;
        }
    }