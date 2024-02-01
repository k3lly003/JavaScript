// const URL = fetch("URL")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    console.log(res.json());
  })
  .then((data) => {
    data.forEach((user) => {
      const markup = `<li>${user.address.zipcode}</li>`;
      document.querySelector("ul").insertAdjacentHTML("beforeend", markup);
    });
  })
  .catch((error) => {
    console.log(error);
  });
