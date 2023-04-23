import React, { Component } from 'react'

export class Categores extends Component {
    constructor(props){
        super(props)
        this.state={
            categores: [
                {
                    key: 'all',
                    name: 'Hamasi'
                },
                {
                    key: 'chairs',
                    name: 'Stuylya'
                },
                {
                    key: 'tables',
                    name: 'Stoli'
                },
                {
                    key: 'sofa',
                    name: 'Divani'
                },
                {
                    key: 'light',
                    name: 'Svet'
                },
            ]
        }
    }

    render() {
        return (
            <div className='categoris'>
                {this.state.categores.map(el=> (
                    <div key={el.key} onClick={()=> this.props.chooseCategory(el.key)}> {el.name} </div>
                ))}
            </div>
        )
    }
}

export default Categores
