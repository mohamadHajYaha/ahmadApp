export const baseUrl = "https://mohamad-server.onrender.com"

export const login = async (body) => {
  const url = "/login";
  return await fetchApi(url, "POST",  body );
};

export const createUser = async (body) => {
  const url = "/createUser";
  console.log('body is', {body});
  
  return await fetchApi(url, "POST", body);
};
export const findAllProduct = async (body) => {
  const url = "/findAllProduct";
  console.log ('body is' , body);

  return await fetchApi(url , "POST" , body); 

}
export const UpdateUser = async (body) => {
  const url = "/UpdateUser";
  console.log ('body is' , body);

  return await fetchApi(url , "POST" , body); 

}



export const fetchApi = async (route, method, body) => {
  const url = baseurl + route;
  try {
    const response = await fetch(url, {
      method: method || "GET",
      headers: {
        "content-type": "application/json",
      },
      body: body ? JSON.stringify(body) : null,
    });
    const data = await response.json();
    console.log("res", data);
    return data;
  } catch (error) {
    console.error("error", error);
  }
  return {}
};
