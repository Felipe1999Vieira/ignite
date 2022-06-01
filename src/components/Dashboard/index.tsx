import { Container } from "./styles";
import { Summary } from "../Summary";
import { TransanctionsTable } from "../TransactionsTable"
export function Dashboard (){
    return(
        <Container>
            <Summary />
            <TransanctionsTable />
        </Container>
    )
}