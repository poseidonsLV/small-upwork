let autoID = 0;
export function postJob(
  jobDesc,
  jobTitle,
  jobWorkflow,
  jobFixedPrice,
  jobHours,
  jobHourlyPrice,
  jobDuration,
  jobReqExperience,
  jobProjectType,
  tags
) {
  return {
    type: "JOB_POST",
    payload: {
      id: autoID++,
      jobDesc: jobDesc,
      jobTitle: jobTitle,
      jobWorkflow: jobWorkflow,
      jobFixedPrice: jobFixedPrice,
      jobHours: jobHours,
      jobHourlyPrice: jobHourlyPrice,
      jobDuration: jobDuration,
      jobReqExperience: jobReqExperience,
      jobProjectType: jobProjectType,
      tags: tags,
    },
  };
}

export function deleteJob(id) {
  return {
    type: "JOB_DELETE",
    payload: {
      id: id,
    },
  };
}
