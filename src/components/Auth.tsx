import React, { ReactNode } from 'react'

type Props = {
    childen: ReactNode
}
const Auth = ({ childen }: Props) => {
    return (
        <div>{childen}</div>
    )
}

export default Auth
