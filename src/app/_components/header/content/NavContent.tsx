import React, { useState, useEffect } from 'react';
import { HomeIcon, PencilIcon } from "@heroicons/react/20/solid";
import DesktopNav from "./desktop/NavContent";
import MobileNav from "./mobile/NavContent";
import { createClient } from "@/lib/utils/supabase/client";
import LoginCTA from "./LoginCTA";

const NavContent = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [items, setItems] = useState<NavItemType[]>([]);

  useEffect(() => {
    const supabase = createClient();
    const checkUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      setLoggedIn(!!data && !error);
    };

    checkUser();

    // Assuming you want to listen to auth changes to update loggedIn state
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setLoggedIn(!!session);
    });

    // Cleanup subscription on component unmount
    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    setItems([
      { name: "Dashboard", href: "/dashboard", icon: <HomeIcon className="h-5 w-5" /> },
      { name: "Practice", href: "/practice", icon: <PencilIcon className="h-5 w-5" /> },
    ]);
  }, []);

  return <>{loggedIn ? (<div className="flex h-full">
    <div className="hidden md:flex">
      <DesktopNav items={items} />
    </div>
    <div className="md:hidden">
      <MobileNav items={items} />
    </div>
  </div>) :
    <LoginCTA />}
  </>
}

type NavItemType = {
  name: string,
  href: string,
  icon?: React.ReactNode
}

export default NavContent;
export type { NavItemType };