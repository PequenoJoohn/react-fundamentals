import React from 'react';
import PropTypes from 'prop-types';

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

TechItem.propTypes = {
    tech: PropTypes.string,
    onDelete: PropTypes.func.isRequired
}

export default TechItem;