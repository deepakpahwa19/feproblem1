import { FIND_FALCONE_ACTION_TYPES } from '../actions/actionTypes';
import { updateState } from '../../../../redux/reducers/reducerUtil';

const getRandomKey = () => Math.floor(Math.random() * 1000);

const initialAction = {
    token: '',
    status: '',
    statusCode: '',
    errorCode: '',
    errorMessage: '',
    falconeFound: '',
    timeTake: '',
    planetName: '',
    isLoading: false,
    key: getRandomKey()
};

export const findFalconeReducer = (state = initialAction, action) => {
    switch (action.type) {
        // case FIND_FALCONE_ACTION_TYPES.RESET_FIND_FALCONE:
        //     return updateState(initialAction, action.payload);
        case FIND_FALCONE_ACTION_TYPES.FIND_FALCONE:
            return updateState(initialAction, action.payload, { isLoading: true });
        case FIND_FALCONE_ACTION_TYPES.FIND_FALCONE_SUCCESS:
        case FIND_FALCONE_ACTION_TYPES.FIND_FALCONE_FAILED:
            return updateState(state, action.payload, { isLoading: false });
        case FIND_FALCONE_ACTION_TYPES.RESET_FIND_FALCONE:
            return { ...initialAction, key: getRandomKey() };
        default:
            break;
    }
    return state;
};
