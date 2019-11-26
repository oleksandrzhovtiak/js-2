// Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).

// Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.

// Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.

// Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.

// Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.


let age = prompt('Какой у Вас возраст');

if (age <= 2) {
    alert('Вы являетесь ребенком');

} else if (age >= 12 && age <= 18) {
    alert('Вы являетесь подростком');
}
else if (age > 18 && age <= 60) {
    alert('Вы являетесь взрослым');
}

else if (age > 60 && age <= 150) {
    alert('Вы являетесь пенсионером');
}



//     let n = +prompt('Введите трехзначное число.');
//     if (isNaN(number)) {
//         alert('Нужно трехзначное число.');
//     }



function isLeapYear(year) {
    return year % 4 === 0;
}
let year = +prompt('Введите год:');
if (isNaN(year)) {
    alert('Нужно ввести целое число.')
}
if (isLeapYear(year)) {
    alert('Год ' + year + ' - високосный.');
} else {
    alert('Год ' + year + ' - не високосный.');
}


function converterValut(value) {
    document.getElementById('outputEUR').innerHTML = value * 0.907830;
    document.getElementById('outputUAH').innerHTML = value * 24.1048;
    document.getElementById('outputAZN').innerHTML = value * 1.69663;
}




const input = document.querySelector('.suma');
const button = document.querySelector('.Batom');
const result = document.querySelector('.summOPL');

button.onclick = function discount() {
    let num = +input.value;
    if (num < 200) {
        result.innerHTML = num;
    }

    else if (num >= 200 && num < 300) {
        result.innerHTML = num - (num * 0.03) + '  Cкидка будет 3%';
    }
    else if (num >= 300 && num < 500) {
        result.innerHTML = num - (num * 0.05) + '  Cкидка будет 5%';
    }
    else if (num >= 500) {
        result.innerHTML = num - (num * 0.07) + '  Cкидка будет 7%';
    }

}










