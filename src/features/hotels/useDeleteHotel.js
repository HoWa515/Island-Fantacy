import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteHotel as deleteHotelsApi } from "../../services/apiHotels";

export function useDeleteHotel() {
  const qC = useQueryClient();
  const { isLoading: isDeleting, mutate: deleteHotel } = useMutation({
    mutationFn: deleteHotelsApi,
    onSuccess: () => {
      qC.invalidateQueries({ queryKey: ["hotels"] });
      toast.success("Hotel successfully deleted!");
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteHotel };
}
