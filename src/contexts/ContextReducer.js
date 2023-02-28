import { toast } from 'react-toastify';

const ContextReducer = (state, action) => {
    switch (action.type){
        case 'SET_LOADING':
            return {
                ...state,
                loading: true,
                [action.payload.newtoast]: toast.loading(action.payload.msg),
            };
        case 'UPDATE':
            return {
                ...state,
                loading: action.payload.loading,
                [action.payload.newtoast]: toast.update(
                    state[action.payload.newtoast],
                    {
                        render: action.payload.status,
                        type: 'success',
                        isLoading: false,
                        autoClose: 500,
                    }
                ),
            };

        case 'GETLISTOFACADEMICYEARS':
            return {

        ...state,
            academicYears: action.payload,
        };

        default:
            return state
    }
}

export default ContextReducer
