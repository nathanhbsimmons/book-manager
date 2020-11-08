import React from 'react';
import Books from './Books'

//header with navigation buttons goes in this component
function Home() {
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Book Manager</h1>
            <Books/>
        </div>
    )
}

export default Home;
