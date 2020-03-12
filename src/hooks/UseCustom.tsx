import React, { useState, useEffect } from 'react';

function useFriendStatus(friendID: number) {
    const [isOnline, setIsOnline] = useState(null);
    const [hash] = useState(Math.random());

    console.log('hash', hash);
    console.log('isOnline', isOnline);

    useEffect(() => {
        function handleStatusChange(status: any) {
            setIsOnline(status.isOnline);
        }

        console.log('useFriendStatus on', friendID);
        handleStatusChange({ isOnline: true });
        return () => {
            console.log('useFriendStatus off', friendID);
            handleStatusChange({ isOnline: false });
        };
    });

    return isOnline;
}

function FriendStatus(props: any) {
    const isOnline = useFriendStatus(props.friend.id);

    if (isOnline === null) {
        return <div>Загрузка...</div>;
    }
    return <div>{isOnline ? 'В сети' : 'Не в сети'}</div>;
}

function FriendListItem(props: any) {
    const isOnline = useFriendStatus(props.friend.id);

    return <li style={{ color: isOnline ? 'green' : 'black' }}>{props.friend.name}</li>;
}

export function Simple() {
    const friend = { id: 10, name: 'Boris' };
    return (
        <>
            <FriendStatus friend={friend} />
            <FriendListItem friend={friend} />
        </>
    );
}

//// move code above

const friendList = [{ id: 0, name: 'Татьяна' }, { id: 1, name: 'Алла' }, { id: 2, name: 'Лиля' }];

export function Simple2() {
    const [recipientID, setRecipientID] = useState(1);
    const isRecipientOnline = useFriendStatus(recipientID);

    return (
        <>
            <ul>
                <li style={{ color: isRecipientOnline ? 'green' : 'red' }}>{friendList[recipientID].name}</li>
            </ul>
            <select value={recipientID} onChange={e => setRecipientID(Number(e.target.value))}>
                {friendList.map(friend => (
                    <option key={friend.id} value={friend.id}>
                        {friend.name}
                    </option>
                ))}
            </select>
        </>
    );
}
