const mongoose = require("mongoose")


const technicalQuestionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: [true, " Technical questions is required"]
    },
    intention: {
        type: String,
        required: [true, "Intention is required"]
    },
    answer: {
        type: String,
        required: [true, "Answer is Required"]
    }
}, {
    _id: false
})

const BehavioralQuestionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: [true, " Technical questions is required"]
    },
    intention: {
        type: String,
        required: [true, "Intention is required"]
    },
    answer: {
        type: String,
        required: [true, "Answer is Required"]
    }
}, {
    _id: false
})

const SkillGapSchema = new mongoose.Schema({
    skills: {
        type: String,
        required: [true, "Skills are required"]
    },
    severity: {
        type: String,
        enum: ["low", "medium", "high"],
        required: [true, "Severity are required"]
    }
}, {
    _id: false
})

const preparationSchema = new mongoose.Schema({
    days: {
        type: Number,
        required: [true, "Day is required"]
    },
    focus: {
        type: String,
        required: [true, "Focus is required"]
    },
    tasks: [ {
        type: String,
        required: [ true, "Task is required" ]
    } ]
})

const interviewSchema = new mongoose.Schema({

    jobDescription: {
        type: String,
        required: [true, "Job Description is required for an interview"]
    },

    resume: {
        type: String
    },

    selfDescription: {
        type: String
    },

    matchScore: {
        type: Number,
        min: 0,
        max: 100
    },

    technicalQuestions: [technicalQuestionSchema],
    behavioralQuestions: [BehavioralQuestionSchema],
    skillGaps: [SkillGapSchema],
    preparationPlan: [preparationSchema],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    title: {
        type: String,
        required: [ true, "Job title is required" ]
    }
}, {
    timestamps: true
})

const interviewReportModel = mongoose.model("InterviewReport", interviewSchema)

module.exports = interviewReportModel