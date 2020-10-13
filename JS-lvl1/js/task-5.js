// const china = 100;
// const chili = 250;
// const ausrtalia = 170;
// const india = 80;
// const jamaika = 120;
let cost
let country = prompt('В какую странну оформить доставку?').toLowerCase();
switch (country){
    case 'китай':
        console.log('Доставка в вашу страну будет стоить 100 кредитов');
        break;
    
    case 'чили':
        console.log('Доставка в вашу страну будет стоить 250 кредитов');
        break;
    
    case 'австралия':
        console.log('Доставка в вашу страну будет стоить 170 кредитов');
        break;

    case 'индия':
        console.log('Доставка в вашу страну будет стоить 80 кредитов');
        break;

    case 'ямайка':
        console.log('Доставка в вашу страну будет стоить 120 кредитов');
        break;

    default : console.log('В вашу странну нет доставки.');
}