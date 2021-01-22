import React, { useEffect } from "react";
import "../styles/Job.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteJob } from "../Redux/actions";

function Job({
  id,
  jobDesc,
  jobTitle,
  jobWorkflow,
  jobFixedPrice,
  jobHours,
  jobHourlyPrice,
  jobDuration,
  jobReqExperience,
  tags,
}) {
  const dispatch = useDispatch();
  function displayDollarSign(exp) {
    switch (exp) {
      case "Entry level":
        return "$";
      case "Intermediate level":
        return "$$";
      case "Expert level":
        return "$$$";
      default:
        return "[ERROR] Contact developer";
    }
  }
  function deleteJobPost() {
    dispatch(deleteJob(id));
  }
  return (
    <div className="job">
      <div className="job-container">
        <div className="job-header">
          <Link to={`jobs/details/${id}`}>
            <h4>{jobTitle}</h4>
          </Link>
          <i
            onClick={deleteJobPost}
            id="deleteJob"
            class="fas fa-minus-circle"
          ></i>
          {/* <p>Hourly - Posted 8 minutes ago</p> */}
        </div>
        <div className="job-info">
          <div className="job-info-row1">
            {jobWorkflow === "hourlyFlow" && (
              <div className="col 1">
                <b>{jobHours}</b>
                <p>Hours needed</p>
              </div>
            )}
            <div className="col 2">
              <b>{jobDuration}</b>
              <p>Duration</p>
            </div>
            {jobWorkflow === "fixedFlow" && (
              <div className="col 3">
                <b>{jobFixedPrice} $</b>
                <p>Fixed Price</p>
              </div>
            )}
            <div className="col 3">
              <b>{displayDollarSign(jobReqExperience)}</b>
              <p>{jobReqExperience}</p>
            </div>
          </div>
          <div className="job-description">
            <p>{jobDesc && jobDesc.substring(0, 350)}...</p>
          </div>
          <div className="job-tags">
            {tags &&
              tags.map((tag) => (
                <p key={tag.id} id="job-tags-item">
                  {tag.tag}
                </p>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Job;
