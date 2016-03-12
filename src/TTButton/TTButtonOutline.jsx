import React from 'react';
import TTButton from './TTButton';


const TTButtonOutline = React.createClass({

  render: function() {
    return (
      <TTButton {...this.props} ttButtonType="outline">{this.props.children}</TTButton>
    );
  },
});

export default TTButtonOutline;
