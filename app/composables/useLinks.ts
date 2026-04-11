import type { ButtonProps } from "@nuxt/ui";

export const UseLinks = () => {
  const links = ref<ButtonProps[]>([
    {
      label: "Commencez Maintenant",
      color: "neutral",
      size: "xl",
      to: whatsappLink(),
      target: "_blank",
    },
    {
      label: "Prennez un RDV",
      color: "neutral",
      variant: "outline",
      size: "xl",
      leadingIcon: "i-lucide-calendar",
      to: whatsappLink(),
      target: "_blank",
    },
  ]);
  return { links };
};
