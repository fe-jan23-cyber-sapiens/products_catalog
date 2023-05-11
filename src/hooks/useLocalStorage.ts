import { useCallback, useState } from 'react';

type LocalStorage<T> = [T, (value: T | ((val: T) => T)) => void];

export function useLocalStorage<T>(
  key: string,
  initial?: T,
): LocalStorage<T> {
  const [stored, setStored] = useState<T>(() => {
    const item = window.localStorage.getItem(key);

    return item ? JSON.parse(item) : initial;
  });

  const setValue = useCallback(
    (value: T | ((prev: T) => T)) => {
      setStored((prev) => {
        const next = value instanceof Function ? value(prev) : value;

        window.localStorage.setItem(key, JSON.stringify(next));

        return next;
      });
    },
    [key],
  );

  return [stored, setValue];
}
