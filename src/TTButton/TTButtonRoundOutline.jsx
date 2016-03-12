import React from 'react';
import TTButtonRound from './TTButtonRound';


const TTButtonRoundOutline = React.createClass({

  render: function() {
    return (
      <TTButtonRound{...this.props} outline={true} >{this.props.children}</TTButtonRound>
    );
  },
});

export default TTButtonRoundOutline;
