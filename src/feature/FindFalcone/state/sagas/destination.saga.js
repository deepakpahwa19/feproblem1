import { takeLatest, put } from 'redux-saga/effects';
import { getDestinationsFailedAction, getDestinationsSuccessAction } from '../actions/actions/destination.action';
import { getDestinationsAPI } from '../../../../services/api';
import { DESTINATION_ACTION_TYPES } from '../actions/actionTypes';
import { STATUS } from '../../../../constants/constants';

function* destinationActionSaga(action) {
    const response = yield getDestinationsAPI();
    switch (response.status) {
        case STATUS.SUCCESS:
            yield put(getDestinationsSuccessAction(response));
            break;
        case STATUS.FAILED:
            yield put(getDestinationsFailedAction(response));
            break;
        default:
            break;
    }
}

export function* destinationWatcherSaga() {
    yield takeLatest(DESTINATION_ACTION_TYPES.GET_DESTINATIONS, destinationActionSaga);
}
