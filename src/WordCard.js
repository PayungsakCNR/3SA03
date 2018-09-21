import React, { Component } from 'react';
import CharacterCard from './CharacterCard';
import _ from 'lodash';

export default class WordCard extends Component {
        const prepareStateFromWord = (given_word) => {
            let word = given_word.toUpperCase()
            let chars = _.shuffle(Array.from(word))
            return {
                word,
                chars,
                attempt: 1,
                guess: [],
                completed: false
            }
        }
        render(){
        return(
            <div>
            { 
                Array.from(this.props.value).map((c, i) => <CharacterCard value={prepareStateFromWord } key={i}/>)
            }
            </div>
        );
        }
        

}


