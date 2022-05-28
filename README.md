# Smart-Advertising

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
## Installation/Environment Setup
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
     Write the following command in the terminal/command prompt.
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
