import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const InterviewContext = createContext();

export const InterviewProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [report, setReport] = useState(null);
    const [allReports, setAllReports] = useState([]);


    return (
        <InterviewContext.Provider value={{ loading, setLoading, report, setReport, allReports, setAllReports }}>
            {children}
        </InterviewContext.Provider>
    )
}