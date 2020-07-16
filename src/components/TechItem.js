import React from 'react';

import './techItem.css'
// props.tech
function TechItem({ tech, onDelete }) {
    return (
        <li className="techItem">
            {tech}
            <button onClick={onDelete} type='button'>Remover</button>
        </li>
    )
}

TechItem.defaultProps = {
    tech: 'Oculto'
};

export default TechItem;