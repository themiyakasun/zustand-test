import React, { useRef } from 'react';
import useStore from './store';

const Students = () => {
  const inputRef = useRef();
  const addStudent = useStore((state) => state.addStudent);
  const students = useStore((state) => state.students);

  const add = () => {
    addStudent(inputRef.current.value);
    inputRef.current.value = '';
  };

  return (
    <div className='container px-28 py-10 text-center'>
      <h1 className='text-2xl mb-5'>Students</h1>

      <div>
        <input
          type='text'
          ref={inputRef}
          className='border-2 border-black outline-none px-5 py-2'
        />
        <button
          onClick={add}
          className='px-5 py-2 border-none outline-none bg-black text-white ml-3'
        >
          Add Student
        </button>
      </div>

      <ul className='mt-5'>
        {students.map((student) => (
          <>
            <li className='text-lg capitalize font-bold'>{student}</li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Students;
