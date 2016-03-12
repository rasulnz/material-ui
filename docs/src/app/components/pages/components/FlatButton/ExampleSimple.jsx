import React from 'react';
import {FlatButton,TTButton} from 'material-ui/lib';

const FlatButtonExampleSimple = () => (
  <div>
    <FlatButton label="Default" />
    <FlatButton label="Primary" primary={true} />
    <FlatButton label="Secondary" secondary={true} />
    <FlatButton label="Disabled" disabled={true} />
    <TTButton label="whatever" outline={true}/>
  </div>
);

export default FlatButtonExampleSimple;
