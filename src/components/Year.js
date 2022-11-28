import React, { useState} from "react";


const Year = () => {

// #region State Direct 1
    // //Creating the State. Direct Input Method. Runs everytime so not good if intial state is a complex computation.
    // const [year, setYear] = useState(2022, console.log(`Run State`))
// #endregion State1

// #region State Function 1
    // //Creating the State. Function Method 1
    // const [year, setYear] = useState(() =>{
    //     console.log(`Run useState function for year.`)
    //     return 2022
    // })
// #endregion State Function 1

// #region State Function 2
    //Creating the State. Function Method 2
    function countInitialYear() {
        // console.log(`Run useState function for year.`)
        return 2022
    }

    const [year, setYear] = useState(()=> countInitialYear())
// #endregion State Function 2

// #region Decrease Count: Bad Method
    // //Decrease Count: This method works but not a good method
    // function decrementCount() {
    //     setCount( count -1 )
    // }
// #endregion Decrease Count: Bad Method

    // Decreases Count: This is a function version and a better method.
    function decreaseYear() {
        setYear( prevYear => prevYear -1 )
        // console.log(`Decreased by 1.`)
    }

    function increaseYear() {
        setYear( prevYear => prevYear +1 )
        // console.log(`Increased by 1.`)
    }



    return ( 
        <div className="yearCountDiv">
            <span>

                {/*<button onClick={decreaseYear}>Prev</button>*/}
                    <h2 id="displayYear">{year}</h2>
                {/*<button onClick={increaseYear}>Next</button>*/}

            </span>
        </div>

     );
}
 
export default Year;