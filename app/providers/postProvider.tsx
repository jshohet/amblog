'use client'

import {useState} from 'react';
import { PostContext } from '../Context/store';
import { Post } from '../types/PostType';

export default function PostProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    
  const [posts, setPosts] = useState<Post[]>([]);

  return (
    <PostContext.Provider value={ {posts, setPosts} }>
      {children}
    </PostContext.Provider>
  );
}