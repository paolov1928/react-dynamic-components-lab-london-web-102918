import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    const newValue = this.props.opacity - 0.1;
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {this.props.opacity >= 0.2
        ? <ColorBox opacity={newValue} />
        : null}
      </div>
    )


  }

}

// const newValue = this.props.opacity - 0.1;
//
//     if (this.props.opacity >= 0.2) {
//
//             <div>
//                 <ColorBox style= {opacity: {newValue}} />
//             </div>
//         ;
//     } else {
//         return null;
//     }
