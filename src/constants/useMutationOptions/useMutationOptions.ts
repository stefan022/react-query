import { queryClient } from "..";

export const useMutationOptions = {
    onSettled: () =>  {
        queryClient.invalidateQueries(["products"])
    }
}