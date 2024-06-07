'use client'

import {useState} from 'react';
import { SelectedPostContext } from "../Context/store";
import { Post } from '../types/PostType';

export default function SelectedPostProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const initialPost: Post = {
      id: 0,
      createdAt: new Date(),
      authorId: '',
      title: '',
      text: null,
      mood: '',
      tags: []
    }
  const [selectedPost, setSelectedPost] = useState<Post>(initialPost);

  return (
    <SelectedPostContext.Provider value={{ selectedPost, setSelectedPost }}>
      {children}
    </SelectedPostContext.Provider>
  );
}