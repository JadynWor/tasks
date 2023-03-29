import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [value1, setValue1] = useState<number>(1);
    const [value2, setValue2] = useState<number>(2);

    function rollLeftDie(): void {
        setValue1(d6());
    }
    function rollRightDie(): void {
        setValue2(d6());
    }

    return (
        <div>
            <div>
                <Button onClick={rollLeftDie}>Roll Left</Button>
                <span data-testid="left-die">{value1}</span>
                <Button onClick={rollRightDie}>Roll Right</Button>
                <span data-testid="right-die">{value2}</span>
            </div>
            <div>
                {value1 === value2 && value1 !== 1 && <div> You Win!</div>}
                {value1 === value2 && value1 === 1 && <div> You Lose!</div>}
            </div>
        </div>
    );
}
