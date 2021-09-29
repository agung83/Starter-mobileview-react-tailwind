
import { BottomNavigation } from '../../interface'

type Props = {
    children: JSX.Element | JSX.Element[] | String
}

export const WithBottomNav = ({ children }: Props) => {
    return (
        <>
            {children}
            <BottomNavigation />
        </>
    )
}


