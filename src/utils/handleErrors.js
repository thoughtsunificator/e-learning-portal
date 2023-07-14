"use client"

import { StudentRouteEnum } from "../shared/Constants";
export function handleError(error){
    // handle errors here
    if(error.response.status === 401){
        window.location.href = StudentRouteEnum.studentlogin;
    }
}