import prisma from "@/lib/prismadb";
import getCurrentUser from "./getCurrentUser";

export default async function getFavoriteListings() {
  try {

    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return [];
    }

    const favorites = await prisma.listing.findMany({
      where: {
        id: {
          in: [...(currentUser.favoriteIds || [])],
        },
      },
    });


    const safeFavorite = favorites.map((favorte: { createdAt: { toString: () => any; }; }) => ({
      ...favorte,
      createdAt: favorte.createdAt.toString(),
    }));

    return safeFavorite;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
