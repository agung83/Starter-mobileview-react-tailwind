import { ComponentType, memo } from 'react'
import { lazyLoad } from '../../../utils/lazyLoad.config';
import { connect } from 'react-redux';
import { compose } from 'redux';


interface StateReduxAuth {
    auth: {
        isLogin: Boolean
    }
}

const PageAbout = lazyLoad(
    () => import('./index'), module => module.PageAbout,
)

const mapStateToProps = (state: StateReduxAuth) => ({
    isLogin: state.auth.isLogin
});


const withConnect = connect(mapStateToProps, null);

export default compose<ComponentType>(withConnect, memo)(PageAbout);