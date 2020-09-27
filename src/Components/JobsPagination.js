import React from "react";
import { Pagination } from "react-bootstrap";

const JobsPagination = ({ page, setPage }) => {
  return (
    <Pagination>
      {page > 1 && (
        <Pagination.Prev
          onClick={() => {
            if (page >= 1) return setPage(page - 1);
          }}
        />
      )}
      {/* <Pagination.Item>{page - 1 <= 1 ? 1 : page - 1}</Pagination.Item> */}
      <Pagination.Item active> {page}</Pagination.Item>
      <Pagination.Item
        onClick={() => {
          setPage(page + 1);
        }}
      >
        {page + 1}
      </Pagination.Item>
      <Pagination.Next
        onClick={() => {
          setPage(page + 1);
        }}
      />
    </Pagination>
  );
};

export default JobsPagination;
