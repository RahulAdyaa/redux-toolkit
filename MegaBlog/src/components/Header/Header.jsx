import React from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
//selector hoga tabhi to jake store mei dekh payunga ke user logged in hai ya logged out


function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  //useselector ko use krke ham authstatus se puch lenge ke active hai ya nai

  const navigate = useNavigate();
  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
      // abb iska mtlb hai ke ham authstatus se ststus dekh lenge ke logged in hai ya logged out , aur agar logged in hai to login/signup dikhana hi kyu hai?
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "ALl Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add post",
      slug: "/add-post",
      active: authStatus,
    },
  ];
  return (
    <header className="py-3 shadow bg-gray-500">
    <Container>
      <nav className="flex">
        <div className="mr-4">
          <Link to="/">
          <Logo width='70px'/>
          </Link>
        </div>
        <ul className="flex ml-auto">
          
          {navItems.map((item)=>
          item.active ? (
            <li key={item.name}>
              <button
              onClick={()=>navigate(item.slug)}
              className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full">{item.name}</button>
            </li>
            
          ): null
        )}
          {/* //abb authstatus se puch lenge ke banda authenticated hai ya nai aur agar hai to logout dikha denge nai to nai dikhayenge */}
          {authStatus && (
            <li key="logout"> {/**/}
              <LogoutBtn/>
            </li>
          )} 
          {/* // agar authstatus true hai to hi next wali cheez hoyegi nai to nai */}
          
        </ul>
      </nav>
    </Container>
  </header>
  )
}

export default Header;
