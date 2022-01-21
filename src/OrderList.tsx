import React from "react";

import { orderRepo } from "./data";

type Props = {
  orderList: orderRepo[];
};

export const OrderList = ({ orderList }: Props): JSX.Element => {
  return (
    <div className="block">
      <table>
        <thead>
          <tr>
            <th>Delivery Date</th>
            <th>Customer Name</th>
            <th>Product Name</th>
            <th>Quantity</th>
            
          </tr>
        </thead>
        <tbody>
          {orderList.map((repo) => (
            <RepoRow repo={repo} key={repo.delivDate+repo.custName+repo.prodName} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const RepoRow = React.memo(
  ({ repo }: { repo: orderRepo }): JSX.Element => {
    return (
      <tr>
        <td>{repo.delivDate}</td>
        <td>{repo.custName}</td>
        <td>{repo.prodName}</td>
        <td>{repo.qty}</td>
      </tr>
    );
  }
);