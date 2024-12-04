import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useDigital = () => {
  return useQuery({
    queryKey: ["digital"],
    queryFn: () => axios.get("/api/art/digital").then((res) => res.data),
  });
};
