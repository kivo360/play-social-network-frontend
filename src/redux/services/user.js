import base from './base';



export function GetBilling(userId){
    const userURL = "/user/"+userId;
    return base.get(userURL);
}

export function GetUser(userId){
    const userURL = "/user/"+userId;
    return base.get(userURL);
}