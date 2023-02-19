import { useProjectsContext } from "../hooks/useProjectsContext";
import { currencyFormatter } from "../utilities/currencyFormatter";
import moment from "moment";

const ProjectDetails = ({ project }) => {
  const { dispatch } = useProjectsContext();

  const handleDelete = async () => {
    const res = await fetch(
      `http://localhost:5000/api/projects/${project._id}`,
      {
        method: "DELETE",
      }
    );

    const json = await res.json();

    if (res.ok) {
      dispatch({ type: "DELETE_PROJECT", payload: json });
    }
  };

  return (
    <div className="project bg-slate-800 p-5 rounded-xl border border-slate-700 flex flex-col gap-5 w-[30rem]">
      <div className="project-top">
        <span className="text-sky-400">{project._id}</span>
        <h3 className="text-3xl font-medium truncate">{project.title}</h3>
        <span className="uppercase text-xs tracking-widest text-slate-500 font-medium">
          {project.tech}
        </span>
      </div>

      <div className="project-mid text-slate-300 flex gap-10">
        <div className="left flex flex-col">
          <span>Budget : {currencyFormatter(project.budget)}</span>
          <span>
            Added :{" "}
            {moment(project.createdAt)
              .format("MMM DD, hh:mm A")
              .toLocaleDateString()}
          </span>
          <span>
            Updated :{" "}
            {moment(project.updatedAt)
              .format("MMM DD, hh:mm A")
              .toLocaleDateString()}
          </span>
        </div>
        <div className="right flex flex-col">
          <span>Manager : {project.manager}</span>
          <span>Developer : {project.dev}</span>
          <span>
            Duration :{" "}
            {`${project.duration} week${project.duration === 1 ? "" : "s"}`}
          </span>
        </div>
      </div>
      <div className="project-bottom flex gap-5">
        <button className="bg-sky-400 text-slate-900 py-2 px-5 rounded shadow-xl hover:bg-sky-50 duration-300">
          Update
        </button>
        <button
          onClick={handleDelete}
          className="text-rose-500 hover:underline"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProjectDetails;
