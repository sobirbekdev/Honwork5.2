import { Btn } from "../Button";
import { Input } from "../Input";
import { CardImg } from 'reactstrap';

export function Form({ userData, setData }) {

    const handleSubmit = (evt) => {
        evt.preventDefault()
        let { userName, userAddress,userAge } = evt.target.elements;


        let newObj = {
            id: userData.length + 1,
            name: userName.value,
            address: userAddress.value,
            age:userAge.value,
        }

        setData([newObj, ...userData]);
        userName.value = null;
        userAddress.value = null;
        userAge.value = null;
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <Input placeholder={"User NAme ...."} required={true} name={"userName"} />
            <Input placeholder={"Address...."} name={"userAddress"} required={true} />
            <Input placeholder={"Age...."} name={"userAge"} type="number"  required={true}/>
            <Btn type={"submit"}>{<CardImg width={45} height={43} src="https://cdn-icons-png.flaticon.com/128/157/157924.png" alt="Card image cap" />}</Btn>
        </form>
    )

}