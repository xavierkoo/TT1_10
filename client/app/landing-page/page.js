"use client";
import { useEffect, useState } from "react";
import {Input} from '@/components/ui/input';
import {Icons} from '@/components/icons';
import LandingPageCard from "@/components/landing-page/LandingPageCard";
import {Button} from '@/components/ui/button';

export default function LandingPage() {
    return (
        <div>
            <div className='h1'>Welcome, CompanysName</div>
            <div className='flex flex-row items-center justify-center gap-32'>
                <LandingPageCard label="Carbon Credits" number="10000" />
                <LandingPageCard label="Carbon Credits" number="9999" />
            </div>
            <div className='h2'>Outstanding Requests</div>
            <div>
                <div>
                    <Button variant="red">Create New Request</Button>
                    <Button variant="red">Cancel</Button>
                </div>
            </div>
        </div>
    )
}