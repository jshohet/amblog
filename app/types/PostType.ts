export type Post={
    createdAt: Date,
    updatedAt?: Date,
    authorId: String,
    title: String,
    text: JSON,
    mood: String,
    tags: String[]
}