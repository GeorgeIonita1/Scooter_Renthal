import Image from "next/image";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import ButtonRectangle from "../Button/ButtonRectangle";

export default function CardPreview() {
    return (
        <Card className="p-12">
            <CardHeader>
                <div>
                    <Image alt="scooter image" src='/scooter.png' width={600} height={600} />
                </div>
                <CardTitle>Titlu aici</CardTitle>
            </CardHeader>
            <CardContent>
                <p>Description here</p>
                <span>180$/hour</span>
            </CardContent>
            <CardFooter>
                <ButtonRectangle title="CALL NOW" />
            </CardFooter>
        </Card>
    );
}
