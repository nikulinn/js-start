// 1. Напишіть функцію ucFirst(str), яка повертає рядок str з першим символом у верхньому регістрі, наприклад:
function ucFirst(str) {
    let strUpper = str[0].toUpperCase() + str.slice(1)
    console.log(strUpper)
    return strUpper
}

// ucFirst('hello');

// 2. Напишіть функцію checkSpam(str), яка повертає true, якщо str містить ‘viagra’ or ‘XXX’, інакше false.

function checkSpam(str) {
    let strToLow = str.toLowerCase();

    let viagra = strToLow.includes("viagra");
    let xxx = strToLow.includes("xxx");
    if (viagra || xxx) { 
        console.log(true);
        return true;
    } else {
        console.log(false);
         return false;
    }
}

checkSpam('buy ViAgRA now')
checkSpam("innocent rabbit")

// 3. Створіть функцію truncate(str, maxlength), яка перевіряє довжину str і, якщо вона перевищує 
// maxlength – замінює кінець str символом трьох крапок "…", щоб його довжина була рівною maxlength.

function truncate(str, maxlength){
    let newStrLength = str.length

    if (newStrLength > maxlength ) {
        let sliceStr = str.slice(0, maxlength - 1);
        console.log(sliceStr, '...');
        return sliceStr, '...';
    }
    return str;
}

truncate("Що я хотів би розповісти на цю тему:", 20); 

// 4. У нас є вартість у вигляді "$120". Тобто: спочатку йде знак долара, а потім число.
// Створіть функцію extractCurrencyValue(str), яка витягне числове значення з такого рядка та поверне його.

function extractCurrencyValue(str) {
    let strSlice = +str.slice(1) 
    console.log(strSlice === 120 )
}
extractCurrencyValue('$120');