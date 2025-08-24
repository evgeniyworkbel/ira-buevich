export const formatPhone = (phoneNumber: string): string => {
  if (!phoneNumber.startsWith("+375") || phoneNumber.length !== 13) {
    throw new Error(
      "Invalid phone number format. Expected +375 followed by 9 digits."
    );
  }

  const countryCode = phoneNumber.substring(0, 4);
  const operatorCode = phoneNumber.substring(4, 6);
  const restOfNumber = phoneNumber.substring(6);

  return `${countryCode} (${operatorCode}) ${restOfNumber}`;
};
