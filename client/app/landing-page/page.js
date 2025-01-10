"use client";
import { useEffect, useState } from "react";
import {Input} from '@/components/ui/input';
import {Icons} from '@/components/icons';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
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
            <div className='h3 ml-6 mb-5'>Welcome, CompanysName</div>
            <div className='flex flex-row items-center justify-center gap-32 mb-5'>
                <div>
                    <Card className="w-[500px] p-6 text-center">
                        <CardHeader>
                            <CardTitle className="text-6xl text-green-500">
                                32123
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-2xl ">
                            <p>Carbon Credits</p>
                        </CardContent>
                    </Card>
                </div>
                <div>
                    <Card className="w-[500px] p-6 text-center">
                        <CardHeader>
                            <CardTitle className="text-6xl">
                                $3821
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-2xl">
                            <p>Cash Balance</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <div className='h2 ml-6'>Outstanding Requests</div>
            <div className="mx-6">
                <LandingDataTable />
            </div>
        </div>
    )
}