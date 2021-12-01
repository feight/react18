import fetch from "cross-fetch";

export function fetchData() {
    let userPromise = fetchUser();

    return {
      user: wrapPromise(userPromise)
    };
  }

  function wrapPromise(promise: Promise<unknown>) {
    let status = "pending";
    let result: any;
    let suspender = promise.then(
      (r: any) => {
        status = "success";
        result = r;
      },
      (e: any) => {
        status = "error";
        result = e;
      }
    );
    return {
      read() {
        if (status === "pending") {
          throw suspender;
        } else if (status === "error") {
          throw result;
        } else if (status === "success") {
          return result;
        }
      }
    };
  }

  async function fetchUser() {
    const res = await fetch(`https://www.businesslive.co.za/apiv1/pub/articles/get-all`);
    console.log("CHECKING HERE");
    return res.json()
  }

