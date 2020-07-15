import React, { Component } from 'react';


class TechList extends Component {
    state = {
        newTech: '',
        techs: [
            'Node.JS',
            'ReactJS',
            'React Native'
        ],
        exist: false
    };

    handleInputChange = e => {
        this.setState({ newTech: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();

        if(this.state.newTech.length === 0) {
            this.setState({
                exist: true,
            })
           return console.log("Você não adicionou nenhum campo")
        }
        this.setState({
            techs: [...this.state.techs, this.state.newTech],
            newTech: '',
            exist: false,
        })

        console.log(this.state.newTech);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <ul>
                    {this.state.techs.map(tech => (
                        <li key={tech}>{tech}</li>
                    ))}
                </ul>
                    { this.state.exist ?  (<p>Os campos não podem ser nulos.</p>) : null }
                <input type="text" onChange={this.handleInputChange} value={this.state.newTech} />
                <button type="submit">Enviar</button>
            </form>
        );
    }
}

export default TechList;