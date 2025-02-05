import { api } from "@/lib/axios";

type PopularProduct = {
  product: string;
  amount: number;
};

export async function getPopularProducts() {
  const response = await api.get<PopularProduct[]>("/metrics/popular-products");

  return response.data;
}
