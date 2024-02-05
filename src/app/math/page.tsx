import Multiplication from "@/app/math/multiplication";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Multiplication',
};

export default function SimpleGame() {
    return <div><Multiplication></Multiplication></div>
}

