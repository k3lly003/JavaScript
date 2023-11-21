/*Used async to make the function act asynchronous*/
/*async getData(){
    try{
        /*Used await to make the code wait until promise returns a result*/ /*
        const res = await fetch('URL');
        const data = await res.json();
        return data;
    }catch (err){
        console.log(err);
    }
}*/
//
/*The true codes for the above*/
async function getData() {
  try {
    /* Used await to make the code wait until the promise returns a result */
    const res = await fetch("URL");
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

// To use the `getData` function, you would call it within an async context, such as an async function:

async function fetchData() {
  try {
    const result = await getData();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

// Call the fetchData function to initiate the data fetching process
fetchData();
