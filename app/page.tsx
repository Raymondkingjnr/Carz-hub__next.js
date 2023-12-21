import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { fetchCars } from "@/utiles";

export default async function Home({ searchParams }) {
  const allCars = await fetchCars({
    maker: searchParams.maker || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className=" overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <section className="home__text-container">
          <h1 className="text-lg lg:text-2xl font-bold capitalize">
            car catalogue
          </h1>
          <p className=" text-base font-medium text-gray-600 capitalize">
            Explore The Cars You might like
          </p>
        </section>

        <section className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="Year" options={yearsOfProduction} />
          </div>
        </section>
        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars.slice(0, 12).map((car) => (
                <CarCard car={car} />
              ))}
            </div>
            <ShowMore
              page_number={(searchParams.limit || 10) / 10}
              is_next={(searchParams.limit || 10) > allCars.length}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className=" text-black font-bold text-xl">No Car Found</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
