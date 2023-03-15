"use client"

import { useSelector, useDispatch } from "react-redux";
import { setAlert } from "@/app/GlobalState/Slices/Alert/AlertSllice";

const AlertFunction = (type, dispatch, alertState) => {
    switch (type) {
        case "success":
            return (
                <div className="flex flex-col justify-center">
                    <div
                        className="fixed bottom-3 right-6 z-10 pointer-events-auto mx-auto mb-4 hidden w-96 max-w-full rounded-lg bg-green-100 bg-clip-padding text-sm text-green-700 shadow-lg shadow-black/5 data-[te-toast-show]:block data-[te-toast-hide]:hidden"
                        id="static-example"
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true"
                        data-te-autohide="false"
                        data-te-toast-init
                        data-te-toast-show
                    >
                        <div className="flex items-center justify-between rounded-t-lg border-b-2 border-success/20 bg-green-100 bg-clip-padding px-4 pt-2.5 pb-2">
                            <p className="flex items-center font-bold text-green-700">
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="check-circle"
                                    className="mr-2 h-4 w-4 fill-current"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                                    ></path>
                                </svg>
                                {alertState.title}
                            </p>
                            <div className="flex items-center">
                                <p className="text-xs text-green-700">A moment ago</p>
                                <button
                                    type="button"
                                    className="ml-2 box-content rounded-none border-none opacity-80 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                                    data-te-toast-dismiss
                                    aria-label="Close"
                                    onClick={() => dispatch(setAlert({ type: "hide" }))}
                                >
                                    <span className="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="h-6 w-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="break-words rounded-b-lg bg-green-100 py-4 px-4 text-green-700">
                            {alertState.message}
                        </div>
                    </div>
                </div>
            );
        case "error":
            return (
                <div className="flex flex-col justify-center">
                    <div
                        className="fixed bottom-3 right-6 z-10 pointer-events-auto mx-auto mb-4 hidden w-96 max-w-full rounded-lg bg-red-200 bg-clip-padding text-sm text-red-700 shadow-lg shadow-black/5 data-[te-toast-show]:block data-[te-toast-hide]:hidden"
                        id="static-example"
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true"
                        data-te-autohide="false"
                        data-te-toast-init
                        data-te-toast-show
                    >
                        <div className="flex items-center justify-between rounded-t-lg border-b border-red-300 bg-red-200 bg-clip-padding px-4 pt-2.5 pb-2 text-red-700">
                            <p className="flex items-center font-bold text-red-700">
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="times-circle"
                                    className="mr-2 h-4 w-4 fill-current"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"
                                    ></path>
                                </svg>
                                {alertState.title}
                            </p>
                            <div className="flex items-center">
                                <p className="text-xs text-red-700">A moment ago</p>
                                <button
                                    type="button"
                                    className="ml-2 box-content rounded-none border-none opacity-80 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                                    data-te-toast-dismiss
                                    aria-label="Close"
                                    onClick={() => dispatch(setAlert({ type: "hide" }))}
                                >
                                    <span className="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="h-6 w-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="break-words rounded-b-lg bg-red-200 py-4 px-4 text-red-700">
                            {alertState.message}
                        </div>
                    </div>
                </div>
            );
        case "info":
            return (
                <div className="flex flex-col justify-center">
                    <div
                        className="fixed bottom-3 right-6 z-10 pointer-events-auto mx-auto mb-4 hidden w-96 max-w-full rounded-lg bg-blue-200 bg-clip-padding text-sm text-blue-700 shadow-lg shadow-black/5 data-[te-toast-show]:block data-[te-toast-hide]:hidden"
                        id="static-example"
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true"
                        data-te-autohide="false"
                        data-te-toast-init
                        data-te-toast-show
                    >
                        <div className="flex items-center justify-between rounded-t-lg border-b border-blue-300 bg-blue-200 bg-clip-padding px-4 pt-2.5 pb-2 text-blue-700">
                            <p className="flex items-center font-bold text-blue-700">
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="times-circle"
                                    className="mr-2 h-4 w-4 fill-current"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"
                                    ></path>
                                </svg>
                                {alertState.title}
                            </p>
                            <div className="flex items-center">
                                <p className="text-xs text-blue-700">A moment ago</p>
                                <button
                                    type="button"
                                    className="ml-2 box-content rounded-none border-none opacity-80 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                                    data-te-toast-dismiss
                                    aria-label="Close"
                                    onClick={() => dispatch(setAlert({ type: "hide" }))}
                                >
                                    <span className="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="h-6 w-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="break-words rounded-b-lg bg-blue-200 py-4 px-4 text-blue-700">
                            {alertState.message}
                        </div>
                    </div>
                </div>
            );
        default:
            return null;
    }
}

const Index = () => {

    const alertState = useSelector((state) => state.alert);
    const dispatch = useDispatch();

    return (
        <>
        { AlertFunction(alertState.type, dispatch, alertState) }
        </>
    )
}

export default Index