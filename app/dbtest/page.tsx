import prisma from "@/lib/prisma";

const pantry = await prisma.pantry.findUnique({
  where: {
    userId: "google-oauth2|106992489073321534816",
  },
  include: {
    pantryItems: true,
  },
});

const pantryItems = pantry?.pantryItems;

const Page = () => {
  return (
    <main className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6 text-orange-600">
        Pantry
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pantryItems?.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-all transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="p-4">
              <h2 className="text-2xl font-semibold text-black">{item.name}</h2>
              <p className="text-sm text-gray-600 mt-2">
                {item.category || "Uncategorized"}
              </p>
              <p className="text-lg font-medium text-orange-500 mt-4">
                ${item.price.toFixed(2)}
              </p>
              <div className="flex justify-between items-center mt-4">
                <div className="text-gray-600">
                  <span className="font-medium">Quantity: </span>
                  {item.quantity}
                </div>
                {item.expDate && (
                  <div className="text-sm text-gray-500">
                    Expiry: {new Date(item.expDate).toLocaleDateString()}
                  </div>
                )}
              </div>
            </div>
            <div className="bg-orange-50 p-4 rounded-b-lg text-center">
              <span className="text-xs text-orange-500">Fresh & Ready</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Page;
