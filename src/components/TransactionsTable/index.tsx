import { useEffect } from "react";
import { api } from "../services/api";
import { Container } from "./styles";

export function TransanctionsTable(){
    useEffect(() => {
        api.get('/transactions')
            .then(response => console.log(response.data))
    }, []);

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de app</td>
                        <td className="deposit">R$1.000</td>
                        <td>Entrada</td>
                        <td>25/05/2022</td>
                    </tr>
                    <tr>
                        <td>Apostas</td>
                        <td className="withDraw">- R$800</td>
                        <td>Saidas</td>
                        <td>23/05/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}