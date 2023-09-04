export function validateEmail(email) {
  const re = new RegExp(/^[a-zA-Z0-9._-]{3,32}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
  return re.test(email);
}
export function validateFullName(fullName) {
  const nameParts = fullName.split(" ");

  if (nameParts.length < 2 || nameParts.length > 6) {
    return false;
  }

  if (nameParts.some((part) => part.length < 3)) {
    return false;
  }

  if (nameParts.some((part) => part.length > 15)) {
    return false;
  }

  return true;
}

export function validateAddress(address) {
  if (address.length < 5) {
    return false;
  }

  if (address.length > 50) {
    return false;
  }

  return true;
}
export function validateAzerbaijanPhoneNumber(phoneNumber) {
  if (!phoneNumber.slice(4) == "994") {
    return false;
  }
  phoneNumber = phoneNumber.substring(3);
  var cleaned = phoneNumber.replace(/\D/g, "");

  if (cleaned.length < 9 || cleaned.length > 10) {
    return false;
  }

  var validPrefixes = ["50", "51", "55", "70", "77"];
  var prefix = cleaned.substring(0, 2);

  if (!validPrefixes.includes(prefix)) {
    return false;
  }

  for (var i = 2; i < cleaned.length; i++) {
    if (cleaned.charAt(i) < "0" || cleaned.charAt(i) > "9") {
      return false;
    }
  }

  return true;
}

export function validateNote(note) {
  return note.length > 5;
}
