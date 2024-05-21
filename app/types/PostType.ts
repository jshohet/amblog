import { JsonValue } from "@prisma/client/runtime/library"
import { Dispatch, SetStateAction } from "react"

export type Post={
    createdAt: Date,
    updatedAt?: Date | null,
    authorId: String,
    title: String,
    text: JsonValue | null,
    mood: String,
    tags: String[]
}

export interface IPostsProps {
    posts: Post[],
    setPosts: Dispatch<SetStateAction<Post[]>>
}