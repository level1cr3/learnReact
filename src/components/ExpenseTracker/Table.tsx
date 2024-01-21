import { useState } from "react";

type ProductInfo = {
  description: string;
  amount: number;
  category: string;
};

type Props = {
  filter: string[];
  data: ProductInfo[];
  onDelete: (index: number) => void;
};

const Table = ({ data, filter, onDelete }: Props) => {
  const [selectedFilter, setSelectedFilter] = useState("");

  return (
    <>
      {data.length > 0 && (
        <>
          <div className="mb-3">
            <label htmlFor="categoryFilter" className="form-label">
              Filter by category
            </label>
            <select
              id="categoryFilter"
              className="form-select"
              onChange={(e) => setSelectedFilter(e.target.value)}
            >
              <option value="">All</option>
              {filter.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Description</th>
                <th scope="col">Amount</th>
                <th scope="col">Category</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {data.map((item, index) => {
                if (selectedFilter === "") {
                  return (
                    <tr key={index}>
                      <td>{item.description}</td>
                      <td>{item.amount}</td>
                      <td>{item.category}</td>
                      <td>
                        <button
                          onClick={() => onDelete(index)}
                          className="btn btn-outline-danger"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                }

                return (
                  <tr key={index}>
                    {selectedFilter === item.category && (
                      <>
                        <td>{item.description}</td>
                        <td>{item.amount}</td>
                        <td>{item.category}</td>
                        <td>
                          <button
                            onClick={() => onDelete(index)}
                            className="btn btn-outline-danger"
                          >
                            Delete
                          </button>
                        </td>
                      </>
                    )}
                  </tr>
                );
              })}
            </tbody>
            <tfoot className="table-group-divider">
              <tr>
                <td scope="row">Total</td>
                <td colSpan={3}>
                  {selectedFilter === ""
                    ? data.reduce((prev, current) => prev + current.amount, 0)
                    : data.reduce((prev, current) => {
                        return selectedFilter === current.category
                          ? prev + current.amount
                          : prev;
                      }, 0)}
                </td>
              </tr>
            </tfoot>
          </table>
        </>
      )}
    </>
  );
};

export default Table;
