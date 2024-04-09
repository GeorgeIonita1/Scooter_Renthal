import { CircleDollarSign } from "lucide-react";

import { Card, CardContent, CardHeader } from "../ui/card";

export default function BenefitCard() {
    return (
        <Card className="p-12 border-none">
            <CardHeader>
                <CircleDollarSign />
                <h3>Best Price Garanteed</h3>
            </CardHeader>
            <CardContent>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo quasi ut fuga, ea cum eum deserunt.</p>
            </CardContent>
        </Card>
    );
}
