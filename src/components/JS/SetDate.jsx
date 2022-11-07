
    // #region setting the Date and Initial Variables

    // SETS THE DATE
    export let currentDate = new Date();
    // export let currentDate = new Date('Dec 29, 1984');

    // Other Date Variables
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

    console.log(`Current Date: ${currentDate}`)
    console.log(`Current Jan1: ${firstDayOfYear}`)
    // console.log(`${dec1PrevYear} ---- Prev Year Dec1`)
    console.log(`Current Day: ${dec1PrevYear.getDay()}`)
    console.log(`Current Jan31 Day: ${Jan31NextYear}`)
    console.log(`Current Jan31 Pad: ${Jan31Padding}`)
    console.log(`Current year: ${year}`)

    // #endregion setting the Date and Initial Variables


    // #region Leap Year Check
    export function LeapYearCheck() {

        if (year % 4 === 0)  {
            isLeapYear = true;
        } else if (year % 100 === 4) {
            isLeapYear = true;
        } else {
            isLeapYear = false;
        }
        console.log(`Leap Year: ${isLeapYear}`)
        
        if (isLeapYear) {
            totalYearDays = 366;
        } else {
            totalYearDays = 365
        };

        if (isLeapYear === false) {
            leapDay = 28
        } else {
            leapDay = 29
        }

        console.log(`Total Days = ${totalYearDays}`)
    }

    //  Run Leap Year Check Function
       LeapYearCheck()

    //#endregion Leap Year Check

    console.log("____________ JS END ____________")