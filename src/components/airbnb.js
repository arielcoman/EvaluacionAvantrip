import React, {Component} from 'react';
import Responsive from "react-responsive";
import moment from 'moment';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';

import MomentLocaleUtils, {
    formatDate,
    parseDate,
  } from 'react-day-picker/moment';
  
  import 'moment/locale/es';

 const HORIZONTAL_ORIENTATION = "horizontal";
 const VERTICAL_ORIENTATION = "vertical";
 const VERTICAL_SCROLLABLE = "verticalScrollable"; 

const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;

  

class DateRangePicker2 extends Component {
    constructor(props){
        super(props);
            this.state={
                startDate:null,
                endDate:null,
                
            }
        

    }
    render(){
    return(
        <div>
        <Mobile>
            <DateRangePicker
                startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                displayFormat={"ddd DD MMM"}
                startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                startDatePlaceholderText={'Desde'}
                endDatePlaceholderText={'Hasta'}
                hideKeyboardShortcutsPanel={'true'}
                customArrowIcon={' '}
                disabled={this.props.disabled}
                numberOfMonths={1} 
                orientation={HORIZONTAL_ORIENTATION}
            />
        </Mobile>

        <Default>
            <DateRangePicker
                startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                displayFormat={"ddd DD MMM"}
                startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                startDatePlaceholderText={'Desde'}
                endDatePlaceholderText={'Hasta'}
                hideKeyboardShortcutsPanel={'true'}
                customArrowIcon={' '}
                disabled={this.props.disabled}
                numberOfMonths={2} 
                orientation={HORIZONTAL_ORIENTATION}
            
            />
        </Default>
        </div>




      )
    }
}

export default DateRangePicker2;