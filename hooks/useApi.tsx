import { useCallback, useState } from "react";


export function useApi<T, U>(
  apiFunction: (payload: U) => Promise<T>,
) {
  

  /**
   * State
   */

  const [error, setError] = useState<Error>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setResult] = useState<T>();

  /**
   * Functions
   */

  const execute = useCallback(
    async (payload: U) => {
      try {
        setIsLoading(true);
        const response = await apiFunction(payload);
        setResult(response);
        return response;
      } catch (apiError: any) {
        if (typeof apiError === "string") {
          setError(new Error(apiError));
        } else if (apiError instanceof Error) {
          setError(apiError);
        } else {
          setError(new Error("common.unknown_error"));
        }
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );


  return {
    error,
    isLoading,
    data,
    execute,
  };
}
