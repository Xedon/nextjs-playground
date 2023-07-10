import { RandomPokemonLink } from "@/app/(components)/RandomPokemonLink";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => (
  <main className="flex min-h-screen w-full flex-col items-center p-24">
    <RandomPokemonLink />
    <div className="p-16">{children}</div>
  </main>
);

export default DashboardLayout;
