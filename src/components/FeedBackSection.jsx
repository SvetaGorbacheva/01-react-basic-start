// import Button from "./Button/Button"
// import { useState } from "react"

// export default function FeedBackSection(){

//     const [name, setName] = useState('');
//     const [hasError, setHasError] = useState(true);
//     const [reason, setReason] = useState('help');


//     function handleNameChange(event){
//         setName(event.target.value);
//         setHasError(event.target.value.trim().length === 0);
//     }

//     function toggleError(){
//         setHasError((prev) => !prev); //prev - принимает прудыдущее значение state
//         setHasError((prev) => !prev);
//         // setHasError(!hasError);

//     }

//     return(
//         <section>
//             <h3>Обратная свзязь</h3>

//             <Button onClick = {toggleError}>Toggle Error</Button>

//             <form>
//                 <label htmlFor="name">Ваше имя</label>
//                 <input 
//                     type = "text"  
//                     id = "name" 
//                     className="control" 
//                     value={name} 
//                     style = {{
//                         border: hasError ?  '1px solid red' : null
//                     }}
//                     onChange = {handleNameChange}
//                 />

//                 <label htmlFor="reason">Причина обращения</label>
//                 <select 
//                     id = "reason" 
//                     className = "control" 
//                     value={reason} 
//                     onChange={(event) => setReason(event.target.value)}>
//                     <option value = "error">Ошибка</option>
//                     <option value = "help">Нужна помощь</option>
//                     <option value = "suggest">Преложение</option>

//                 </select>

//                 <pre>
//                     Name: {name}
//                     <br/>
//                     Reason: {reason}
//                 </pre>

//                 <Button 
//                     disabled = {hasError}
//                     isActive={!hasError}
//                 >Отправить

//                 </Button>

//             </form>
//         </section>
//     )
// }


import { use } from "react";
import Button from "./Button/Button"
import { useState, useRef } from "react"

function StateVSRef() {
    const input = useRef();
    const [value, setValue] = useState('');
    const [show, setShow] = useState('');



    function ValueChange(event) {
        setValue(event.target.value);
    }

    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            setShow(true);
        }
    }

    // console.log(input);
    // debugger


    return (
        <div>
            {/* <h1>{input.current?.value}</h1> */} {/*если input.current.value есть значение пишет его иначе его нет*/}
            <h3>Ipput value: {show && input.current.value}</h3>
            <input
                ref={input}
                type="text"
                className="control"
                onKeyDown={handleKeyDown}
            // onChange={ValueChange}
            ></input>
        </div>
    )
}



export default function FeedBackSection() {
    const [form, setForm] = useState({
        name: '',
        hasError: false,
        reason: 'help',
    });

    // const [name, setName] = useState('');
    // const [hasError, setHasError] = useState(true);
    // const [reason, setReason] = useState('help');


    function handleNameChange(event) {
        // setName(event.target.value);
        // setHasError(event.target.value.trim().length === 0);

        setForm((prev) => ({
            ...prev,
            name: event.target.value,
            hasError: event.target.value.trim().length === 0,
        }))

        // setForm({
        //     name: event.target.value,
        //     hasError: event.target.value.trim().length === 0,
        //     reason: form.reason,
        // })
    }


    // function toggleError(){
    //     //setHasError((prev) => !prev); //prev - принимает прудыдущее значение state
    //     // setHasError(!hasError);

    // }

    return (
        <section>
            <h3>Обратная свзязь</h3>

            <form style={{ marginBottom: '1rem' }}>
                <label htmlFor="name">Ваше имя</label>
                <input
                    type="text"
                    id="name"
                    className="control"
                    value={form.name}
                    style={{
                        border: form.hasError ? '1px solid red' : null
                    }}
                    onChange={handleNameChange}
                />

                <label htmlFor="reason">Причина обращения</label>
                <select
                    id="reason"
                    className="control"
                    value={form.reason}
                    onChange={(event) => setForm((prev) => ({ ...prev, reason: event.target.value }))}>
                    <option value="error">Ошибка</option>
                    <option value="help">Нужна помощь</option>
                    <option value="suggest">Преложение</option>

                </select>

                {/*<pre>
                    {JSON.stringify(form, null, 2)}
                </pre>*/}

                <Button
                    disabled={form.hasError}
                    isActive={!form.hasError}
                >Отправить

                </Button>



            </form>


            <StateVSRef />


        </section>
    )
}

