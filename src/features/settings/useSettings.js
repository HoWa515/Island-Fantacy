import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

/*eslint-disable*/
export function useSettings() {
  const {
    isLoading,
    error,
    data: settings,
  } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
  });

  return { isLoading, settings, error };
}
