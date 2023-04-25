import "../Table/stile.css";
import { Table } from 'reactstrap';
import { TablBody } from "./TablBody";
import { TableHead } from "./TablHead";


export function TablFunc({ userData , removeUser}) {
  console.log(userData);
  return (
    <>
      <Table dark >
        <TableHead/>
        <TablBody userData={userData} removeUser = {removeUser} />

        
      </Table>
    </>
  )
}