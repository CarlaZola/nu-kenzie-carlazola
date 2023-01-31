import { useForm } from "react-hook-form"
import  uuid from "react-uuid"
import { registerSchema } from "./formSchema.js"
import { yupResolver } from "@hookform/resolvers/yup"
import SectionForm from "./styleForm"
import Input from "./Inputs/index.jsx"
import Select from "./Select/index.jsx"

function Form({newTransaction,  typeOfEntries}){

    const { register, handleSubmit, formState: { errors }, reset} = useForm({
        mode: "onBlur",
        resolver: yupResolver(registerSchema)
    })

    function submit(data){
        console.log(data)
        data.id = uuid()
        newTransaction(data)
        reset()
    }

    return(
        <SectionForm>
            <form onSubmit={handleSubmit(submit)} noValidate>

                <div className="content_inputDescription">
                    <Input type="text" placeholder="Digite sua descrição aqui..." label="Descrição" id="description" register={register("description")}/>
                    {errors.description?.message && <p>{errors.description.message}</p>}
                </div>
                
                <div className="boxContent_Values">
                    <div className="input_value">
                        <Input type="number" placeholder="Insira o valor aqui..." label="Valor" id="value" register={register("value")}/>
                        {errors.value?.message && <p>Inserir números maiores que zero</p>}
                    </div>
                    <div className="input_typeValue">                       
                        <Select id="typeValue" label="Tipo de valor" register={register("type")} typeOfEntries={typeOfEntries}>
                           
                        </Select>
                        {errors.type?.message && <p>{errors.type.message}</p>}
                    </div>                   
                </div>

                <button type="submit">Inserir valor</button>
            </form>
        </SectionForm>
    )
}

export default Form