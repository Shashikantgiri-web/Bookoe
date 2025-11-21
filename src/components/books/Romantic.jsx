import React from 'react'
import '..//..//App.css'
import { useState, useEffect } from 'react'

const Romantic = () => {
    const [api, setApi] = useState([]);
        const fetchApi = async () => {
            let url = await fetch("https://openlibrary.org/subjects/romance.json");
            let data = await url.json();
            setApi(data.works || []);
            console.log(data);
        }
        useEffect(() => {
            fetchApi();
        }, [])
        
    return (
        <div className='w-full h-[99%] flex flex-col justify-start items-center'>
            <div className='w-full h-[120px] flex flex-col justify-center items-center gap-1'>
                <div className='w-[99%] h-[38%] pl-2.5 flex justify-start items-end'>
                    <h1 className='text-[30px] font-bold text-[#171A1FFF]'>Romantic books</h1>
                </div>
                <div className='w-[99%] h-[38%] pl-2.5 flex justify-start items-start'>
                    <p className='text-[16px] font-normal text-[#565D6DFF]'>Fall in love with heartfelt stories that celebrate relationships, emotions, and human connections.</p>
                </div>
            </div>
            <div className='w-full h-[96%] hidden md:grid grid-cols-4 grid-rows-8 justify-center items-center gap-[5px]'>
                {api.slice(0, 32).map((book, idx) => {
                    if (book.key || idx < 32) {
                        return <div className='w-[99%] h-[380px] border-2 border-amber-300 rounded-xl shadow-lg shadow-gray-500 flex flex-col justify-start items-center'>
                            <div className='w-[99%] h-[60%] flex justify-center items-center overflow-hidden rounded-[10px]'>
                                <img src={book.cover_id ? `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg` : '/fallback.jpg'} alt={book.title || 'cover'} className="object-cover w-full h-full" />
                            </div>
                            <div className='w-[99%] h-[40%] p-0.5 flex flex-col justify-between items-center'>
                                <div className='w-[99%] h-[49%] flex justify-center items-center'>
                                    <h4>{book.title}</h4>
                                </div>
                                <div className='w-[99%] h-[49%] flex flex-row justify-center items-center'>
                                    <div className='w-[49%] h-[99%] flex justify-center items-center'>
                                        <button className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center'>
                                            <a href="./Temp_files.pdf" className='text-white'>
                                                Read
                                            </a>
                                        </button>
                                    </div>
                                    <div className='w-[49%] h-[99%] flex justify-center items-center'>
                                        <a href="./Temp_files.pdf" className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center' download><button>Download</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                })}
            </div>
            <div className='w-full h-[96%] md:hidden grid grid-cols-2 grid-row-8 sm:grid-cols-3 dm:grid-rows-6 justify-center items-center gap-[5px]'>
                {api.slice(0, 16).map((book, idx) => {
                    if (book.key || idx < 16) {
                        return <div className='w-[99%] h-[380px] border-2 border-amber-300 rounded-xl shadow-lg shadow-gray-500 flex flex-col justify-start items-center'>
                            <div className='w-[99%] h-[60%] flex justify-center items-center overflow-hidden rounded-[10px]'>
                                <img src={book.cover_id ? `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg` : '/fallback.jpg'} alt={book.title || 'cover'} className="object-cover w-full h-full" />
                            </div>
                            <div className='w-[99%] h-[40%] p-0.5 flex flex-col justify-between items-center'>
                                <div className='w-[99%] h-[49%] flex justify-center items-center'>
                                    <h4>{book.title}</h4>
                                </div>
                                <div className='w-[99%] h-[49%] flex flex-row justify-center items-center'>
                                    <div className='w-[49%] h-[99%] flex justify-center items-center'>
                                        <button className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center'>
                                            <a href="./Temp_files.pdf" className='text-white'>
                                                Read
                                            </a>
                                        </button>
                                    </div>
                                    <div className='w-[49%] h-[99%] flex justify-center items-center'>
                                        <a href="./Temp_files.pdf" className='w-[80%] h-[70%] border-none text-white rounded-[10px] bg-[#2a2ac2] flex justify-center items-center' download><button>Download</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                })}
            </div>
        </div>
    )
}

export default Romantic 