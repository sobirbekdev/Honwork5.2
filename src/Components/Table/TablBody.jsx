import { Btn } from "../Button";
import { CardImg } from 'reactstrap';
import "../Table/stile.css";
import {  InputChec } from "../Input";

export function TablBody({ userData, removeUser }) {
    return (
        <tbody>
            {
                userData.map((user, index) =>
                    <tr key={index}>
                        <td className="table__head__Chec">
                            <InputChec className="table__chec" name={"userChec"} type="checkbox"/>
                        </td>
                        <th className="table__head__id" scope="row">{user.id}</th>
                        <td className="table__head__id">{user.name}</td>
                        <td className="table__head__id">{user.address}</td>
                        <td className="table__head__id">{user.age}</td>
                        <td className="del">
                            <Btn index={index} removeUser={removeUser}>{<CardImg width={20} height={35}
                                src="https://img.icons8.com/plasticine/1x/filled-trash.png" alt="Card image cap" />} 
                            </Btn>
                        </td>
                    </tr>
                )
            }
        </tbody>
    )
}

