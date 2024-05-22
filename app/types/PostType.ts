import { JsonValue } from "@prisma/client/runtime/library"
import { Dispatch, Key, SetStateAction } from "react"

export type Post={
    id: Key,
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