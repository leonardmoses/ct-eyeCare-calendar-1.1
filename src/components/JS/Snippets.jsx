
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


    console.log("____________ JS Snippets END ____________")