import React, {useEffect, useState} from "react";

// original source here: https://www.kindacode.com/article/how-to-create-a-scroll-to-top-button-in-react/

const ScrollToTop = () => {

    // The back-to-top button is hidden at the beginning
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);

    const scrollToTop = () =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            /* you can also use 'auto' behaviour
               in place of 'smooth' */
        });
    };

    return (
        <>
            {showButton && (
                <button onClick={scrollToTop}
                        className="btn btn-sm align-bottom text-start m-3">
                    <i className="fa fa-angle-up"/>
                    <p>Scroll to top</p>
                </button>)
            }
        </>
    );
}

export default ScrollToTop;