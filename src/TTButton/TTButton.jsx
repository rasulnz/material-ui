import React from 'react';
import getMuiTheme from '../styles/getMuiTheme';
import FlatButton from '../flat-button';
import _ from 'lodash';

function getStyles(buttonType, outline, state) {
  const {
    baseTheme,
    } = state.muiTheme;

  console.log(baseTheme)
  const baseButton = {
    border:'solid 2px ' + baseTheme.palette.primary2Color,
  };

  const defaultButton = {
    background: baseTheme.palette.primary2Color,
  };

  const outlineButton = {
    background: 'transparent',
  };

  const roundButton = {
    borderRadius: '50%'
  };

  let buttonStyle = buttonType == 'round' ? roundButton : defaultButton;

  outline && _.extend(buttonStyle, outlineButton);

  return _.extend(baseButton, buttonStyle);
}

const TTButton = React.createClass({


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

    const styles = getStyles(this.props.buttonType, this.props.outline, this.state);
    console.log(styles);

    return (
      <FlatButton {...this.props} style={styles}>{this.props.children}</FlatButton>
    );
  },
});

export default TTButton;





/*

base: {
  border: `solid 2px ${COLORS.primaryDetail}`,
    borderRadius:'20px',
    minWidth:'80px',
    height:'30px',
    color: COLORS.primaryDetail,
    backgroundColor: COLORS.white,
    fontSize: '16px',
    fontWeight:'600',
    ':focus': {
    outline: 'none'
  }
},
fill: {
  backgroundColor: COLORS.primaryDetail,
    color:'white',
    fontWeight:'600'
},
medium:{

},
large: {
  padding: '10px 16px',
    fontSize: '18px',
    lineHeight: 1.3333333
},
small: {
  padding: '5px 10px',
    fontSize: '12px',
    lineHeight: 1.5
},
dynamic: {
  display:'block',
    minHeight: '40px',
    width:'100%'
},
round: {
  borderRadius: '50%',
    color: COLORS.primaryDetail,
    border: `solid 2px ${COLORS.primaryDetail}`,
    height:'34px',
    width:'34px',
    minWidth:'0',
}
*/
