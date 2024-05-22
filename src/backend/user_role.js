import { supabase } from "./db";

async function getUserRole() {
  try {
    // Fetch user roles
    const { data: userRoles, error } = await supabase
      .from("user_role")
      .select("*");

    if (error) {
      // If an error occurred during fetch
      console.error("Error fetching user roles:", error.message);
      return { errorCode: 1, data: null }; // Return error code and no data
    } else {
      // If fetch was successful
      console.log("User roles fetched successfully:", userRoles);
      return { errorCode: 0, data: userRoles }; // Return success code and fetched data
    }
  } catch (error) {
    // If an unexpected error occurred
    console.error("Error fetching user roles:", error.message);
    return { errorCode: 1, data: null }; // Return a general error code and no data
  }
}

export { getUserRole };