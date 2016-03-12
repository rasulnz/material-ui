import React from 'react';
import DatePicker from 'material-ui/lib/date-picker/date-picker';
import TTDatePickerInline from 'material-ui/lib/TTDatePicker/TTDatePickerInline';

const DatePickerExampleInline = () => (
  <div>
    <DatePicker hintText="Portrait Inline Dialog" container="inline" />
    <DatePicker hintText="Landscape Inline Dialog" container="inline" mode="landscape" />
    <TTDatePickerInline/>
  </div>
);

export default DatePickerExampleInline;
