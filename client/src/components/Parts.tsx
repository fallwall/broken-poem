import React, { Component } from 'react';
import Part from '../interfaces/Part.interface';

interface SearchState { 
  error: boolean;
  part: Part;
}

// interface Part { 
//   id: number;
//   word: string;
// }

export class Parts extends Component<Part, SearchState> {
  partRef: React.RefObject<HTMLInputElement>;
  constructor(props: Part) { 
    super(props);
    this.state = {
      error: false,
      part: null
    }
    this.partRef = React.createRef();
  }

  onSearchClick = () => { 
    const inputValue = this.partRef.current.value;
    fetch(`http://localhost:3000/search/${inputValue}`)
      .then(res => { 
        if (res.status !== 200) { 
          this.setState({ error: true });
          return;
        }
        res.json().then(data => { 
          this.setState({
            error: false,
            part: {
              id: data.id,
              word: data.word
            }
          })
        })
      })
  }

  render() {
    const { id, word} = this.props;
    const { error, part } = this.state;

    let resultMarkup;

    if (error) {
      resultMarkup = <p>not found</p>;
    } else if (part) {
      resultMarkup = <div>{part.id}, {part.word}</div>;
    }

    return (
      <div>
        <p>ID: {id}</p>
        <p>Word: {word}</p>
        <input type="text" ref={this.partRef} />
        <button
          onClick={this.onSearchClick}
          className="search-button">
          Search
        </button>
        {resultMarkup}
      </div>
    )
  }
}

export default Parts;
