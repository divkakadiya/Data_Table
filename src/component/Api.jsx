import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Api = () => {
    const [data, setData] = useState([])

    const getApi = async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/comments')
        return res.data
    }

    useEffect(() => {
        getApi().then(res => setData(res))
    }, [])
    console.log(data);

    return (
        <>
            <table className='table table-bordered'>
                <tbody>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                    {
                        data?.map((v, i) =>
                            <tr>
                                <td>{v.id}</td>
                                <td>{v.name}</td>
                                <td>{v.email}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    )
}

export default Api