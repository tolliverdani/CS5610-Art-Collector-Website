import React from "react";
import NavigationTopMenu from "../../components/NavigationTopMenu";
import NavigationSidebar from "../../components/NavigationSidebar";

const HomeScreen = () => {
    return (
        <>
            <NavigationTopMenu/>

            <div className={'container m-0 p-0'}>
                <div className={'col-2 m-0 ms-2 mt-2 p-0'}>
                    <NavigationSidebar/>
                </div>
            </div>
        </>
    );
};
export default HomeScreen;