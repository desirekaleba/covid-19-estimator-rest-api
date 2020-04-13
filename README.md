# #BuildForSDG assessment REST-api

> A simplified COVID-19 infection impact estimator api

This is an eligibility assessment for the 2020 [#BuildforSDG](https://buildforsdg.andela.com/) program

The assessment empowers me to **attempt** helping society and leaders prepare for the **real big problem** of COVID-19, which is **its impact on lives, health systems, supply chains, and the economy**:

> 1. Too many patients, not enough hospitals and beds. A serious shortage of ventilators, masks and other PPE - if *we don’t practice social distancing*.
> 2. Job losses or freezes, low cash flow and low production (even for essentials like food). These and more from too many people being sick, a sizable number dying (including some of the best people in many fields), and many others affected by the impact of losing loved ones or a world operating in slow motion

## Routes

### POST

***`/api/v1/on-covid-19`***
take the input data and return the estimation for
it in JSON format. an example is:

```js
{
    "data": {
        "region": {
            "name": "Africa",
            "avgAge": 19.7,
            "avgDailyIncomeInUSD": 5,
            "avgDailyIncomePopulation": 0.71
        },
        "periodType": "days",
        "timeToElapse": 58,
        "reportedCases": 674,
        "population": 66622705,
        "totalHospitalBeds": 1380614
    },
    "impact": {
        "currentlyInfected": 6740,
        "infectionsByRequestedTime": 3533701120,
        "severeCasesByRequestedTime": 530055168,
        "hospitalBedsByRequestedTime": -529571954,
        "casesForICUByRequestedTime": 176685056,
        "casesForVentilatorsByRequestedTime": 70674022,
        "dollarsInFlight": 216286878
    },
    "severeImpact": {
        "currentlyInfected": 33700,
        "infectionsByRequestedTime": 17668505600,
        "severeCasesByRequestedTime": 2650275840,
        "hospitalBedsByRequestedTime": -2649792626,
        "casesForICUByRequestedTime": 883425280,
        "casesForVentilatorsByRequestedTime": 353370112,
        "dollarsInFlight": 1081434394
    }
}
```

***`/api/v1/on-covid-19/json`***
This returns the same result as the above.

***`/api/v1/on-covid-19/xml`***
This is somehow similar but returns a xml data format. Example below

```xml
<data>
    <region>
        <name>Africa</name>
        <avgAge>19.7</avgAge>
        <avgDailyIncomeInUSD>5</avgDailyIncomeInUSD>
        <avgDailyIncomePopulation>0.71</avgDailyIncomePopulation>
    </region>
    <periodType>days</periodType>
    <timeToElapse>58</timeToElapse>
    <reportedCases>674</reportedCases>
    <population>66622705</population>
    <totalHospitalBeds>1380614</totalHospitalBeds>
</data>
<impact>
    <currentlyInfected>6740</currentlyInfected>
    <infectionsByRequestedTime>3533701120</infectionsByRequestedTime>
    <severeCasesByRequestedTime>530055168</severeCasesByRequestedTime>
    <hospitalBedsByRequestedTime>-529571954</hospitalBedsByRequestedTime>
    <casesForICUByRequestedTime>176685056</casesForICUByRequestedTime>
    <casesForVentilatorsByRequestedTime>70674022</casesForVentilatorsByRequestedTime>
    <dollarsInFlight>216286878</dollarsInFlight>
</impact>
<severeImpact>
    <currentlyInfected>33700</currentlyInfected>
    <infectionsByRequestedTime>17668505600</infectionsByRequestedTime>
    <severeCasesByRequestedTime>2650275840</severeCasesByRequestedTime>
    <hospitalBedsByRequestedTime>-2649792626</hospitalBedsByRequestedTime>
    <casesForICUByRequestedTime>883425280</casesForICUByRequestedTime>
    <casesForVentilatorsByRequestedTime>353370112</casesForVentilatorsByRequestedTime>
    <dollarsInFlight>1081434394</dollarsInFlight>
</severeImpact>
```

### GET

***`/api/v1/on-covid-19/logs`***
End at last this gets the logs and return them in text form. Example returned data:

```txt
POST    /api/v1/on-covid-19/    200     4.230 ms
POST    /api/v1/on-covid-19/    200     0.832 ms
POST    /api/v1/on-covid-19/xml    200     3.718 ms
POST    /api/v1/on-covid-19/json    200     0.665 ms
POST    /api/v1/on-covid-19/json    200     0.481 ms
GET    /api/v1/on-covid-19/logs    200     2.829 ms
POST    /api/v1/on-covid-19    200     3.856 ms
POST    /api/v1/on-covid-19/json    200     1.260 ms
POST    /api/v1/on-covid-19/xml    200     1.471 ms
GET    /api/v1/on-covid-19/logs    200     6.546 ms
POST    /api/v1/on-covid-19/    200     6.861 ms
POST    /api/v1/on-covid-19/xml    200     3.831 ms
```
