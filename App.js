import React from 'react';
import ReactDOM from 'react-dom/client';

const AppLayout = () => {
    return (
        <div class="app">
            <h1>Hello, Meal Express!</h1>
        </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);