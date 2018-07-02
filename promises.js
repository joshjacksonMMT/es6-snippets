// Promises

/*
  * Grab the JSON data from the given url and THEN when it has come back in the form of
  * response. Return another promise with the response converted to JSON and THEN when 
  * that promise has resolved, giving the json, log it to the console. If any of the fetch
  * request promises are rejected, it will go to the catch function, giving an error object.
  * 
  * With fetch(), a request won't be rejected if the error is a HTTP status error. (eg. 404, 500).
*/
fetch('http://mysafeinfo.com/api/data?list=englishmonarchs&format=json')
  .then(response =>
  {
    if (!response.ok)
    {
      throw Error(response.statusText);
    }

    return response.json();
  })
  .then(json =>
  {
    console.log(json);
  })
  .catch(err =>
  {
    console.log(err);
  });