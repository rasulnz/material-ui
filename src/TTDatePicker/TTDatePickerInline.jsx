/**
 * Created by rasulniyazimbetov on 12/03/16.
 */
import React from 'react';

import DatePicker from '../date-picker/date-picker';

class TTDatePickerInline extends React.Component {

    render() {
        return (
            <DatePicker {...this.props} style={styles} hideDateDisplay={true} container="inline"/>
        )
    }
}

var styles = {
    backgroundColor: 'white',
};

export default TTDatePickerInline;