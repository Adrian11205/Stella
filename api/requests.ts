import api from "./axios";
import type {
  RegisterDto,
  RegisterResponse,
  UserResponse,
  PaginationDto,
  CreateProductDto,
  UpdateProfileType,
} from "./types";

/*export async function register2(payloud: RegisterDto) {

  const response = await fetch(url + "auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payloud),
  });

  const data = await response.json();
  return data;

}*/

export async function register(payloud: RegisterDto) {
  const response = await api.post<RegisterResponse>("/auth/register", payloud);
  return response.data;
}

export async function login(payloud: { email: string; password: string }) {
  const response = await api.post<RegisterResponse>("/auth/login", payloud);
  return response.data;
}

export async function refresh() {
  const token = localStorage.getItem("refreshToken");

  const response = await api.get<RegisterResponse>("/auth/refresh", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function getProducts(pagination: PaginationDto) {
  const response = await api.get(
    `/products?page=${pagination.page}&take=${pagination.take}&order=${pagination.order}`,
    //    {params: {
    //   page: pagination.page,
    //   take: pagination.take,
    //   order: pagination.order
    // }}
  );
  return response.data;
}

export async function createProduct(product: CreateProductDto) {
  const respnse = await api.post("/products", product);
  return respnse.data;
}

export async function createProductById(productId: string) {
  const response = await api.get(`/products/${productId}`);
  return response.data;
}

export async function updateProduct(
  productId: string,
  product: CreateProductDto,
) {
  const response = await api.put(`/products/${productId}`, product);
  return response.data;
}

export async function deleteProduct(productId: string) {
  const response = await api.delete(`/products/${productId}`);
  return response.data;
}
export async function getMyself() {
  const response = await api.get<UserResponse>("/user/profile/myself");
  return response.data;
}

export async function updateUserProfile(payload: UpdateProfileType) {
  const response = await api.patch<UpdateProfileType>("/user/profile", payload);
  return response.data;
}
