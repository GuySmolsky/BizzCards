const BASE_URL = import.meta.env.VITE_MY_SERVER_API_URL;

export const getAllCards = async () => {
  try {
    const response = await fetch(`${BASE_URL}/cards`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch cards");
    }

    return await response.json();
  } catch (error) {
    console.error("Get all cards error:", error);
    throw error;
  }
};

export const getCardById = async (cardId) => {
  try {
    const response = await fetch(`${BASE_URL}/cards/${cardId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch card");
    }

    return await response.json();
  } catch (error) {
    console.error("Get card by ID error:", error);
    throw error;
  }
};

export const getUserCards = async (token) => {
  try {
    const response = await fetch(`${BASE_URL}/cards`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": token,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch user cards");
    }

    return await response.json();
  } catch (error) {
    console.error("Get user cards error:", error);
    throw error;
  }
};

export const createCard = async (token, cardData) => {
  try {
    const response = await fetch(`${BASE_URL}/cards`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": token,
      },
      body: JSON.stringify(cardData),
    });

    if (!response.ok) {
      const responseText = await response.text();
      let errorMessage;
      try {
        const errorData = JSON.parse(responseText);
        errorMessage = errorData.message || "Failed to create card";
      } catch {
        errorMessage = responseText || "Failed to create card";
      }
      throw new Error(errorMessage);
    }

    const responseText = await response.text();
    if (!responseText) {
      return { success: true, message: "Card created successfully" };
    }

    try {
      return JSON.parse(responseText);
    } catch {
      return { success: true, message: responseText };
    }
  } catch (error) {
    console.error("Create card error:", error);
    throw error;
  }
};

export const updateCard = async (token, cardId, cardData) => {
  try {
    const response = await fetch(`${BASE_URL}/cards/${cardId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": token,
      },
      body: JSON.stringify(cardData),
    });

    if (!response.ok) {
      const responseText = await response.text();
      let errorMessage;
      try {
        const errorData = JSON.parse(responseText);
        errorMessage = errorData.message || "Failed to update card";
      } catch {
        errorMessage = responseText || "Failed to update card";
      }
      throw new Error(errorMessage);
    }

    const responseText = await response.text();
    if (!responseText) {
      return { success: true, message: "Card updated successfully" };
    }

    try {
      return JSON.parse(responseText);
    } catch {
      return { success: true, message: responseText };
    }
  } catch (error) {
    console.error("Update card error:", error);
    throw error;
  }
};

export const deleteCard = async (token, cardId) => {
  try {
    const response = await fetch(`${BASE_URL}/cards/${cardId}`, {
      method: "DELETE",
      headers: {
        "x-auth-token": token,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to delete card");
    }

    return true;
  } catch (error) {
    console.error("Delete card error:", error);
    throw error;
  }
};

export const toggleCardLike = async (token, cardId) => {
  try {
    const response = await fetch(`${BASE_URL}/cards/${cardId}/like`, {
      // Added /like
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": token,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to toggle card like");
    }

    return await response.json();
  } catch (error) {
    console.error("Toggle card like error:", error);
    throw error;
  }
};

export const searchCards = async (searchTerm) => {
  try {
    const allCards = await getAllCards();

    if (!searchTerm || searchTerm.trim() === "") {
      return allCards;
    }

    const filteredCards = allCards.filter(
      (card) =>
        card.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        card.subtitle?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        card.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        card.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        card.phone?.includes(searchTerm) ||
        card.address?.city?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        card.address?.country?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filteredCards;
  } catch (error) {
    console.error("Search cards error:", error);
    throw error;
  }
};
