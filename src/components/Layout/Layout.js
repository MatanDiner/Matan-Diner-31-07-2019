import React, { useState } from 'react';
import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import navigataionContext from '../../Contexts/navigationContext';
import HeaderButtons from '../HeaderButtons/HeaderButtons';
import HeaderButtonsContext from '../../Contexts/headerButtonsContext';
import classes from './Layout.css';
const Layout = props => {

    const [layoutState, setLayoutState] = useState({
        openSideDrawer: false
    })

    const [degreesState, setDegreesState] = useState({
        cDegrre: true
    })

    const [screenModeState, setscreenModeState] = useState({
        darkMode: true
    })

    const SideDrawerToggleHandler = () => {
        setLayoutState(prevState => ({
            openSideDrawer: !prevState.openSideDrawer
        }))
    }

    const degreesToggleHandler = () => {
        setDegreesState(prevState => ({
            cDegrre: !prevState.cDegrre
        }))
    }

    const screenModeToggleHandler = () => {
        setscreenModeState(prevState => ({
            darkMode: !prevState.darkMode
        }))
    }



    let classesArr = [classes.Content, classes.DarkContent]
    if (!screenModeState.darkMode) {
        classesArr = [classes.Content, classes.LightContent]
    }

    return (

        <Aux>
            <HeaderButtonsContext.Provider
                value={{
                    setScreenMode: screenModeToggleHandler,
                    setDegreesMode: degreesToggleHandler,
                    degrreMode: degreesState.cDegrre,
                    screenMode: screenModeState.darkMode
                }}
            >
                <div>
                    <navigataionContext.Provider
                        value={{ SideDrawerToggle: SideDrawerToggleHandler }}
                    >
                        <Toolbar dark={screenModeState.darkMode} />
                    </navigataionContext.Provider>
                    <HeaderButtons dark={screenModeState.darkMode} />
                    <SideDrawer
                        show={layoutState.openSideDrawer}
                        SideDrawerToggle={SideDrawerToggleHandler}
                        open={layoutState.openSideDrawer}
                        closed={SideDrawerToggleHandler} />
                </div>
                <main className={classesArr.join(" ")}>
                    {props.children}
                </main>
            </HeaderButtonsContext.Provider>
        </Aux>
    )
}

export default Layout;