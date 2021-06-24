import { HITUSER, USER_DATA, USERREFERALCODE,
  HITREFERALCODE, USERAPPUSECASE, HITAPPUSECASE,
  STOREPAYRENTDATA, HITPAYRENTINFO, HITPAYRENTINFOAPI, EKYC
} from '../types'

export const storeAllUserData = data =>
  ({
    type: USER_DATA,
    payload: data
  });

export const hitAllUserData = data =>
  ({
    type: HITUSER,
    payload: data
  });

export const hitReferralCode = data =>
  ({
    type: HITREFERALCODE,
    payload: data
  });

export const storeReferralCode = data =>
  ({
    type: USERREFERALCODE,
    payload: data
  });

export const storeAppUseCase = data => 
  ({
    type: USERAPPUSECASE,
    payload: data
  });

export const hitAppUseCase = data => 
  ({
    type: HITAPPUSECASE,
    payload: data
  });

export const storePayrentInfo = data =>
  ({
    type: STOREPAYRENTDATA,
    payload: data
  });


export const hitPayrentInfo = data =>
  ({
    type: HITPAYRENTINFO,
    payload: data
  });

export const hitPayrentInfoAPi = data =>
  ({
    type: HITPAYRENTINFOAPI,
    payload: data
  });
export const hitEkyc = data => ({
  type:EKYC,
  payload:data
});