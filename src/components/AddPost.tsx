import Image from "next/image";

export default function AddPost() {
    return (
        <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
            <Image src="https://i.pinimg.com/736x/8f/84/56/8f8456c22b185ced7aaa02139e09d821.jpg" alt="" width={48} height={48} className="w-12 h-12 object-cover rounded-full" />

            <div className="flex-1">
                <div className="flex gap-4">
                    <textarea placeholder="What's on your mind?" className="bg-slate-100 rounded-lg flex-1 p-2"></textarea>
                    <Image src="/emoji.png" alt="" width={20} height={20} className="w-5 h-5 cursor-pointer self-end" />
                </div>
                <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
                    <div className="flex items-center gap-2 cursor-pointer">
                        <Image src="/addImage.png" alt="" width={20} height={20} />
                        <span>Photo</span>
                    </div>

                    <div className="flex items-center gap-2 cursor-pointer">
                        <Image src="/addVideo.png" alt="" width={20} height={20} />
                        <span>Video</span>
                    </div>

                    <div className="flex items-center gap-2 cursor-pointer">
                        <Image src="/poll.png" alt="" width={20} height={20} />
                        <span>Poll</span>
                    </div>

                    <div className="flex items-center gap-2 cursor-pointer">
                        <Image src="/addevent.png" alt="" width={20} height={20} />
                        <span>Event</span>
                    </div>
                </div>
            </div>
        </div>
    )
}