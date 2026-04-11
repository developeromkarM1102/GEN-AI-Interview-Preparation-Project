import { generateInterviewReport, getInterviewReportById, getAllInterviewReports, generateResumePdf } from '../interview.api'
import { useContext } from 'react'
import { InterviewContext } from '../interview.context'

export const useInterview = () => {

  const { loading, setLoading, report, setReport, allReports, setAllReports } = useContext(InterviewContext)

  const generateReport = async ({ resumeFile, jobDescription, selfDescription }) => {
    setLoading(true)

    try {
      const response = await generateInterviewReport({
        resumeFile,
        jobDescription,
        selfDescription
      })

      if (!response || response.error) {
        console.error("API Error:", response?.error)
        return null
      }

      setReport(response.interviewReport)

      return response.interviewReport

    } catch (err) {
      console.error("Generate interview report error:", err)
      return null
    } finally {
      setLoading(false)
    }
  }

  const getReportById = async (interviewId) => {
    setLoading(true)

    try {
      const response = await getInterviewReportById(interviewId)

      if (!response || response.error) {
        console.error("API Error:", response?.error)
        return null
      }

      setReport(response.interviewReport)

      return response.interviewReport

    } catch (err) {
      console.error("Get interview report error:", err)
      return null
    } finally {
      setLoading(false)
    }
  }

  const getAllReports = async () => {
    setLoading(true)

    try {
      const response = await getAllInterviewReports()

      if (!response || response.error) {
        console.error("API Error:", response?.error)
        return []
      }

      setAllReports(response.interviewReports || [])

      return response.interviewReports || []

    } catch (err) {
      console.error("Get all interview reports error:", err)
      return []
    } finally {
      setLoading(false)
    }
  }

  const getResumePdf = async (interviewReportId) => {
    setLoading(true)
    let response = null
    try {
      response = await generateResumePdf({ interviewReportId })
      const url = window.URL.createObjectURL(new Blob([response], { type: "application/pdf" }))
      const link = document.createElement("a")
      link.href = url
      link.setAttribute("download", `resume_${interviewReportId}.pdf`)
      document.body.appendChild(link)
      link.click()
    }
    catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return {
    loading,
    report,
    allReports,
    getResumePdf,
    generateReport,
    getReportById,
    getAllReports
  }
}