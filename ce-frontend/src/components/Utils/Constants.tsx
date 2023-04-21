import React from "react";


export interface Property {
  name: string;
  type: string;
  address: string;
  city: string;
  url: string;
}

export const properties: Property[] = [
  {
    name: "Maplewood Apartments",
    type: "Apartment",
    address: "1234 Elm Street",
    city: "Tokyo",
    url: "https://assets.website-files.com/6193ce0889184df85cd96c91/61953a33476cd4f4b3161c1c_image-thumbnail-6-property-posts-realtor-template-p-500.jpeg",
  },
  {
    name: "Willow Creek Estates",
    type: "Ranch",
    address: "5678 Oak Avenue",
    city: "Rio de Janeiro",
    url: "https://assets.website-files.com/6193ce0889184df85cd96c91/619539b83773147d9f162425_image-thumbnail-5-property-posts-realtor-template-p-800.jpeg",
  },
  {
    name: "Pine Ridge Apartments",
    type: "Apartment",

    address: "9101 Pine Street",
    city: "Paris",
    url: "https://assets.website-files.com/6193ce0889184df85cd96c91/61953924b3ead41ff043a5ed_image-thumbnail-4-property-posts-realtor-template-p-800.jpeg",
  },
  {
    name: "Riverfront Residences",
    type: "Bungalow",
    address: "1212 River Road",
    city: "Tokyo",
    url: "https://assets.website-files.com/6193ce0889184df85cd96c91/619538b1f22c8819e89bc594_image-thumbnail-3-property-posts-realtor-template-p-800.jpeg",
  },
  {
    name: "Meadow View Apartments",
    type: "Apartment",
    address: "4567 Meadow Lane",
    city: "Paris",
    url: "https://assets.website-files.com/6193ce0889184df85cd96c91/6195384127055bbbc73f32e0_image-thumbnail-2-property-posts-realtor-template-p-500.jpeg",
  },
  {
    name: "Lakeview Condos",
    type: "Condominium",
    address: "8910 Lakeview Drive",
    city: "Sydney",
    url: "https://assets.website-files.com/6193ce0889184df85cd96c91/61953748655e2982e24ef661_image-thumbnail-8-property-posts-realtor-template-p-800.jpeg",
  },
  {
    name: "Hillside Villas",
    type: "Villa",
    address: "1313 Hillside Avenue",
    city: "Sydney",
    url: "https://assets.website-files.com/6193ce0889184df85cd96c91/619539b83773147d9f162425_image-thumbnail-5-property-posts-realtor-template-p-800.jpeg",
  },
  {
    name: "Highland Estates",
    type: "Estate",

    address: "1414 Highland Drive",
    city: "New York City",
    url: "https://assets.website-files.com/6193ce0889184df85cd96c91/6195384127055bbbc73f32e0_image-thumbnail-2-property-posts-realtor-template-p-500.jpeg",
  },
  {
    name: "Valley View Apartments",
    type: "Apartment",
    address: "1616 Valley Road",
    city: "Rio de Janeiro",

    url: "https://assets.website-files.com/6193ce0889184df85cd96c91/61953748655e2982e24ef661_image-thumbnail-8-property-posts-realtor-template-p-800.jpeg",
  },
  {
    name: "Hudson Heights",
    type: "Condominium",
    address: "1818 Hudson Street",
    city: "New York City",
    url: "https://assets.website-files.com/6193ce0889184df85cd96c91/619538b1f22c8819e89bc594_image-thumbnail-3-property-posts-realtor-template-p-800.jpeg",
  },
];

export function getUniqueValuesFromArray(
  arr: Property[],
  key: keyof Property
): string[] {
  return arr.reduce((acc: string[], obj: Property) => {
    if (!acc.includes(obj[key])) {
      acc.push(obj[key]);
    }
    return acc;
  }, []);
}
