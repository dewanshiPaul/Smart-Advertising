import face_recognition
import numpy as np
import os

class Face_Recognition:
    
    def __init__(self,known_person_path_file,unknown_image_path_file,known_name): 
        self.known_person_path_file = known_person_path_file
        self.unknown_image_path_file = unknown_image_path_file
        self.known_name = known_name

    def recognize_face(self):
        for file in os.listdir(self.unknown_image_path_file):
            name = ''

            if file[0]!='.': #load images to encode
                known_image = face_recognition.load_image_file(self.known_person_path_file)
                known_image_encoding = face_recognition.face_encodings(known_image)[0]
                known_image_encodings = [known_image_encoding]
                known_face_names = [self.known_name]
                #load unknown images to encode
                unknown_image = face_recognition.load_image_file(self.unknown_image_path_file+'/'+file)

                face_locations = face_recognition.face_locations(unknown_image)
                face_encodings = face_recognition.face_encodings(unknown_image,face_locations)
                #detect both encodings for finding match
                for (top,right,bottom,left),face_encode in zip(face_locations, face_encodings):
                    match_detected = face_recognition.compare_faces(known_image_encodings,face_encode)
                    name = "Face not recognised"

                    face_distances = face_recognition.face_distance(known_image_encodings,face_encode)
                    best_match_index = np.argmin(face_distances)

                    if match_detected[best_match_index]:
                        name = known_face_names[best_match_index]
                        return name
                                        
                return name