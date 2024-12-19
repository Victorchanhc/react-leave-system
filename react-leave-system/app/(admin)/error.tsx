'use client'


interface ErrorProps{
    error: Error
}

export default function Error(props: ErrorProps){


    return (
        <div>This is an error page {props.error.message}</div>
    )
} 