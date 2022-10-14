const months = [
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
// {months.map((month, index) => {
//     <div key={index} className="months">
//         {month}
//     </div>
// })}
const Months = () => {
    return ( 
            <div className="monthsContainer">
                {months.map((month, index) => {
                    return (
                        <div key={index} className="months">
                            {month}
                        </div>
                    )
                })}
            </div>
     );
}
 
export default Months;