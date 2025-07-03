//Мой Хук

import { useState } from "react";

export default function useInput(defaultValue = '') { //название с use!!
    const [value, setValue] = useState(defaultValue);

    return {
        value,
        onChange: (event) => setValue(event.target.value)
    }
}