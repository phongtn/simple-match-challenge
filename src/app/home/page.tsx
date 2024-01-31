/**
 * v0 by Vercel.
 * @see https://v0.dev/t/LTqNl6fqxyb
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {Button} from "@/components/ui/button"

export default function Component() {
    return (
        <div className="flex w-full h-screen justify-center items-center">
            <div className="w-full mx-auto my-10 bg-white p-6">
                <div className="flex justify-center">
                    <div
                        className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-200 text-2xl font-semibold">
                        2
                    </div>
                </div>
                <div className="text-center text-xl font-medium">Score: 17</div>
                <div className="my-6 text-center text-3xl font-bold">8/1 = ?</div>
                <div className="flex justify-center gap-4">
                    <Button className="h-12 w-24 rounded-lg bg-orange-400 text-xl font-semibold ">8</Button>
                    <Button className="h-12 w-24 rounded-lg bg-orange-400 text-xl font-semibold">45</Button>
                </div>
            </div>
        </div>
    )
}

