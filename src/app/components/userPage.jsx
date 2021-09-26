import React, { useState, useEffect } from "react";
import api from "../api";
import { Link } from "react-router-dom";
import QualitiesList from "./qualitiesList";

const UserPage = ({ id }) => {
  const [userSearch, setUserSearch] = useState();
  useEffect(() => {
    api.users.getById(id).then((data) => setUserSearch(data));
  }, []);
  console.log(
    userSearch
      ? Object.keys(userSearch)
          .map((el) =>
            el === "qualities" ? userSearch[el].map((item) => item.name) : null
          )
          .find((item) => item && item)
      : "non"
  );
  if (userSearch) {
    return (
      <div className="m-3">
        <h1>{userSearch["name"]}</h1>
        <h2>{`Profession: ${Object.keys(userSearch)
          .map((el) => (el === "profession" ? userSearch[el].name : null))
          .find((item) => item && item)}`}</h2>
        <p>
          {Object.keys(userSearch)
            .map((el) =>
              el === "qualities" ? (
                <QualitiesList qualities={userSearch[el]} />
              ) : null
            )
            .find((item) => item && item)}
        </p>
        <p>{`CompletedMeetings: ${userSearch["completedMeetings"]}`}</p>
        <h2>{`Rate ${userSearch["rate"]}`}</h2>

        <Link
          to="/users"
          className="btn btn-primary"
          role="button"
          data-bs-toggle="button"
        >
          All users
        </Link>
      </div>
    );
  }
  return "loading...";
};

export default UserPage;
