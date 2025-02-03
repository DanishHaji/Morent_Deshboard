import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId } from '../env';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Use CDN for faster performance (use false if you need fresh data)
});

// Function to fetch car data from the Sanity dataset
export async function getCars() {
  const query = `*[_type == "car"]{
    _id,
    name,
    brand,
    type,
    fuelCapacity,
    transmission,
    seatingCapacity,
    pricePerDay,
    originalPrice,
    tags,
    "imageUrl": image.asset->url
  }`;

  try {
    const cars = await client.fetch(query);
    return cars;
  } catch (error) {
    console.error("Error fetching cars:", error);
    return [];
  }
}
