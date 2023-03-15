export const studentsignupdata = async (authInfo) => {
  try {
    const res = await fetch("/api/studentsignup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(authInfo),
    })
    let data = await res.json();
    console.log(data);
    return {
      status : res.status,
      data : data,
    };
  } catch (error) {
    return {
      status : res.status,
      data: error,
    };
  }
};