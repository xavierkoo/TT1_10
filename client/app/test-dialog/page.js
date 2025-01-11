"use client";

import AddRequestsForm from "@/components/landing-page/AddRequestsForm";
import AddRequestsPopupDialog from "@/components/landing-page/AddRequestsPopupDialog";
import {Button} from '@/components/ui/button';

export default function TestDialog() {
    return (
        <AddRequestsPopupDialog title="test" component={<AddRequestsForm />}>

        </AddRequestsPopupDialog>

    )
}