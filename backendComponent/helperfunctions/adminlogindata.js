export const adminlogindata = async (authInfo) => {
    try {
        const res = await fetch("/api/adminlogin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(authInfo),
        })
        let data = await res.json();
        console.log(data);
        return data;
      } catch (error) {
        return {
          status : 500,
          msg: error,
        };
      }
}