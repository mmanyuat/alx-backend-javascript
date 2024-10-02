import { uploadPhoto, createUser } from './utils';

/**
 * Asynchronously uploads a photo and creates a user.
 *
 * @returns {Object} An object containing the photo upload response and user creation response,
 *                  or an empty object if an error occurs.
 */
export default async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto(); // Call the uploadPhoto function
    const user = await createUser(); // Call the createUser function

    // Return an object with both responses
    return {
      photo,
      user,
    };
  } catch (error) {
    // If an error occurs, return an empty object
    return {
      photo: null,
      user: null,
    };
  }
}
