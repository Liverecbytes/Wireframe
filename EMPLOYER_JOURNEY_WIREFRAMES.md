# Employer Journey - Applied Job Wireframes

## Overview

This document describes the comprehensive wireframe designs for the Employer Journey, specifically focused on the "Applied Job" flow. These wireframes cover the complete hiring pipeline from receiving applications to making hiring decisions.

## Wireframe Components Created

### 1. **Applicant Listing View** (`WireframeEmployerJobApplications`)
**Route:** `/wireframe/employer-job-applications`

#### Applicant Type Tabs:
The system supports two types of applicants with tab-based navigation:

**Regular Applicants Tab** 📋
- Candidates who have formally applied for the position
- Completed full application with resume, assessments, IQ test, and screening responses
- Progresses through full hiring pipeline stages
- Blue accent color for regular applicants

**Express Interest Tab** ⚡
- Candidates who have shown interest but not formally applied yet
- Submitted basic profile information and IQ test
- Includes express interest note explaining their motivation
- Purple accent color for express interest
- Can be converted to regular applicants by employer invitation
- Allows evaluation of potential candidates before formal application

**Tab Features:**
- Clear count badges showing number of each type
- One-click switching between applicant types
- Maintains filters and search across tabs
- Express Interest applicants show special purple-highlighted interest note

#### Features:
- **Real-time Notifications Panel**
  - Email + in-app notifications for new applications
  - Interview reminders
  - Offer status updates
  - Visual notification badges

- **Job Header Section**
  - Job title, ID, and status (Active/Closed)
  - Location and department information
  - Posted date and days active
  - Quick actions: View Job Post, Edit Job, Share Job

- **Pipeline Stats Dashboard**
  - Visual overview of candidates in each stage
  - Count of candidates in: Applied, Shortlisted, Interview, Offered, Rejected
  - Color-coded cards for easy scanning

- **Applicant List View**
  - Job-specific applicant listing
  - Each applicant card displays:
    - Name and profile photo
    - Application date and time
    - Current pipeline stage (color-coded badges)
    - Match score percentage
    - Key highlights: Experience, Location, Notice Period
    - Top 4 relevant skills
    - Resume download link
    - Individual assessment test badges (clickable):
      - Each test shown separately with name and score
      - Color-coded by performance (Green: 90+%, Blue: 70-89%, Yellow: <70%)
      - Click to expand and view detailed test results
      - Expanded view shows:
        - Completion date and duration
        - Total questions and correct answers
        - Section-wise performance with progress bars
        - Case study evaluations (if applicable)
        - Action buttons: View Full Details, Download Report
    - IQ Test Results (clickable):
      - Overall IQ score with interpretation (e.g., "Superior Intelligence")
      - Sufficient/Insufficient indicator based on job requirements
      - Color-coded: Green if meets requirement, Red if below
      - Shows required IQ threshold for the job
      - Click to expand and view:
        - Completion date, duration, and percentile rank
        - Overall score with classification
        - Meets/Below requirement indicator with gap analysis
        - Category-wise scores (Logical Reasoning, Verbal, Pattern Recognition, Mathematical)
        - Visual progress bars for each category
        - Assessment summary and evaluator response
        - Action buttons: View Full Report, Download Results
    - Screening Questions & Responses (clickable):
      - Shows number of screening questions answered
      - Blue badge indicating pre-screening completion
      - Click to expand and view all responses:
        - Question-by-question display
        - Candidate's submitted answers
        - Organized with Q&A format
        - Submitted at time of application
        - Action button: View Full Application
    - Interview/offer status if applicable
  
- **Filtering & Search**
  - Filter by pipeline stage
  - Sort by: Recent, Match Score, Experience, Name
  - Search by candidate name or keywords

- **Stage Indicators**
  - Color-coded stage badges:
    - Applied: Blue
    - Shortlisted: Purple
    - Interview: Yellow
    - Offered: Green
    - Rejected: Red

- **Quick Actions**
  - View Profile button
  - Move to Stage dropdown
  - Message candidate
  - All actions accessible from list view

---

### 2. **Applicant Detail View** (`WireframeApplicantDetailView`)
**Route:** `/wireframe/applicant-detail-view`

