import React, { useEffect } from "react";
import "../styles/Jobs.css";
import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";
import { postJob } from "../Redux/actions";

function Jobs() {
  const jobs = useSelector((state) => state.jobs);

  return (
    <div className="jobs">
      <div className="jobs-header">
        <h2>Browse freelance jobs</h2>
        {/* <div className="jobs-sort">
          <p>Sort:</p>
          <select>
            <option>Most Relevant</option>
            <option>Newest</option>
          </select>
        </div> */}
      </div>
      {jobs.length < 1 && (
        <div
          style={{ textAlign: "center", fontSize: "25px", marginTop: "50px" }}
        >
          <h2>NO JOBS FOUND</h2>
        </div>
      )}
      {jobs.map((job) => (
        <div key={job.id}>
          <Job
            id={job.id}
            jobDesc={job.jobDesc}
            jobTitle={job.jobTitle}
            jobWorkflow={job.jobWorkflow}
            jobFixedPrice={job.jobFixedPrice}
            jobHours={job.jobHours}
            jobHourlyPrice={job.jobHourlyPrice}
            jobDuration={job.jobDuration}
            jobReqExperience={job.jobReqExperience}
            tags={job.tags}
          />
        </div>
      ))}
    </div>
  );
}

export default Jobs;
