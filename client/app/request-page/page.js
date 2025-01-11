"use client";
import {Button} from '@/components/ui/button';
import {useRouter} from "next/navigation";
import {IoMdHome} from "react-icons/io";

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import {AlertCard} from "@/components/alert-card";
import {RequestsDataTable} from "@/components/requests-data-table";
import {LandingDataTable} from "@/components/landing-data-table";

export default function RequestPage() {
    const router = useRouter();
    return (
      <div>
        <div className="flex justify-end items-center w-full p-5">
          <NavigationMenu className='flex items-end flex-end'>
            <NavigationMenuItem>
              <Button onClick={() => router.push('/landing-page')}>
                <NavigationMenuLink>
                  Requests
                </NavigationMenuLink>
                <IoMdHome/>
              </Button>
            </NavigationMenuItem>
          </NavigationMenu>
        </div>
        <div className="mx-6">
          <AlertCard alertTitle="Outstanding Requests" alertDescription="You have outstanding Requests"/>
        </div>
        <div className='h2 ml-6'>Requests</div>
        <div className="mx-6">
          <LandingDataTable/>
        </div>
      </div>
    )
}