import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import "../styles/MoreAboutJob.css";
import { useSelector } from "react-redux";
function MoreAboutJob() {
  const { jobId } = useParams();
  const jobs = useSelector((state) => state.jobs);
  const [jobData, setJobData] = useState([]);
  const history = useHistory();

  function navigateToHome() {
    history.push("/");
  }

  useEffect(() => {
    getJobData();
  }, []);

  function getJobData() {
    jobs.map((job) => {
      if (job.id === parseInt(jobId)) {
        console.log(job);
        return setJobData(job);
      }
    });
  }
  const {
    id,
    jobDesc,
    jobTitle,
    jobWorkflow,
    jobFixedPrice,
    jobHours,
    jobHourlyPrice,
    jobDuration,
    jobReqExperience,
    jobProjectType,
    tags,
  } = jobData;
  return (
    <div className="moreAboutJob">
      <div className="moreAboutJob-section">
        <h2>{jobTitle}</h2>
        <button id="goBackButton" onClick={navigateToHome}>
          GO BACK
        </button>
      </div>
      <div className="moreAboutJob-section">
        <div className="moreAboutJob-description">
          <p>{jobDesc}</p>
        </div>
      </div>
      <div className="moreAboutJob-section">
        <div className="moreAboutJob-features">
          {jobWorkflow === "hourlyFlow" && (
            <div className="features-container hours">
              <i className="far fa-clock"></i>
              <div className="header">
                <p>{jobHours}</p>
                <span>{"Hourly"}</span>
              </div>
            </div>
          )}
          <div className="features-container duration">
            <i className="far fa-clock"></i>
            <div className="header">
              <p>{jobDuration}</p>
              <span>{`Duration`}</span>
            </div>
          </div>
          <div className="features-container experience">
            <i class="far fa-clock"></i>
            <div className="header">
              <p>{jobReqExperience}</p>
              <span className="header-span-laterHidden">
                I am willing to pay higher rates for the most experienced
                freelancers
              </span>
              <span className="header-span-laterUnhidden">
                Experience level
              </span>
            </div>
          </div>
          <div className="features-container hourlyPrice">
            <i className="far fa-clock"></i>
            <div className="header">
              <p>
                {jobWorkflow === "fixedFlow" ? jobFixedPrice : jobHourlyPrice} $
              </p>
              <span>
                {jobWorkflow === "fixedFlow" ? `Fixed Price` : `Hourly Price`}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="moreAboutJob-section">
        <div className="features-container projectType">
          <p>
            <strong>Project Type:</strong>
            {jobProjectType}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MoreAboutJob;
