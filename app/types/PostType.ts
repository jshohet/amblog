import { JsonValue } from "@prisma/client/runtime/library"
import { Dispatch, SetStateAction } from "react"

export type Post={
    id: number,
    createdAt: Date,
    updatedAt?: Date | null,
    authorId: string,
    title: string,
    text: JsonValue | null,
    mood: string,
    tags: string[]
}

export interface IPostsProps {
    posts: Post[],
    setPosts: Dispatch<SetStateAction<Post[]>>
}
