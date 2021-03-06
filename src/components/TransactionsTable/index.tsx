import { useEffect } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';

export const TransactionsTable: React.FC = () => {
  useEffect(() => {
    api.get('http://localhost:3000/api/transactions')
      .then(response => console.log(response.data))
  }, [])

  return <Container>
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
          <td>Desenvolvimento de website</td>
          <td className="deposit">R$ 12000,00</td>
          <td>Desenvolvimento</td>
          <td>21/03/2021</td>
        </tr>
        <tr>
          <td>Aluguel</td>
          <td className="withdraw">- R$ 1500,00</td>
          <td>Casa</td>
          <td>22/03/2021</td>
        </tr>
      </tbody>
    </table>
  </Container>;
}
