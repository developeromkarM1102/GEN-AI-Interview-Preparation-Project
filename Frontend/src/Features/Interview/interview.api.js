import axios from "axios"

const api = axios.create({
    baseURL: "https://gen-ai-interview-preparation-project.onrender.com/",
    withCredentials: true
});

export async function generateInterviewReport({ resumeFile, selfDescription, jobDescription }) {

    try {
        const formData = new FormData();
        formData.append("resume", resumeFile);
        formData.append("selfDescription", selfDescription);
        formData.append("jobDescription", jobDescription);

        const response = await api.post("/api/interview/generate-report", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        return response.data;

    } catch (err) {
        console.error("Generate interview report error:", err);
        return { error: err.message };
    }
}

export async function getInterviewReportById(interviewId) {

    try {
        const response = await api.get(`/api/interview/get-report/${interviewId}`);
        return response.data;
    } catch (err) {
        console.error("Get interview report error:", err);
        return { error: err.message };
    }
}

export async function getAllInterviewReports() {

    try {
        const response = await api.get(`/api/interview/generate-report`);
        return response.data;
    } catch (err) {
        console.error("Get all interview reports error:", err);
        return { error: err.message };
    }
}

export const generateResumePdf = async ({ interviewReportId }) => {
    const response = await api.post(`/api/interview/resume/pdf/${interviewReportId}`, null, {
        responseType: "blob"
    })

    return response.data
}
