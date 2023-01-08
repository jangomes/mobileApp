# mobileApp
# 21944 - Janaina Gomes da Silva

YouTube Video:
https://youtu.be/7_idUCsDn7s


Mobile APP CA4 - Janaina Gomes

This repository contains an application made by the student Janaina as part of Dorset College BSc Year 3 assignment CA1,
The objective of this project is to develop a mobile app to showcase in map places of literary importance in Ireland and surrounding areas, related to poets, patrons, publishers in Ireland who lived in the 16th and 17th century. The requirements are as follows and all requirements carry equal weightage

Requirements Checklist:

1 - Display markers on the map

[x] - Load places and place types JSON data1

[x] - Display marker for all places using GPS coordinates

[x] - Use different colours, one for each place type

[x] - When marker is tapped, place name should be displayed on a pop-up info window

2 - Show extended information

[x] - When the pop up info window is tapped, show in full screen all details of the place (id, name, Gaelic name, type, GPS coordinates)

[x] - Show the image of the place loaded from the internet2

[x] - Show a back button, when pressed, go back to map view

3 - Allow filtering by Place Type

[ ] - Show dropdown for selecting Place Type, default value should be all

[ ] - When a specific Place Type is selected, show only the places with this Place Type on the map

4 - Allow custom marker

[ ] - Long Press anywhere on map to show a draggable marker

[ ] -  Show distance3 to the nearest place (from the downloaded data), and on drag marker, update this info

[ ] - Draw a semi-transparent blue circle around this marker with a radius of 10 km and show number of places within this radius


ASSIGNMENT SOLUTION:
The project had several challenges, starting with the creation of the map that I managed to solve following the tutorials found in the reference.  All steps had their degree of difficulty and with intense research I managed to solve the problems found along the way, but as the degree of complexity of the work increased, I could not find any clear solution on how to solve the code and implement the solution in my project that was already underway.  As for example the Dropdown that could be implemented I tried to follow all the available tutorials and introduce the solution in my code, but without success I failed in all attempts and also added an array to be able to generate the markers I added the code and tried to generate the markers through Onclick, every time the map was clicked I would have to add the latitude and longitude to the array and generate the marker, but that didn't work either.  Some of the solutions found will be in the reference, despite not being able to reproduce the desired effect, I will leave the research done related to the missing parts.  I managed to drag the markers, this was one of the requirements after the marker was created, I managed to create the circle on the map, but I disabled it because I could not create the marker.  Detail images are taken from the Internet, information is captured through fetches.  Despite not being able to solve a part of the project I managed to learn a lot more now and understand how the commands worked.


References:
Reda, A. (2022) React-native-select-dropdown, npm. NPM. Available at: https://www.npmjs.com/package/react-native-select-dropdown

Lencioni, J. and Tarano, N. (2022) React-native-maps, npm. NPM. Available at: https://www.npmjs.com/package/react-native-maps?activeTab=readme

React Native Maps Mini Course (2021) YouTube. YouTube. Available at: https://www.youtube.com/watch?v=qlELLikT3FU&ab_channel=DarwinTech 

How to Use Google Maps in React Native (2019) YouTube. YouTube. Available at: https://www.youtube.com/watch?v=AzjWv1X-uyg&ab_channel=TheFlutterFactory


