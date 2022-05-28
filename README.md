# Smart-Advertising #

## Table of Contents
  - [Problem Statement](#problem-statement)
  - [Idea](#idea)
  - [Description of Project](#description-of-project)
  - [Overview of the Project](#overview-of-the-project)
  - [Interfaces and its explanation](#interfaces-and-its-explanation)
  - [Environment Setup](#environment-setup)
  - [Permission required to run](#permission-required-to-run)
  - [Code Structure of files added from general structure](#code-structure-of-files-added-from-general-structure)
  - [Common Error Faced](#common-error-faced)
  - [Future Scope](#future-scope)
  - [Tools and Languages Used](#tools-and-languages-used)
  - [Project Development Timeline](#project-development-timeline)

## Problem Statement
<p>
Advertisements are one of the primary way for increasing the market size of the products. Advertisements are introduced in common web-abb too. Smart advertising for showing products to target audiences will increase the efficiency.</p>
Scenario:-
<br />
An adult has account in a web-app. This web-app shows ads for both adult and kids. When adult gives this to any kid to use, kid come across with this adult ads too. This doesnot provide any positive impact to the kid in terms of buying product but has non ethical impact. The problem is to find an efficient method to show advertisements to the audiences without having non-ethical impact to the users. 

## Idea 
The main idea is to promote smart advertising. Advertisement when shown to proper and target audience makes proper sense. Keeping this key concept and the problem statement, the project uses **facial recognition** and **age detection** to distinguish users as per their detected age and show advertisement according to that. <br />
So, 18+ advertisements will not be shown to below 18 years age users.

## Description of Project
This project web-app UI ans tasks are **inspired from Youtube web**. So, the interface is similar to the Youtube web with functionalities to 
  - watch videos
  - see related videos
  - comment to a video
  - see subscribed channels
  - disable to allow adult ads
<br />
The above tasks can be <strong>performed with the use of youtube api. This api has 10,000 quota. Each tasks have certain number of quotas to work with. Once, this quota is over. This tasks cannot be performed(As task was to concern more over facial recognition since it is the topic)</strong>. Go to <strong>Common Error Faced</strong> for solving this error.
In this platform, user gets authenticated with their face first then google authentication takes place. Once, user gets into the platform and perform tasks, camera identifies the face of the user and detects its age. As per the age, advertisements are shown.

## Overview of the Project
<p align="center">
<img width="460" alt="image" src="https://user-images.githubusercontent.com/92020810/170827322-e2be044d-2150-4b68-ab05-a9c5e03a3db3.png">
</p>

## Interfaces and its explanation
- The landing page when you run the project
  <p align="center">
    <img width="960" alt="image" src="https://user-images.githubusercontent.com/92020810/170828619-a295d387-0f39-4e0e-86ac-1a1ed6920e0a.png">
  </p> 
  a. click "Open"
    <p align="center">
      <img width="479" alt="image" src="https://user-images.githubusercontent.com/92020810/170828851-80496757-efd2-4dd5-950c-cf18acf58522.png">
    </p>
    <p align="center">
      <img width="481" alt="image" src="https://user-images.githubusercontent.com/92020810/170829504-3944dcdc-4a19-49f1-8bb2-834209b52fa0.png">
      <br />
      Note: Use google account which you have account in Youtube
    </p>
  b. click "Create Account" and opens to Sign In page
    <p align="center">
      <img width="482" alt="image" src="https://user-images.githubusercontent.com/92020810/170829168-fe07c579-955b-4123-a429-f2f3186ac03e.png">
    </p>
    After creating account
    <p align="center">
      <img width="960" alt="image" src="https://user-images.githubusercontent.com/92020810/170829288-c40b5acc-2667-41f4-a2a0-25d676122c3b.png">
    </p>
- After successful login, enters to Home Page
  <p align="center">
    <img width="960" alt="image" src="https://user-images.githubusercontent.com/92020810/170830293-cd077c9c-f3d4-41d2-9f8d-d70e72ac02f9.png">
  </p>
- Click on any video and direct to watch screen
  <p align="center">
    <img width="960" alt="image" src="https://user-images.githubusercontent.com/92020810/170830484-332cfd7c-1898-44be-945d-79d56800fdff.png">
  </p>
- search query to get results
  <p align="center">
    <img width="960" alt="image" src="https://user-images.githubusercontent.com/92020810/170830519-b4239b8e-b228-4ca5-bc81-5d30ce2d3eb3.png">
  </p>
- Subscription channel
  <p align="center">
    <img width="960" alt="image" src="https://user-images.githubusercontent.com/92020810/170830557-374d9f32-7e42-49b8-887c-2301340311df.png">
  </p>
## Environment Setup
- Clone the repository:
  ```
  git clone"https://github.com/dewanshiPaul/Smart-Advertising.git"
  ```
- Go inside folder name "backend"
  1. Open terminal or command prompt in this folder
  2. Create a virtual environment
     Write the following command in the terminal/command prompt.
     ```
     python -m venv venv
     ```
  3. Enter inside the virtual environment
     Write the following command in the terminal/command prompt. <br />
     for windows
     ```
     "venv\Scripts\activate" 
     ```
     for mac-os
     ```
     source venv/bin/activate 
     ```
  4. Install modules
     Write the following command in the terminal/command prompt.
     ```
     pip install -r requirements.txt
     ```
  5. Run the backend
     Write the following command in the terminal/command prompt.
     ```
     flask run
     ```
- Go inside folder name "frontend"
  1. Open terminal or command prompt in this folder.
  2. Install node packages.
      Write the following command in the terminal/command prompt.
     ```
     npm install
     ```
  4. Start the frontend
     Write the following command in the terminal/command prompt.
     ```
     npm start
     ```

## Permission required to run
- Allow camera access

## Code Structure of files added from general structure
- Backend
  ```
  |-------known_faces (stores all user's images whoever has created account. Images name are set as the username set by user during creating account)
  |-------new_face (stores an image for facial recognition during login)
  |-------modelNweight (stores age and face detection models for detecting age of the user when he/she is working in the web app)
  |            |----------age_deploy.prototxt 
  |            |----------age_net.caffemodel
  |            |----------opencv_face_detector_unit8.pb
  |            |----------opencv_face_detector.pbtxt
  |-------agedetection.py (code for detecting age of the user)
  |-------app.py (code for flask to route through different pages)
  |-------facerecognition_v1.py (code for implementing face recognition while login. Model used here is different as per used in age detection as here accuracy matters more and fast too whereas there orientation of face also matters.)
  ```
- Frontend
  ```
  |-------src (folder)
  |        |-----------adsimages
  |        |               |--------adult (stores all ads images for adults)
  |        |               |--------kids  (stores all ads images for kids)
  |        |-----------components
  |        |               |--------adsheader (for implementing header for ads to display)
  |        |               |--------comment (for implementing each comments UI)
  |        |               |--------comments (for implementing comments UI)
  |        |               |--------content (for implementing each video box UI)
  |        |               |--------header (for implementing each top header UI)
  |        |               |--------comment (for implementing each screens for each tasks UI)
  |        |               |--------sidebar (for implementing side navigation UI)
  |        |               |--------skeletonframe (for implementing skeleton frames while loading UI)
  |        |               |--------videometadata (for implementing video description and details section UI)
  |        |               |--------videonext (for implementing related video section UI)
  |        |-----------redux
  |        |             |----------action (for implementing all the action states of redux)
  |        |             |----------reducer (for implementing all the reducer states of redux)
  |        |             |----------actiontype (for implementing all variable to action types of redux)
  |        |             |----------store (for implementing all the store of redux)
  |        |-----------apiFromYoutube (for storing api from youtube)
  |        |-----------firebase (for configurating our app with firebase)
  |--------.env.api (environment variable)
  
  ```

## Common Error Faced
- Error 403: This error is caused when certain quota of youtube api is exhausted for the current day. For this to resolve, you can either use this application after 24 hourse or create new account in firebase. <br />
  1. Go to the website ``` https://firebase.google.com/ ```
  2. Login with an account 
  3. Click on "Go to Console" <img width="940" alt="image" src="https://user-images.githubusercontent.com/92020810/170839546-3c721ebe-43e9-4309-909e-88417523513b.png"> 
  4. Click on "Add project" <p align="center"> <img width="287" alt="image" src="https://user-images.githubusercontent.com/92020810/170839696-0d2646ad-6cf8-4fd4-bc04-5909c32ec4ca.png"> </p> 
  5. Fill it <p align="center"> <img width="533" alt="image" src="https://user-images.githubusercontent.com/92020810/170839757-f1b1f9a5-c113-4d0b-9b67-2952733925a3.png"> </p>
  6. Continue to next step and disable "Enable Google Analytics for this project" <p><img width="267" alt="image" src="https://user-images.githubusercontent.com/92020810/170839806-2f75190c-bb71-4a8e-b6ad-9955f482e041.png"></p>
  7. Click "Create Project"
  8. Once project is created click "Continue"
  9. Page redirects where you have to click </> button <p align="center"><img width="304" alt="image" src="https://user-images.githubusercontent.com/92020810/170839889-cb362623-b3fc-4a3a-98ec-0bec7da6b89a.png"></p>
  10. Register your app with proper or unique name <p align="center"><img width="463" alt="image" src="https://user-images.githubusercontent.com/92020810/170839916-3da37f2b-5916-449b-907b-9bbba43d387c.png"></p>
  11. Once above step is completed, you will be provided with firebase configurations. Copy the highlighted portion. <p align="center"><img width="719" alt="image" src="https://user-images.githubusercontent.com/92020810/170839995-9f7cdefe-43ec-47c9-ab91-aef0e506b9aa.png"></p>
  12. Open your code editor, go to frontend>firebase.jsx. Inside firebaseConfig function, comment the previous details and paste them inside it. Save the file.
  13. Come to firebase, Click "Continue to console" present inside the Firebase SDK or the page in step 10.
  14. Under Project Overview, click "Authentication". <p align="center"><img width="189" alt="image" src="https://user-images.githubusercontent.com/92020810/170840204-eeb5450e-ed1f-4182-a64c-9b7252449776.png"></p>
  15. Click on "Get Started" <p align="center"><img width="317" alt="image" src="https://user-images.githubusercontent.com/92020810/170840227-93b91430-0d5c-4b21-8ed9-345bd9737ca0.png"></p>
  16. Click on "Google" <p align="center"><img width="160" alt="image" src="https://user-images.githubusercontent.com/92020810/170840244-5d8577bd-2d34-4c5c-b340-8bda683d4e40.png"></p>
  17. Click on "Enable" <p align="center"><img width="496" alt="image" src="https://user-images.githubusercontent.com/92020810/170840273-49db50cf-2f36-4330-ad37-f6a1e6da2414.png"></p>
  18. Provide your logged in account in the firebase in the field <p align="center"><img width="376" alt="image" src="https://user-images.githubusercontent.com/92020810/170840309-0cf9c64b-96ef-4f93-bd2e-76d95a38b74a.png"></p>
  19. Click "Save".
  20. Go to ```https://console.cloud.google.com/```
  21. Sign in with the account with which you created account in firebase for project.
  22. Click here to search your project over this tab.<p align="center"><img width="123" alt="image" src="https://user-images.githubusercontent.com/92020810/170840427-4575d867-82e9-45a5-813f-0c6048cdcc44.png"></p>
  23. A modal comes where click "All" to get list of all the projects you created in firebase. <p align="center"><img width="542" alt="image" src="https://user-images.githubusercontent.com/92020810/170840484-bc78bb4f-2978-4b75-a76f-58150bcf3b2b.png"></p>
  24. Click "Open"
  25. Open Navigation menu by clicking "three horizontal bar icon". Click on highlighted one. <p align="center"><img width="213" alt="image" src="https://user-images.githubusercontent.com/92020810/170840559-288e0957-d4ac-4f73-a3ae-af53cbbfc06a.png"></p>
  26. A dashboard opens. Click on highlighed one. <p align="center"><img width="535" alt="image" src="https://user-images.githubusercontent.com/92020810/170840597-3f28568e-9540-40fb-a5be-c1c77bc5d2f8.png"></p>
  27. A new page with search box opens. Type "Youtube" and enter. You will see apis related to youtube. Click the marked one. <p align="center"><img width="946" alt="image" src="https://user-images.githubusercontent.com/92020810/170840738-f6cfd9e7-4267-4a32-9779-68957423e087.png"></p>
  28. Initially you will see "Enable" button. <p align="center"><img width="477" alt="image" src="https://user-images.githubusercontent.com/92020810/170840826-e26066b8-b324-4c75-a814-3d33831039b1.png"></p> Click on it to enable it.
  29. Click on highlighted menu <p align="center"><img width="186" alt="image" src="https://user-images.githubusercontent.com/92020810/170840935-455e3e22-0969-4e52-b86b-0b1f38c83f04.png"></p>
  30. Click on "Show Key" under API Keys.<p align="center"><img width="758" alt="image" src="https://user-images.githubusercontent.com/92020810/170840985-927df71b-d4e0-462e-9c1b-2060e9f3fde5.png"></p>
  31. Copy the API KEY is shown.
  32. Move to your editor. In .env.api replace the content in the string with the content you just copied.
- Error 401: This error is caused when your google authorized account is not authenticated properly for youtube api to get access to requests. This will not allow you to see subscribed channels, comment. To solve this, just Log out from the web app and login again.
- Error axios: This is mostly when your face is not properly located in the webcam section. Try to place your face properly.
- Webcam not showing: This is because your browser may not be updated. Update your browser.

## Future Scope
This idea can be implemented to various other to web apps to allow proper advertising with more parameters like race, gender or emotions to make advertisements more segregatable and shown to targeted audiences.

## Tools and Languages Used
<p float="left">
<img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" width="50" height="50" />
  &nbsp
<img src="https://user-images.githubusercontent.com/92020810/170826134-31c876e3-4625-482c-b7c5-e8bf6926c037.png" width="50" height="50" />
  &nbsp
<img src="https://user-images.githubusercontent.com/92020810/170825999-a153e85d-8cf8-49bb-9f02-b6743a02fef4.png" width="50" height="50" />
  &nbsp
<img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sass/sass.png" width="50" height="50" />
  &nbsp
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" width="50" height="50" />
  &nbsp
<img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" width="50" height="50" />
  &nbsp
<img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png" width="50" height="50" />
  &nbsp
<img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/firebase/firebase.png" width="50" height="50" />
  &nbsp
<img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" width="50" height="50" />
</p>

## Project Development Timeline
<p>
  1st week: Brainstorming and noting down all the ideas came into mind.
</p>
<p>
  2nd week: Decided with topic to work on and tech stacks to work on.
</p>
<p>
  3rd week: Started developement 
</p>
<p>
  4th week: Completed project and testing. Preparing documents and github repository for submission
</p>
