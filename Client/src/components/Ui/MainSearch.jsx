import React from 'react';
import Input from './Input';
import Button from './Button';
import { FaSearch } from "react-icons/fa";

const MainSearch = () => {
  return (
    <div className="bg-white py-2 pl-2 pr-2 rounded-full flex justify-center items-center gap-4 shadow">
      <FaSearch className='text-[24px]' />
      <Input type="text" placeholder="Enter Skills" className="px-3 py-2 border rounded-md" />
      <Input type="number" placeholder="Enter Experience" className="px-3 py-2 border rounded-md" />
      <Input type="text" placeholder="Enter Location" className="px-3 py-2 border rounded-md" />
      <Button primaryColor="white" backgroundColor="#285df5">Search</Button>
    </div>
  );
};

export default MainSearch;
