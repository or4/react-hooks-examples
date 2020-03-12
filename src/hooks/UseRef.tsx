import React, { useState, useEffect, useRef } from 'react';

function usePrevious(value: any) {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}

export function Simple() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount((i: number) => i + 1);
        }, 1000);
    });

    return (
        <h5>
            <Counter count={count} />
        </h5>
    );
}

interface IProps {
    count: number;
}

function Counter({ count }: IProps) {
    const prevCount = usePrevious(count);

    return (
        <h1>
            Сейчас: {count}, до этого: {prevCount}
        </h1>
    );
}
