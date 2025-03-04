import Image from "next/image";
import Comments from "./Comments";

export default function Post() {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image src="https://i.pinimg.com/736x/8f/84/56/8f8456c22b185ced7aaa02139e09d821.jpg" alt="" width={40} height={40} className="w-10 h-10 rounded-full" />
                    <span className="font-medium">Jack Nelson</span>
                </div>
                <Image src="/more.png" alt="" width={16} height={16} />
            </div>

            <div className="flex flex-col gap-4">
                <div className="w-full min-h-96 relative">
                    <Image src="https://i.pinimg.com/736x/8f/84/56/8f8456c22b185ced7aaa02139e09d821.jpg" alt="" fill className="object-cover rounded-md" />
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam illo quaerat non delectus nobis praesentium. Sit corporis possimus, ipsam, suscipit deleniti veniam corrupti quam quia error sunt mollitia ducimus unde!</p>
            </div>

            <div className="flex items-center justify-between text-sm my-4">
                <div className="flex gap-8">
                    <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                        <Image src="/like.png" alt="" width={16} height={16} className="cursor-pointer" />
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500">123 <span className="hidden md:inline">Likes</span></span>
                    </div>

                    <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                        <Image src="/comment.png" alt="" width={16} height={16} className="cursor-pointer" />
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500">123 <span className="hidden md:inline">Comments</span></span>
                    </div>
                </div>

                <div>
                    <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                        <Image src="/share.png" alt="" width={16} height={16} className="cursor-pointer" />
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500">123 <span className="hidden md:inline">Shares</span></span>
                    </div>
                </div>
            </div>
            <Comments />
        </div>
    )
}