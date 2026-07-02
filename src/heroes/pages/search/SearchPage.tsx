import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";


export const SearchPage = () => {
  return (
    <>
      <CustomJumbotron
        title="Búsqueda de Superhéroes"
        description="Descubre, explora y administra superhéroes y villanos"
      />

      {/* Breadcrumbs */}
      <CustomBreadcrumbs currentPage="Buscar superhéroes" />

      {/* Stats dashboard */}
      <HeroStats />

      {/* Filter and search */}
      <SearchControls />
    </>
  );
};

// To make easier with the lazy load option
export default SearchPage;