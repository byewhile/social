import Image from "next/image";

export default function Stories() {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md overflow-y-hidden scroll text-sm scrollbar">
            <div className="flex gap-8 w-max">
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src="https://i.pinimg.com/736x/8f/84/56/8f8456c22b185ced7aaa02139e09d821.jpg" alt="" width={80} height={80} className="rounded-full ring-2" />
                    <span className="font-medium">Tom</span>
                </div>

                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src="https://i.pinimg.com/736x/8f/84/56/8f8456c22b185ced7aaa02139e09d821.jpg" alt="" width={80} height={80} className="rounded-full ring-2" />
                    <span className="font-medium">Tom</span>
                </div>

                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src="https://i.pinimg.com/736x/8f/84/56/8f8456c22b185ced7aaa02139e09d821.jpg" alt="" width={80} height={80} className="rounded-full ring-2" />
                    <span className="font-medium">Tom</span>
                </div>

                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src="https://i.pinimg.com/736x/8f/84/56/8f8456c22b185ced7aaa02139e09d821.jpg" alt="" width={80} height={80} className="rounded-full ring-2" />
                    <span className="font-medium">Tom</span>
                </div>

                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src="https://i.pinimg.com/736x/8f/84/56/8f8456c22b185ced7aaa02139e09d821.jpg" alt="" width={80} height={80} className="rounded-full ring-2" />
                    <span className="font-medium">Tom</span>
                </div>
            </div>
        </div>
    )
}