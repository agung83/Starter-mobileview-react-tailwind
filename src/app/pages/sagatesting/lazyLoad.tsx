import { ComponentType, memo } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { lazyLoad } from "utils/lazyLoad.config";


interface StateRedux {
    user: {
        users: any
    }
}


const SagaTesting = lazyLoad(
    () => import('./index'), (module) => module.SagaTesting
);


const mapStateToProps = (state: StateRedux) => ({
    userData: state.user
});

const mapDispatchToProps = (dispatch: any) => {
    return {
        // dispatching plain actions
        callDataUser: () => dispatch({ type: 'GET_USER' }),
        insertDataUser: (payload: any) => dispatch({ type: 'CREATE_USER', payload })
    }
}


const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose<ComponentType>(withConnect, memo)(SagaTesting);
