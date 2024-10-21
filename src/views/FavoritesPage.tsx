import { useMemo } from "react";
import DrinkCard from "../components/DrinkCard";
import { useAppStore } from "../stores/useAppStore";

export default function FavoritesPage() {
    const favorites = useAppStore((state) => state.favorites);
    const hadFavorites = useMemo(() => favorites.length, [favorites]);

    return (
        <>
            <h1 className="text-6xl font-extrabold">Favoritos</h1>

            {hadFavorites ? (
                <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10">
                    {favorites.map((favorite) => (
                        <DrinkCard key={favorite.idDrink} drink={favorite} />
                    ))}
                </div>
            ) : (
                <p className="my-10 text-center text-2xl">
                    No tienes favoritos aún, ve a la página de inicio y agrega
                    tus recetas favoritas
                </p>
            )}
        </>
    );
}
