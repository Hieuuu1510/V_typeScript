import instance from "./instance"


const signup = (user : any) => {
  return  instance.post("/signup", user)
}


const signin = (user: any) => {
  return  instance.post("/signin", user)
}

export { signin, signup}