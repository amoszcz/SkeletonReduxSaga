import React from 'react';
import './App.css';
import { Confirm } from './features/Confirm/components/Confirm';
import { LoadingPanel } from './features/LoadingPanel/components/LoadingPanel';
import { Tickets } from './features/Tickets/components/Tickets';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Tickets />
                <LoadingPanel />
                <Confirm />
            </header>
        </div>
    );
}

export default App;
