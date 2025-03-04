"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation";
import axios from "axios"

export default function page() {
    const [data, setData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("https://byewhile.ru/db.php")
                setData(res.data)
            } catch(err) {
                console.log(err)
            }
            return true;
        }
        fetchData()
    }, [])

    return (
        <div>
            {data.map(({index, data}: any) => {
                {console.log(data)}
                return <div key={index}>
                    <p>{data.id}</p>
                    <p>{data.name}</p>
                </div>
            })}
            {id}
        </div>
    )
}