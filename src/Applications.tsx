import React, { useState, useEffect } from "react";
import SingleApplication from "./SingleApplication";
import styles from "./Applications.module.css";
import { getDetails } from "./api/details";
import { ApplicationDetails } from "./types/details";

const Applications = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [details, setDetails] = useState<ApplicationDetails[]>([]);

  const fetchDetails = async () => {
    try {
      const data = await getDetails(currentPage);
      setDetails((prevDetails) => [...prevDetails, ...data]);
    } catch (error) {
      console.error("Error fetching details:", error);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, [currentPage]);

  return (
    <div className={styles.Applications}>
      {details.length > 0 && <SingleApplication Application={details} setCurrentPage={setCurrentPage}/>}
    </div>
  );
};

export default Applications;
