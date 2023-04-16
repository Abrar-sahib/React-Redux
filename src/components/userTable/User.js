import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../store/userSlice";
// import { STATUSES } from '../../store/userSlice';
import { useTable, usePagination } from "react-table";
import { COLUMNS } from "./columns";
import "./user.css";

const User = () => {
  const columns = useMemo(() => COLUMNS, []);

  const dispatch = useDispatch();
  const data = useSelector((state) => state.user.data.users);
  
  console.log(data);
  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    state,
    gotoPage,
    prepareRow,
  } = useTable(
    {
      columns : columns,
      data : data,
      initialState: { pageIndex: 2 },
    },
    usePagination
  );
  const { pageIndex } = state;

  // if (status === STATUSES.LOADING) {
  //   return <h2>Loading....</h2>;
  // }
  // if (status === STATUSES.ERROR) {
  //   return <h2>Something Went Wrong!</h2>;
  // }


  return (
    <div className="main">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="footer">
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>{" "}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>{" "}
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span>
          | Go to page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const pageNumber = e.target.value
                ? Number(e.target.value) - 1
                : 0;
              gotoPage(pageNumber);
            }}
            style={{ width: "50px" }}
          />
        </span>{" "}
      </div>
    </div>
  );
};

export default User;
