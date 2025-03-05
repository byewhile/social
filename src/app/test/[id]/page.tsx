"use client"

import { FormEvent, useEffect, useState } from "react"
import { useParams } from "next/navigation";
import axios from "axios"
import { dataType } from "@/types/types";

export default function page() {
    const [name, setName] = useState("");
    const [data, setData] = useState([]);
    const { id } = useParams();

    const fetchData = async () => {
        try {
            const res = await axios.get("https://byewhile.ru/db.php");
            setData(res.data);
        } catch(err) {
            console.log(err);
        }
    }

    const sendData = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const res = await axios.post("https://byewhile.ru/db.php", {name: data});
            console.log(res);
        } catch (err) {
            console.log(err);
        }
        setName("");
        fetchData();
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <form onSubmit={sendData}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="submit" />
            </form>

            {data.map((data: dataType) => {
                return (
                    <div key={data.id}>
                        <p>{data.id}</p>
                        <p>{data.name}</p>
                    </div>
                );
            })}
            {id}
        </div>
    )
}