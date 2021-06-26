import { call, put, takeEvery } from "redux-saga/effects";
import { storeAllUserData, storeReferralCode, storeAppUseCase, storePayrentInfo
} from "./actions";
import { HITUSER, HITREFERALCODE, HITAPPUSECASE, HITPAYRENTINFO, HITPAYRENTINFOAPI,EKYC
} from '../types'
import { getUserData, getUserGeneralDetails
} from "./api";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getData(action) {
    try {
        console.log("?????????")
        const data = yield call(getUserData, action.payload);
        console.log("klklklklk?????")
        console.log(data)
        //TODO
        //Put error check on data and then yield
        yield put(storeAllUserData(data.data.data));
    } catch (e) {
        console.log(e);
    }
}

// function* getEkycData(action) {
//     try {
//         console.log("?redudxp")
//         const data = yield call(getEkyc, action.payload);
//         console.log("redux?????")
//         console.log(data)
//         //TODO
//         //Put error check on data and then yield
//         yield put(hitEkyc(data.data.data));
//     } catch (e) {
//         console.log(e);
//     }
// }


function* getReferal(action) {
    try {
        const data = yield call(getUserGeneralDetails, action.payload);
        if (data.data.error) {

        } else {
            yield put(storeReferralCode(data.data.data));
        }
    } catch (e) {
        console.log(e);
    }
}

function* getUseCase(action) {
    try {
        yield put(storeAppUseCase({ useCase: action.payload.useCase }));
    } catch (e) {
        yield put(storeAppUseCase({ useCase: 'apply-loan' }));
    }
}

// function* storePayRent(action) {
//     try {
//         yield put(storePayrentInfo({ payRent: action.payload.payRent }));
//     } catch (e) {
//         console.log(e)
//     }
// }

export function* watchUserData() {
    yield takeEvery(HITUSER, getData);
}
// export function* watchEkycData(){
//     yield takeEvery(EKYC,getEkycData);
// }

export function* watchReferalCode() {
    yield takeEvery(HITREFERALCODE, getReferal);
}

export function* watchUserUseCase() {
    yield takeEvery(HITAPPUSECASE, getUseCase);
}

// export function* watchUserUseCase() {
//     yield takeEvery(HITPAYRENTINFO, storePayRent);
// }

// export function* watchUserUseCase() {
//     yield takeEvery(HITPAYRENTINFOAPI, postPayRent);
// }