#### Features:
- **360° Candidate Profile (Left Side)**
  - **Header Section**
    - Profile photo
    - Name, headline, location
    - Current pipeline stage
    - Match score (large, prominent)
    - Experience and notice period
    - Quick actions: Download Resume, Message, Schedule Interview

  - **Contact Information**
    - Email, phone (verified indicators)
    - Portfolio link
    - LinkedIn profile
    - GitHub profile

  - **Work Experience**
    - Detailed job history
    - Role, company, period, location
    - Key highlights and achievements
    - Structured format from onboarding

  - **Education**
    - Degree, institution, years
    - Location

  - **Skills with Match Indicators**
    - All candidate skills listed
    - Green highlight + checkmark for required skills match
    - Blue highlight for nice-to-have skills match
    - Gray for additional skills

  - **Cover Letter / Application Notes**
    - Full text of candidate's cover letter
    - Application-specific notes

  - **Assessment Tests & Results**
    - Multiple assessment tests support
    - Each test displays:
      - Test name and type (Skills Test, Case Study, Technical Test)
      - Completion status and date
      - Duration taken
      - Overall score and passing score
      - Total questions and correct answers
      - Section-wise performance breakdown with visual progress bars
      - Sample responses with candidate answers
      - Case study evaluations with evaluator name
      - Action buttons: View Full Responses, Download Report
    - Visual score indicators (color-coded by performance level)
    - Detailed performance analytics per section

- **Job Context Panel (Right Side - Sticky)**
  - **Job Header**
    - Job title and ID
    - Location, employment type, department

  - **Compensation Match Analysis**
    - Job salary range
    - Candidate salary expectation
    - Visual comparison with mismatch alerts

  - **Job Description**
    - Full job description for reference

  - **Skills Match Analysis**
    - Required skills with match indicators
    - Nice-to-have skills comparison
    - Overall match summary card
    - Visual feedback: "Strong Match!" or concerns

  - **Quick Actions**
    - Schedule Interview
    - Move to Shortlist
    - View Full Job Post

- **Pipeline Action Controls**
  - Move candidate through stages: Applied → Shortlisted → Interview → Offer → Hired / Rejected
  - Visual stage buttons with current stage highlighted
  - Assign recruiter dropdown
  - Tag candidate options
  - All movements tracked with timestamps

- **Application Timeline**
  - Chronological activity log
  - Application received
  - Profile views (with viewer name)
  - Resume downloads
  - Stage changes
  - All with timestamps

- **Internal Notes & Comments**
  - Add new notes form
  - Rating system (1-5 stars)
  - Historical notes from team members
  - Author, timestamp, and role displayed
  - Feedback from interviews

---

### 3. **Interview Scheduling** (`WireframeInterviewScheduling`)
**Route:** `/wireframe/interview-scheduling`

#### Features:
- **Candidate Information Panel (Left)**
  - Profile photo
  - Name, role, contact info
  - Preferred availability times
  - Timezone information

  - **Interview Templates**
    - Pre-configured templates:
      - HR / Culture Fit (45 min, 8 questions)
      - Technical / Skills Assessment (60 min, 12 questions)
      - Final Round / Leadership (90 min, 10 questions)

  - **Available Interviewers List**
    - Name, role, email
    - Availability status (Available/Busy)
    - Color-coded: Green for available, Gray for busy

- **Schedule Interview Form (Right)**
  - **Interview Type Selection**
    - HR Round
    - Technical
    - Final Round

  - **Date & Time Picker**
    - Calendar date selector
    - Time picker
    - Duration dropdown (30/45/60/90/120 minutes)

  - **Interview Mode**
    - Video call (🎥)
    - In-person (🏢)
    - Phone (📞)

  - **Meeting Details**
    - Meeting link/location input
    - Zoom/Teams link or physical location

  - **Interviewer Selection**
    - Checkboxes for multiple interviewers
    - Shows availability status
    - Disabled for unavailable interviewers

  - **Additional Notes**
    - Optional text area
    - Special instructions or topics to cover

  - **Auto-send Calendar Invites**
    - Checkbox to automatically send invites
    - Sends to candidate and all interviewers

- **Upcoming Interviews Section**
  - List of scheduled interviews
  - Each showing:
    - Candidate name
    - Job title
    - Interview type
    - Date, time, duration
    - Mode (Video/In-person/Phone)
    - Interviewer(s)
    - Status (Confirmed/Pending)
    - Meeting link or location
  - Actions: Reschedule, Cancel, Details
  - View Calendar and Export options

- **Past Interviews Section**
  - Historical interview records
  - Outcome displayed (Moved to Next Round / Rejected)
  - Interviewer feedback
  - Rating if applicable
  - View Details option

- **Automation Features**
  - Calendar invites automatically sent
  - Reminder notifications before interviews
  - Interview details synced to:
    - Candidate profile
    - Employer calendar
    - Interview dashboard

---

### 4. **Hiring Analytics** (`WireframeHiringAnalytics`)
**Route:** `/wireframe/hiring-analytics`

