import React from 'react';
import {RaisedButton,TTButton} from 'material-ui/lib';


const style = {
  margin: 12,
};

const RaisedButtonExampleSimple = () => (
  <div>
    <RaisedButton label="Default" style={style} />
    <RaisedButton label="Primary" primary={true} style={style} />
    <RaisedButton label="Secondary" secondary={true} style={style} />
    <RaisedButton label="Disabled" disabled={true} style={style} />
  </div>
);

export default RaisedButtonExampleSimple;
