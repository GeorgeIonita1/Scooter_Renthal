import Image from "next/image";

export default function GalleryItem() {
    return (
        <div className="overflow-hidden">
            <Image className="object-cover !relative object-center hover:scale-[1.02] ease-in duration-200" alt="Scooter image" src='/street_scooter.jpg' fill />
        </div>
    );
}
