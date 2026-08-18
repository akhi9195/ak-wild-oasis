import { createEditCabin } from "../../services/apiCabins";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
export function useCreateCabin() {
  const queryClient = useQueryClient();
  const { isLoading: isCreating, mutate: createCabin } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      (toast.success("New Cabin created successfully!!!"),
        queryClient.invalidateQueries({
          queryKey: ["cabins"],
        }));
    },
    onError: (err) => toast.error("New Cabin creation failed!!!"),
  });
  return { isCreating, createCabin };
}
