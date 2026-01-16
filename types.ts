export interface TourPackage {
  id: string;
  image: string;
  location: string;
  title: string;
  rating: number;
  reviews: number;
  price: number;
  days: number;
}

export interface Destination {
  id: string;
  name: string;
  image: string;
  listingCount: number;
}

export interface Guide {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface BlogPost {
  id: string;
  image: string;
  date: string;
  readTime: string;
  title: string;
}
