import Months from "../Months";
import WindowResize from "../WindowResize";
import Year from "../Year";

const Header = () => {
    return ( 
        <div className='Header'>
            
            <div className="titleDiv"><h1>See-Care-Cal</h1></div>
            <div className="yearDiv">
                <Year/>
            </div>
            <div className="monthsDiv"><Months/></div>

        </div>
     );
}
 
export default Header;