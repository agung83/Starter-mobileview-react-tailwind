import { useHistory } from 'react-router-dom';

const route = {
    home: '/',
    about: '/about',
};

type PropsRouter = {
    pathname: string,
    search?: string,
    state?: Object,
}


const useRouter = () => {
    const history = useHistory();
    // PUSH
    const push = (prop: PropsRouter) => {
        history.push(
            prop
        );
    };
    // REPLACE
    return {
        push,
        route,

    };
};

export default useRouter;