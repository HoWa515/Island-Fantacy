import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user", user.user]);
      // user is the data received
      navigate("/hotels", { replace: true });
    },
    onError: (err) => {
      console.log("Error", err),
        toast.error("The user or password is incorrect");
    },
  });

  return { login, isLoading };
}
