import { useForm } from "react-hook-form"
import  uuid from "react-uuid"
import { registerSchema } from "./formSchema.js"
import { yupResolver } from "@hookform/resolvers/yup"
import SectionForm from "./styleForm"

function Form({newTransaction}){

    const { register, handleSubmit, formState: { errors }, reset} = useForm({
        mode: "onBlur",
        resolver: yupResolver(registerSchema)
    })

    function submit(data){
        data.id = uuid()
        newTransaction(data)
        reset()
    }

    return(
        <SectionForm>
            <form onSubmit={handleSubmit(submit)} noValidate>

                <div className="content_inputDescription">
                    <label htmlFor="description">Descrição</label>
                    <input 
                    type="text" 
                    {...register("description")}
                    id="description"
                    />
                    {errors.description?.message && <p>{errors.description.message}</p>}
                </div>
                
                <div className="boxContent_Values">
                    <div className="input_value">
                        <label htmlFor="value">Valor</label>
                        <input 
                        type="number"
                        {...register("value")}
                        id="value"
                        />
                        {errors.value?.message && <p>Inserir números maiores que zero</p>}
                    </div>
                    <div className="input_typeValue">                       
                        <label htmlFor="typeValue">Tipo de valor</label>
                        <select id="typeValue"  {...register("type")}>
                            <option value="">Selecione</option>
                            <option value="saida">Saída</option>
                            <option value="entrada">Entrada</option>
                        </select>
                        {errors.type?.message && <p>{errors.type.message}</p>}
                    </div>                   
                </div>

                <button type="submit">Inserir valor</button>
            </form>
        </SectionForm>
    )
}

export default Form