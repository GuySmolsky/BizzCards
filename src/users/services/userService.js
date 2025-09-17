const BASE_URL = import.meta.env.VITE_MY_SERVER_API_URL;
console.log("BASE_URL:", BASE_URL); // Add this line

export const registerUser = async (userData) => {
  try {
    const response = await fetch(`${BASE_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const responseText = await response.text();
      let errorMessage;
      try {
        const errorData = JSON.parse(responseText);
        errorMessage = errorData.message || "Registration failed";
      } catch {
        errorMessage = responseText || "Registration failed";
      }
      throw new Error(errorMessage);
    }

    const responseText = await response.text();
    try {
      return JSON.parse(responseText);
    } catch {
      return { success: true, message: responseText };
    }
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const responseText = await response.text();
      let errorMessage;
      try {
        const errorData = JSON.parse(responseText);
        errorMessage = errorData.message || "Login failed";
      } catch {
        errorMessage = responseText || "Login failed";
      }
      throw new Error(errorMessage);
    }

    const token = await response.text();
    return token.trim();
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

export const getUserProfile = async (token) => {
  try {
    let userId;
    try {
      const decoded = JSON.parse(atob(token.split(".")[1]));
      console.log("Decoded token data:", decoded); // ADD THIS LINE
      userId = decoded._id;
      console.log("Extracted user ID:", userId); // ADD THIS LINE
    } catch {
      throw new Error("Invalid token format");
    }

    const response = await fetch(`${BASE_URL}/users/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": token,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch user profile: ${response.status}`);
    }

    const profileData = await response.json();
    console.log("Profile data received:", profileData); // ADD THIS LINE
    return profileData;
  } catch (error) {
    console.error("Get profile error:", error);
    throw error;
  }
};

export const updateUserProfile = async (token, userData) => {
  try {
    let userId;
    try {
      const decoded = JSON.parse(atob(token.split(".")[1]));
      userId = decoded._id;
    } catch {
      throw new Error("Invalid token");
    }

    const response = await fetch(`${BASE_URL}/users/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": token,
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const responseText = await response.text();
      let errorMessage;
      try {
        const errorData = JSON.parse(responseText);
        errorMessage = errorData.message || "Update failed";
      } catch {
        errorMessage = responseText || "Update failed";
      }
      throw new Error(errorMessage);
    }

    const responseText = await response.text();
    try {
      return JSON.parse(responseText);
    } catch {
      return { success: true, message: responseText };
    }
  } catch (error) {
    console.error("Update profile error:", error);
    throw error;
  }
};

export const getAllUsers = async (token) => {
  try {
    const response = await fetch(`${BASE_URL}/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": token,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    return await response.json();
  } catch (error) {
    console.error("Get all users error:", error);
    throw error;
  }
};

export const updateUserStatus = async (token, userId, updates) => {
  try {
    const response = await fetch(`${BASE_URL}/users/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": token,
      },
      body: JSON.stringify(updates),
    });

    if (!response.ok) {
      let errorMessage;
      try {
        const errorData = await response.json();
        errorMessage = errorData.message || "Update failed";
      } catch {
        errorMessage = await response.text();
      }
      throw new Error(errorMessage);
    }

    return await response.json();
  } catch (error) {
    console.error("Update user status error:", error);
    throw error;
  }
};

export const deleteUser = async (token, userId) => {
  try {
    const response = await fetch(`${BASE_URL}/users/${userId}`, {
      method: "DELETE",
      headers: {
        "x-auth-token": token,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to delete user");
    }

    return true;
  } catch (error) {
    console.error("Delete user error:", error);
    throw error;
  }
};
