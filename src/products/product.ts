type ProductVariant = {
	price: number
	sku: string
	weight: number
	images: string
  resell_price: number
  properties: Propertie[]
  inventory: number
	width: number
	height: number
	stock: number
}

type NuvemShopProductVariant = {
	price: number
	sku: string
	weight: number
	width: number
	height: number
	stock: number
}

type Propertie = {
  value: string | undefined
}

type ProductName = {
	en: string
	es: string
	pt: string
}

type Image = {
	src: string | undefined
}

type NewVariantProperties = {
	pt: string | undefined
}

type NewVariant = {
	values: NewVariantProperties[] | undefined
	price: number
	stock: number
	sku: string
  weight: number
  width: number
	height: number
}

type NuvemShopNewProduct = {
	name: ProductName
	description: string
	variants: NuvemShopProductVariant
	categories: number[]
	brand: string
  images: Image[]
	published: boolean
	created_at: string
	updated_at: string
}

type OldProduct = {
  product: {
    type: "parent" | "variant" | "simple" | "kit" | "simple_kit";
    warranty_unity: "d" | "m" | "y";
    dimensions_unity: "cm" | "m" | "mm";
    weight_unity: "g" | "kg";
    condition: "novo" | "usado" | "recondicionado";
    group_images_by: "sku" | "cor";
    uuid: string;
    sku: string;
    name: string;
    items_per_box: number;
    active: boolean;
    brand_uuid?: (string | null) | undefined;
    warranty?: (number | null) | undefined;
    height?: (number | null) | undefined;
    width?: (number | null) | undefined;
    depth?: (number | null) | undefined;
    gross_weight?: (number | null) | undefined;
    net_weight?: (number | null) | undefined;
    resell_price: number;
    shop_price?: (number | null) | undefined;
    promotional_price?: (number | null) | undefined;
    main_description?: (string | null) | undefined;
    secondary_description?: (string | null) | undefined;
    observations?: (string | null) | undefined;
    gtin?: (string | null) | undefined;
    size_grid_uuid?: (string | null) | undefined;
    generic: boolean;
    created_at: string;
    updated_at: string;
    images: string[];
    brand?: string | undefined;
    other_listings?: Partial<Record<"mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio", {
                    amount: number;
                    accounts: string[];
                }>> | undefined;
    thumbnail?: (string | null) | undefined;
    parent_uuid?: string | undefined;
    own_validations?: {
        id: "uncategorized_images" | "missing_images" | "bad_price" | "bad_stock" | "bad_stock_active" | "missing_cost_price" | "missing_dimensions" | "missing_weight" | "missing_description" | "missing_ml_specs" | "missing_shopee_specs";
        priority: 1 | 2 | 3;
        message: string;
    }[] | undefined;
    completeness?: number | undefined;
    properties?: ({
        name: string;
        value: string;
        type: "variation" | "specification";
    }[] | undefined) | undefined;
    deposit?: ({
        main_road?: (string | null) | undefined;
        secondary_road?: (string | null) | undefined;
        number?: (string | null) | undefined;
        district?: (string | null) | undefined;
        city?: (string | null) | undefined;
        cep: string;
    } | null) | undefined;
    variants: {
        type: "parent" | "variant" | "simple" | "kit" | "simple_kit";
        warranty_unity: "d" | "m" | "y";
        dimensions_unity: "cm" | "m" | "mm";
        weight_unity: "g" | "kg";
        condition: "novo" | "usado" | "recondicionado";
        group_images_by: "sku" | "cor";
        uuid: string;
        sku: string;
        name: string;
        inventory: number;
        items_per_box: number;
        active: boolean;
        brand_uuid?: (string | null) | undefined;
        warranty?: (number | null) | undefined;
        height?: (number | null) | undefined;
        width?: (number | null) | undefined;
        depth?: (number | null) | undefined;
        gross_weight?: (number | null) | undefined;
        net_weight?: (number | null) | undefined;
        resell_price: number;
        shop_price?: (number | null) | undefined;
        cost_price?: (number | null) | undefined;
        promotional_price?: (number | null) | undefined;
        main_description?: (string | null) | undefined;
        secondary_description?: (string | null) | undefined;
        observations?: (string | null) | undefined;
        gtin?: (string | null) | undefined;
        size_grid_uuid?: (string | null) | undefined;
        generic: boolean;
        created_at: string;
        updated_at: string;
        images: string[];
        properties?: ({
            name: string;
            value: string;
            type: "variation" | "specification";
        }[] | undefined) | undefined;
        inventory_history?: {
            entry: string;
            type: "balance" | "deposit" | "withdraw";
            amount: number;
            comment?: string | undefined;
            date: string;
            service_name?: ("mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio") | undefined;
            url?: string | undefined;
        }[] | undefined;
        thumbnail?: (string | null) | undefined;
        own_validations?: {
            id: "uncategorized_images" | "missing_images" | "bad_price" | "bad_stock" | "bad_stock_active" | "missing_cost_price" | "missing_dimensions" | "missing_weight" | "missing_description" | "missing_ml_specs" | "missing_shopee_specs";
            priority: 1 | 2 | 3;
            message: string;
        }[] | undefined;
    }[];
    inventory_history?: {
        entry: string;
        type: "balance" | "deposit" | "withdraw";
        amount: number;
        comment?: string | undefined;
        date: string;
        service_name?: ("mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio") | undefined;
        url?: string | undefined;
    }[] | undefined;
    categories: Partial<Record<"mercado_livre" | "shopee" | "tinyerp" | "bling" | "shopify" | "nuvemshop" | "asaas" | "loja_integrada" | "cartpanda" | "melhor_envio", {
                    id: string;
                    name: string;
                    path?: string[] | undefined;
                }>>;
};
}