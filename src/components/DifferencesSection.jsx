import Button from './Button/Button'
import { differences } from '../data'
import { useState } from 'react'


export default function DifferencesSection() {
    const [contentType, setContentType] = useState(null);

    function handleclick(type) {
        setContentType(type);
    }

    return (
        <section>
            <h3>Чем мы отличаемся от других </h3>

            <Button isActive={contentType === 'way'}
                onClick={() => handleclick('way')}>
                Подход</Button>
            <Button isActive={contentType === 'easy'}
                onClick={() => handleclick('easy')}>
                Доступность</Button>
            <Button isActive={contentType === 'program'}
                onClick={() => handleclick('program')}>
                Концентрация</Button>

            {!contentType && <p>Нажми на копку</p>}
            {contentType && <p>{differences[contentType]}</p>}


        </section>
    )
}