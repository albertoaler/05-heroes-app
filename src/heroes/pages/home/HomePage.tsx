import { useState } from "react";

import { useQuery } from "@tanstack/react-query";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { HeroStats } from "@/heroes/components/HeroStats";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";
import { getHeroesByPageAction } from "@/heroes/actions/get-heroes-by-page.action";
import { CustomJumbotron } from "@/components/custom/CustomJumbotron";

export const HomePage = () => {

  const [activeTab, setActiveTab] = useState<
    'all' |
    'favorites' |
    'heroes' |
    'villains'
  >('all');

  const { data: heroesResponse } = useQuery({
    queryKey: ['heroes'],
    queryFn: () => getHeroesByPageAction(),
    staleTime: 1000 * 60 * 5 // 5 minutes
  });

  // This is not recommended because whenever the component is build/re-build, will trigger the effect
  // useEffect(() => {
  //   getHeroesByPageAction().then();
  // }, []);

  return (
    <>
      <>
        <CustomJumbotron
          title="Universo de Superhéroes"
          description="Descubre, explora y administra superhéroes y villanos"
        />

        {/* BreadCrumbs */}
        <CustomBreadcrumbs currentPage="Súper Héroes" />

        {/* Stats Dashboard */}
        <HeroStats />


        {/* Tabs */}
        <Tabs value={activeTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all" onClick={() => setActiveTab('all')}>All Characters (16)</TabsTrigger>
            <TabsTrigger value="favorites" className="flex items-center gap-2" onClick={() => setActiveTab('favorites')}>
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger value="heroes" onClick={() => setActiveTab('heroes')}>Heroes (12)</TabsTrigger>
            <TabsTrigger value="villains" onClick={() => setActiveTab('villains')}>Villains (2)</TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <h1>Todos</h1>
          </TabsContent>
          <TabsContent value="favorites">
            <h1>Favoritos</h1>
          </TabsContent>
          <TabsContent value="heroes">
            <h1>Heroes</h1>
          </TabsContent>
          <TabsContent value="villains">
            <h1>Villanos</h1>
          </TabsContent>
        </Tabs>

        {/* Character Grid */}
        <HeroGrid />

        {/* Pagination */}
        <CustomPagination totalPages={8} />
      </>
    </>
  );
};