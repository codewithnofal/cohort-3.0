export const generateCode = () => {
  const originalString =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";

  let shortCode = "";

  for (let i = 1; i <= 6; i++) {
    shortCode += originalString.charAt(
      Math.floor(Math.random() * originalString.length),
    );
  }
  return shortCode;
};
