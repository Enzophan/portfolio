import React from 'react'

type Props = {}

const Data = (props: Props) => {
    return (
        <div className="home__data">
            <h1 className="home__title">Zinzo Phan
                <svg className='home__hand' xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 47.5 47.5" viewBox="0 0 47.5 47.5" id="hand"><defs><clipPath id="a"><path d="M0 38h38V0H0v38Z"></path></clipPath></defs><g clip-path="url(#a)" transform="matrix(1.25 0 0 -1.25 0 47.5)"><path fill="#d99e82" d="M0 0s1.132 1.65-.519 2.781c-1.649 1.131-2.78-.519-2.78-.519L-8.55-5.396c-.18.302-.379.6-.599.894l7.288 10.629s1.131 1.649-.519 2.78c-1.649 1.132-2.78-.518-2.78-.518l-6.856-9.997c-.255.209-.515.417-.785.622l7.947 11.59s1.131 1.649-.518 2.78c-1.649 1.132-2.78-.518-2.78-.518L-16.1 1.277c-.292.18-.581.335-.87.498l7.427 10.832s1.131 1.649-.519 2.78c-1.649 1.132-2.78-.518-2.78-.518l-7.854-11.453-.629-.918-.565-.825c4.948-3.393 5.419-9.779 2.592-13.902-.566-.825-1.39-.26-1.39-.26 3.393 4.949 2.356 10.51-2.593 13.903l1.462 7.302s.545 1.925-1.379 2.47c-1.924.545-2.469-1.379-2.469-1.379l-1.685-5.004c-.668-1.984-1.379-3.961-2.32-5.83-2.657-5.28-1.07-11.843 3.941-15.279 5.465-3.747 12.935-2.355 16.683 3.11.198.29.364.573.522.856l.044-.031L0 0Z" transform="translate(34.305 19.664)"></path><path fill="#77b255" d="M0 0h-2a6.966 6.966 0 0 0 6.958 6.958v-2A4.964 4.964 0 0 1 0 0" transform="translate(3.042 30)"></path><path fill="#77b255" d="M0 0h-2c0 5.514 4.486 10 10 10V8C3.589 8 0 4.411 0 0" transform="translate(5 25)"></path><path fill="#77b255" d="M0 0v2c3 0 5 2 5 5h2c0-4-3-7-7-7" transform="translate(30 1)"></path><path fill="#77b255" d="M0 0v2c4 0 8.042 4.042 8.042 8.042h2C10.042 4.042 6 0 0 0" transform="translate(25 2.958)"></path></g></svg>
            </h1>
            <h3 className="home__subtitle">Developer</h3>
            <p className="home__description">
                I'm Developer in Da Nang, Viet Nam.
            </p>
            <a href="#contact" className="button button--flex">Say hello!
                <svg className='button__icon' width="32px" height="32px" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.33045 8.38999C0.250452 11.82 9.42048 14.9 9.42048 14.9C9.42048 14.9 12.5005 24.07 15.9305 21.99C19.5705 19.77 23.9305 6.13 21.0505 3.27C18.1705 0.409998 4.55045 4.74999 2.33045 8.38999Z" stroke="var(--container-color)" />
                    <path d="M15.1999 9.12L9.41992 14.9" stroke="var(--container-color)" />
                </svg>
            </a>
        </div>
    )
}

export default Data