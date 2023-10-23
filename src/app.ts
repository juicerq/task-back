import { 
  changeProductName,
  changeProductPrice,
  changeProductStock,
  createAllImagesFromProduct,
  createAllVariants,
  createImageFromProduct,
  createNewProduct, 
  createUser, 
  createVariant, 
  getAllProducts, 
  getAuthToken, 
  getFullProduct, 
  loginUser 
} from "products/get";

const user = await createUser()

const apiClient_token = await loginUser()

const products = await getAllProducts(apiClient_token);

const chosenProduct = await getFullProduct(apiClient_token);


const authResponse = await getAuthToken('bfd3ca5ba2e6062257d646a95b9b5314bafad0e0')

await createNewProduct(chosenProduct)

await createAllImagesFromProduct(chosenProduct)

await createImageFromProduct({product: chosenProduct, indexOfVariant: 10})

await createAllVariants(chosenProduct)

await createVariant({
  product: chosenProduct,
  indexOfVariant: 6,
  productId: 187894758
})

await changeProductName({
  newName: 'new name',
  productId: 187894758
})

await changeProductPrice({
  newPrice: 20,
  productId: 187894758
})

await changeProductStock({
  newStock: 20,
  productId: 187894758
})
