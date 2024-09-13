import React from 'react'

type MessageProps = {
    show?: boolean;
    text: string;
}

const Message = ({ show, text }: MessageProps): JSX.Element | null => {
    return (show ? <strong>{text}</strong> : null)
}

export default Message