'use client';
import {Button} from "@/components/ui/button"
import {useState, useEffect} from "react";

export default function Component() {
    const [simpleMath, setSimpleMatch] = useState('1 / 1');
    const [firstAnswer, setFirstAnswer] = useState(3);
    const [secondAnswer, setSecondAnswer] = useState(5);
    const [currentScore, setCurrentScore] = useState(0);
    const [rightAnswer, setRightAnswer] = useState(5);

    const [timeLeft, setTimeLeft] = useState(4);

    let correctNumber = 0;

    function generateProblem() {
        // Randomly select between multiplication and division
        const operation = Math.random() < 0.5 ? 'multiplication' : 'division';
        let num1, num2, options;

        if (operation === 'multiplication') {
            num1 = Math.floor(Math.random() * 10) + 1;
            num2 = Math.floor(Math.random() * 10) + 1;
            correctNumber = num1 * num2;
            options = generateOptions(correctNumber, false);

            setSimpleMatch(num1 + ' x ' + num2);
            setRightAnswer(correctNumber);

        } else { // Division operation
            correctNumber = Math.floor(Math.random() * 10) + 1;
            num2 = Math.floor(Math.random() * 10) + 1;
            num1 = correctNumber * num2;
            options = generateOptions(correctNumber, true);

            setSimpleMatch(num1 + ' / ' + num2);
            setRightAnswer(correctNumber);
        }
        setFirstAnswer(options[0]);
        setSecondAnswer(options[1])
    }

    function generateOptions(correctNumber: number, isDivision: boolean) {
        const option1 = correctNumber;
        let option2 = option1;
        while (option2 === option1) {
            if (isDivision) {
                option2 = Math.floor(Math.random() * 10) + 1;
            } else
                option2 = Math.floor(Math.random() * 100) + 1;
        }
        const options = [option1, option2];
        options.sort(() => Math.random() - 0.5);
        return options;
    }

    const checkAnswer = (answer: number) => {
        if (answer == rightAnswer) {
            generateProblem();
            updateScore(true);
        } else {
            updateScore(false);
        }
    }

    function updateScore(isRight: boolean) {
        let score: number;
        score = isRight ? currentScore + 1 : score = Math.max(0, currentScore - 1);
        setCurrentScore(score);
    }

    useEffect(() => {
        if (timeLeft === 0) {
            setTimeLeft(4);
            updateScore(false);
            generateProblem();
        }

        // exit early when we reach 0
        if (!timeLeft) return;

        // save intervalId to clear the interval when the
        // component re-renders
        const intervalId = setInterval(() => {
            // @ts-ignore
            setTimeLeft(timeLeft - 1);
        }, 1000);

        // clear interval on re-render to avoid memory leaks
        return () => clearInterval(intervalId);
    }, [generateProblem, timeLeft]);

    return (
        <div className="flex w-full h-screen justify-center items-center">
            <div className="w-full mx-auto my-10 bg-white p-6">
                <div className="flex justify-center">
                    <div
                        className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-200 text-2xl font-semibold">
                        {timeLeft}
                    </div>
                </div>
                <div className="text-center text-xl font-medium">Score: {currentScore}</div>
                <div className="my-6 text-center text-3xl font-bold">{simpleMath} = ?</div>
                <div className="flex justify-center gap-4">
                    <Button className="h-12 w-24 rounded-lg bg-orange-400 text-xl font-semibold"
                            onClick={() => checkAnswer(firstAnswer)} value={firstAnswer}>{firstAnswer}</Button>
                    <Button className="h-12 w-24 rounded-lg bg-orange-400 text-xl font-semibold"
                            onClick={() => checkAnswer(secondAnswer)} value={secondAnswer}>{secondAnswer}</Button>
                </div>
            </div>
        </div>
    )
}

