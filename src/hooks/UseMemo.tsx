import React, { useState, useMemo, useEffect } from 'react';

export function Simple() {
    console.log('Simple');
    const [count, setCount] = useState(1);

    return (
        <div>
            <Sub1 count={count} />
            <button onClick={() => setCount(count + 1)}>Нажми на меня</button>
        </div>
    );
}

function Sub1({ count }: any) {
    console.log('Sub1');

    return (
        <>
            <Sub2 count={count} />
            {useMemo(
                () => (
                    <Message />
                ),
                []
            )}
        </>
    );
}

function Sub2({ count }: any) {
    console.log('Sub2');
    return <p>Вы нажали {count} раз</p>;
}

function Message() {
    const [counter, setCounter] = useState(null);
    console.log('Message');

    useEffect(() => {
        setTimeout(() => {
            setCounter((item: any) => item + 1);
        }, 1000);
    });
    if (!counter) {
        return <p>Просто сообщение</p>;
    }

    return <p>Не простое сообщение, {counter}</p>;
}
