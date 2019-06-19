import * as firebase from 'firebase';

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { 
    firebase, 
    googleAuthProvider,
    database as default 
};


// if (process.env.NODE_ENV === 'development') {
//     database.ref().remove();
//     database.ref('points').push({
//         createdAt: 1559781052040,
//         dateCompleted: null,
//         description: "Clear Table",
//         isDone: 0,
//         name: "cleartable"
//     });
//     database.ref('points').push({
//         createdAt: 1559826457643,
//         dateCompleted: null,
//         description: "Piano",
//         isDone: 0,
//         name: "piano"
//     });
//     database.ref('points').push({
//         createdAt: 1558454400000,
//         dateCompleted: null,
//         description: "Clean Room",
//         isDone: 1,
//         name: "cleanroom"
//     });
// }











// // child_remove
// database.ref('points').on('child_removed', (snapshot) => {
//     console.log(`${snapshot.key} has been removed: ${snapshot.val()}`)
// });

// // child_changed
// database.ref('points').on('child_changed', (snapshot) => {
//     console.log(`${snapshot.key} has been updated: ${snapshot}`)
// });

// // child_added
// database.ref('points').on('child_added', (snapshot) => {
//     console.log(`${snapshot.key} has been added: ${snapshot.val()}`)
// });

// database.ref('points')
//     .on('value', (snapshot) => {
//         const points = [];
        
//         snapshot.forEach((childSnapshot) => {
//             points.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })

//         console.log(points);
//     });

// database.ref('points').push({
//     chore: 'cleartable',
//     name: 'Clear Table',
//     isDone: false
// });

// database.ref('points').push({
//     chore: 'cleanroom',
//     name: 'Clean Room',
//     isDone: false
// });

// database.ref('points').push({
//     chore: 'piano',
//     name: 'Piano',
//     isDone: false
// });

// database.ref('notes/-LgSyQxH3KFPmQQyHCq4').update({
//     isDone: true
// })

// setTimeout(() => {
//     database.ref('notes/-LgSyQxH3KFPmQQyHCq4').remove();
// }, 3000);

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}. He is ${val.age} years old. He lives in ${val.location.city}, ${val.location.country}`);
// });

// setTimeout(() => {
//     database.ref().update({ 'location/city': 'NJ' });
// }, 3000);

// database.ref().off();

// database.ref().update({ 'location/city': 'Rutherford' });

// database.ref('location').once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log(e);
//     })

// database.ref().set({
//     name: 'Jon Maldia',
//     age: 25,
//     stressLevel: 7,
//     job: {
//         title: "Maker",
//         company: "Ten Cadence"
//     },
//     isSingle: false,
//     location: {
//         city: 'New York',
//         country: 'USA'
//     }
// })
//     .then(() => {
//         console.log('Data is saved');
//     })
//     .catch((e) => {
//         console.log('This failed: ', e);
//     });

// setTimeout(() => {
//     database.ref().update({
//         stressLevel: 9,
//         'job/company': 'Apple',
//         city: 'Rutherford',
//         'location/city': 'Borough of Rutherford'
//     })
// }, 7000);

// database
//     .ref('city')
//     .remove()
//     .then(() => {
//         console.log('Data removed');
//     })
//     .catch((e) => {
//         console.log('Removal failed ', e)
//     });



// database.ref('age').set(43);

// database.ref('attributes').set({
//     height: '5ft 4in',
//     weight: 160
// })
//     .then(() => {
//         console.log('Data updated');
//     })
//     .catch((e) => {
//         console.log('Uh oh, something happened. ERROR: ', e);
//     });
