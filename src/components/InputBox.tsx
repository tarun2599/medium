
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

import { ChangeEvent } from "react"

type InputProps =  {
    label: string,
    placeholder: string,
    type: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
export default function InputBox(props: InputProps) {
    return (
        <div>
            <label htmlFor="price" className="block text-md font-medium leading-6 text-gray-900">
                {props.label}
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
                
                <input
                    onChange = {props.onChange}
                    name="price"
                    id="price"
                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder={props.placeholder}
                    type={props.type}
                />
            </div>
        </div>
    )
}
