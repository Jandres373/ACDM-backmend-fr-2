import z from "zod";

export const formSchema = z.object({
  first_name: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }).max(50, {
    message: "El nombre debe tener menos de 50 caracteres.",
  }),
  last_name: z.string().min(2, {
    message: "El apellido debe tener al menos 2 caracteres.",
  }).max(50, {
    message: "El apellido debe tener menos de 50 caracteres.",
  }),
  email: z.string().email({
    message: "El correo electrónico debe ser válido.",
  }),
  password: z.string().min(6, {
    message: "La contraseña debe tener al menos 6 caracteres.",
  }).max(50, {
    message: "La contraseña debe tener menos de 50 caracteres.",
  }),
  birthday: z.string(),
  image_url: z.string(),
});