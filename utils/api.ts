export const deleteFoodItem = async (foodId: number) => {
  try {
    const res = await fetch("/api/deleteFoodItem", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ foodId }),
    });

    if (!res.ok) {
      const errorText = await res.json();
      throw new Error(errorText.error);
    }
    return await res.json();
  } catch (error) {
    if (error instanceof Error) {
      console.log("Error deleting food item:", error.message);
      throw new Error(`Delete operation failed: ${error.message}`);
    } else {
      throw new Error("An unexpected error occured please try again");
    }
  }
};
