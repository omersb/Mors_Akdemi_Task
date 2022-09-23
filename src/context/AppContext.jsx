import { createContext, useState } from "react";
import { videoData } from "../helper/data";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [videoData1, setVideoData] = useState(videoData);
  return (
    <AppContext.Provider value={{ videoData1, setVideoData }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
