export function JobsReducer(state = [], action) {
  switch (action.type) {
    case "JOB_POST":
      return [
        ...state,
        {
          id: action.payload.id,
          jobDesc: action.payload.jobDesc,
          jobTitle: action.payload.jobTitle,
          jobWorkflow: action.payload.jobWorkflow,
          jobFixedPrice: action.payload.jobFixedPrice,
          jobHours: action.payload.jobHours,
          jobHourlyPrice: action.payload.jobHourlyPrice,
          jobDuration: action.payload.jobDuration,
          jobReqExperience: action.payload.jobReqExperience,
          jobProjectType: action.payload.jobProjectType,
          tags: action.payload.tags,
        },
      ];
    case "JOB_DELETE":
      return state.filter((job) => job.id !== action.payload.id);
    default:
      return state;
  }
}
