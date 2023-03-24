
import { Inter } from '@next/font/google'
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ['latin'] })

function Home() {

  const [menu, setMenu] = useState(0);

  function changeMenu(event) {
    setMenu(parseInt(event.target.value));
  }
  function Menu() {
    switch (menu) {
      // eslint-disable-next-line
      case 0: return false; break;
      // eslint-disable-next-line
      case 1: return true; break;
      default: return 'Error 404: Page not found';
    }
  }

      const [Auths, SetAuths] = useState([])
    const [Auth, setAuth] = useState({
        user: '',
        mail: '',
        pass: ''
    })
    const UserChange = (e) => {
        setAuth({...Auth, user: e.target.value})
    }
    const EmailChange = (e) => {
        setAuth({...Auth, mail: e.target.value})
    }
    const PassChange = (e) => {
        setAuth({...Auth, pass:e.target.value})
    }

    const Login = () => {
        if(Auth.user == '' || Auth.pass == ''){alert("Some fields are empty")}
        else if(Auth.user == 'admin' || Auth.pass == 'password'){alert("Logged in successfully")}
        else{alert("Authorization Invalid")};
    }

    function Register() {
        SetAuths([...Auths, Auth]);
        setAuth({ user: '', mail: '', pass: '' });
        console.log(Auths);
    }
  return (
<div className="bg-blue-100 h-screen" >
<div className='flex justify-center flex-col items-center content-center'>
  <div className="App-header">
    <div className="flex gap-10 pb-10 font-bold text-3xl py-10">
      <button className='btn ' id="choices" name="choices" value={0} onClick={changeMenu}>Login</button>
      <button className='btn' id="choices" name="choices" value={1} onClick={changeMenu}>Register</button>
    </div>
  </div>
    <div> 
    {menu ? (
                      <div className="grow shrink-0 outline outline-offset-2 outline-4 outline-blue-700 p-8 rounded-lg">
                      <div className="text-xl">
                          <div className="text-4xl font-bold flex justify-center flex-col items-center">Welcome to Scrum</div><br/>
                          <div className="text-2xl font-bold flex justify-center flex-col items-center text-gray-500">Sign Up</div><br/>
                          <div className='font-bold'>Username:</div>
                          <input name="user" value={Auth.user} placeholder="Username" onChange={UserChange} className="shadow pb-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text"/> <br/>
                          <div className='font-bold'>Email:</div>
                          <input name="mail" value={Auth.mail}placeholder="Username" onChange={EmailChange} className="shadow pb-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text"/> <br/>
                          <div className='font-bold'>Password:</div>
                          <input name="pass" value={Auth.pass}placeholder="Password" onChange={PassChange} className="shadow pb-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="password" /><br/><br/>
                            <div className='w-[400px] flex justify-center flex-col items-center'>
                                <button onClick={Register} className="w-full mt-3 shadow bg-blue-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded flex justify-center" type="button">
                                    Register
                                </button>
                            </div>
                      </div>
                     </div>

                    ): (
                      <div className="grow shrink-0 outline outline-offset-2 outline-4 outline-blue-700 p-8 rounded-lg">
                      <div className="text-xl">
                          <div className="text-4xl font-bold flex justify-center flex-col items-center">Welcome to Scrum</div><br/>
                          <div className="text-2xl font-bold flex justify-center flex-col items-center text-gray-500">Please Login</div><br/>
                          <div className='font-bold'>Username:</div>
                          <input name="user" placeholder="Username" onChange={UserChange} className="shadow pb-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text"/> <br/>
                          <div className='font-bold'>Password:</div>
                          <input name="pass" placeholder="Password" onChange={PassChange} className="shadow pb-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="password" /><br/><br/>
                            <div className='w-[400px] flex justify-center flex-col items-center'>
                                <button onClick={Login} className="w-full mt-3 shadow bg-blue-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded flex justify-center" type="button">
                                    Login
                                </button>
                            </div>
                      </div>
                     </div>

                    )}
    </div>
</div> 
</div>
  )
}

export default Home;
