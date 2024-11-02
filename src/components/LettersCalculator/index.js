// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    phrase: '',
  }

  onChangePhrase = event => {
    this.setState({phrase: event.target.value})
  }

  getLength = str => str.length

  render() {
    const {phrase} = this.state
    const length = this.getLength(phrase)

    return (
      <div className="bg-container">
        <div className="calculate-letters-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image "
          />
          <div className="text-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <label htmlFor="phrase" className="label">
              Enter the phrase
            </label>
            <br />
            <input
              type="text"
              id="phrase"
              className="input-field"
              placeholder="Enter the phrase"
              onChange={this.onChangePhrase}
            />
            <p className="no-of-letters-text">No.of letters: {length}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
