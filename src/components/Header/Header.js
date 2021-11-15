import React from 'react';

function Header({title}) {
    return (
        <div>
            <h1 title={title} data-testid={"heading-1"}>{title}</h1>
        </div>
    );
}

export default Header;