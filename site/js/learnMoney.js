axios
  .get("https://gateway.dev.cpwys.co/api/v1/content/fetch/learnmoney")
  .then((resp) => {
    console.log(resp);
  })
  .catch((err) => {
    console.error(err);
  });
