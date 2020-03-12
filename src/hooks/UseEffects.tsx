import React, { useState, useEffect } from 'react';

// export function Simple() {
//     const [count, setCount] = useState(0);

//     // вызывается перед каждом рендере
//     useEffect(() => {
//         console.log('call useEffect');

//         document.title = `Вы нажали ${count} раз`;

//         // вызывается после каждого рендера
//         return () => {
//             console.log('callback useEffect', count);
//         };
//     });

//     // проверяем порядок вызовов
//     useEffect(() => {
//         console.log('call useEffect-2');

//         return () => {
//             console.log('callback useEffect-2');
//         };
//     });

//     return (
//         <div>
//             <p>Вы нажали {count} раз</p>
//             <button onClick={() => setCount(count + 1)}>Нажми на меня</button>
//         </div>
//     );
// }

export function Simple() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('call useEffect');

        return () => {
            console.log('callback useEffect');
        };
    }, []);

    useEffect(() => {
        console.log('call useEffect-2');

        return () => {
            console.log('callback useEffect-2');
        };
    }, [count]);

    return (
        <div>
            <p>Вы нажали {count} раз</p>
            <button onClick={() => setCount(count + 1)}>Нажми на меня</button>
        </div>
    );
}

// NOT WORKING WITH ASYNC

// export function Simple() {
//     const [count, setCount] = useState(0);

//     useEffect(async () => {
//         console.log('call useEffect');

//         return () => {
//             console.log('callback useEffect');
//         };
//     }, []);

//     return (
//         <div>
//             <p>Вы нажали {count} раз</p>
//             <button onClick={() => setCount(count + 1)}>Нажми на меня</button>
//         </div>
//     );
// }
