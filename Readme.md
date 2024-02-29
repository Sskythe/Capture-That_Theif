Criminal Capture Game

A notorious criminal escape artist has vanished again! However, the criminal may be hiding in only one of the possible 5 neighboring cities. Three fearless cops have volunteered to capture the fugitive, and they need your help!
Technologies

    Frontend: React
    Backend: NodeJS

Gameplay
City Selection

Each cop independently chooses one city from below to investigate:
City	Distance from current city
Yapkashnagar	60 KM
Lihaspur	50 KM
Narmis City	40 KM
Shekharvati	30 KM
Nuravgram	20 KM
Vehicle Selection

Based on the chosen city's distance, each cop selects an electric vehicle considering its range and availability:
Kind	Range	Count
EV Bike	60 KM	2
EV Car	100 KM	1
EV SUV	120 KM	1
Result

The system determines if any cop successfully found the fugitive (simulated). If found, it displays the name of the cop who made the successful capture.
Technical Requirements
Frontend

    Develop screens for:
        Start/Landing page
        Selection of city for each cop
        Selection of vehicle options for each cop
        Result page indicating the capture status and, if successful, the capturing cop's name.

Backend (NodeJS)

    Use correct data structures to store city names, distances, and vehicle properties (range, count), and CRUD operations for the same.
    Simulate the fugitive's location in one of the cities (randomly).
    Based on cop choices and simulated location, determine if any cop successfully captured the fugitive.

ReadMe
Assumptions

    The game simulation assumes a simplified scenario where distances between cities are linear and vehicles travel at a constant speed.
    The capturing mechanism is based on the closest cop to the fugitive's location.

Build steps:

1. clone the project from the github repo using command
2. To install all the dependancies run command - npm install
3. To run the backend go to the folder - CopVThievesBE and run command - node Index.js
4. To run the frontend go to the folder - CopVThievesFE and run command - npm run dev

Contributors
	- Saroj Kumar Bhuyan
