import React, { Component } from 'react';


class TechList extends Component {
    state = {
        techs: [
            'Node.JS',
            'ReactJS',
            'React Native'
        ]
    };

    render() {
        console.log(this.state);

        return (
            <ul>
                {this.state.techs.map((e) => (
                    <li key={e.id}>{e}</li>
                ))
                }
            </ul>
        );
    }
}

export default TechList;