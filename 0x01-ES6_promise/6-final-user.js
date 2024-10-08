export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((results) => {
    return results.map((result) => {
      if (result.status === 'fulfilled') {
        return {
          status: result.status,
          value: result.value,
        };
      } else {
        return {
          status: result.status,
          value: result.reason,
        };
      }
    });
  });
}
