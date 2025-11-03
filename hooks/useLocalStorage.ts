"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Updater<T> = T | ((previous: T) => T);

interface UseLocalStorageReturn<T> {
  value: T;
  setValue: (value: Updater<T>) => void;
  reset: () => void;
  isHydrated: boolean;
}

/**
 * Small wrapper around localStorage with SSR guards and typed updates.
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T,
): UseLocalStorageReturn<T> {
  const initialValueRef = useRef(initialValue);
  const [value, setValue] = useState<T>(initialValue);
  const [isHydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(key);

      if (stored !== null) {
        setValue(JSON.parse(stored) as T);
      }
    } catch (error) {
      console.warn(`Unable to access localStorage for key "${key}"`, error);
    } finally {
      setHydrated(true);
    }
  }, [key]);

  // Écouter les changements de localStorage
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent | Event) => {
      // StorageEvent pour les changements entre onglets
      // Event personnalisé pour les changements dans le même onglet
      if (e instanceof StorageEvent) {
        if (e.key === key && e.newValue !== null) {
          try {
            setValue(JSON.parse(e.newValue) as T);
          } catch (error) {
            console.warn(`Unable to parse localStorage value for key "${key}"`, error);
          }
        }
      } else {
        // Événement personnalisé - relire depuis localStorage
        try {
          const stored = window.localStorage.getItem(key);
          if (stored !== null) {
            setValue(JSON.parse(stored) as T);
          }
        } catch (error) {
          console.warn(`Unable to access localStorage for key "${key}"`, error);
        }
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [key]);

  const setStoredValue = useCallback(
    (next: Updater<T>) => {
      setValue((previous) => {
        const resolved =
          typeof next === "function"
            ? (next as (value: T) => T)(previous)
            : next;

        try {
          window.localStorage.setItem(key, JSON.stringify(resolved));
        } catch (error) {
          console.warn(`Unable to persist localStorage key "${key}"`, error);
        }

        return resolved;
      });
    },
    [key],
  );

  const reset = useCallback(() => {
    setValue(initialValueRef.current);

    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.warn(`Unable to reset localStorage key "${key}"`, error);
    }
  }, [key]);

  return {
    value,
    setValue: setStoredValue,
    reset,
    isHydrated,
  };
}
