import moment from "moment";
import React, { useEffect, useState } from "react";
import "./styles.css";
import filter from "../../assets/icons/filter.svg";
import app from "../../assets/icons/sharechat.svg";

const Table = (props) => {
  const { columns, data } = props;
  const [filterColumn, setFilterColumn] = useState({});
  const [tableData, setTableData] = useState([]);

  const onSearch = (e, col, ind) => {
    const filterData = data.filter((obj) =>
      obj[col["key"]].toString().includes(e.target.value)
    );
    setTableData(filterData);
  };

  const onSort = (e, col) => {
    const sortedData = [...data].sort((a, b) => a[col["key"]] - b[col["key"]]);
    setTableData(sortedData);
  };

  useEffect(() => {
    setTableData(data);
  }, [data]);

  return (
    <React.Fragment>
      <div className="table-page">
        <table>
          <thead>
            <tr>
              {columns.map((col, i) => {
                return (
                  col.isActive && (
                    <th key={i}>
                      <div style={{ display: "flex", width: "min-content", alignItems:"center", justifyContent:"center" }}>
                        <img
                          src={filter}
                          width={20}
                          height={25}
                          id={`filter-${i}`}
                          onClick={(e) => setFilterColumn(col)}
                          alt={"Filter"}
                          style={{
                            alignSelf:"center"
                          }}
                        />
                        {filterColumn.key === col.key && (
                          <input
                            id={`input-${i}`}
                            onChange={(e) => onSearch(e, col, i)}
                            placeholder={"Search"}
                          />
                        )}
                      </div>
                      <div onClick={(e) => onSort(e, col)} style={{alignSelf:"center"}}>{col.label}</div>
                    </th>
                  )
                );
              })}
            </tr>
          </thead>
          <tbody>
            {tableData?.map((obj,idx) => {
              return (
                <tr key={idx}>
                  {columns.map((col,i) => {
                    return (
                      col.isActive && (
                        <td key={i}>
                          {col.key == "app" ? (
                            <img
                              src={app}
                              style={{ height: "14px", width:"14px" }}
                            />
                          ) : null}
                          {col.key !== "date"
                            ? obj[col.key]
                            : moment(obj[col.key]).format("DD MMM YYYY")}
                        </td>
                      )
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};
export default Table;
