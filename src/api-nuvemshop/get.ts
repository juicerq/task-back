import axios from "axios";

export async function getAuthToken(code: string) {
	const response = await axios.post('https://www.tiendanube.com/apps/authorize/token', {
		client_id: '8775',
		client_secret: 'db6f6b957a9d16a8be921548ccbba1a9c580c227a49c252f',
		grant_type: "authorization_code",
		code
	})

	return response.data
}

export async function createVariant({
	product,
	indexOfVariant,
	productId
}: {
	product: any,
	indexOfVariant: number
	productId: number
}) {

	const data: NewVariant = {
		values: [
			{ pt: product.variants[indexOfVariant].properties[0].value },
			{ pt: product.variants[indexOfVariant].properties[1].value },
		],
		price: product.variants[indexOfVariant].resell_price,
		weight: product.gross_weight / 1000,
		stock: product.variants[indexOfVariant].inventory,
		height: product.height,
		width: product.width,
		sku: product.variants[indexOfVariant].sku,
	};

	const config = {
		headers: {
			'Authentication': `bearer af605c9b60d3416e27b65dfc237dcbbab1c22b86 `,
			'User-Agent': 'juicerqapi (julio.cerqueiira@gmail.com)'
		}
	}

	const response = await axios.post(
		`https://api.tiendanube.com/v1/${3863345}/products/${productId}/variants`,
		data,
		config
	)

	console.log(response.data)
}

export async function createAllVariants(product: any) {
	for (let indexOfVariant = 1; indexOfVariant < product.variants.length; indexOfVariant++) {
		createVariant({
			product,
			indexOfVariant,
			productId: 187894758
		})
	}
}

export async function createImageFromProduct({
	product,
	indexOfVariant,
  productId
}: {
	product: any
	indexOfVariant: number
  productId: number
}) {
	const data: Image = {
		src: product.variants[indexOfVariant]?.images[0],
	}

	const config = {
		headers: {
			'Authentication': `bearer af605c9b60d3416e27b65dfc237dcbbab1c22b86 `,
			'User-Agent': 'juicerqapi (julio.cerqueiira@gmail.com)'
		}
	}

	const response = await axios.post(
		`https://api.tiendanube.com/v1/${3863345}/products/${productId}/images`,
		data,
		config
		)
}

export async function createAllImagesFromProduct({
  product,
  productId
}: {
  product: any
  productId: number
}) {
	for (let indexOfVariant = 1; indexOfVariant < product.variants.length; indexOfVariant++) {
		await createImageFromProduct({
			product,
			indexOfVariant,
      productId
		})
	}
}


export async function createNewProduct(newProduct: any) {
	const data: NuvemShopNewProduct = {
		description: newProduct.main_description,
		brand: newProduct.brand,
		published: newProduct.active,
		images: newProduct.images.map((image: string) => ({
			src: image
		})),
		name: {
			en: newProduct.name,
			es: newProduct.name,
			pt: newProduct.name,
		},
		variants: {
				price: newProduct.resell_price,
				sku: newProduct.sku,
				weight: newProduct.gross_weight / 1000,
				height: newProduct.height,
				width: newProduct.width,
				stock: newProduct.inventory,
		},
		created_at: newProduct.created_at,
		updated_at: newProduct.updated_at,
		categories: newProduct.categories,
	}

	const config = {
		headers: {
			'Authentication': `bearer af605c9b60d3416e27b65dfc237dcbbab1c22b86 `,
			'User-Agent': 'juicerqapi (julio.cerqueiira@gmail.com)'
		}
	}

	const response = await axios.post(`https://api.tiendanube.com/v1/${3863345}/products`, data, config)
}

export async function changeProductPrice({
  newPrice, 
  productId, 
  productVariantId
}: {
  newPrice: number 
  productId: number
  productVariantId: number
}) {
	const data = {
		price: newPrice
	}

	const config = {
		headers: {
			'Authentication': `bearer af605c9b60d3416e27b65dfc237dcbbab1c22b86 `,
			'User-Agent': 'juicerqapi (julio.cerqueiira@gmail.com)'
		}
	};

	const response = await axios.put(`https://api.tiendanube.com/v1/${3863345}/products/${productId}/variants/${productVariantId}`, data, config)
}

export async function changeProductName({newName, productId}: {newName: string, productId: number}) {
	const data = {
		name: newName
	}

	const config = {
		headers: {
			'Authentication': `bearer af605c9b60d3416e27b65dfc237dcbbab1c22b86 `,
			'User-Agent': 'juicerqapi (julio.cerqueiira@gmail.com)'
		}
	};

	const response = await axios.put(`https://api.tiendanube.com/v1/${3863345}/products/${productId}`, data, config)
}

export async function changeProductStock({
  newStock, 
  productId, 
  productVariantId
}: {
  newStock: number, 
  productId: 
  number, 
  productVariantId: number
}) {
	const data = {
		stock: newStock
	}

	const config = {
		headers: {
			'Authentication': `bearer af605c9b60d3416e27b65dfc237dcbbab1c22b86 `,
			'User-Agent': 'juicerqapi (julio.cerqueiira@gmail.com)'
		}
	};

	const response = await axios.put(`https://api.tiendanube.com/v1/${3863345}/products/${productId}/variants/${productVariantId}`, data, config)
}
