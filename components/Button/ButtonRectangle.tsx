import { Button } from "../ui/button";

export default function ButtonRectangle({ title }: { title: string }) {
    return (
        <Button className="w-full py-8" variant='outline'>{title}</Button>
    );
}
