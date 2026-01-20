import HeroSection from "./components/home/hero";
import CategoriesSection from "./components/home/categories";
import ProductsSection from "./components/home/products";

import { getAllCategories } from "../services/category-service";
export default async function Home() {
  await getAllCategories();

  return (
    <main>
      <HeroSection />
      <CategoriesSection />
      <ProductsSection />
    </main>
  );
}
