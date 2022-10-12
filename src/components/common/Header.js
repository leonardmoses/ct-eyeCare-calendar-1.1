import Year from "../JS/Year";

const Header = () => {
    return ( 
        <div className='Header'>

            <div><h1>Calendar App Name</h1></div>
            <div className="year">
                <Year/>
            </div>

        </div>
     );
}
 
export default Header;