#### Features:
- **Overall Stats Dashboard**
  - Total Applications (with weekly trend)
  - Active Candidates (in pipeline)
  - Interviews Completed (pending count)
  - Offers Sent (acceptance rate)
  - Color-coded cards for visual clarity

- **Pipeline Overview**
  - **Visual Pipeline Flow**
    - Side-by-side stage cards showing flow
    - Candidate count at each stage
    - Percentage of total
    - Visual arrows showing progression

  - **Detailed Pipeline Table**
    - Stage name
    - Candidate count
    - Percentage of total
    - Average days in stage
    - Drop-off rate
    - Sortable columns

- **Time-to-Hire Metrics**
  - Average Time to Shortlist (vs industry benchmark)
  - Average Time to Interview (vs industry benchmark)
  - Average Time to Offer (vs industry benchmark)
  - Average Time to Hire (vs industry benchmark)
  - Status indicators: Excellent / Good / Needs Improvement
  - Color-coded comparisons

- **Interview Metrics**
  - Total Scheduled
  - Completed count
  - Pending interviews
  - No-show/Cancelled count
  - Interview Success Rate percentage
  - Average Candidate Rating (star rating)

- **Stage Conversion Rates**
  - Applied → Shortlisted (%)
  - Shortlisted → Interview (%)
  - Interview → Offer (%)
  - Offer → Hired (%)
  - Shows actual numbers (e.g., "23 → 12")

- **Application Source Analysis**
  - Table showing:
    - Source name (Direct, LinkedIn, Referral, Job Board, Recruiter)
    - Application count
    - Percentage of total (with visual bar)
    - Number hired from each source
  - Identifies most effective channels

- **Weekly Activity Trend**
  - Week-by-week breakdown
  - Applications received
  - Interviews conducted
  - Offers sent
  - Visual trend over time

- **Rejection Insights**
  - Breakdown by rejection reason:
    - Skills mismatch
    - Experience level
    - Salary expectations
    - Location preferences
  - Count and percentage for each
  - Visual progress bars
  - Total rejected count

- **Top Candidates by Match Score**
  - Ranked list (1-4)
  - Name, experience, current stage
  - Match score percentage
  - Current status
  - View Profile action

- **Key Insights & Recommendations**
  - Automated insights with color-coded cards:
    - ✓ Green: Strong Performance
    - → Blue: Opportunities
    - ⚠ Yellow: Watch Out
    - 💡 Purple: Insights
  - Actionable recommendations based on data

- **Export & Sharing**
  - Export Report button
  - Share functionality
  - Download PDF option

---

## User Flow

### Complete Employer Journey Flow:

1. **Application Received**
   - Employer receives notification (email + in-app)
   - Application auto-linked to job posting
   - Candidate appears in "Applied" stage

2. **Review Applicants** → `WireframeEmployerJobApplications`
   - Navigate: Dashboard → Jobs → Job Details → Applicants
   - View all applicants for specific job
   - See match scores, key highlights, and stages
   - Filter and search as needed

3. **Review Candidate Details** → `WireframeApplicantDetailView`
   - Click on applicant to view 360° profile
   - Review candidate details side-by-side with job context
   - See skill matches highlighted
   - Read cover letter and experience
   - Add internal notes and ratings
   - Move through pipeline stages

4. **Schedule Interview** → `WireframeInterviewScheduling`
   - From applicant detail, click "Schedule Interview"
   - Select interview type, date, time
   - Choose interviewers
   - Set up video/in-person/phone meeting
   - System auto-sends calendar invites
   - View upcoming and past interviews

5. **Make Decisions**
   - Move candidate through pipeline
   - Add feedback after each stage
   - Make offer or reject with reason
   - Track all decisions with timestamps

6. **Review Analytics** → `WireframeHiringAnalytics`
   - Navigate to Analytics dashboard
   - Review hiring metrics and KPIs
   - Analyze pipeline health
   - Identify bottlenecks and drop-offs
   - Review time-to-hire performance
   - See source effectiveness
   - Get actionable insights

---

## Design Patterns & Consistency

### Visual Design Language:
- **Borders:** 2px solid borders for primary elements, 1px for secondary
- **Colors:** Gray scale with color accents for status indicators
- **Typography:** Bold for headings, regular for body text
- **Spacing:** Consistent padding (p-4, p-6) and gaps (gap-3, gap-4, gap-6)
- **Layout:** Responsive grid layouts with mobile-first approach

### Status Color Coding:
- **Blue:** Applied stage, informational items
- **Purple:** Shortlisted stage
- **Yellow:** Interview stage, warnings
- **Green:** Offered/Hired stage, success indicators, good performance
- **Red:** Rejected stage, critical alerts, poor performance

