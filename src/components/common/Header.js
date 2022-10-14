import Months from "../JS/Months";
import WindowResize from "../JS/WindowResize";
import Year from "../JS/Year";

const Header = () => {
    return ( 
        <div className='Header'>
            
            <div className="titleDiv"><h1>Calendar App Name</h1></div>
            <div className="yearDiv">
                <Year/>
            </div>
            <div className="monthsDiv"><Months/></div>

        </div>
     );
}
 
export default Header;