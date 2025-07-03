import { useEffect, useState, useCallback } from "react"
import Button from "./Button/Button"
import Modal from "./Modal/Modal"
import useInput from "./hooks/useInput"

export default function EffectSection() {

    const input = useInput()

    const [modal, setModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);


    // function openModal() {
    //     setModal(true);
    // }

    //--1 version---------------------
    // async function fetchUsers() {
    //     setLoading(true);
    //     const response = await fetch('https://jsonplaceholder.typicode.com/users');
    //     const users = await response.json();
    //     setUsers(users)
    //     setLoading(false);
    // }

    // useEffect(() => {
    //     fetchUsers();
    // }, [])

    //--2 version---------------------
    // useEffect(() => {
    //     async function fetchUsers() {
    //         setLoading(true);
    //         const response = await fetch('https://jsonplaceholder.typicode.com/users');
    //         const users = await response.json();
    //         setUsers(users)
    //         setLoading(false);
    //     }

    //     fetchUsers();
    // }, [])

    //--3 version---------------------

    const fetchUsers = useCallback(async () => {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        setUsers(users)
        setLoading(false);
    }, [])

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers])

    return (
        <section>
            <h3>Effects</h3>

            <Button style={{ marginBottom: '1rem' }} onClick={() => setModal(true)}>Открыть информацию</Button>


            <Modal open={modal}>
                <h3>Hello from modal</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit excepturi aliquam maiores quas iure repellat assumenda neque saepe velit. Iure, tenetur error? Consequatur suscipit odit quidem dolorum corrupti explicabo expedita?</p>
                <Button onClick={() => setModal(false)}>Close modal</Button>

            </Modal>

            {loading && <p>Loading...</p>}

            {!loading && (
                <>
                    <input type="text" className='control' {...input} />
                    <h6>{input.value}</h6>
                    <ul>
                        {
                            users.filter(user =>
                                user.name.toLowerCase().includes(input.value.toLowerCase())
                            )
                                .map((user) => (
                                    <li key={user.id}>{user.name}</li>
                                ))
                        }
                    </ul>
                </>
            )}

        </section>
    )
}