### Interactive Elements:
- All buttons have hover states
- Clear primary vs secondary actions
- Disabled states for unavailable options
- Loading and confirmation states (to be implemented)

### Data Display:
- **Cards:** For individual items (candidates, interviews, metrics)
- **Tables:** For comparative data (pipeline, sources, time metrics)
- **Badges:** For status indicators and tags
- **Progress bars:** For percentages and comparisons
- **Icons:** Consistent emoji usage for quick recognition

---

## Communication & Notifications

### Automated Notifications:
1. **Application Received**
   - Real-time email + in-app notification
   - Includes candidate name, job title, timestamp

2. **Stage Changes**
   - Candidate notified when moved through pipeline
   - Employer team members notified of updates

3. **Interview Scheduling**
   - Calendar invites sent automatically
   - Reminder notifications before interviews
   - Reschedule/cancel notifications

4. **Offer Status**
   - Notifications for offer sent
   - Reminders if no response
   - Acceptance/rejection notifications

### Communication Channels:
- **In-app Messaging:** Direct communication with candidates
- **Email:** Formal correspondence and notifications
- **Calendar Integration:** Automatic calendar invites
- **Team Collaboration:** Internal notes and comments

---

## Technical Implementation Notes

### Components Structure:
```
/components/wireframe/
  ├── WireframeEmployerJobApplications.tsx
  ├── WireframeApplicantDetailView.tsx
  ├── WireframeInterviewScheduling.tsx
  └── WireframeHiringAnalytics.tsx
```

### Page Routes:
```
/app/wireframe/
  ├── employer-job-applications/page.tsx
  ├── applicant-detail-view/page.tsx
  ├── interview-scheduling/page.tsx
  └── hiring-analytics/page.tsx
```

### State Management (To Be Implemented):
- Candidate data state
- Pipeline stage state
- Interview scheduling state
- Analytics data state
- Notification state

### API Endpoints (To Be Implemented):
- GET `/api/jobs/:jobId/applicants` - Fetch applicants
- GET `/api/applicants/:applicantId` - Fetch applicant details
- PATCH `/api/applicants/:applicantId/stage` - Update pipeline stage
- POST `/api/interviews` - Schedule interview
- GET `/api/jobs/:jobId/analytics` - Fetch analytics data
- POST `/api/applicants/:applicantId/notes` - Add internal notes

---

## Future Enhancements

### Phase 2 Features:
1. **AI-Powered Features**
   - Auto-matching algorithm improvements
   - AI-generated interview questions
   - Resume parsing and skill extraction
   - Predictive analytics for candidate success

2. **Collaboration Features**
   - Team discussions on candidates
   - @mentions in comments
   - Shared evaluation scorecards
   - Approval workflows

3. **Advanced Analytics**
   - Custom report builder
   - Diversity hiring metrics
   - Candidate experience surveys
   - Competitor benchmarking

4. **Integration Capabilities**
   - Calendar integrations (Google, Outlook)
   - Video conferencing (Zoom, Teams, Meet)
   - Email sync
   - Slack notifications
   - ATS integrations

5. **Mobile Optimization**
   - Native mobile apps
   - Push notifications
   - Quick actions on mobile
   - Mobile-optimized interview scheduling

6. **Candidate Experience**
   - Self-service interview rescheduling
   - Real-time application status
   - Interview preparation resources
   - Feedback collection

---

## Access Links

Once the development server is running, access the wireframes at:

- **Main Wireframe Index:** `http://localhost:3000/wireframe`
- **Applicant Listing:** `http://localhost:3000/wireframe/employer-job-applications`
- **Applicant Detail:** `http://localhost:3000/wireframe/applicant-detail-view`
- **Interview Scheduling:** `http://localhost:3000/wireframe/interview-scheduling`
- **Hiring Analytics:** `http://localhost:3000/wireframe/hiring-analytics`

---

## Summary

This comprehensive wireframe suite covers the complete Employer Journey for managing job applications. The design focuses on:

✅ **Efficiency** - Quick access to key information and actions  
✅ **Context** - Side-by-side views of candidates and job requirements  
✅ **Collaboration** - Internal notes, ratings, and team assignments  
✅ **Analytics** - Data-driven insights for better hiring decisions  
✅ **Automation** - Streamlined scheduling and notifications  
✅ **Transparency** - Clear pipeline visualization and tracking  

The wireframes follow consistent design patterns, are fully responsive, and provide a solid foundation for building a production-ready Applicant Tracking System (ATS).
