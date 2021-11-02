import { ComponentType, memo } from 'react'
import { lazyLoad } from '../../../utils/lazyLoad.config';
import { connect } from 'react-redux';
import { compose } from 'redux';

interface StateRedux {
    counter: {
        value: Number
    }
}

const PageHome = lazyLoad(
    () => import('./index'),
    module => module.PageHome,
);

const mapStateToProps = (state: StateRedux) => ({
    counter: state.counter.value
});

const mapDispatchToProps = (dispatch: any) => {
    return {
        // dispatching plain actions
        increment: () => dispatch({ type: 'increment' }),
        decrement: () => dispatch({ type: 'decrement' }),
    }
}


const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose<ComponentType>(withConnect, memo)(PageHome);