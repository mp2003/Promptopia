'use client';

import Link from "next/link"
import Image from "next/image"
import { signIn, signOut, useSession, getProviders } from "next-auth/react"
import { useState, useEffect } from "react";



const Nav = () => {
  const isUserLoggedIn = true;
  const [providers, setProviders] = useState(null);
  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    }
    setProviders();
  }, [])

  return (
    <nav className="flex-between w-full mb-16 pt-3" >
      <Link href='/' className=" flex gap-2 flex-center">
        <Image src='/assets/images/logo.svg'
          alt="promptopia logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Promptopia</p>
      </Link>

      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href='create-prompt' className="black_btn">Create Post
            </Link>
            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>
            <Link href='/profile' className="">
              <Image src='/assets/images/logo.svg'
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
              />
            </Link>
          </div>
        ) : (
          <div>
            {
              providers &&
              Object.values(providers).map((provider) => (
                <button type="button" key={provider.name}
                  className="black_btn"
                  onClick={() => {
                    signIn(provider.id)
                  }}
                >
                  Sign In
                </button>
              )
              )}
          </div>
        )}
      </div>
      {/*mobile nav */}
      <div className="sm:hidden flex relative">
        {isUserLoggedIn ? (<div className="flex">
          <Image src='/assets/images/logo.svg'
            width={37}
            height={37}
            className="rounded-full"
            alt="profile"
            onClick={() => {

            }}
          />
        </div>) : (
          <div>
            {
              providers &&
              Object.values(providers).map((provider) => (
                <button type="button" key={provider.name}
                  className="black_btn"
                  onClick={() => {
                    signIn(provider.id)
                  }}
                >
                  Sign In
                </button>
              )
              )}
          </div>


        )}
      </div>
    </nav>
  )
}

export default Nav