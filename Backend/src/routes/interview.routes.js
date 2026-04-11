const express = require("express")
const authMiddleware = require("../Middlewares/authMiddleware")
const interviewController = require("../controllers/interview.controller")
const upload = require("../Middlewares/file.Middleware")

const interviewRouter = express.Router()

/**
 * @route POST /api/interview/generate-report
 * @description generate interview report based on user self description, resume and job description.
 * @access private
 */
interviewRouter.post("/generate-report", authMiddleware.authUser, upload.single("resume"), interviewController.generateInterViewReportController)

/**
 * @route GET /api/interview/get-report/:interviewId
 * @description get interview report by id.
 * @access private
 */
interviewRouter.get("/get-report/:interviewId", authMiddleware.authUser, upload.single("resume"), interviewController.getInterViewReportByIdController)

/**
 * @route GET /api/interview/generate-report
 * @description get all interview reports of the user.
 * @access private
 */
interviewRouter.get("/generate-report", authMiddleware.authUser, interviewController.getAllInterviewReportsController)

/**
 * @route GET /api/interview/resume/pdf
 * @description generate resume pdf on the basis of user self description, resume content and job description.
 * @access private
 */
interviewRouter.post("/resume/pdf/:interviewReportId", authMiddleware.authUser, interviewController.generateResumePdfController)

module.exports = interviewRouter