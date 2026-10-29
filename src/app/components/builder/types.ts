export type MealPlan = "EP" | "CP" | "MAP" | "AP";
export type Category = "3★" | "4★" | "5★" | "Boutique" | "Resort" | "Houseboat" | "Homestay";
export type PriceBasis = "total" | "per person";

export interface Hotel {
  id: string;
  name: string;
  city: string;
  category: Category;
  rating: string;
  meal: MealPlan;
  nights: number;
}

export interface Day {
  id: string;
  title: string;
  description: string;
}

export interface Quote {
  brand: { name: string; phone: string; email: string; logo: string };
  client: { name: string; phone: string; email: string };
  trip: {
    title: string;
    destination: string;
    from: string;
    startDate: string;
    nights: number;
    adults: number;
    children: number;
    infants: number;
    cover: string;
  };
  hotels: Hotel[];
  days: Day[];
  price: { amount: string; basis: PriceBasis; validTill: string; inclusions: string; exclusions: string; notes: string };
}

export const MEAL_LABEL: Record<MealPlan, string> = {
  EP: "Room only (EP)",
  CP: "Breakfast (CP)",
  MAP: "Breakfast & dinner (MAP)",
  AP: "All meals (AP)",
};

export const CATEGORIES: Category[] = ["3★", "4★", "5★", "Boutique", "Resort", "Houseboat", "Homestay"];

export const PRESET_COVERS = [
  { label: "Kashmir", src: "/destinations/kashmir.jpg" },
  { label: "Bali", src: "/destinations/bali.jpg" },
  { label: "Dubai", src: "/destinations/dubai.jpg" },
  { label: "Goa", src: "/destinations/goa.jpg" },
];
