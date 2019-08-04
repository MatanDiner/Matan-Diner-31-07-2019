import React from 'react';

const headerButtonsContext = React.createContext({
    setScreenMode: () => { },
    setDegreesMode: () => { },
    degrreMode: true,
    screenMode: true
});

export default headerButtonsContext;