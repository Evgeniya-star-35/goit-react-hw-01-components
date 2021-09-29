import PropTypes from "prop-types";
import styles from "./Transaction.module.css";

export default function TransactionHistory({ transactions }) {
  return (
    <div className={styles.transTable}>
      <table>
        <thead className={styles.table}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td className={styles.tableData}>{transaction.type}</td>
              <td className={styles.tableData}>{transaction.amount}</td>
              <td className={styles.tableData}>{transaction.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
TransactionHistory.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};

TransactionHistory.defaultProps = {
  type: "Type",
  currency: "Currency",
};
