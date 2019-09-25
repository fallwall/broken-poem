import React, { Component } from 'react';
import Part from '../interfaces/Part.interface';

interface SearchState { 
  id: number,
  word: string
}
export class Parts extends Component<Part> {
  partRef: React.RefObject<HTMLInputElement>;
  constructor(props: Part) { 
    super(props);
    this.state = {
      word: '',
      id: 0
    }
    this.partRef = React.createRef();
  }

  onSearchClick = () => { 
    const inputValue = this.partRef.current.value;
  }

  render() {
    const { id, word } = this.props;
    return (
      <div>
        <p>ID: {id}</p>
        <p>Word: {word}</p>
        <input type="text" ref={this.part} />
        <button
          onClick={this.onSearchClick}
          className="search-button">
          Search
        </button>
      </div>
    )
  }
}

export default Parts;
