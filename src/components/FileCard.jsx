import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { FaFolder } from "react-icons/fa";
import { PencilSquare } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { updateFile } from "../Redux/fileSlice";

const FileCard = () => {
  const [activeTab, setActiveTab] = useState("Work");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const allFileData = useSelector((state) => state.files.fileData);

  const [tabChangeData, setTabChangeData] = useState(allFileData?.workFiles);
  useEffect(() => {
    if (allFileData) {
      setTabChangeData(allFileData[`${activeTab.toLowerCase()}Files`] || []);
    }
  }, [allFileData, activeTab]);

  const [uiData, setUiData] = useState(tabChangeData[0]?.numberOfFile);
  const [artData, setArtData] = useState(tabChangeData[2]?.numberOfFile);
  const [designData, setDesignData] = useState(
    allFileData?.workFiles[1]?.numberOfFile
  );
  const [illustrationData, setIllustrationData] = useState(
    allFileData?.workFiles[3]?.numberOfFile
  );
  const [mobileData, setMobileData] = useState(
    allFileData?.workFiles[4]?.numberOfFile
  );
  const dispatch = useDispatch();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (!allFileData) return;
    const newTabChangeData = allFileData[`${tab.toLowerCase()}Files`] || [];
    setTabChangeData(newTabChangeData);
    setUiData(newTabChangeData[0]?.numberOfFile);
    setArtData(newTabChangeData[2]?.numberOfFile);
    setDesignData(newTabChangeData[1]?.numberOfFile);
    setIllustrationData(newTabChangeData[3]?.numberOfFile);
    setMobileData(newTabChangeData[4]?.numberOfFile);
  };

  const handleUpdateFile = () => {
    console.warn(uiData, designData, artData, illustrationData, mobileData);

    // Dispatch actions to update each file's number in the selected tab
    dispatch(
      updateFile({
        fileType: "UI/UX",
        activeTab: activeTab,
        numberOfFile: uiData,
      })
    );
    dispatch(
      updateFile({
        fileType: "Design",
        activeTab: activeTab,
        numberOfFile: designData,
      })
    );
    dispatch(
      updateFile({
        fileType: "Art",
        activeTab: activeTab,
        numberOfFile: artData,
      })
    );
    dispatch(
      updateFile({
        fileType: "Illustration",
        activeTab: activeTab,
        numberOfFile: illustrationData,
      })
    );
    dispatch(
      updateFile({
        fileType: "Mobile",
        activeTab: activeTab,
        numberOfFile: mobileData,
      })
    );

    // Show success toast and close the modal
    toast.success("Your file has been successfully updated!");
    setIsModalOpen(false);
  };

  return (
    <div className="w-full md:w-1/2 xl:w-[59%] mb-4 px-3 bg-white container overflow-x-hidden lg:overflow-x-visible h-[330px] md:h-[220px]">
      <div className="mx-1 mt-3">
        <div className="flex justify-between items-center border-gray-300">
          <div className="text-[#9D9D9D] text-lg font-medium">Files</div>
          <button
            className="btn btn-secondary flex flex-row-reverse align-items-center gap-2"
            onClick={() => setIsModalOpen(true)}
          >
            <PencilSquare className=" text-" size={16} />
            Edit
          </button>
        </div>
        <div className="border-b mt-1">
          <ul className="flex space-x-5">
            {["Work", "Private", "Social"].map((tab) => (
              <li key={tab}>
                <button
                  className={`p-2 text-xs font-semibold ${
                    activeTab === tab
                      ? "text-gray-600 border-b-2 border-red-500"
                      : "text-gray-600"
                  }`}
                  onClick={() => handleTabClick(tab)}
                >
                  {tab}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap w-full text-center lg:h-auto gap-2 justify-between pt-6">
          {tabChangeData.map((data) => (
            <div key={data.index} className="relative">
              <div className="absolute translate-x-4 translate-y-9 text-white">
                <p className="text-xs font-semibold">{data.name}</p>
                <small className="text-[10px]">{data.numberOfFile} File</small>
              </div>
              <FaFolder
                size={96}
                style={{ color: data.Textcolor }}
                className="cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
      {isModalOpen && (
        <div
          className="modal d-flex align-items-center justify-content-center"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title fs-5">Edit File</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setIsModalOpen(false)}
                ></button>
              </div>
              <div className="modal-body">
                <p className="fs-4 text-primary font-bold  mb-3 ">
                  {activeTab}
                </p>
                <form>
                  <div className="mb-3 flex items-center justify-between">
                    <label className="form-label flex-shrink-0 w-1/3 text-gray-700">
                      UI/UX
                    </label>
                    <input
                      type="number"
                      value={uiData}
                      onChange={(e) => setUiData(e.target.value)}
                      className="form-control w-2/3"
                    />
                  </div>
                  <div className="mb-3 flex items-center justify-between">
                    <label className="form-label flex-shrink-0 w-1/3 text-gray-700">
                      Design
                    </label>
                    <input
                      type="number"
                      value={designData}
                      onChange={(e) => setDesignData(e.target.value)}
                      className="form-control w-2/3"
                    />
                  </div>
                  <div className="mb-3 flex items-center justify-between">
                    <label className="form-label flex-shrink-0 w-1/3 text-gray-700">
                      Art
                    </label>
                    <input
                      type="number"
                      value={artData}
                      className="form-control w-2/3"
                      onChange={(e) => setArtData(e.target.value)}
                    />
                  </div>
                  <div className="mb-3 flex items-center justify-between">
                    <label className="form-label flex-shrink-0 w-1/3 text-gray-700">
                      Illustration
                    </label>
                    <input
                      type="number"
                      value={illustrationData}
                      onChange={(e) => setIllustrationData(e.target.value)}
                      className="form-control w-2/3"
                    />
                  </div>
                  <div className="mb-3 flex items-center justify-between">
                    <label className="form-label flex-shrink-0 w-1/3 text-gray-700">
                      Mobile
                    </label>
                    <input
                      type="number"
                      value={mobileData}
                      onChange={(e) => setMobileData(e.target.value)}
                      className="form-control w-2/3"
                    />
                  </div>
                </form>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleUpdateFile}
                >
                  Update File
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileCard;
