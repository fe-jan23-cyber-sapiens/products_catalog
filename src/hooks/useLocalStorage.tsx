import { useState, useEffect } from 'react';

type SetValue<T> = (value: T | ((val: T) => T)) => void;

type ReturnTuple<T> = [T, SetValue<T>];

export function useLocalStorage<T>(
  key: string,
  initialValue: T,
): ReturnTuple<T> {
  const [value, setValue] = useState<T>(() => {
    const savedValue = localStorage.getItem(key);

    if (savedValue !== null) {
      return JSON.parse(savedValue);
    }

    return initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

// type LocalStorage<T> = [T, (value: T | ((val: T) => T)) => void]
//
// export const useLocalStorage = <T>(
//   key: string,
//   initial?: T,
// ): LocalStorage<T> => {
//   const [stored, setStored] = useState<T>(() => {
//     const item = window.localStorage.getItem(key);
//
//     return item ? JSON.parse(item) : initial;
//   });
//
//   const setValue = useCallback(
//     (value: T | ((prev: T) => T)) => {
//       setStored((prev) => {
//         const next = value instanceof Function ? value(prev) : value;
//
//         window.localStorage.setItem(key, JSON.stringify(next));
//
//         return next;
//       });
//     },
//     [key],
//   );
//
//   return [stored, setValue];
// };
