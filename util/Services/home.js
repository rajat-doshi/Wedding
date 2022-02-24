import {get} from "./httpIntercepter";

export const getAllUserCount = () =>{
    return get("/all-user-count").then(res=>res);
}