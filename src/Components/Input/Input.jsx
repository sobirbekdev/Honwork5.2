import "./stile.css"

export function Input(
    {
        type = "text",
        placeholder,
        name,
        value,
        required = false
    }) {
    return (
            <input className="inmut"
                type={type}
                placeholder={placeholder}
                name={name}
                value={value}
                required={required} />
    )
}

export function InputChec(
    {type = "text",name}) {
    return (<input className="inmutChec" type={type} name={name}/>)
}