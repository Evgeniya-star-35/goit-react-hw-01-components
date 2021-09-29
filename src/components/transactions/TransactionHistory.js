import PropTypes from "prop-types";
import s from "./Transaction.module.css";

export default function TransactionHistory({ transactions }) {
  return (
    <div className={s.transTable}>
      <table>
        <thead className={s.table}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody className={s.tableBody}>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td className={s.tableData}>{transaction.type}</td>
              <td className={s.tableData}>{transaction.amount}</td>
              <td className={s.tableData}>{transaction.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

TransactionHistory.defaultProps = {
  type: "Type",
  currency: "Currency",
};
