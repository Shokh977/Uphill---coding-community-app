import { Search } from 'lucide-react'
import React from 'react'
import { MdClose } from 'react-icons/md'

export default function SearchBar({value, onChange, handleSearch, onClearSearch}) {
  return (
    <div>
         <div className="flex items-center justify-between p-3 rounded-lg dark:bg-gray-800 bg-gray-100 max-w-[250px]">
          <input
            className="outline-none border-none bg-transparent"
            type="text"
            placeholder="Search Notes"
            value={value}
            onChange={onChange}
          />
        <Search  className="text-violet-500 cursor-pointer transition-all duration-300"/>
        </div>
    </div>
  )
}
