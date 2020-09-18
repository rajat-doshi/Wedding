import React from "react";
import Select from "../../../../components/Common/Select";
import { Age } from "../../../../util/constant";
class Filter extends React.Component {
  constructor() {
    super();
    this.state = {
      from_age: 1,
      to_age: 100,
    };
  }
  onChange = (name, value) => {
    this.setState({ [name]: value }, () => {
      
      this.props.GetUserList(this.state);
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-lg-2">Age</div>
          <div className="col-lg-3">
            <Select
              options={Age()}
              title="From"
              name="from_age"
              value={this.state.from_age}
              onChangeFunc={this.onChange}
            />
          </div>
          <div className="col-lg-3">
            <Select
              options={Age()}
              title="To"
              name="to_age"
              value={this.state.to_age}
              onChangeFunc={this.onChange}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Filter;
