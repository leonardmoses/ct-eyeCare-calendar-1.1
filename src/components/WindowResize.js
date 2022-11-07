import React, {useState, useEffect} from "react";

const WindowResize = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [windowHeight, setWindowHeight] = useState(window.innerHeight)

    const handleResize = () => {
        setWindowWidth(window.innerWidth)
        setWindowHeight(window.innerHeight)
    }
    
    useEffect(() => {
        window.addEventListener('resize', handleResize)
    }, [])


    return ( 
        <div>{windowWidth}x{windowHeight}</div>
     );
}
 
export default WindowResize;