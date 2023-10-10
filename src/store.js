import create from 'zustand';

const useStore = create((set) => ({
  students: ['kasun', 'themiya', 'nihal'],
  addStudent: (student) => {
    set((state) => ({ students: [...state.students, student] }));
  },
}));

export default useStore;
