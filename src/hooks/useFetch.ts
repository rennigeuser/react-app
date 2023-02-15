import { AxiosResponse } from "axios";
import { useState } from "react";


export default function useFetch(callback: (...args: any) => any) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  async function fetching(...args: any) {
    try {
      setIsLoading(true);
      await callback(...args);
    } catch (err) {
      setError((err as Error).message);
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  return [fetching, isLoading, error] as const;
}
