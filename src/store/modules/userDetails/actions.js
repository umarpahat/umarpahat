import { HITUSER, USER_DATA, USERREFERALCODE,
  HITREFERALCODE
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
  