import React from 'react';
import {FlatButton, TTButton, TTButtonOutline, TTButtonRound, TTButtonRoundOutline, TTButtonFlat} from 'material-ui/lib';

const FlatButtonExampleSimple = () => (
  <div>
    <FlatButton label="Default" />
    <FlatButton label="Primary" primary={true} />
    <FlatButton label="Secondary" secondary={true} />
    <FlatButton label="Disabled" disabled={true} />
    <TTButton size="medium" disabled={true}>start timer</TTButton>
    <TTButton size="small">start timer</TTButton>
    <TTButtonOutline size="medium">start timer</TTButtonOutline>
    <TTButtonOutline size="small">start timer</TTButtonOutline>
    <TTButtonRound size="medium" disabled={true}>+</TTButtonRound>
    <TTButtonRound size="small">+</TTButtonRound>
    <TTButtonRoundOutline size="medium">+</TTButtonRoundOutline>
    <TTButtonRoundOutline size="small">+</TTButtonRoundOutline>
    <TTButtonFlat size="xsmall">+ watever</TTButtonFlat>
    <TTButtonFlat size="small">+ watever</TTButtonFlat>
    <TTButtonFlat size="medium">+ watever</TTButtonFlat>
  </div>
);

export default FlatButtonExampleSimple;
