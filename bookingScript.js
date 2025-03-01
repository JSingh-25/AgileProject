//gets current date
let currentDate = new Date();

//gets elements from the HTML document so we can use them here
let monthSelectedElement = document.getElementById('monthSelected');
let datesElement = document.getElementById('dates');
const prevMonthElement = document.getElementById('prevMonth');
const nextMonthElement = document.getElementById('nextMonth');

//updates the calendar whenever page is refreshed
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

    //this is for the month and year that will be displayed on the calendar box
    let monthSelectedString = currentDate.toLocaleString('default', {month: 'long', year: 'numeric'});

    //adds the above to the month selected element's text content
    monthSelectedElement.textContent = monthSelectedString;

    let dateDays = '';

    for (let i = firstDayOfMonth; i > 0; i--){
        const prevDate = new Date(currentYear, currentMonth, 0 - i + 1 );
        dateDays += `<button class = "dates inactive">${prevDate.getDate()}</button>`;
    }

    for(let i = 1; i <= daysInMonth; i++){

        dateDays += `<button class = "dates">${i}</button>`;

    }

    for (let i = 1; i <= 6 - lastDayOfMonth; i++){
        const nextDate = new Date(currentYear, currentMonth + 1, i);
        dateDays += `<button class = "dates inactive">${nextDate.getDate()}</button>`;
    }

    datesElement.innerHTML = dateDays;

    for (let button of document.querySelectorAll("button")) {

        //while (document.querySelectorAll('.dates active').length > 0) {
        //    document.querySelectorAll('.dates active').forEach(el => {
        //      el.classList.remove('active');
        //    )
        //}
        button.addEventListener("click", e => {
            document.querySelectorAll('button').forEach(el => {
                el.classList.remove('-active');
            });
        

            e.target.classList.add("-active");

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