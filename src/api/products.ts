import z from 'zod'

const API_URL: string = import.meta.env.VITE_API_URL
const TENANT_ID: string = import.meta.env.VITE_TENANT_ID

export const productSchema = z.object({
    id: z.number().int(),
    name: z.string().min(1, "Required"),
    slug: z.string().min(1, "Required")
        .regex(/^[a-zA-Z0-9_-]+$/, "Slug must use only letters, numbers - or _"),
    description: z.string().optional(),
    image: z.string().url("Must be valid url").optional(),
    price: z.coerce.number().nonnegative("Must be a positive number."),
    sort: z.coerce.number().int().min(0, "Must be greater than 0"),
    is_active: z.boolean(),
    is_favorite: z.string(),
    category_id: z.coerce.number().int().min(1, "Category is required")
})

export type Product = z.infer<typeof productSchema>

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

export async function updateProduct(
    id: number,
    data: {
        name: string;
        slug: string;
        description?: string | undefined
        image?: string | undefined
        price: number;
        is_active: boolean;
        is_favorite: boolean;
        sort: number;
    }): Promise<Product> {
    const response = await fetch(`${API_URL}tenants/${TENANT_ID}/products/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
    })
    if (!response.ok) throw new Error("Failed to update product.");
    return await response.json()
}

export async function deleteProduct(id: number): Promise<void> {
    const response = await fetch(`${API_URL}tenants/${TENANT_ID}/products/${id}`, {
        method: 'DELETE'
    })
    if (!response.ok) throw new Error("Failed to delete product.");
}

