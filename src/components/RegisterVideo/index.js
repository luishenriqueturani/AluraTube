import React from "react";
import { StyledRegisterVideo } from "./styles";

function useForm(props){
    const [ values, setValues ] = React.useState(props.initialValues)

    return {
        values,
        handleChange: (event) => {
            const t = event.target.name
            const value = event.target.value;
            setValues({
                ...values,
                [t]: value
            })
        },
        clearForm: () => {
            setValues({})
        }
    }
}

export default function RegisterVideo(){
    const formCad = useForm({
        initialValues: {
            title: "", 
            url: ""
        }
    })
    const [visible, setVisibility] = React.useState(false)


    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setVisibility(true)}>
                +
            </button>
            {visible && (
                <form onSubmit={(e) => {
                    e.preventDefault()
                    setVisibility(false)
                    formCad.clearForm()
                }}>
                    <div>
                        <button type="button" className="close-modal" onClick={() => setVisibility(false)}>X</button>
                        <input placeholder="Título do vídeo" name="title" value={formCad.values.title} onChange={formCad.handleChange} />
                        <input placeholder="URL" name="url" value={formCad.values.url} onChange={formCad.handleChange} />
                        <button type="submit">
                            Cadastrar
                        </button>
                    </div>
                </form>
            )}
        </StyledRegisterVideo>
    )
}