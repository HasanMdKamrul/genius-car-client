const sendPayLoad = async (currentUser) => {
  try {
    const response = await fetch(
      `https://genius-car-server-ruby.vercel.app/jwt`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      }
    );

    const data = await response.json();

    const token = data.token;

    localStorage.setItem("geniusToken", token);
  } catch (error) {
    console.log(error);
  }
};

export default sendPayLoad;
