import Image from "next/image";

export default function Comments() {
    return (
        <div>
            <div className="flex items-center gap-4">
                <Image src="https://i.pinimg.com/736x/8f/84/56/8f8456c22b185ced7aaa02139e09d821.jpg" alt="" width={32} height={32} className="w-8 h-8 rounded-full" />
                <div className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
                    <input type="text" placeholder="Write a comment..." className="bg-transparent outline-none flex-1" />
                    <Image src="/emoji.png" alt="" width={16} height={16} className="cursor-pointer" />
                </div>
            </div>

            <div>
                <div className="flex gap-4 justify-between mt-6">
                    <Image src="https://i.pinimg.com/736x/8f/84/56/8f8456c22b185ced7aaa02139e09d821.jpg" alt="" width={40} height={40} className="w-10 h-10 rounded-full" />

                    <div className="flex flex-col gap-2 flex-1">
                        <span className="font-medium">Bernice Spencer</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam natus cupiditate corrupti tempore repellendus est reprehenderit minus iusto explicabo eos. Nostrum natus ab minima optio asperiores deleniti reiciendis, cupiditate enim.</p>
                        <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
                            <div className="flex items-center gap-4">
                                <Image src="/like.png" alt="" width={12} height={12} className="cursor-pointer w-3 h-3" />
                                <span className="text-gray-300">|</span>
                                <span className="text-gray-500">123 Likes</span>
                            </div>
                            <div>Reply</div>
                        </div>
                    </div>

                    <Image src="/more.png" alt="" width={16} height={16} className="cursor-pointer w-4 h-4" />
                </div>
            </div>
        </div>
    )
}