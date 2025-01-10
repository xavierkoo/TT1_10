"use client";
import { useEffect, useState } from "react";
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Icons} from '@/components/icons';
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

export default function LandingPage() {
    return (
        <>
            <div className='h1'>Welcome, CompanyName</div>
            <div className='flex flex-row'>
                <div>
                    <Card className="w-[500px] p-6">
                        <CardHeader>
                            <CardTitle>
                                10000
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Carbon Credits</p>
                        </CardContent>
                    </Card>
                </div>
                <div>
                    <Card className="w-[500px] p-6">
                        <CardHeader>
                            <CardTitle>
                                10000
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Dollars</p>
                        </CardContent>
                    </Card>
                </div>
        </div>
                     
         
        </>
       
    )
}