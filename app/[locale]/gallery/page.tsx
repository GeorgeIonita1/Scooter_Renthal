import GalleryItem from "@/components/Gallery/GalleryItem";

export default function Page() {
    return (
        <main className="container pt-[120px] sm:pt-[136px]">
            <section>
                <h2>images go here</h2>
                <div className="gallery-container">
                    <GalleryItem />
                    <GalleryItem />
                    <GalleryItem />
                    <GalleryItem />
                    <GalleryItem />
                    <GalleryItem />
                    <GalleryItem />
                    <GalleryItem />
                    <GalleryItem />
                    <GalleryItem />
                </div>
            </section>
        </main>
    );
}
