from msilib.schema import Directory
from flask import Flask,request
from flask_cors import CORS
import json
from facerecognition_v1 import Face_Recognition
from PIL import Image
import io
import base64
import os
import shutil
import base64
import numpy as np
import cv2
import agedetection as ad

#initiation
app = Flask(__name__)
CORS(app)

app.config['UPLOAD_FOLDER'] = os.path.join('.','known_faces')
#route to create account
@app.route('/signIn',methods=['POST'])
def signIn():
    file = request.files['file']
    extension = file.filename[file.filename.rindex("."):]
    path = os.path.join(app.config['UPLOAD_FOLDER'], request.form['name']+extension)
    file.save(path)
    # print(request.form)
    return "Done"
#route to login user
@app.route('/login',methods=["GET",'POST'])
def login():
    data = request.get_json()
    print(data)
    directory = './new_face'
    res = 'place face properly' #default
    if data:
        if os.path.exists(directory):
            shutil.rmtree(directory)

        if not os.path.exists(directory):
            try:
                os.mkdir(directory)
                result = data['imagebase']
                b=bytes(result,'utf-8')
                image = b[b.find(b'/9'):]
                im = Image.open(io.BytesIO(base64.b64decode(image))) #converts base64 code from frontend to frame 
                im.save(directory+'/stranger.jpeg')
                filesFound = False
                for files in os.listdir("./known_faces"):
                    if files.startswith(data['username']): #user with provided username file present match faces
                        filesFound = True
                        Face = Face_Recognition('./known_faces/'+files,directory,data['username'])
                        faceDetected = Face.recognize_face()
                        print(faceDetected)
                        
                        if faceDetected == "Face not recognised":
                            res = "Face not recognised"

                        else:
                            res = 'Face detected'
                if(filesFound == False): #user with given name file doesnot
                    res = 'User does not exist'
                    
            except Exception as e:
                print(e)
                pass
    return res
#route to detect age of user 
@app.route('/verify',methods=["GET","POST"])
def verify():
    data = request.get_json()
    #converting base64 to frame
    try:
        result = data['data']
        b=bytes(result,'utf-8')
        im_b64 = b[b.find(b'/9'):]
        im_bytes = base64.b64decode(im_b64)
        im_arr = np.frombuffer(im_bytes, dtype=np.uint8)  # im_arr is one-dim Numpy array
        img = cv2.imdecode(im_arr, flags=cv2.IMREAD_COLOR)
        response = ad.age_gender_detector(img)
    except Exception as e:
        print(e)
        pass
    return response

if __name__ == '__main__':
    app.run(debug=True)