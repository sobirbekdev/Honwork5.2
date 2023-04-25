export function TableHead() {
    return (
        <thead>
            <tr className="table__head">
                <th className="table__head__Chec">isComplate</th>
                <th className="table__head__id">ID </th>
                <th className="table__head__id">Name</th>
                <th className="table__head__id">Address</th>
                <th className="table__head__id">Age</th>
                <th className="table__head__id remov">Remove</th>
            </tr>
        </thead>
    )
}