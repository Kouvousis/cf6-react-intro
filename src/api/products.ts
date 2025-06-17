const API_URL: string = import.meta.env.VITE_API_URL
const TENANT_ID: string = import.meta.env.VITE_TENANT_ID

export type Product = {
    id: number;
    name: string;
    slug: string;
    description?: string;
    image?: string;
    price: number;
    is_active: boolean;
    is_favorite: boolean;
    sort: number;
    category_id?: number;
}

export async function getProducts(): Promise<Product[]> {
    const response = await fetch(`${API_URL}tenants/${TENANT_ID}/products/`)
    if (!response.ok) throw new Error("Failed to fetch products.");

    return await response.json()
}

export async function getProduct(id: number): Promise<Product> {
    const response = await fetch(`${API_URL}tenants/${TENANT_ID}/products/${id}`)
    if (!response.ok) throw new Error("Failed to fetch product.");

    return await response.json()
}

export async function updateProduct(id: number, product: Product): Promise<Product> {

}

export async function deleteProduct(id: number): Promise<void> {
    const response = await fetch(`${API_URL}tenants/${TENANT_ID}/products/${id}`, {
        method: 'DELETE'
    })
    if (!response.ok) throw new Error("Failed to delete product.");
}

