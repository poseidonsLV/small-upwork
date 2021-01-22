import React, { useEffect, useState } from "react";
import "../styles/JobPost.css";
import jobTags from "../datas/JobTags";
import _ from "lodash";
import { postJob } from "../Redux/actions";
import { useDispatch, useSelector } from "react-redux";

function JobPost() {
  const jobs = useSelector((state) => state.jobs);
  const dispatch = useDispatch();
  const [tags, setTags] = useState([]);
  const [jobDesc, setJobDesc] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [jobWorkflow, setJobWorkflow] = useState("");
  const [jobFixedPrice, setJobFixedPrice] = useState("");
  const [jobHours, setJobHours] = useState("");
  const [jobHourlyPrice, setJobHourlyPrice] = useState("");
  const [jobDuration, setJobDuration] = useState("");
  const [jobReqExperience, setJobReqExperience] = useState("");
  const [jobProjectType, setJobProjectType] = useState("");

  function chooseTags(id, value) {
    if (_.find(tags, { id: id, tag: value })) {
      let filteredTags = tags.filter((tag) => tag.id !== id);
      return setTags(filteredTags);
    }
    let newTag = [...tags, { id: id, tag: value }];
    setTags(newTag);
  }

  function activateTag(id, value) {
    if (_.find(tags, { id: id, tag: value })) {
      return "active";
    } else {
      return "nothing";
    }
  }

  function submitJob() {
    dispatch(
      postJob(
        jobDesc || "Not Defined",
        jobTitle || "Not Defined",
        jobWorkflow || "Not Defined",
        jobFixedPrice || "Not Defined",
        jobHours || "Not Defined",
        jobHourlyPrice || "Not Defined",
        jobDuration || "Not Defined",
        jobReqExperience || "Not Defined",
        jobProjectType || "Not Defined",
        tags || "Not Defined"
      )
    );
  }

  return (
    <div className="jobPost">
      <div className="jobPost-header">
        <h2>Create job post</h2>
      </div>
      <div div className="jobPost-container">
        <div className="jobPost-title">
          <p>Enter title of job</p>
          <input
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            type="text"
            placeholder="Job Title"
          />
        </div>
        <div className="jobPost-description">
          <p>Enter description of job</p>
          <textarea
            onChange={(e) => setJobDesc(e.target.value)}
            required
            maxLength={1000}
          ></textarea>
        </div>
        <div className="jobPost-projectType">
          <p>Choose project type</p>
          <select onChange={(e) => setJobProjectType(e.target.value)}>
            <option value={false}>Choose project type</option>
            <option value="One-time project">One-time project</option>
            <option value="Ongoing project">Ongoing project</option>
          </select>
        </div>
        <div className="jobPost-workflow">
          <p>Choose client job workflow</p>
          <select onChange={(e) => setJobWorkflow(e.target.value)}>
            <option value={false}>Choose job workflow</option>
            <option value="fixedFlow">Fixed Price</option>
            <option value="hourlyFlow">Hourly Price</option>
          </select>
        </div>
        {jobWorkflow === "hourlyFlow" && (
          <div className="jobPost-hoursWeek">
            <p>Choose client weekly hours</p>
            <select onChange={(e) => setJobHours(e.target.value)}>
              <option value={false}>Choose job hours per week</option>
              <option value="30+ hrs/week">30+ hrs/week</option>
              <option value="10-30 hrs/week">10-30 hrs/week</option>
              <option value="Less than 10 hrs/week">
                Less than 10 hrs/week
              </option>
              <option value="Hours to be determined">
                Hours to be determined
              </option>
            </select>
          </div>
        )}
        {jobWorkflow === "fixedFlow" && (
          <div className="jobPost-fixedPrice">
            <p>Choose client fixed price</p>
            <input
              value={jobFixedPrice}
              onChange={(e) => setJobFixedPrice(e.target.value)}
              type="number"
              placeholder="Enter Fixed Price"
            />
          </div>
        )}
        {jobWorkflow === "hourlyFlow" && (
          <div className="jobPost-hourlyPrice">
            <p>Choose client hourly price</p>
            <input
              value={jobHourlyPrice}
              onChange={(e) => setJobHourlyPrice(e.target.value)}
              type="number"
              placeholder="Enter Hourly Price"
            />
          </div>
        )}
        <div className="jobPost-duration">
          <p>Choose client job duration</p>
          <select
            onChange={(e) => {
              setJobDuration(e.target.value);
            }}
          >
            <option value={false}>Choose duration</option>
            <option value={"Less than 1 month"}>Less than 1 month</option>
            <option value={"1 to 3 months"}>1 to 3 months</option>
            <option value={"More than 6 months"}>More than 6 months</option>
          </select>
        </div>
        <div className="jobPost-expLevel">
          <p>Choose client experience level</p>
          <select onChange={(e) => setJobReqExperience(e.target.value)}>
            <option value={false}>Choose level</option>
            <option value="Entry Level">Entry level</option>
            <option value="Intermediate level">Intermediate level</option>
            <option value="Expert level">Expert level</option>
          </select>
        </div>
        <div className="jobPost-tags">
          {jobTags &&
            jobTags.map((tag) => {
              return (
                <p
                  onClick={() => chooseTags(tag.id, tag.tag)}
                  key={tag.id}
                  className="jobPost-tags-item"
                  id={`${activateTag(tag.id, tag.tag)}`}
                >
                  {tag.tag}
                </p>
              );
            })}
        </div>
        <div className="jobPost-postJob">
          <button onClick={submitJob}>Submit job post</button>
        </div>
      </div>
    </div>
  );
}

export default JobPost;
