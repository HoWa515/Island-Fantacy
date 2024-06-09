import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEditHotels } from "../../services/apiHotels";

export function useCreateHotel() {
  const qC = useQueryClient();
  const { isLoading: isCreating, mutate: createHotel } = useMutation({
    mutationFn: createEditHotels,
    onSuccess: () => {
      toast.success("Hotel created successfully!");
      qC.invalidateQueries({ queryKey: ["hotels"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { isCreating, createHotel };
}
