"use client";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

export default function LandingPageCard({number, label}) {
    return (
        <Card className="w-[500px] p-6 text-center">
            <CardHeader>
                <CardTitle className="text-6xl">
                    {number}
                </CardTitle>
            </CardHeader>
            <CardContent className="text-2xl">
                <p>{label}</p>
            </CardContent>
        </Card>
    )
}