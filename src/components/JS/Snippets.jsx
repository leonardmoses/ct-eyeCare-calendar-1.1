
    //#region function to format Date/Time from 0 into 00 format
    export let currentDateTime = ''

    export const inputDateTimeFormatting00 = () => {
        let date00 = ''
        let min00 = ''

        if (new Date().getDate() <= 9) {
            date00 = `0${new Date().getDate()}`;

        } else {
            date00 = new Date().getDate();
        }

        if (new Date().getMinutes() <= 9) {
            min00 = `0${new Date().getMinutes()}`;
        } else {
            min00 = new Date().getMinutes();
        }
        // console.log(min00);

        let date = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${date00}`
        let time = `${new Date().getHours()}:${min00}`;
        currentDateTime = `${date}T${time}`

        console.log(currentDateTime)
    }

    inputDateTimeFormatting00()
    //#endregion function to format Date/Time from 0 into 00 format

    //#region Key to convert date format into Julian days in JulianDays.js 
    export const JulianConverterKey = {
        1: 0,
        2: 31,
        3: 59,
        4: 90,
        5: 120,
        6: 151,
        7: 181,
        8: 212,
        9: 243,
        10: 273,
        11: 304,
        12: 334
      }
  
    export const JulianConverterKeyLeap = {
        1: 0,
        2: 31,
        3: 60,
        4: 91,
        5: 121,
        6: 152,
        7: 182,
        8: 213,
        9: 244,
        10: 274,
        11: 305,
        12: 335
      }
    //#endregion

    export const months = [
        'December',
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
        'January',
    ]

    export let Days31 = []

    for (let i = 1; i<32; i++) {
        Days31.push(i)
    }

    // console.log(Days31)

    console.log("____________ JS Snippets END ____________")