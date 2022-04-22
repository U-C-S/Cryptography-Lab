let plainText = prompt("Enter the text to be encrypted", "DeclareWorldWarThree");
let shift: number = parseInt(prompt("Enter the shift", "-3") as string);

function encrypt(text: string, shift: number): string {
    let charArray: number[] = new Array<number>();
    text.split("").forEach((x, i)=>{
        let y = text.toLowerCase().charCodeAt(i) - 96;
        y = y + shift;
        y = Normalize(y);
        charArray.push(y);
    });
    charArray = charArray.map((x)=> x + 96);
    return String.fromCharCode(...charArray);
}

function decrypt(cipher: string, shiftback: number): string {
    let text = cipher;
    let shift = 0 - shiftback;
    return encrypt(text, shift);
}

function Normalize(a: number): number{
    if(a <= 0) {
        a = a + 26;
    }
    if(a > 26){
        a = a - 26;
    }

    if(a < 0) return Normalize(a);
    else return a;
}

let out = encrypt(plainText as string, shift);
let decry = decrypt(out, shift);
console.log(out, decry);


