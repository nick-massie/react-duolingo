**Open questions (6/30/25)**

1. Cost per user (subscription price, app price, etc.) \- to help estimate the low watermark / breaking point   
   1. Q1 post launch free \- 100 users  
   2. Q2 $10/user \- 50/500 \= $500 MRR  
   3. Q3 $10/user \- 150 / x \= $1500 MRR  
   4. Q4 $15 @ 250 users \= \~40-45K ARR (12 months \- potentially 1M$ valuation) 10X here \- 3-%  
2. How many users the system will be able to handle at this stage   
   1. Cloud based scaling so not an issue  
3. The rate we can anticipate obtaining new users (what is "normal" or expected at this stage?)  
   1.  Need to talk to marketing/sales folks  
4. Other expenses on the tech side (or overall business side) that we haven't discussed, but I should plan for?  
   1. 200K for 12 months  
      1. 120K for MVP dev (4-6 months)  
      2. 25K for marketing  
      3. 5-15K/month for support for 6 months (hosting server costs of 100-150/month included) \- 50K  
      4. Plus anything additional that Morgan needs for admin, sales support

**Assertions**

1. Upload IEP, and the derive the information on which exercises to use from there  
2. Target the goals of the IEP  
3. Segmentation of IEP (condition/age/:  
   1.   
4. Age range 4-8  
5. Main categories (Reading, Math, Social)  
6. Association partners for traffic: Advanced Behavior Analysis (UT), United Angels Foundation (UT), We All Belong (UT), Best Buddies (UT & FL), The Arc (FL), etc.  
   

**Parent use cases**

1. Registration  
2. Payment/CC  
3. Reporting: Audit trail on past activity, scores, trend line, total time spent  
4. Set up child profile (details below)

**Admin use cases**

1. **User reporting**: paid, MAU/WAU/DAU active, sessions, cancellations, LTV (Lifetime Value)  
2. Revenue: total, range,   
3. Discounts, refunds,   
4. Referral program: Special code  
5. 

**Context:**

1. Specific learning disabilities: dyscalcia, dyslexia, dysgraphia  
2. Language: speech, language, comprehension, articulation, fluency, stuttering  
3. Behavior: ADHD, autism,   
4. “Hands on” , “summer regression”, “tutoring”, “services and support”, “math help”, “”

**Questions**

1. Rajiv: What does the chatBot do and not do? Use cases for chatbot: FAQ, profile questions, instructions etc.   
2. High level design for the board game concept?  
   1. Chutes and ladders or Candyland type activity, answer a question right before you roll \- still respects the rules on levels of difficult and math/reading  
      1. Math  
         1. Single digit addition  
         2. Double digit addition  
         3. Word problem examples  
         4. Multiplication  
         5. Etc.  
      2. Reading  
         1. Examples   
   2. Bingo   
3. How do we get the word out:  
   1. Facebook groups and/or parent to parent (referral deal on social media)  
   2. [Parent Training and Information Centers (PTIs)](https://www.parentcenterhub.org/find-your-center/) \- federally funded  
   3. Associations: Advanced Behavior Analysis (UT), United Angels Foundation (UT), We All Belong (UT), Best Buddies (UT & FL), The Arc (FL), Parent to Parent USA, etc. – referral program ($ and/or visibility)  
   4. School partnerships  
4. What does the onboarding experience look like? How do we match a kid with the right exercise? 

   **Step 1: Parent Account Creation**

* Parents create an account using:  
  * Email \+ password, or  
  * Google/Apple sign-in (optional)  
* Payment processing (subscription)  
* Accept terms of use \+ data privacy policies   
  **Step 2: Add Child Profile**  
* Prompt: “Let’s set up your child’s learning path\!”  
* Parent inputs:  
  * Child’s name and age  
  * Grade level  
  * Diagnosis/disability category (optional)  
    * There are 13 disability categories to qualify for an IEP:  
      * Autism (AUT)  
      * Deaf-Blindness (DB)  
      * Deafness (D)  
      * Emotional Disturbance (ED)  
      * Hearing Impairment (HI)  
      * Intellectual Disability (ID)  
      * Multiple Disabilities (MD)  
      * Orthopedic Impairment (OI)  
      * **Other Health Impairment (OHI)**  
      * **Specific Learning Disability (SLD)**  
      * **Speech or Language Impairment (SLI)**  
      * Traumatic Brain Injury (TBI)  
      * Visual Impairment Including Blindness (VI)  
  * Preferred learning style – optional for future AI tuning  
    * Visual (Spatial)  
    * Auditory (Aural)  
    * Read/Write  
    * Kinesthetic (Tactile)

  [**Step 3: Upload or Enter IEP Information**](#tags)

  Two options:

* Upload a PDF of the IEP (preferred)  
  * AI parses the IEP for:  
    * Present levels  
    * Annual goals  
    * Strengths and interests  
    * Accommodations (inform activity design in the future)  
* Manual input (guided):  
  * Select top 3 goal areas   
  * Describe strengths in a few prompts or checkboxes  
  * Optionally enter sample goals if IEP isn’t available

  **Step 4: Goal-Area Selection & Focus**

* Based on parsed/uploaded IEP or manual input, the app suggests:  
  * Primary focus area  
* Parents can confirm or adjust:  
  * “Yes, let’s work on this” or “Change my focus area”

  **~~Step 5: Skill Level Calibration (Light Assessment)~~**

* ~~The child is invited to complete a short, friendly, interactive placement activity per goal area~~  
  * ~~Example: Match letters, follow a two-step direction, complete a math pattern~~  
  * ~~Designed as playful and accessible, not a test~~  
* ~~Used to verify skill levels and avoid sending activities that are too easy/hard~~  
  **Step 6: AI Matches Child to Exercises**  
* Using:  
  * Goal area (from IEP or manual entry)  
  * Strengths (e.g., “likes animals,” “responds to visuals”)  
  * ~~Skill level (from calibration)~~  
* The app selects personalized activities from a vetted activity library  
  * Activities are interactive, goal-aligned, and engaging  
  * Optional printable worksheets or bonus content shown in parent dashboard

  **Step 7: Home Screen \+ Parent Dashboard**

* Child lands on their learning homepage   
* Parents see:  
  1. Learning focus areas  
     2. Activity progress  
     3. Feedback option: “This was too hard,” “She loved this,” etc.

---

5. Visualize/analyze long term trend line/profile view of the student?  
* Track:  
  * Engagement (time on task, consistency, etc.)  
  * Skill growth  
  * Support needs (retries, “help” button usage, etc.)  
  * Parent feedback (ratings \+ notes)  
  * Goal completion (tasks aligned to IEP goals)  
* Line graph: time vs skill proficiency/goal mastery  
  * Included data points:  
    * Activity score  
    * Time spent per activity  
    * Parent feedback  
* Parent Profile  
  * Social network (special needs community)  
  * Resources   
    * Curated list of videos, activities, etc. to send out (public or made by me)  
  * Email chain  
    * Build brand \+ relationship with clients (from CEO)  
  * One activity a month (recommendation based on games)  
    * Parent \+ child together  
    * Things we don’t have a game for yet  
* Admin Panel  
  * List of parents  
  * Data   
  * Downloadable 

---

6. Messaging/expectation setting/rules of the road \- is there a version for parents and a diff one of the user/kid  
* Different versions (or at least profiles)

---

## Tags {#tags}

After the parent uploads or enters the IEP, your system should extract and assign tags based on:

#### **A. Present Levels of Performance (PLOPs)**

* Extract skills the student currently has.  
* Example tag: `canCountTo20`, `identifiesBasicShapes`, `basicSentenceStructure`

#### **B. Goals/Objectives**

* Pull out the targeted skills and outcomes.  
* Example tag: `goal_math_numberSense`, `goal_social_respondToPeers`, `goal_speech_articulation`

#### **C. Accommodations/Modifications**

* Use these to guide UI design or activity format.  
* Example tag: `needsVisualSupport`, `lowReadingLevel`, `limitedFineMotor`

#### **D. Strengths/Interests**

* Help select motivating or preferred content.  
* Example tag: `prefersAnimals`, `strongAuditoryMemory`, `visualLearner`, `lovesCars`

### **2\. Tag All App Activities**

Each activity in your library should have a **tag profile** that defines:

* **Targeted IEP domain**: `math`, `writing`, `speech`, `socialSkills`, `reading`, `shapes`  
* **Goal-specific skill**: e.g., `countingTo100`, `rhymingWords`, `initiatingConversation`  
* **Delivery type**: `visual`, `audio`, `interactive`, `lowText`, `dragDrop`  
* **Theme (optional)**: `animals`, `vehicles`, `fantasy`, `schoolTheme`

---

### **3\. Run a Tag Matching Algorithm**

Once both the student profile and activities are tagged:

* **Input Tags (from IEP)** are matched to  
* **Output Tags (from activities)** using a scoring system.

Activities with the **highest tag overlap** (e.g., 4 of 5 tags matched) are prioritized.

*Bonus*: Adjust matching weight based on user feedback and usage success.

---

### **4\. Deliver Adaptive Activity Feed**

Based on match results:

* Recommend 3–5 top-matched activities per session.  
* Include a “Why this activity?” tooltip explaining the match on the parent profile.