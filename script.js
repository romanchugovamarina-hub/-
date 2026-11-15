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

function calculateAbility() {
    const salaryInput = document.getElementById("salary");
    const total = Number(salaryInput.value);

    if (salaryInput.value === "" || isNaN(total) || total < 0) {
        document.getElementById("ability").textContent =
            "Сначала введите зарплату в первом окошке!";
        return;
    }

    const termInput = document.getElementById("term");
    const term = Number(termInput.value);

    if (termInput.value === "" || isNaN(term) || term <= 0) {
        document.getElementById("ability").textContent = "Укажите корректный срок кредита!";
        return;
    }

    const average = total / 6; // тот же средний доход за месяц
    const coefficient = average < 45000 ? 0.7 : 0.8;
    const maxCredit = average * coefficient * term;

    document.getElementById("ability").textContent =
        `Ваша платежеспособность: ${maxCredit.toFixed(2)} руб.`;
}
