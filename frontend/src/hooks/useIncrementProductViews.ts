import IProduct from "@shared/types/ProductInterface";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";

const useIncrementProductViews = (productId: IProduct["id"]) => {
  const queryClient = useQueryClient();
  // Mutation to send POST request to increment page views
  const mutation = useMutation({
    mutationFn: async () => {
      const response = await axios.post(`/api/db/product/${productId}/view`);
      return response.data;
    },
    onSuccess: () => {
      //Invalidate any query fetching page views to prevent duplicate hits
      queryClient.invalidateQueries({ queryKey: ["pageViews", productId] });
    },
  });
  useEffect(() => {
    // Increment page view when the component mounts
    mutation.mutate();
  }, []);

  return mutation;
};

export default useIncrementProductViews;
