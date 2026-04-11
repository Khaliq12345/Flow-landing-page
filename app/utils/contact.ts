export const whatsappLink = (message?: string) => {
  const whatsappNumber = "2290162369889";
  const base = `https://wa.me/${whatsappNumber}`;
  if (message) {
    return `${base}?text=${encodeURIComponent(message)}`;
  }
  return base;
};
