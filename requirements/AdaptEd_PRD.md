# AdaptEd Product Requirements Document (PRD)

## 1. Executive Summary

### Product Overview
AdaptEd is a mobile and web-based educational application designed for children aged 4-8 who have Individualized Education Programs (IEPs). The app uses AI to deliver personalized, interactive learning experiences aligned with each child's specific IEP goals across core educational domains.

### Key Value Propositions
- **Personalized Learning**: AI-driven content customization based on individual IEP goals
- **Engagement Through Games**: Interactive, game-based learning experiences
- **Parent Empowerment**: Comprehensive tracking and progress reporting
- **Accessibility**: Removes physical logistics barriers and reduces tutoring costs
- **Research-Backed**: Evidence-based approaches to special education

### Target Market
- Primary: Parents of children (4-8 years) with IEPs
- Secondary: Special education professionals and schools
- Tertiary: Educational therapy centers and organizations

## 2. User Personas

### Parent User (Primary)
- **Background**: Parent/guardian of a child with special needs
- **Pain Points**: 
  - Summer regression concerns
  - Insufficient school service time
  - High cost of private tutoring
  - Difficulty tracking progress across multiple goals
- **Goals**: 
  - Support child's educational development at home
  - Track progress toward IEP goals
  - Access affordable, quality educational resources

### Child User (End User)
- **Age**: 4-8 years old
- **Profile**: Has an active IEP with specific learning goals
- **Needs**: 
  - Engaging, age-appropriate content
  - Clear instructions and feedback
  - Consistent encouragement
  - Appropriate difficulty levels

### Administrator (Internal)
- **Role**: Platform administrator/content manager
- **Responsibilities**:
  - User management
  - Content curation
  - Analytics monitoring
  - Support ticket resolution

## 3. Core Features & Functionality

### 3.1 Authentication & User Management

#### Parent Registration
- **Methods**: Email/password, Google sign-in
- **Required Information**:
  - Parent name and contact details
  - Payment information (Stripe integration)
  - Terms of service acceptance
- **Features**:
  - Email verification
  - Forgot password functionality
  - Secure account management

#### Child Profile Creation
- **Profile Elements**:
  - Child's name and age
  - Grade level
  - Disability category (13 IEP categories supported)
  - Learning style preferences (visual, auditory, read/write, kinesthetic)
  - Strengths and interests

### 3.2 IEP Integration & Onboarding

#### IEP Upload/Entry
- **Option 1**: Upload PDF of IEP document
  - AI parsing for goals, present levels, accommodations
- **Option 2**: Manual guided entry
  - Select top 3 goal areas
  - Input strengths via prompts/checkboxes
  - Enter sample goals if IEP unavailable

#### Smart Matching System
- **Tag-Based Algorithm**:
  - Extract tags from IEP (skills, goals, accommodations, interests)
  - Match to activity tags (domain, skill, delivery type, theme)
  - Prioritize activities with highest tag overlap
  - Adapt based on performance and feedback

### 3.3 Learning Dashboard

#### Main Dashboard Features
- Welcome message with mascot greeting
- Current learning focus areas
- Quick access to games/activities
- Progress summary
- Daily recommendations

#### Navigation Options
- Math Games (Bingo, Snakes & Ladders)
- Reading Games (Bingo, Snakes & Ladders)
- Progress Reports
- Account Settings
- Help/Support

### 3.4 Interactive Learning Games

#### Math Bingo
- **Format**: 3x3 or 4x4 grid
- **Gameplay**:
  - Math problems in each square
  - Complete horizontal, vertical, or diagonal lines
  - Wrong answers block that path
  - Find alternate paths to win
- **Difficulty Levels**:
  1. Single-digit addition
  2. Double-digit addition
  3. Subtraction
  4. Word problems (addition)
  5. Word problems (subtraction)
  6. Multiplication
  7. Division
  8. Advanced word problems
- **Special Features**:
  - Clock reading questions
  - Visual math problems
  - AI-generated variations

#### Math Snakes & Ladders
- **Format**: 5x5 grid board
- **Gameplay**:
  - Answer questions to roll dice
  - Move spaces based on dice roll
  - Snakes move player backward
  - Ladders move player forward
  - Previously solved squares don't require re-answering
