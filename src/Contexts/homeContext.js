import React from 'react';

const homeContext = React.createContext({
    setLocation: () => { },
    setError: () => { }
});

export default homeContext;