import _ from 'lodash';
export default class WordCArd extends Component {
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
        activationHandler = (c) => {
            let guess = [...this.state.guess, c]
            this.setState({guess})
            if(guess.length == this.state.chars.length){
                if(guess.join('').toString() == this.state.word){
                    this.setState({guess:[], completed:true})
                }
            else{
                this.setState({guess:[], attempt: this.state.attempt+ 1})
                }
        }
        }
    }


