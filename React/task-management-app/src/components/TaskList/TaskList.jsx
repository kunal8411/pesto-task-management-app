// TaskList.js
import React, { useEffect, useState } from "react";
import "./TaskList.css"; // Import CSS file for styling
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
const TaskList = ({ tasks, updateTask, deleteTask }) => {
  const [isDeleteConfirm, setIsDeleteConfirm] = useState(false);
  const [deleteTaskId, setDeleteTaskId] = useState();
  const [allTasks, setTasks] = useState([]);
  const [filteredoption, setFilteredOption] = useState("");
  const [sortDirection, setSortDirection] = useState(null);
  const onDeleteTask = (taskId) => {
    setDeleteTaskId(taskId);
    setIsDeleteConfirm(true);
  };
  const onDeleteConfirm = () => {
    setIsDeleteConfirm(false);
    deleteTask(deleteTaskId);
  };
  const setFilterOption = (event) => {
    setFilteredOption(event.target.value);
    const filteredOptions = tasks.filter((item) => {
      return item.status === event.target.value;
    });
    setTasks(filteredOptions);
  };
  const handleSort = () => {
    const sortedTasks = [...allTasks];
    if (sortDirection === "asc") {
      sortedTasks.sort((a, b) => a.title.localeCompare(b.title));
      setSortDirection("desc");
    } else {
      sortedTasks.sort((a, b) => b.title.localeCompare(a.title));
      setSortDirection("asc");
    }
    setTasks(sortedTasks);
  };


  useEffect(() => {
    setTasks(tasks);
  }, [tasks]);
  return (
    <div className="task-list-container">
      <h2>Task List</h2>
      <div className="flex items-center">
        <span className="">Filter By:</span>
        <select
          value={filteredoption}
          onChange={(e) => setFilterOption(e)}
          className="select-component"
        >
          <option value=""></option>
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
      </div>
      <table className="">
        <thead>
          <tr>
          <th className="px-4 py-2" onClick={handleSort}>
                Title{" "}
                {sortDirection === "asc" ? (
                  <FiChevronUp className="inline-block" />
                ) : (
                  <FiChevronDown className="inline-block" />
                )}
              </th>
            <th>Description</th>
            <th className="">Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allTasks.map((task) => (
            <tr key={task._id} className="">
              <td className="">{task.title}</td>
              <td className="">{task.description}</td>
              <td className="">
                <select
                  value={task.status}
                  onChange={(e) =>
                    updateTask(task._id, { status: e.target.value })
                  }
                >
                  <option value="To Do">To Do</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Done">Done</option>
                </select>
              </td>
              <td>
                <button
                  onClick={() => {
                    onDeleteTask(task._id);
                  }}
                  className="task-list-container-button"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isDeleteConfirm && (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative flex items-center h-full max-w-3xl mx-auto my-6">
              {/*content*/}
              <div
                className="relative flex flex-col w-full bg-white border border-gray-100 rounded-lg shadow-lg outline-none dark:border-gray-300 focus:outline-none"
                style={{ width: "27rem" }}
              >
                {/*header*/}
                <div className="p-4 ">
                  <div className="flex justify-end ">
                    <button
                      className="p-2 hover:bg-gray-100 dark:hover:bg-gray-100"
                      onClick={() => {
                        setIsDeleteConfirm(false);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M4.29279 4.29301C4.48031 4.10553 4.73462 4.00022 4.99979 4.00022C5.26495 4.00022 5.51926 4.10553 5.70679 4.29301L9.99979 8.58601L14.2928 4.29301C14.385 4.19749 14.4954 4.12131 14.6174 4.0689C14.7394 4.01649 14.8706 3.98891 15.0034 3.98775C15.1362 3.9866 15.2678 4.0119 15.3907 4.06218C15.5136 4.11246 15.6253 4.18672 15.7192 4.28061C15.8131 4.3745 15.8873 4.48615 15.9376 4.60905C15.9879 4.73195 16.0132 4.86363 16.012 4.99641C16.0109 5.12919 15.9833 5.26041 15.9309 5.38241C15.8785 5.50441 15.8023 5.61476 15.7068 5.707L11.4138 10L15.7068 14.293C15.8889 14.4816 15.9897 14.7342 15.9875 14.9964C15.9852 15.2586 15.88 15.5094 15.6946 15.6948C15.5092 15.8802 15.2584 15.9854 14.9962 15.9877C14.734 15.99 14.4814 15.8892 14.2928 15.707L9.99979 11.414L5.70679 15.707C5.51818 15.8892 5.26558 15.99 5.00339 15.9877C4.74119 15.9854 4.49038 15.8802 4.30497 15.6948C4.11956 15.5094 4.01439 15.2586 4.01211 14.9964C4.00983 14.7342 4.11063 14.4816 4.29279 14.293L8.58579 10L4.29279 5.707C4.10532 5.51948 4 5.26517 4 5C4 4.73484 4.10532 4.48053 4.29279 4.29301Z"
                          fill="#474B51"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="flex justify-center mt-5">
                    <svg
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18 11V18M18 25H18.0175M33.75 18C33.75 20.0683 33.3426 22.1164 32.5511 24.0273C31.7596 25.9381 30.5995 27.6744 29.1369 29.1369C27.6744 30.5995 25.9381 31.7596 24.0273 32.5511C22.1164 33.3426 20.0683 33.75 18 33.75C15.9317 33.75 13.8836 33.3426 11.9727 32.5511C10.0619 31.7596 8.32559 30.5995 6.86307 29.1369C5.40055 27.6744 4.24041 25.9381 3.4489 24.0273C2.65739 22.1164 2.25 20.0683 2.25 18C2.25 13.8228 3.90937 9.81677 6.86307 6.86307C9.81677 3.90937 13.8228 2.25 18 2.25C22.1772 2.25 26.1832 3.90937 29.1369 6.86307C32.0906 9.81677 33.75 13.8228 33.75 18Z"
                        stroke="#474B51"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                {/*body*/}
                <div className="p-6 ">
                  <div className="popup_top_text">
                    <p className="font-bold text-center text-gray-800 text-m dark:text-gray-800">
                      Are you sure you want to delete this task?
                    </p>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center w-full p-4">
                  <button
                    onClick={onDeleteConfirm}
                    data-modal-hide="popup-modal"
                    type="button"
                    class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                  >
                    Yes, I'm sure
                  </button>
                  <button
                    onClick={() => {
                      setIsDeleteConfirm(false);
                    }}
                    data-modal-hide="popup-modal"
                    type="button"
                    class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    No, cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-50"></div>
        </>
      )}
    </div>
  );
};

export default TaskList;
