import React from 'react';
import TTButton from './TTButton';


const TTButtonRoundOutline = React.createClass({

  render: function() {
    return (
      <TTButton {...this.props} ttButtonType="round" >{this.props.children}</TTButton>
    );
  },
});

export default TTButtonRoundOutline;
