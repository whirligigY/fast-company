import React from "react";
import PropTypes from "prop-types";
//import { rest } from "lodash";
//import User from "./user";
//import TableHeader from "./tableHeader";
//import TableBody from "./tableBody";
import BookMark from "./bookmark";
import QualitiesList from "./qualitiesList";
import Table from "./table";
import { Link } from "react-router-dom";

const UsersTable = ({
  users,
  onSort,
  selectedSort,
  onToggleBookMark,
  onDelete,
  ...rest
}) => {
  const columns = {
    name: {
      path: "name",
      name: "Имя",
      component: (user) => <Link to={`/users/${user._id}?`}>{user.name}</Link>,
    },
    qualities: {
      name: "Качества",
      component: (user) => <QualitiesList qualities={user.qualities} />,
    },
    profession: { path: "profession.name", name: "Профессия" },
    completedMeetings: { path: "completedMeetings", name: "Встретился" },
    rate: { path: "rate", name: "Оценка" },
    bookmark: {
      path: "bookmark",
      name: "Избранное",
      component: (user) => (
        <BookMark
          status={user.bookmark}
          onClick={() => onToggleBookMark(user._id)}
        />
      ),
    },
    delete: {
      component: (user) => (
        <button onClick={() => onDelete(user._id)} className="btn btn-danger">
          delete
        </button>
      ),
    },
  };
  return (
    //     <Table>
    //     <TableHeader {...{ onSort, selectedSort, columns }} />
    //     <TableBody {...{ columns, data: users }} />
    //   </Table>
    <Table
      onSort={onSort}
      selectedSort={selectedSort}
      columns={columns}
      data={users}
    />
  );
};

UsersTable.propTypes = {
  users: PropTypes.array.isRequired,
  onSort: PropTypes.func.isRequired,
  selectedSort: PropTypes.object.isRequired,
  onToggleBookMark: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default UsersTable;
