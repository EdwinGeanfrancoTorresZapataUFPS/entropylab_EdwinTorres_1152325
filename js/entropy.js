const ASCII_PRINTABLE_WITHOUT_SPACE = /^[\x21-\x7E]+$/;

export function calculateEntropy(password) {
  if (typeof password !== "string") {
    throw new TypeError("La contraseña debe ser texto.");
  }

  if (password.length === 0) {
    return { status: "empty" };
  }

  if (!ASCII_PRINTABLE_WITHOUT_SPACE.test(password)) {
    return { status: "unsupported" };
  }

  const groups = [
    { name: "minúsculas", size: 26, present: /[a-z]/.test(password) },
    { name: "mayúsculas", size: 26, present: /[A-Z]/.test(password) },
    { name: "números", size: 10, present: /[0-9]/.test(password) },
    { name: "símbolos", size: 32, present: /[^a-zA-Z0-9]/.test(password) },
  ];

  const detectedGroups = groups.filter((group) => group.present);
  const pool = detectedGroups.reduce((total, group) => total + group.size, 0);
  const bits = password.length * Math.log2(pool);

  return {
    status: "calculated",
    length: password.length,
    pool,
    bits,
    categories: detectedGroups.map((group) => group.name),
  };
}
