import React, { useState } from 'react';

// export function Simple() {
//     const [count, setCount] = useState(1);

//     return (
//         <div>
//             <p>Вы нажали {count} раз</p>
//             <button onClick={() => setCount(count + 1)}>Нажми на меня</button>
//         </div>
//     );
// }

// export function Simple() {
//     const [count, setCount] = useState(() => {
//         // complex calculating init value
//         const initValue = 1;
//         return initValue;
//     });

//     return (
//         <div>
//             <p>Вы нажали {count} раз</p>
//             <button onClick={() => setCount(count + 1)}>Нажми на меня</button>
//         </div>
//     );
// }

// useState NOT WORKING WITH ASYNC init method
// const fetchUrl = (value: number) =>
//     new Promise(resolve => {
//         setTimeout(() => resolve(value), 1000);
//     });

// export function Simple() {
//     const [count, setCount] = useState(async () => {
//         // complex calculating init value
//         const result = (await fetchUrl(1)) as number;
//         return result;
//     });

//     return (
//         <div>
//             <p>Вы нажали {count} раз</p>
//             <button onClick={() => setCount(count)}>Нажми на меня</button>
//         </div>
//     );
// }

export function Simple() {
    console.log('before hook'); // was called only once

    const [count, setCount] = useState(1);

    console.log('render'); // was called only once

    return (
        <div>
            <p>Вы нажали {count} раз</p>
            <button onClick={() => setCount(count)}>Нажми на меня</button>
        </div>
    );
}
