// глобальные переменные: их видно всем трём функциям
let paymentAbility = 0; // результат второго окошка
let term = 0;           // срок кредита из второго окошка

// ОКОШКО 1: средняя зарплата за месяц
function calculate() {
    const input = document.getElementById("salary");
    const total = Number(input.value); // зарплата за 6 месяцев

    if (input.value === "" || isNaN(total) || total < 0) {
        document.getElementById("result").textContent = "Введите корректную зарплату!";
        return;
    }

    const average = total / 6; // средняя зарплата за один месяц

    document.getElementById("result").textContent =
        `Ваш чистый доход за месяц: ${average.toFixed(2)} руб.`;
}

// ОКОШКО 2: платежеспособность
function calculateAbility() {
    const salaryInput = document.getElementById("salary");
    const total = Number(salaryInput.value);

    if (salaryInput.value === "" || isNaN(total) || total < 0) {
        document.getElementById("ability").textContent =
            "Сначала введите зарплату в первом окошке!";
        return;
    }

    const termInput = document.getElementById("term");
    const termNumber = Number(termInput.value);

    if (termInput.value === "" || isNaN(termNumber) || termNumber <= 0) {
        document.getElementById("ability").textContent = "Укажите корректный срок кредита!";
        return;
    }

    term = termNumber; // запоминаем срок для третьего окошка

    const average = total / 6; // тот же средний доход за месяц
    const coefficient = average < 45000 ? 0.7 : 0.8;
    const maxCredit = average * coefficient * termNumber;
    paymentAbility = maxCredit; // запоминаем для третьего окошка

    document.getElementById("ability").textContent =
        `Ваша платежеспособность: ${maxCredit.toFixed(2)} руб.`;
}

// ОКОШКО 3: максимальный размер кредита с процентной ставкой
function calculateMaxCredit() {
    if (paymentAbility === 0) {
        document.getElementById("credit").textContent =
            "Сначала вычислите платежеспособность во втором окошке!";
        return;
    }

    const rateInput = document.getElementById("rate");
    const rate = Number(rateInput.value);

    if (rateInput.value === "" || isNaN(rate) || rate <= 0) {
        document.getElementById("credit").textContent =
            "Укажите корректную процентную ставку!";
        return;
    }

    const maxLoan = paymentAbility / (1 + (rate * term) / 1200);

    document.getElementById("credit").textContent =
        `Ваш максимальный размер кредита: ${maxLoan.toFixed(2)} руб. `;
}


