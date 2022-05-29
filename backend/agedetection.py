# Import required modules
import cv2 as cv
import math
import time
# to detect face from the frame
# it gets images oriented back to the way it is present in model
def getFaceBox(net, frame, conf_threshold=0.7):
    frameOpencvDnn = frame
    frameHeight = frameOpencvDnn.shape[0]
    frameWidth = frameOpencvDnn.shape[1]
    blob = cv.dnn.blobFromImage(frameOpencvDnn, 1.0, (300, 300), [104, 117, 123], True, False)

    net.setInput(blob)
    detections = net.forward()
    bboxes = []
    for i in range(detections.shape[2]):
        confidence = detections[0, 0, i, 2]
        if confidence > conf_threshold:
            x1 = int(detections[0, 0, i, 3] * frameWidth)
            y1 = int(detections[0, 0, i, 4] * frameHeight)
            x2 = int(detections[0, 0, i, 5] * frameWidth)
            y2 = int(detections[0, 0, i, 6] * frameHeight)
            bboxes.append([x1, y1, x2, y2])
            cv.rectangle(frameOpencvDnn, (x1, y1), (x2, y2), (0, 255, 0), int(round(frameHeight/150)), 8)
    return frameOpencvDnn, bboxes
## taking models of face and age
faceProto = "./modelNweight/opencv_face_detector.pbtxt"
faceModel = "./modelNweight/opencv_face_detector_uint8.pb"

ageProto = "./modelNweight/age_deploy.prototxt"
ageModel = "./modelNweight/age_net.caffemodel"

MODEL_MEAN_VALUES = (78.4263377603, 87.7689143744, 114.895847746)
# since this model has 8 channel of segerating the ages thus, 8 range of ages
ageList = ['(0-2)','(4-7)','(8-12)','(13-17)','(18-22)','(25-32)','(38-53)','(60-100)']


# Load network
ageNet = cv.dnn.readNet(ageModel, ageProto)
faceNet = cv.dnn.readNet(faceModel, faceProto)

padding = 20

def age_gender_detector(frame):
    # Read frame
    t = time.time()
    frameFace, bboxes = getFaceBox(faceNet, frame)
    for bbox in bboxes:
        try:
            face = frame[max(0,bbox[1]-padding):min(bbox[3]+padding,frame.shape[0]-1),max(0,bbox[0]-padding):min(bbox[2]+padding, frame.shape[1]-1)]

            blob = cv.dnn.blobFromImage(face, 1.0, (227, 227), MODEL_MEAN_VALUES, swapRB=False)
            ageNet.setInput(blob)
            agePreds = ageNet.forward()
            age = ageList[agePreds[0].argmax()]

            if(age == '(0-2)' or age == '(4-7)' or age == '(8-12)' or age == '(13-17)'):
                content = 'kid'
            else:
                content = 'adult'

        except Exception as e:
            pass
#return age detected
    return content