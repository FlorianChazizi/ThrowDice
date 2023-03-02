import React, { Component } from 'react';
import Die from './Die';
import './Die.css';
class RollDice extends Component {
    static defaultProps = {
        sides: [ "one", "two", "three", "four", "five", "six" ]
    };
    constructor(props){
        super(props);
        this.state = {
            die1: 'one',
            die2: 'one',
            rolling: false
        }
        this.roll = this.roll.bind(this);
        
    }

    roll(){
        const newDie1 = this.props.sides[                       // Pick first Roll
            Math.floor(Math.random() * this.props.sides.length)
        ];
        
        const newDie2 = this.props.sides[                        // Pick second Roll
            Math.floor(Math.random() * this.props.sides.length)
        ];

        this.setState({ die1: newDie1, die2: newDie2, rolling: true });        // set state with new rolls

        setTimeout(() => {                                      // Use time to setState after 1 second
            this.setState({ rolling: false });                  // rolling to false
        }, 800);
    }

    render() {
        return (
            <div className='RollDice'>
                <div className='RollDice-container'>
                    <Die face={this.state.die1} rolling={this.state.rolling} />
                    <Die face={this.state.die2} rolling={this.state.rolling} />
                </div>
                
                <button onClick={this.roll} disabled={this.state.rolling}>
                    {this.state.rolling ? 'Rolling...' : 'Role Dice!'}
                </button>
            </div>
        )
    }
}

export default RollDice;