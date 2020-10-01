import React, { useState, Component } from 'react';
import { View, StatusBar, ImageBackground, Dimensions, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
const Height = Dimensions.get("window").height;
const Width = Dimensions.get("window").width;
import DocumentPicker from 'react-native-document-picker';
export const ImageUpload = ({ navigation }) => {
    let [singleFile, setSingleFile] = useState(null);
    // let uploadImage = async () => {
    //     //Check if any file is selected or not
    //     if (singleFile != null) {
    //       //If file selected then create FormData
    //       const fileToUpload = singleFile;
    //       const data = new FormData();
    //       data.append('name', 'Image Upload');
    //       data.append('file_attachment', fileToUpload);
    //       //Please change file upload URL
    //       let res = await fetch(
    //         '',
    //         {
    //           method: 'post',
    //           body: data,
    //           headers: {
    //             'Content-Type': 'multipart/form-data; ',
    //           },
    //         }
    //       );
    //       let responseJson = await res.json();
    //       if (responseJson.status == 1) {
    //         alert('Upload Successful');
    //       }
    //     } else {
    //       //if no file selected the show alert
    //       alert('Please Select File first');
    //     }
    //   };
    let url = 'file://whatever/com.bla.bla/file.ext'; //The url you received from the DocumentPicker

    // I STRONGLY RECOMMEND ADDING A SMALL SETTIMEOUT before uploading the url you just got.
    const split = url.split('/');
    const name = split.pop();
    const inbox = split.pop();
    // const realPath = `${RNFS.TemporaryDirectoryPath}${inbox}/${name}`;

    const uploadBegin = (response) => {
        const jobId = response.jobId;
        console.log('UPLOAD HAS BEGUN! JobId: ' + jobId);
    };

    const uploadProgress = (response) => {
        const percentage = Math.floor(
            (response.totalBytesSent / response.totalBytesExpectedToSend) * 100
        );
        console.log('UPLOAD IS ' + percentage + '% DONE!');
    };

   
    let selectFile = async () => {
        try {
            const res = await DocumentPicker.pick({
              type: [DocumentPicker.types.allFiles],
            });
            console.log(
              res.uri,
              res.type, // mime type
              res.name,
              res.size
            );
          } catch (err) {
            if (DocumentPicker.isCancel(err)) {
              // User cancelled the picker, exit any dialogs or menus and move on
            } else {
              throw err;
            }
          }
        // try {
        //     const res = await DocumentPicker.pick({
        //         type: [DocumentPicker.types.allFiles],
        //     });
        //     // const fileName = res.uri.replace("file://", "")
        //     alert(res.name)
        //     console.log(
        //         res.uri,
        //         res.type, // mime type
        //         res.name,
        //         res.size
        //     );
        //     // console.log('res : ' + JSON.stringify(res));
        //     setSingleFile(res);
        // } catch (err) {
        //     if (DocumentPicker.isCancel(err)) {
        //         alert('Canceled from single doc picker');
        //         // User cancelled the picker, exit any dialogs or menus and move on
        //     } else {
        //         alert('Unknown Error: ' + JSON.stringify(err));
        //         throw err;
        //     }
        // }
    }
    

    return (
        <View style={styles.mainBody}>
            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 30, textAlign: 'center' }}>
                    React Native File Upload Example
        </Text>
                <Text
                    style={{
                        fontSize: 25,
                        marginTop: 20,
                        marginBottom: 30,
                        textAlign: 'center',
                    }}>
                    www.aboutreact.com
        </Text>
            </View>
            {/*Showing the data of selected Single file*/}
            {singleFile != null ? (
                <Text style={styles.textStyle}>
                    File Name: {singleFile.name ? singleFile.name : ''}
                    {'\n'}
          Type: {singleFile.type ? singleFile.type : ''}
                    {'\n'}
          File Size: {singleFile.size ? singleFile.size : ''}
                    {'\n'}
          URI: {singleFile.uri ? singleFile.uri : ''}
                    {'\n'}
                </Text>
            ) : <Text>hello</Text>}
            <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={selectFile}>
                <Text style={styles.buttonTextStyle}>Select File</Text>
            </TouchableOpacity>
        </View>
    );
};
export default ImageUpload;
const styles = StyleSheet.create({
    mainBody: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    buttonStyle: {
        backgroundColor: '#307ecc',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#307ecc',
        height: 40,
        alignItems: 'center',
        borderRadius: 30,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 15,
    },
    buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16,
    },
    textStyle: {
        backgroundColor: '#fff',
        fontSize: 15,
        marginTop: 16,
        marginLeft: 35,
        marginRight: 35,
        textAlign: 'center',
    },
});

// Pick a single file


// // Pick multiple files
// try {
//   const results = await DocumentPicker.pickMultiple({
//     type: [DocumentPicker.types.images],
//   });
//   for (const res of results) {
//     console.log(
//       res.uri,
//       res.type, // mime type
//       res.name,
//       res.size
//     );
//   }
// } catch (err) {
//   if (DocumentPicker.isCancel(err)) {
//     // User cancelled the picker, exit any dialogs or menus and move on
//   } else {
//     throw err;
//   }
// }//