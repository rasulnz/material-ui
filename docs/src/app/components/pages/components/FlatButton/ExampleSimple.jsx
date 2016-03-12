import React from 'react';
import {FlatButton, TTButton, TTButtonOutline, TTButtonRound, TTButtonRoundOutline} from 'material-ui/lib';

const FlatButtonExampleSimple = () => (
  <div>
    <FlatButton label="Default" />
    <FlatButton label="Primary" primary={true} />
    <FlatButton label="Secondary" secondary={true} />
    <FlatButton label="Disabled" disabled={true} />
    <TTButton size="medium">start timer</TTButton>
    <TTButton size="small">start timer</TTButton>
    <TTButtonOutline size="medium">start timer</TTButtonOutline>
    <TTButtonOutline size="small">start timer</TTButtonOutline>
    <TTButtonRound size="medium">+</TTButtonRound>
    <TTButtonRound size="small">+</TTButtonRound>
    <TTButtonRoundOutline size="medium">+</TTButtonRoundOutline>
    <TTButtonRoundOutline size="small">+</TTButtonRoundOutline>
  </div>
);

export default FlatButtonExampleSimple;
