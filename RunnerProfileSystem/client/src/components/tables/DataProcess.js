import React from "react";
import FetchData from "../../FetchData";
import MergeObjects from "../../MergeObjects";
import Categorization from "../../Categorization";
import Display from "./Display";
import Spinner from "react-bootstrap/Spinner";

const DataProcess = () => {
  const [pace, isLoadingPace] = FetchData("/pace");
  const [users, isLoadingUsers] = FetchData("/users");
  const mergedObjects = MergeObjects(users, pace);
  const [youngs, middleAges, olds] = Categorization(mergedObjects);

  if (isLoadingPace || isLoadingUsers)
    return (
      <div className="spinner">
        <div>
          <Spinner animation="border" />
          <p>Loading...</p>
        </div>
      </div>
    );
  return (
    <div>
      <div id="Tables">
        <div>
          <h3>Youngs</h3>
          <Display group={youngs} />
        </div>
        <div>
          <h3>Middle Ages</h3>
          <Display group={middleAges} />
        </div>
        <div>
          <h3>Olds</h3>
          <Display group={olds} />
        </div>
      </div>
    </div>
  );
};

export default DataProcess;
