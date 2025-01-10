"use client";
import { useEffect, useState } from "react";
import {Input} from '@/components/ui/input';
import {Icons} from '@/components/icons';
import LandingPageCard from "@/components/landing-page/LandingPageCard";
import {Button} from '@/components/ui/button';
import {useRouter} from "next/navigation";
import { IoIosNotifications } from "react-icons/io";
import { LandingDataTable } from "@/components/landing-data-table";

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu"

export default function LandingPage() {
    const router = useRouter();
    return (
        <div>
            <div className="flex justify-between items-center w-full p-5">
                <div className="title">
                    Carbon Credit Exchange
                </div>
                <NavigationMenu className='flex items-end flex-end'>
                    <NavigationMenuItem>
                        <Button onClick={() => router.push('/request-page')}>
                            <NavigationMenuLink>
                                Outstanding Requests
                            </NavigationMenuLink>
                            <IoIosNotifications/>
                        </Button>
                    </NavigationMenuItem>
                </NavigationMenu>
            </div>
            <div className='h1'>Welcome, CompanysName</div>
            <div className='flex flex-row items-center justify-center gap-32'>
                <LandingPageCard label="Carbon Credits" number="10000"/>
                <LandingPageCard label="Carbon Credits" number="9999"/>
            </div>
            <div className='h2'>Outstanding Requests</div>
            <div className="mx-6">
                <LandingDataTable />
            </div>
        </div>
    )
}