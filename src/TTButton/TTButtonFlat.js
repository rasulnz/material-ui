import React from 'react';
import getMuiTheme from '../styles/getMuiTheme';
import FlatButton from '../flat-button';
import FloatingActionButton from '../floating-action-button';
import _ from 'lodash';

function getStyles(buttonType, outline, size, state) {
  const {
    baseTheme,
    } = state.muiTheme;


  const defaultButton = {
    color:baseTheme.palette.primary1Color
  };

  const outlineButton = {
    backgroundColor: 'transparent',
    color: baseTheme.palette.primary1Color,
  };

  const buttonSizes = {
    xsmall: {fontSize:'12px'},
    small: {fontSize:'14px'},
    medium: {fontSize:'16px'}
  };

  let buttonStyle = defaultButton;

  outline && _.extend(buttonStyle, outlineButton);

  buttonType == 'block' && _.extend(buttonStyle, block);

  return _.extend(buttonStyle, buttonSizes[size] || buttonSizes.medium );
}

const TTButtonFlat = React.createClass({


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

export default TTButtonFlat;
