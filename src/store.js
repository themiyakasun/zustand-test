import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

let store = (set) => ({
  students: ['kasun', 'themiya', 'nihal'],
  addStudent: (student) => {
    set((state) => ({ students: [...state.students, student] }));
  },
});

store = devtools(store);
store = persist(store, { name: 'students' });

const useStore = create(store);

export default useStore;
