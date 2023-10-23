import { apiClient } from "api-client/init";
import axios from "axios";

export async function getAllProducts(access_token: string) {
	const { products } = await apiClient(
		"get",
		"/market/retailer/products",
		access_token,
		{
			page: 1,
		}
	).catch(() => ({
		products: [],
	}));

	return products;
}

export async function getFullProduct(access_token: string) {
	const { product } = await apiClient(
		"get",
		"/market/retailer/products/:product_uuid",
		access_token,
		{
			product_uuid: "d5966795-b1fc-4df5-a3d9-23c8618b99fc",
		}
	);

	return product
}

export async function createUser() {
	const user = await apiClient("post", "/auth/user", "123", {
		first_name: "Júlio",
		last_name: "Cerqueira",
		password: "juuiteste123",
		phone: "11999999999",
		email: "juiteste@teste.com",
	});
}

export async function loginUser() {
	const { access_token } = await apiClient("post", "/auth", "123", {
		email: "juiteste@teste.com",
		password: "juuiteste123",
	});

	return access_token
}
