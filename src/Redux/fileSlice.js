import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fileData: {
    workFiles: [],
    privateFiles: [],
    socialFiles: [],
  },
};

const fileSlice = createSlice({
  name: "files",
  initialState,
  reducers: {
    setFiles(state, action) {
      state.fileData = action.payload;
    },
    updateFile(state, action) {
      const { fileType, numberOfFile, activeTab } = action.payload;
 
      const fileListKey = `${activeTab.toLowerCase()}Files`;
      const fileList = state.fileData[fileListKey];

      const fileIndex = fileList.findIndex((file) => file.name === fileType);
      if (fileIndex !== -1) {
        fileList[fileIndex].numberOfFile = numberOfFile;
      }
    },
  },
});

export const { setFiles, updateFile } = fileSlice.actions;
export default fileSlice.reducer;
