import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEditHotels } from "../../services/apiHotels";

export function useEditHotel() {
  const qC = useQueryClient();
  const { isLoading: isEditing, mutate: editHotel } = useMutation({
    mutationFn: ({ newHotelData, id }) => createEditHotels(newHotelData, id),
    onSuccess: () => {
      toast.success("New Hotel created successfully!");
      qC.invalidateQueries({ queryKey: ["hotels"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { isEditing, editHotel };
}
