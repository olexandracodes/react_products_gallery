export const fetchProductImages = async () => {
    const [chairResponse, tableResponse, bedResponse] = await Promise.all([
      fetch(`https://api.unsplash.com/photos/random?query=chair&count=15`, {
        headers: {
          Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_API_KEY}`,
        },
      }),
      fetch(`https://api.unsplash.com/photos/random?query=table&count=15`, {
        headers: {
          Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_API_KEY}`,
        },
      }),
      fetch(`https://api.unsplash.com/photos/random?query=bed&count=15`, {
        headers: {
          Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_API_KEY}`,
        },
      }),
    ]);
  
    if (!chairResponse.ok || !tableResponse.ok || !bedResponse.ok) {
      const errorMessage = await chairResponse.text();
      throw new Error(errorMessage);
    }
  
    const chairs = await chairResponse.json();
    const tables = await tableResponse.json();
    const beds = await bedResponse.json();
  
    const products = chairs.map((chair: any, index: number) => ({
      id: `product-${index}`,
      alt_description: chair.alt_description || "Furniture Product",
      urls: [
        chair.urls.small,
        tables[index]?.urls.small || "",
        beds[index]?.urls.small || "",
      ],
    }));
  
    return products;
  };
  