import {dec1Padding, leapDay, Jan31Padding} from './SetDate'


// #region Generating Days
export const dec1PrevYearDays = [];
export const currentYearDays = [];
export const Jan31NextYearDays = [];
export const dec1paddingInitial = [];
export const jan31paddingInitial = [];


for (let i=1; i<=dec1Padding ; i++) {
    dec1paddingInitial.push(i);
}

for (let i=1; i<=31 ; i++) {
    dec1PrevYearDays.push(i);
}

// #region currentYearDay Generator

export let dayProperty = {julianCount: 0, monthCount: 0, month: ''}

// let currentYearDays = []
let JanuaryDays = []
let FebruaryDays = []
let MarchDays = []
let AprilDays = []
let MayDays = []
let JuneDays = []
let JulyDays = []
let AugustDays = []
let SeptemberDays = []
let OctoberDays = []
let NovemberDays = []
let DecemberDays = []

const currentYearGenerator = () => {
    //January Day Generator
    for (let i=1; i<=31; i++) {
        const property = {...dayProperty, julianCount: i, monthCount: i, month: 'January', monthShort: 'Jan'}
        JanuaryDays.push(property)
    }
    //February Day Generator
    for (let i=1; i<=leapDay; i++) {
        const property = {...dayProperty, julianCount: i + JanuaryDays[JanuaryDays.length -1].julianCount, monthCount: i, month: 'February', monthShort: 'Feb'}
        FebruaryDays.push(property)
    }
    //March Day Generator
    for (let i=1; i<=31; i++) {
        const property = {...dayProperty, julianCount: i + FebruaryDays[FebruaryDays.length -1].julianCount, monthCount: i, month: 'March', monthShort: 'Mar'}
        MarchDays.push(property)
    }
    //April Day Generator
    for (let i=1; i<=30; i++) {
        const property = {...dayProperty, julianCount: i + MarchDays[MarchDays.length -1].julianCount, monthCount: i, month: 'April', monthShort: 'Apr'}
        AprilDays.push(property)
    }
    //May Day Generator
    for (let i=1; i<=31; i++) {
        const property = {...dayProperty, julianCount: i + AprilDays[AprilDays.length -1].julianCount, monthCount: i, month: 'May', monthShort: 'May'}
        MayDays.push(property)
    }
    //June Day Generator
    for (let i=1; i<=30; i++) {
        const property = {...dayProperty, julianCount: i + MayDays[MayDays.length -1].julianCount, monthCount: i, month: 'June', monthShort: 'Jun'}
        JuneDays.push(property)
    }
    //July Day Generator
    for (let i=1; i<=31; i++) {
        const property = {...dayProperty, julianCount: i + JuneDays[JuneDays.length -1].julianCount, monthCount: i, month: 'July', monthShort: 'Jul'}
        JulyDays.push(property)
    }
    //August Day Generator
    for (let i=1; i<=31; i++) {
        const property = {...dayProperty, julianCount: i + JulyDays[JulyDays.length -1].julianCount, monthCount: i, month: 'August', monthShort: 'Aug'}
        AugustDays.push(property)
    }
    //September Day Generator
    for (let i=1; i<=30; i++) {
        const property = {...dayProperty, julianCount: i + AugustDays[AugustDays.length -1].julianCount, monthCount: i, month: 'September', monthShort: 'Sep'}
        SeptemberDays.push(property)
    }
    //October Day Generator
    for (let i=1; i<=31; i++) {
        const property = {...dayProperty, julianCount: i + SeptemberDays[SeptemberDays.length -1].julianCount, monthCount: i, month: 'October', monthShort: 'Oct'}
        OctoberDays.push(property)
    }
    //November Day Generator
    for (let i=1; i<=30; i++) {
        const property = {...dayProperty, julianCount: i + OctoberDays[OctoberDays.length -1].julianCount, monthCount: i, month: 'November', monthShort: 'Nov'}
        NovemberDays.push(property)
    }
    //December Day Generator
    for (let i=1; i<=31; i++) {
        const property = {...dayProperty, julianCount: i + NovemberDays[NovemberDays.length -1].julianCount, monthCount: i, month: 'December', monthShort: 'Dec'}
        DecemberDays.push(property)
    }
    //Pushing Each Months Days to the whole year
    currentYearDays.push(
        ...JanuaryDays, 
        ...FebruaryDays,
        ...MarchDays,
        ...AprilDays,
        ...MayDays,
        ...JuneDays,
        ...JulyDays,
        ...AugustDays,
        ...SeptemberDays,
        ...OctoberDays,
        ...NovemberDays,
        ...DecemberDays
        )
}

//Run function for generation all 365(or 366) days in current year
currentYearGenerator()

// console.log(`JanuaryDays:`)
// console.log(JanuaryDays)
// console.log(`FebruaryDays:`)
// console.log(FebruaryDays)
// console.log(`MarchDays:`)
// console.log(MarchDays)
// console.log(`AprilDays:`)
// console.log(AprilDays)
// console.log(`MayDays:`)
// console.log(MayDays)
// console.log(`JuneDays:`)
// console.log(JuneDays)
// console.log(`JulyDays:`)
// console.log(JulyDays)
// console.log(`AugustDays:`)
// console.log(AugustDays)
// console.log(`SeptemberDays:`)
// console.log(SeptemberDays)
// console.log(`OctoberDays:`)
// console.log(OctoberDays)
// console.log(`NovemberDays:`)
// console.log(NovemberDays)
// console.log(`DecemberDays:`)
// console.log(DecemberDays)

// // logs to console all objects for each 365 days of year
// console.log(`Entire year Days: `)
// console.log(currentYearDays)

// #endregion currentYearDay Generator

for (let i=1; i<=31 ; i++) {
    Jan31NextYearDays.push(i);
}

for (let i=1; i<=Jan31Padding ; i++) {
    jan31paddingInitial.push(i);
}

// console.log(dec1PrevYearDays)
// console.log(currentYearDays)

// #endregion Generating Days
