import React, { Component } from 'react';
import Part from '../interfaces/Part.interface';
import { number } from 'prop-types';


export class Parts extends Component<Part> {
  render() {
    const { id, word } = this.props;
    return (
      <div>
        <p>ID: {id}</p>
        <p>Word: {word}</p>
      </div>
    )
  }
}

export default Parts;
