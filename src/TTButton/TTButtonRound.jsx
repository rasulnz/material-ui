import React from 'react';
import getMuiTheme from '../styles/getMuiTheme';
import FlatButton from '../flat-button.jsx';
import _ from 'lodash';

function getStyles(buttonType, outline, size, state) {
  const {
    baseTheme,
    } = state.muiTheme;

  const baseButton = {
    border:'solid 2px ' + baseTheme.palette.primary1Color,
    position: 'relative',
    padding: 0,
    overflow: 'hidden',
    borderRadius: '50%',
    textAlign: 'center',
    verticalAlign: 'bottom',
    minWidth:0,
    margin:'0 5px'
  };

  const buttonSizes = {
    xsmall: {height:'30px', width:'30px'},
    small: {height:'40px', width:'40px'},
    medium: {height:'50px',width:'50px'}
  };

  const defaultButton = {
    backgroundColor: baseTheme.palette.primary1Color,
    color:'#fff'
  };

  const outlineButton = {
    backgroundColor: 'transparent',
    color: baseTheme.palette.primary1Color,
  };

  let buttonStyle = defaultButton;

  outline && _.extend(buttonStyle, outlineButton);
  console.log(buttonStyle);
  return _.extend(baseButton, buttonStyle, buttonSizes[size] || buttonSizes.medium );
}

const TTButtonRound = React.createClass({


  getInitialState() {
    const zDepth = this.props.disabled ? 0 : 1;
    return {
      hovered: false,
      touched: false,
      initialZDepth: zDepth,
      zDepth: zDepth,
      muiTheme: this.context.muiTheme || getMuiTheme(),
    };
  },

  getChildContext() {
    return {
      muiTheme: this.state.muiTheme,
    };
  },
  contextTypes: {
    muiTheme: React.PropTypes.object,
  },

  childContextTypes: {
    muiTheme: React.PropTypes.object,
  },

  //round, outline, default= filled
  propTypes: {
    buttonType: React.PropTypes.string,
    size: React.PropTypes.string,
    outline: React.PropTypes.bool
  },

  render: function() {
    const {
      label,
      style,
      } = this.props;

    const {
      prepareStyles,
      } = this.state.muiTheme;

    const styles = getStyles(this.props.buttonType, this.props.outline, this.props.size, this.state);


    return (
      <FlatButton {...this.props} style={styles}>{this.props.children}</FlatButton>
    );
  },
});

export default TTButtonRound;