- **Features**:
  - Animated movement
  - Progressive difficulty
  - Same math categories as Bingo

#### Reading Bingo
- **Format**: Same as Math Bingo (3x3 or 4x4)
- **Content**:
  - Comprehension questions
  - AI-generated questions from uploaded passages
  - Multiple question types per passage
- **Management**:
  - Admin uploads and tags passages
  - AI generates varied questions
  - Tracks which passages user has seen

#### Reading Snakes & Ladders
- **Format**: Same as Math version
- **Content**: Reading comprehension challenges
- **Progression**: Difficulty increases with game advancement

### 3.5 AI Mascot System

#### Mascot Capabilities
- **Appears on**: All game pages and dashboard
- **Functions**:
  - Welcome messages
  - Game instructions
  - Encouragement during play
  - Answer explanations
  - Help button responses
- **Personalization**:
  - Time-based greetings (morning/afternoon/evening)
  - Location-aware messages
  - Birthday remembrance
  - Seasonal content
  - Interest-based conversations

#### Safety Guidelines
- Strict content guidelines document required
- Age-appropriate language adjustment
- Limited conversation topics
- No inappropriate content generation

### 3.6 Progress Tracking & Reporting

#### Data Collection
- All activities tracked and timestamped
- Question responses recorded
- Time spent per activity
- Help button usage
- Retry attempts

#### Parent Reports
- **Monthly Progress Reports**:
  - Skill progression charts
  - Time spent by domain
  - Achievement highlights
  - Areas needing attention
- **Features** (Phase 2):
  - Exportable reports for IEP teams
  - Trend line visualizations
  - Comparative progress metrics

### 3.7 Subscription Management

#### Pricing Model
- Q1: Free trial (100 users target)
- Q2: $10/month (50 users target)
- Q3: $10/month (150 users target)
- Q4: $15/month (250 users target)

#### Features
- In-app subscription management
- Pause/resume options
- Cancel anytime
- Stripe payment processing
- Refund handling

### 3.8 Admin Panel

#### User Management
- View all registered parents
- Access child profiles
- Monitor activity levels
- Handle support tickets

#### Analytics Dashboard
- User metrics (DAU/WAU/MAU)
- Revenue tracking
- Subscription analytics
- Cancellation rates
- Lifetime value (LTV)

#### Content Management
- Upload reading passages
- Tag and categorize content
- Monitor content performance
- A/B testing capabilities

## 4. Technical Architecture

### 4.1 Technology Stack
- **Frontend**: React Native (mobile) / React (web)
- **Backend**: Node.js with Express
- **Database**: PostgreSQL
- **AI/ML**: OpenAI GPT-4 for content generation
- **Payment**: Stripe
- **Hosting**: AWS with auto-scaling
- **Development Tools**: Cursor AI-assisted coding

### 4.2 Key Technical Features
- **Responsive Design**: Mobile-first approach
- **Offline Capability**: Download content for offline use
- **Real-time Sync**: Progress syncs across devices
- **Security**: COPPA compliant, encrypted data storage
- **Performance**: < 3 second load times

### 4.3 Data Models

#### User Schema
```
Parent {
  id: UUID
  email: string
  name: string
  subscription: SubscriptionObject
  children: [ChildProfile]
}

ChildProfile {
  id: UUID
  name: string
  age: number
  grade: string
  iepData: IEPObject
  preferences: PreferencesObject
  progressData: [ProgressRecord]
}

IEPObject {
  goals: [Goal]
  presentLevels: object
  accommodations: [string]
  strengths: [string]
  uploadedPDF: URL
}
```

## 5. User Flows

### 5.1 Onboarding Flow
1. Parent lands on marketing page
2. Clicks "Get Started"
3. Creates account (email/Google)
4. Enters payment information
5. Creates child profile
6. Uploads/enters IEP information
7. Reviews AI-suggested focus areas
8. Confirms or adjusts selections
9. Child sees personalized dashboard

