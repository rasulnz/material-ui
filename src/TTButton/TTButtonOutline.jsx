import React from 'react';
import TTButton from './TTButton';


const TTButtonOutline = React.createClass({

  render: function() {
    return (
      <TTButton {...this.props} outline={true}>{this.props.children}</TTButton>
    );
  },
});

export default TTButtonOutline;
