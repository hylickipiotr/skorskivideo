import { useEffect } from "react";

export const useResetStore = (client: any) =>
  useEffect(() => {
    client.resetStore();
  }, []);