### 5.2 Daily Use Flow
1. Child/parent opens app
2. Mascot greets with personalized message
3. Dashboard shows recommended activities
4. Child selects game
5. Mascot explains rules
6. Child plays game with mascot encouragement
7. Progress automatically saved
8. Parent can view session summary

### 5.3 Progress Review Flow
1. Parent accesses reports section
2. Selects time period
3. Views progress charts
4. Reads AI-generated insights
5. Exports report (optional)
6. Shares with IEP team (optional)

## 6. Design Guidelines

### 6.1 Visual Design
- **Style**: Bright, friendly, and engaging
- **Colors**: High contrast for accessibility
- **Typography**: Clear, readable fonts
- **Icons**: Simple, universally understood
- **Animations**: Smooth, not distracting

### 6.2 UX Principles
- **Simplicity**: Minimal cognitive load
- **Consistency**: Predictable interactions
- **Feedback**: Clear success/error states
- **Accessibility**: WCAG 2.1 AA compliance
- **Engagement**: Reward systems and celebrations

### 6.3 Mascot Design
- Friendly, non-threatening character
- Expressive animations
- Customizable appearance (future)
- Age-appropriate personality

## 7. Development Timeline

### Phase 1: MVP (4 months)
- **Week 1**: Detailed requirements and wireframes
- **Week 2**: Environment setup and architecture
- **Weeks 3-5**: Sprint 1 - Core game mechanics
- **Weeks 6-7**: Sprint 2 - User management & profiles
- **Weeks 8-9**: Sprint 3 - Dashboard & reporting basics
- **Weeks 10-11**: Internal QA
- **Weeks 12-13**: UAT and bug fixes
- **Weeks 14-16**: Launch preparation and support

### Phase 2: Post-Launch (6 months)
- Advanced reporting features
- Additional game types
- Social features for parents
- School partnership tools
- Enhanced AI capabilities

## 8. Success Metrics

### Key Performance Indicators (KPIs)
- **User Acquisition**: 250 users by end of Year 1
- **Retention**: 80% monthly retention rate
- **Engagement**: Average 3 sessions/week per child
- **Revenue**: $40-45K ARR by end of Year 1
- **NPS**: > 50 from parent users

### Learning Metrics
- Average skill improvement per domain
- Goals achieved vs. goals set
- Time to mastery by skill level
- Engagement correlation with progress

## 9. Risk Mitigation

### Technical Risks
- **AI Content Generation**: Implement strict guidelines and human review
- **Scalability**: Cloud-based architecture with auto-scaling
- **Data Security**: COPPA compliance and encryption

### Business Risks
- **Competition**: Differentiate through AI personalization
- **User Adoption**: Partner with organizations and schools
- **Retention**: Continuous content updates and feature improvements

## 10. Future Enhancements

### Year 2 Roadmap
- Expand age range (3-12 years)
- Add more learning domains (science, life skills)
- Teacher portal for classroom use
- Multiplayer games for social skills
- Voice-based interactions
- AR/VR learning experiences
- Predictive analytics for learning paths

### Partnership Opportunities
- School district integrations
- Therapy center collaborations
- Special education organization partnerships
- Insurance reimbursement programs

## Appendices

### A. IEP Disability Categories
1. Autism (AUT)
2. Deaf-Blindness (DB)
3. Deafness (D)
4. Emotional Disturbance (ED)
5. Hearing Impairment (HI)
6. Intellectual Disability (ID)
7. Multiple Disabilities (MD)
8. Orthopedic Impairment (OI)
9. Other Health Impairment (OHI)
10. Specific Learning Disability (SLD)
11. Speech or Language Impairment (SLI)
12. Traumatic Brain Injury (TBI)
13. Visual Impairment Including Blindness (VI)

### B. Learning Domains
- Reading
- Math
- Writing
- Shapes
- Speech
- Social Skills

### C. Marketing Channels
- Facebook parent groups
- Parent Training and Information Centers (PTIs)
- Partner organizations
- School referrals
- Social media campaigns
- PR through business journals

---

*This PRD serves as the foundation for AdaptEd development. It should be treated as a living document, updated as user feedback and market insights emerge.* 