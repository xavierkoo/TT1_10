"use client";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import { Icons } from '@/components/icons';
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import UserAuthForm from "@/components/user-auth-form";

export default function LoginPage() {
    return (
        <div>
            <div className="flex h-screen w-screen items-center justify-center bg-gray-200">
                <Card className="flex h-5/6 w-11/12 max-w-7xl overflow-hidden rounded-2xl shadow-2xl">
                    <div className="flex w-1/2 justify-between bg-white-700">
                        <Image
                            src="/login-image.jpg"
                            alt="Login Illustration"
                            width={600}
                            height={600}
                            style={{ width: "100%", height: "auto" }} 
                            className="rounded-lg"
                            priority
                        />
                    </div>
            
                    <div className="flex w-1/2 flex-col justify-center space-y-6 bg-white-700 p-12">
                        <div>
                            <Icons.badge className="w-20 h-20 mx-auto" />
                            <CardHeader className="space-y-1 text-center">
                                <h1 className="text-4xl font-semibold">
                                    Carbon Credits Exchange
                                </h1>
                            </CardHeader>
                            <CardContent>
                                <UserAuthForm />
                            </CardContent>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}