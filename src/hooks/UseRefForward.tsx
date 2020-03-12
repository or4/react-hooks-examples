import React, { useImperativeHandle, useEffect, useRef, forwardRef } from 'react';

function ChildInputComponent(props: any, ref: any) {
    const inputRef = useRef(null);
    useImperativeHandle(ref, () => inputRef.current);

    return <input type="text" name="child input" ref={inputRef} />;
}

const ChildInput = forwardRef(ChildInputComponent);

export function Simple() {
    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef !== null && inputRef.current !== null) {
            // @ts-ignore
            inputRef.current.value = 'test';
        }
    }, []);

    return (
        <div>
            <ChildInput ref={inputRef} />
        </div>
    );
}
