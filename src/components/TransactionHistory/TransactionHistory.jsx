import React from 'react';
import styles from './transactionHistory.module.css';
import PropTypes from 'prop-types';

const TransactionHistory = ({items}) => {
    return (
        <div>
            <table className={styles.transactionHistory}>
            <thead>
                <tr>
                <th className={styles.tableHead}>Type</th>
                <th className={styles.tableHead}>Amount</th>
                <th className={styles.tableHead}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(({id, type, amount, currency}) =>(
                    <tr className={styles.line} key={id}>
                        <td className={styles.tableContent}>{type}</td>
                        <td className={styles.tableContent}>{amount}</td>
                        <td className={styles.tableContent}>{currency}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
    );
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        type: PropTypes.string,
        amount: PropTypes.string,
        currency: PropTypes.string,
      })
    ),
  };

export default TransactionHistory;