import { useEffect, useState } from 'react';
import * as Select from '@radix-ui/react-select';

interface Product {
  id: string;
  alt_description: string;
  urls: { small: string };
}

const ProductPage: React.FC = () => {
  const [productData, setProductData] = useState<Product[]>([]);
  const [selectedOption, setSelectedOption] = useState<string>('');

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch(`https://api.unsplash.com/photos/random?query=furniture&count=5`, {
        headers: {
          Authorization: `Client-ID ${process.env.UNSPLASH_API_KEY}`,
        },
      });
      const data = await response.json();
      setProductData(data);
    };
    fetchImages();
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Product Gallery</h1>
      {productData.map((product) => (
        <div key={product.id} style={{ marginBottom: '30px', border: '1px solid #ddd', padding: '15px' }}>
          <img src={product.urls.small} alt={product.alt_description} style={{ width: '100%', height: 'auto' }} />
          <h2>{product.alt_description || 'Furniture Product'}</h2>
          <p>Beautiful furniture piece perfect for modern design.</p>

          <Select.Root onValueChange={(value) => setSelectedOption(value)}>
            <Select.Trigger>{selectedOption || 'Select an option'}</Select.Trigger>
            <Select.Content>
              <Select.Item value="size">Size</Select.Item>
              <Select.Item value="color">Color</Select.Item>
            </Select.Content>
          </Select.Root>

          <button
            style={{
              padding: '10px 20px',
              backgroundColor: '#0070f3',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
              borderRadius: '5px',
              marginTop: '10px',
            }}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
