

function ContactCard (props) {
    return <>
        <div className="contCard">
        <p className="contName">{props.name}</p>
        <p className="contEmail">{props.email}</p>
        <p className="contPhone">{props.phone}</p>
        </div>
    </>
}

export default ContactCard



