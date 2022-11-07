


    // #region setting the Date and Initial Variables
    // Set date to current date
    export let currentDate = new Date();
    // let currentDate = new Date('Dec 29, 1984');
    export let firstDayOfYear = new Date(currentDate.getFullYear(), 0)
    export let dec1PrevYear = new Date(currentDate.getFullYear(), -1)
    export let Feb1NextYear = new Date(currentDate.getFullYear(), +13);
    export let Jan31NextYear = Feb1NextYear.getDay()-1;
    export let totalYearDays = 365;
    export let dec1Padding = dec1PrevYear.getDay()
    export let Jan31Padding = 6-Jan31NextYear;
    export let year = currentDate.getFullYear()
    export let isLeapYear = false;
    export let leapDay = 28