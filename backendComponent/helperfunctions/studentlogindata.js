export const studentlogindata =async (authInfo) => {
    const res=await fetch("/api/studentlogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(authInfo),
    })
    // .then((res) => res.json())
    // .then((data) => data)
    // .catch((err) => console.log(err));

    let data=await res.json();
    return data;
  }