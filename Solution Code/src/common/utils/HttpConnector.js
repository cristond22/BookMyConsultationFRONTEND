/**
 *  generic file for all fetch related opertaions
 */

import { getToken, getUserName } from "./TokenUtil";

const baseUrl = "";
export const getDoctors = (filter = {}) => {
  const queryParams = Object.keys(filter)
    .map((key) => key + "=" + filter[key])
    .join("&");
  return fetch(baseUrl + `/doctors?${queryParams}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache",
    },
  })
    .then((response) => response.json())
    .catch(() => {
      new Error("Error while getting doctors list");
    });
};

export const getSpeciality = () => {
  return fetch(baseUrl + "/doctors/speciality", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache",
    },
  })
    .then((response) => response.json())
    .catch(() => {
      new Error("Error while getting speciality list");
    });
};

export const getDoctorDetail = (id) => {
  return fetch(baseUrl + `/doctors/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache",
    },
  })
    .then((response) => response.json())
    .catch(() => {
      new Error("Error while getting Doctor details");
    });
};

export const getUserDetails = () => {
  return fetch(baseUrl + `/users/${getUserName()}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache",
      Authorization: "Bearer " + getToken(),
    }
  })
    .then((response) => response.json())
    .catch(() => {
      new Error("Error while getting user  details");
    });
};

export const getUserAppointments = () => {
  return fetch(baseUrl + `/users/${getUserName()}/appointments`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache",
      Authorization: "Bearer " + getToken(),
    }
  })
    .then((response) => response.json())
    .catch(() => {
      new Error("Error while getting user appointment details");
    });
};

export const getDoctorAvailableTimeSlot = (doctorId,date) => {
  return fetch(baseUrl + `/doctors/${doctorId}/timeSlots?date=${date}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache",
      Authorization: "Bearer " + getToken(),
    }
  })
    .then((response) => response.json())
    .catch(() => {
      new Error("Error while getting available time slots");
    });
};

export const login = (formData) => {
  return fetch(baseUrl + `/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache",
      Authorization: `Basic ${btoa(
        `${formData.email}:${formData.password}`
      )}`,
    },
  });
};

export const logout = (formData) => {
  return fetch(baseUrl + `/auth/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache",
      Authorization: "Bearer " + getToken(),
    },
  });
};

export const registerAccount = (formData) => {
  return fetch(baseUrl + `/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache"
    },
    body: JSON.stringify(formData),
  });
};

export const bookAppointment = (formData) => {
  return fetch(baseUrl + `/appointments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache",
      Authorization: "Bearer " + getToken(),
    },
    body: JSON.stringify(formData),
  })
  .then(response => {
    if(response.status === 200){
      return true
    }else if(response.status === 400){
      return false
    }
  })
  .catch((e) => {
      console.log(e)
      new Error("Error while booking appointment");
    });
};


export const rateAppointment = (formData) => {
  return fetch(baseUrl + `/ratings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache",
      Authorization: "Bearer " + getToken(),
    },
    body: JSON.stringify(formData),
  })
  .then(response => {
    if(response.status === 200){
      return true
    }else if(response.status === 400){
      return false
    }
  })
  .catch((e) => {
      console.log(e)
      new Error("Error while booking appointment");
    });
};