import { Prisma } from "@prisma/client"
import { Dispatch, SetStateAction } from "react"

export type Post={
    id: number,
    createdAt: Date,
    updatedAt?: Date | null,
    authorEmail: string,
    title: string,
    text: Prisma.JsonValue | null,
    mood: string,
    tags: string[]
}

export interface IPostsProps {
    posts: Post[],
    setPosts: Dispatch<SetStateAction<Post[]>>
}
