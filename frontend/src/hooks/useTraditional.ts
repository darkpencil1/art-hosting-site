import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useTraditional = () => {
  return useQuery({
    queryKey: ["traditional"],
    queryFn: () => axios.get("/api/art/traditional").then((res) => res.data),
  });
};
