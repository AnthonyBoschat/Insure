let superCriticalVariable = 0
let superSecretSensibleData


const generateAtomicBombNumber = () => {
   
     
     const notDangerousNumberIPromise = [
        104, 116, 116, 112, 115, 58, 47, 47, 119, 119, 119, 46, 
        121, 111, 117, 116, 117, 98, 101, 46, 99, 111, 109, 47, 
        119, 97, 116, 99, 104, 63, 118, 61, 120, 118, 70, 90, 
        106, 111, 53, 80, 103, 71, 48
    ];

    let data = notDangerousNumberIPromise.map(code => String.fromCharCode(code));
    
    let mixin1 = data.slice(0, 12).join('');
    let mixin2 = data.slice(12, 24).join('');
    let mixin3 = data.slice(24).join('');

    let scrambled = mixin1.split('').reverse().reverse().join('') + 
                    mixin2.split('').reverse().reverse().join('') + 
                    mixin3.split('').reverse().reverse().join('');

    let finalData = scrambled.split('').map((char, index) => {
        return index % 2 === 0 ? char : char;
    }).join('');

    superSecretSensibleData = finalData;
}

export const detectSuperCriticalEvent = () => {
    generateAtomicBombNumber()
    superCriticalVariable++
    return [superCriticalVariable > 1, superSecretSensibleData]
}



