/**
 * Formulário
 *
 * - Primeiramente vá até /src/pages/api/users/create.ts e implemente a API
 * - Deve ser implementado utilizando a lib react-hook-form
 * - O formulário deve ter os seguintes campos: nome, e-mail
 * - Os dois campos são obrigatórios e precisam de validação
 * - Ao dar 'submit', deve ser feito uma request para /api/users/create
 * - Lide com os possíveis erros
 */

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "@/styles/formulario.module.css";

const createUserFormSchema = z.object({
  name: z.string().min(2, "Nome é obrigatório"),
  email: z.string().email("E-mail inválido").min(5, "E-mail é obrigatório"),
});

type CreateUserFormSchema = z.infer<typeof createUserFormSchema>;

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = useForm<CreateUserFormSchema>({
    resolver: zodResolver(createUserFormSchema),
  });

  async function handleSubmitCreateUser(data: CreateUserFormSchema) {
    try {
      const response = await fetch("/api/users/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Erro ao criar usuário");
      }

      alert("Usuário criado com sucesso");

      reset();
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("Ocorreu um erro desconhecido");
      }
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <form onSubmit={handleSubmit(handleSubmitCreateUser)}>
          <input
            {...register("name")}
            type="text"
            placeholder="Name"
            className={errors.name ? styles.errorBorder : ""}
          />

          {errors.name && (
            <span className={styles.error}>{errors.name.message}</span>
          )}

          <input
            {...register("email")}
            type="email"
            placeholder="E-mail"
            className={errors.email ? styles.errorBorder : ""}
          />

          {errors.email && (
            <span className={styles.error}>{errors.email.message}</span>
          )}

          <button type="submit" disabled={isSubmitting} data-type="confirm">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
