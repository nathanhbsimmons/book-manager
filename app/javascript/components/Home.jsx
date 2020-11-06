import React from 'react';
import Books from './Books'

//header with navigation buttons goes in this component
function Home() {
    return (
        <div style={{ display:'flex', flexWrap: 'wrap' }}>
            <Books/>
        </div>
    )
}

export default Home;
