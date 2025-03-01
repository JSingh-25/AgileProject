//gets current date
let currentDate = new Date();

//gets elements from the HTML document so we can use them here
let monthSelectedElement = document.getElementById('monthSelected');
let datesElement = document.getElementById('dates');
let dateSelected = document.getElementById('daySelected')
const prevMonthElement = document.getElementById('prevMonth');
const nextMonthElement = document.getElementById('nextMonth');

function newFuntion(i){

}

const updateCalender = () => {

    //gets the values for the current year and month
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;

    //gets the full first and last date of the current month as well as how many days are in the current month
    const monthFirstDate = new Date(currentYear, currentMonth -1 , 1);
    const monthLastDate = new Date(currentYear, currentMonth, 0);
    const daysInMonth = monthLastDate.getDate();

    //gets first day of month as a number
    firstDayOfMonth = monthFirstDate.getDay();
    lastDayOfMonth = monthLastDate.getDay();

    let monthSelectedString = currentDate.toLocaleString('default', {month: 'long', year: 'numeric'});

    monthSelectedElement.textContent = monthSelectedString;

    let dateDays = '';

    for (let i = firstDayOfMonth; i > 0; i--){
        const prevDate = new Date(currentYear, currentMonth, 0 - i + 1 );
        dateDays += `<div class = "dateGreyed">${prevDate.getDate()}</div>`;
    }

    for(let i = 1; i <=daysInMonth; i++){

        const date = new Date(currentYear, currentMonth, i);

        dateDays += `<div class = "dateDays">${i}</div>`;

        newFunction(i);

    }

    for (let i = 1; i <= 6 - lastDayOfMonth; i++){
        const nextDate = new Date(currentYear, currentMonth + 1, i);
        dateDays += `<div class = "dateGreyed">${nextDate.getDate()}</div>`;
    }

    datesElement.innerHTML = dateDays;

    function newFunction(i) {
        i.addEventListener('click', () => {
            dateSelected += `${i}`;
        });
    }
}

//change the currently viewed month to the previous month
prevMonthElement.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    updateCalender();
})

//change the currently viewed month to the next month
nextMonthElement.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    updateCalender();
})

updateCalender();


