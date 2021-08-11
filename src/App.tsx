import React from 'react';
import './App.css';
import { LoadingPanel } from './features/LoadingPanel/components/LoadingPanel';
import { Tickets } from './features/Tickets/components/Tickets';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Tickets />
                <LoadingPanel />
            </header>
        </div>
    );
}

export default App;
