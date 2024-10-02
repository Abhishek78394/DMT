import React from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, useMediaQuery } from '@mui/material';

const transactions = [
  { id: 1, date: '2024-09-01', description: 'Payment to ABC Store', amount: '-$150.00' },
  { id: 2, date: '2024-09-03', description: 'Salary', amount: '$2000.00' },
  { id: 3, date: '2024-09-10', description: 'Electricity Bill', amount: '-$120.00' },
];

export default function TransactionsSection() {
  const isMobile = useMediaQuery('(max-width:600px)'); // Adjust for mobile screens

  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>Recent Transactions</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Description</TableCell>
              <TableCell align="right">Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>{transaction.description}</TableCell>
                <TableCell align="right">{transaction.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
