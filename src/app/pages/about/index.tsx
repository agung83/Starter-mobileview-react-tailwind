
import { useDispatch } from 'react-redux';
import { login } from 'redux/modules/auth/action';
import { WithBottomNav } from "../../components/layout"
// import { useQueryString } from "../../hooks/router"

type Login = {
    isLogin: Boolean
}

export const PageAbout = ({ isLogin = false }: Login) => {
    const dispatch = useDispatch();

    const klik = () => {
        dispatch(login())
        alert(isLogin)
    }

    return (
        <WithBottomNav>
            <button onClick={() => klik()} className="p-3 bg-red-600">Login</button>
            <br />
            {!isLogin &&
                <div className="p-5 bg-yellow-300 text-center font-bold">belum</div>
            }
            {isLogin &&
                <div className="p-5 bg-red-300 text-center font-bold">sudah</div>
            }


            <br />
            wkwkwkland
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum cumque illo beatae sapiente dolor, aspernatur provident, ratione doloribus recusandae reprehenderit fuga ad. Illum animi placeat ad error alias doloremque aliquam.
        </WithBottomNav>
    )
}
