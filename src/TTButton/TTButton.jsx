import React from 'react';
import getMuiTheme from '../styles/getMuiTheme';
import FlatButton from '../flat-button';
import FloatingActionButton from '../floating-action-button.jsx';
import _ from 'lodash';

function getStyles(buttonType, outline, size, state) {
  const {
    baseTheme,
    } = state.muiTheme;

  const baseButton = {
    border:'solid 2px ' + baseTheme.palette.primary1Color,
    lineHeight: 'inherit',
    minWidth:0,
    margin:'0 10px'
  };
  
  const defaultButton = {
    backgroundColor: baseTheme.palette.primary1Color,
    color:'#fff'
  };

  const outlineButton = {
    backgroundColor: 'transparent',
    color: baseTheme.palette.primary1Color,
  };

  const buttonSizes = {
    small: {height:'30px', padding:'0 19px', fontSize: '14px', borderRadius: '20px'},
    medium: {height:'40px', padding:'0 45px',fontSize:'16px', borderRadius: '28px'},
    large: {height:'50px', fontSize:'18px'},
  };

  const block = {
    width:'100%',
    display:'block'
  };

  let buttonStyle = defaultButton;

  outline && _.extend(buttonStyle, outlineButton);

  buttonType == 'block' && _.extend(buttonStyle, block);

  return _.extend(baseButton, buttonStyle, buttonSizes[size] || buttonSizes.medium );
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
