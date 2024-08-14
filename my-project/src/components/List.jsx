import React from 'react';

const List = ({ threads }) => {
    console.log(threads); // Check what's being passed to the List component
    return (
        <>
            <div className="absolute top-0 left-24 h-[100%] w-80 flex-col justify-evenly items-center bg-gray-950 border-solid border-r-[0.1px] border-l-[0.1px] border-gray-900">
                <ul className="m-3 w-full">
                    {threads && threads.length > 0 ? (
                        threads.map((thread) => (
                            <li key={thread.id} className="liContainer p-3 border-b-[0.1px] border-gray-800">
                                <p className="text-white font-semibold">{thread.subject}</p>
                                <p className="text-xs text-slate-500">{thread.fromName} ({thread.fromEmail})</p>
                            </li>
                        ))
                    ) : (
                        <li className="text-white text-center p-3">No emails found</li>
                    )}
                </ul>
            </div>
        </>
    );
};

export default List;
