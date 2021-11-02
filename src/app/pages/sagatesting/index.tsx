import { useEffect } from "react"
type TypeState = {
    userData: any,
    callDataUser: () => {},
    insertDataUser: (payload: any) => {}
}

export const SagaTesting = ({ userData, callDataUser, insertDataUser }: TypeState) => {
    useEffect(() => {
        callDataUser()
    }, [])


    const { users, status } = userData
    const dataUser = users || []
    console.log(status)


    const submitedData = (event: any) => {
        event.preventDefault();
        let target = event.target

        let nama: String = target[0].value
        let nama_panjang: String = target[1].value

        insertDataUser({ nama, nama_panjang })
    }

    return (
        <div>
            <h1>Testing Redux Saga </h1>
            {dataUser.map((pecah: any, key: any) => (
                <ul key={key}>
                    <li>{pecah.name}</li>
                </ul>
            ))}
            <br />
            <form onSubmit={submitedData}>
                <input type="text" name="nama" className="bg-red-200" placeholder="nama depan" />
                <br />
                <input type="text" name="panjang" className="bg-red-200" placeholder="nama belakang" />

                <button type="submit" className="p-2 bg-blue-400">Save</button>
            </form>
        </div>
    )
}
