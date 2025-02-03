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
    const data = await res.json();

    return data.foodItem;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Delete operation failed: ${error.message}`);
    } else {
      throw new Error("An unexpected error occured please try again");
    }
  }
};

export const updateFoodItem = async (foodId: number, expDate: string) => {
  try {
    const res = await fetch("/api/editExpDate", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ foodId, expDate }),
    });

    if (!res.ok) {
      const errorText = await res.json();
      throw new Error(errorText.error);
    }

    const data = await res.json();
    return data.foodItem;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Update Operation failed:${error.message}`);
    } else {
      throw new Error("An unexpected error occured please try again");
    }
  }
};
