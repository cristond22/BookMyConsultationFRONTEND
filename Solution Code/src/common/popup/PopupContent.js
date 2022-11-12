import React, { useState } from "react";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import TabContainer from "../tabContainer/TabContainer"
import Login from "../../screens/login/Login";
import Register from "../../screens/register/Register";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from '@material-ui/core/styles';
import BookAppointment from "../../screens/doctorList/BookAppointment";
import DoctorDetails from "../../screens/doctorList/DoctorDetails";
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import RateAppointment from "../../screens/appointment/RateAppointment";
/*
*
* Single popup content container based on popuptype
*/

const useStyles = makeStyles({
  tabs: {
        "& .MuiTabs-indicator": {
          backgroundColor: "#3f50b5"
        }
      
      }
  });

const LoginPopupContent = (props) => {
    const [tabValue, setTabValue] = useState(0);
    const classes  = useStyles()
    const handleTabChange = (event, value) => setTabValue(value);
    return <>
            <Tabs value={tabValue} onChange={handleTabChange} centered className={classes.tabs}>
                    <Tab label="Login" />
                    <Tab label="Register" />
                </Tabs>
                {tabValue === 0 && (
                    <TabContainer>
                        <Login {...props}/>
                    </TabContainer>
                )}
                {tabValue === 1 && (
                    <TabContainer>
                        <Register {...props}/>
                    </TabContainer>
                )}
            </>
}

const BookAppointmentPopupContent = (props) => {
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <BookAppointment doctorDetails={props.doctorData} closePopup={props.closePopup}/>
        </MuiPickersUtilsProvider>
    )
}

const AppointmentRatingPopupContent = (props) => {
    return <RateAppointment {...props}/>
}

const DoctorDetailsPopupContent = (props) => {
    return <DoctorDetails doctorDetails={props.doctorData} />
}
const getPopupTitle= (type) => {
    switch(type){
        case "Authentication" : return type; 
        case "BookAppointment" : return "Book An Appointment"; 
        case "DoctorDetails" : return "Doctor Details"; 
        case "AppointmentRating" : return "Rate an Appointment";
        default: return "";
    }
}

export const PopupContent = (props) => {
    const { popupType, popupData, closePopup } = props  
    const title = getPopupTitle(popupType)
    return <Card className={`popup__header_container ${ popupType !== "Authentication" ? 'expanded' : '' }`}>
                <CardHeader  className="popup__header"      
                    title={title}
                />
                <CardContent>
                    {popupType === "Authentication" &&
                        <LoginPopupContent {...props} />
                    }
                    {popupType === "BookAppointment" &&
                        <BookAppointmentPopupContent doctorData={popupData} closePopup={closePopup}/>
                    }
                    {popupType === "DoctorDetails" &&
                        <DoctorDetailsPopupContent doctorData={popupData} />
                    }
                    {popupType === "AppointmentRating" &&
                        <AppointmentRatingPopupContent appointmentRatingData={popupData} closePopup={closePopup} />
                    }
                    
                </CardContent>
            </Card>

}


