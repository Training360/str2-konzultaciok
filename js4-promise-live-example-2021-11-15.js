const url1 = 'https://ra.githubusercontent.com/openfootball/football.json/master/2020-21/at.1.json';
const url2 = 'https://raw.githubusercontent.com/openfootball/football.json/master/2020-21/ch.1.json';
const url3 = 'https://raw.githubusercontent.com/openfootball/football.json/master/2020-21/hu.1.json';

const req1 = fetch(url1).then( response => response.json() );
const req2 = fetch(url2).then( response => response.json() );
const req3 = fetch(url3).then( response => response.json() );

Promise.allSettled([req1, req2, req3]).then(
    teams => console.log(teams)
).catch(
    err => console.error(err),
);