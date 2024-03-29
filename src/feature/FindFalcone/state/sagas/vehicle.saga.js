import { put, takeLatest } from 'redux-saga/effects';
import { STATUS } from '../../../../constants/constants';
import { getVehiclesAPI } from '../../../../services/api';
import { getVehiclesFailedAction, getVehiclesSuccessAction } from '../actions/actions/vehicle.action';
import { VEHICLES_ACTION_TYPES } from '../actions/actionTypes';

function* vehicleActionSaga(action) {
    const response = yield getVehiclesAPI();
    switch (response.status) {
        case STATUS.SUCCESS:
            yield put(getVehiclesSuccessAction(response));
            break;
        case STATUS.FAILED:
            yield put(getVehiclesFailedAction(response));
            break;
        default:
            break;
    }
}

export function* vehicleWatcherSaga() {
    yield takeLatest(VEHICLES_ACTION_TYPES.GET_VEHICLES, vehicleActionSaga);
}
