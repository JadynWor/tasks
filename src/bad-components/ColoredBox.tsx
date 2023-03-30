import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["black", "gold", "brown", "orange", "green", "yellow"];
const DEFAULT_COLOR_INDEX = 0;
export function ColoredBox(): JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    return (
        <div>
            <h3>Colorful Box</h3>
            <span>Current box color is: {COLORS[colorIndex]}</span>
            <div>
                <Button
                    onClick={() =>
                        setColorIndex((1 + colorIndex) % COLORS.length)
                    }
                >
                    Next Color
                </Button>
            </div>
            <div
                data-testid="colored-box"
                style={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: COLORS[colorIndex],
                    display: "inline-block",
                    verticalAlign: "bottom",
                    marginLeft: "5px"
                }}
            ></div>
        </div>
    );
}
