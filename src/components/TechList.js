import React, { Component } from 'react';

import TechItem from './TechItem';
import Profile from './Profile';
import Image from '../assets/profile.jpg';

import './techList.css';

class TechList extends Component {
    state = {
        newTech: '',
        techs: [
            'Node.JS',
            'ReactJS',
            'React Native'
        ],
        exist: false,
        profiles: [
            { username: "Jonathan Leão Matos", work: 'Desenvolvedor', image: `${Image}` }
        ],
    };

    handleInputChange = e => {
        this.setState({ newTech: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();

        if (this.state.newTech.length === 0) {
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

    handleDeletePerfil = (profile) => {
        this.setState({ profiles: this.state.profiles.filter(p => p !== profile) })
    }

    handleDelete = (tech) => {
        this.setState({ techs: this.state.techs.filter(t => t !== tech) })
    }

    render() {
        return (
            <>
                <header className="header">
                    <h1>Profile View</h1>
                    {this.state.profiles.map(profile => <Profile key={profile} profile={profile} onDelete={() => this.handleDeletePerfil(profile)} />)}
                </header>

                <form onSubmit={this.handleSubmit}>
                    <h1>Stack</h1>
                    <ul>
                        {this.state.techs.map(tech => <TechItem key={tech.id} tech={tech} onDelete={() => this.handleDelete(tech)} />)}
                    </ul>

                    {this.state.exist ? (<p>Os campos não podem ser nulos.</p>) : null}

                    <input type="text" onChange={this.handleInputChange} value={this.state.newTech} />
                    <button type="submit">Enviar</button>
                </form>
            </>
        );
    }
}

export default TechList;