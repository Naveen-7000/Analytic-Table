import React from "react";
import DateRange from "../DateRangePicker/DateRangePicker";
import Setting from "../../assets/icons/setting.svg"
import './styles.css';

const Header =(props)=>{
  return (
    <React.Fragment>
      <div className="heading">Analytics</div>
      <div className="header">
        <div>
          <DateRange dateChange={props.dateChange}/>
        </div>
        <div className="settings button" onClick={props.changeSettingsView}>
          <img src={Setting}style={{height: '14px',marginRight: '8px'}} alt={""}/>
          <span>Settings</span>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Header;