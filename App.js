import React from 'react';
import Home from './Components/Home';
import NewFile from './Components/NewFile';


const App = () => {
    const summaryData = { zeros: 10, ones: 20, continuousZeros: 5, continuousOnes: 10 }; // Sample summary data

    return (
        <div>
            <h1>Home</h1>
            <Home/>
            <h1>NewFile</h1>
            <NewFile/>
        </div>
    );
};

export default App;
