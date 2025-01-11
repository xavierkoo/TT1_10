"use client";
import { useEffect, useState } from "react";
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Icons} from '@/components/icons';
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function ComponentPage() {

    return (
        <div>
            <div className='h1'>Component & UI Reference Page</div>
            <p>Copy and paste the respective component code from the component library, add more with the command "npx shadcn@latest add [component]". Refer to shadcn documentation at <a href="https://ui.shadcn.com/docs/components"> https://ui.shadcn.com/docs/components</a></p>
            <hr />
            <div className='h1'>This is a h1</div>
            <div className='h2'>This is a h2</div>
            <div className='h3'>This is a h3</div>
            <div className='heading-large'>This is a heading-large</div>
            <div className='heading-medium'>This is a heading-medium</div>
            <div className='title'>This is a title</div>
            <div className='subtitle'>This is a subtitle</div>
            <div className='body-large'>This is a body-large</div>
            <div className='body-medium'>This is a body-medium</div>
            <div className='links'>This is a link</div>
            <div className='caption'>This is a caption</div>
            <br />
            <div className="flex space-x-2">
                <Button variant="red" size="sm">Small Red Button</Button>
                <Button variant="red">Default Red Button</Button>
                <Button variant="red" size="lg">Large Red Button</Button>
                <Button variant="red" size="icon">Icon</Button>
            </div>
            <br />
            <div>
                <Card className="w-[500px] p-6">
                    <CardHeader>
                        <CardTitle>
                            Card Title
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                </Card>
            </div>
            <br />
            <div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="red"
                        >
                            Dropdown Menu 
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Types of Items</DropdownMenuLabel>
                    <DropdownMenuSeparator />

                    <DropdownMenuItem>
                        Item 1 (Use onClick to navigate)
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                        Item 2 (Use onClick to navigate)
                    </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <br />
            <div>
                <div className="subtitle">Input (Use onChange and pass in a function to handle the value change)</div>
                <div className="flex space-x-2">
                    <Input type="email" placeholder="Email" />
                    <Input type="password" placeholder="Password" />
                </div>
            </div>
            <br />
            <div>
                <div className="subtitle">Select (Use onValueChange and pass in a function to handle the value change)</div>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                        <SelectLabel>Fruits</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="blueberry">Blueberry</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            <br />
            <div>
                <div className="subtitle">Icons (many more)</div>
                <Icons.close className="h-6 w-6" />
                <Icons.warning className="h-6 w-6" />
                <Icons.trash className="h-6 w-6" />
            </div>
        </div>
    );
}