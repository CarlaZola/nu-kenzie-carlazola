import * as yup from "yup"

export const registerSchema = yup.object().shape({
    description: yup
    .string()
    .required("A descrição é obrigatória")
    .min(3, "A descrição deve conter no mínimo 3 caracteres")
    .max(30, "A descrição deve conter no máximo 30 caracteres"),
    value: yup
    .number()
    .positive("Inserir apenas valores maior que zero")
    .required("Você deve inserir um valor mínimo para registro"),
    type: yup
    .string()
    .required("Selecione o tipo")     
})