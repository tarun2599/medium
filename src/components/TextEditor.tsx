import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';

// const toolbar = [
//     [{ 'header': [1, 2, false] }],
//     ['bold', 'italic', 'underline', 'strike', 'blockquote'],
//     [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
//     ['link', 'image'],
//     ['clean']
// ]

// const formats = [
//     'header',
//     'bold', 'italic', 'underline', 'strike', 'blockquote',
//     'list', 'bullet', 'indent',
//     'link', 'image'
// ]

export const TextEditor = ({placeholder, value, setValue}: {placeholder: string, value: any, setValue: any}) => {
    

    return <ReactQuill theme="bubble" value={value} placeholder={placeholder} onChange={setValue} />;
}

