import { useForm } from "react-hook-form"
import  uuid from "react-uuid"
import { registerSchema } from "./formSchema.js"
import { yupResolver } from "@hookform/resolvers/yup"

function Form({newTransaction}){

    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(registerSchema)
    })

    function submit(data){
        data.id = uuid()
        newTransaction(data)
    }

    return(
        <section>
            <form onSubmit={handleSubmit(submit)} noValidate>
                <input type="text" {...register("description")}/>
                {errors.description?.message && <p>{errors.description.message}</p>}

                <input type="number" {...register("value")}/>
                {errors.value?.message && <p>É obrigatório inserir números maiores que zero</p>}

                <select id=""  {...register("type")}>
                    <option value="">Selecione</option>
                    <option value="saida">Saída</option>
                    <option value="entrada">Entrada</option>
                </select>
                {errors.type?.message && <p>{errors.type.message}</p>}

                <button type="submit">Inserir valor</button>
            </form>
        </section>
    )
}

export default Form