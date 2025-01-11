"use client";
import { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function UserAuthForm() {
    return (
        <form className='space-y-4'>
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Enter your password" />
            <Button variant="red" className="w-full"> Sign In</Button>
        </form>
    )
}