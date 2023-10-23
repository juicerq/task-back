import { 
  getAuthToken,
  createNewProduct, 
  createAllImagesFromProduct, 
  createImageFromProduct, 
  createAllVariants, 
  createVariant, 
  changeProductName, 
  changeProductPrice, 
  changeProductStock 
} from "api-nuvemshop/get";

import { 
  createUser, 
  getAllProducts, 
  getFullProduct, 
  loginUser 
} from "products/get";

const productId = 187894758
const productVariantId = 744096259

const user = await createUser()

const apiClient_token = await loginUser()

const products = await getAllProducts(apiClient_token);

const chosenProduct = await getFullProduct(apiClient_token);


const authResponse = await getAuthToken('bfd3ca5ba2e6062257d646a95b9b5314bafad0e0')

await createNewProduct(chosenProduct)

await createAllImagesFromProduct({
  product: chosenProduct,
  productId
})

await createImageFromProduct({
  product: 
  chosenProduct, 
  indexOfVariant: 10, 
  productId
})

await createAllVariants(chosenProduct)

await createVariant({
  product: chosenProduct,
  indexOfVariant: 6,
  productId
})

await changeProductName({
  newName: 'new name',
  productId
})

await changeProductPrice({
  newPrice: 20,
  productId,
  productVariantId
})

await changeProductStock({
  newStock: 101,
  productId,
  productVariantId
})
