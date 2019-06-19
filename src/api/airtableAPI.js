const airtableApiKey = process.env.REACT_APP_AIRTABLE_API_KEY;

const Airtable = require('airtable');
const base = new Airtable({apiKey: airtableApiKey}).base('apprhcVcEVdDbLoDC');

// TODO:
// 1. Add Points
//  ✅ a. create form  ✅ b. connect form with api
// 2. Display Current Week Points
//  a. create display  b. connect form with api
// 3. Display Weekly Points
//  a. create display  b. connect form with api

// let balance = 0

export const listRecords = () => base('Weekly Summary').select({
    // Selecting the first 3 records in Grid view:
    // maxRecords: 5,
    
    view: "Grid view"
});

export const submitPoints = (e, chores, weekNumber) => {
    let weeklyPoints = []; 
    let dayOfWeek = e.target.dayofweek.value;

    // chores is an array of Form field name and Airtable field names
    // This code block stores objects into an array 
    // of the airtable Field Names 
    // and their corresponding values for the week
    chores.forEach((chore) => {
        const value = Object.values(chore);
        const key = Object.keys(chore);
        let point = parseInt(e.target[key].value);

        if (!point) {
            point = 0;
        }

        let obj = {};
        obj[value] = point;

        weeklyPoints.push(obj);
    });

    // This object will be passed to airTable's create API
    let createObj = {
        "Week": weekNumber,
        "Day of the Week": dayOfWeek,
        "Date": "2019-03-10"
    }

    // This creates new properties on the above object that
    // adds the Airtable fields and values for the week
    weeklyPoints.forEach((weeklyPoint) => {
        createObj[Object.keys(weeklyPoint)] = Object.values(weeklyPoint)[0];
    })
    
    base('Points').create(createObj, function(err, record) {
          if (err) { console.error(err); return; }
          console.log(record.getId());
    });
}

export const updateWeekly = () => base('0').find('rechG6uIDYBPqfZE7', function(err, record) {
    if (err) { console.error(err); return; }
    console.log(record);
});