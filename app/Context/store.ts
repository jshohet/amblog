'use client'

import {createContext, useContext} from 'react';
import { IPostsProps, Post} from '../types/PostType'
import { IIdProps } from '../types/IdTypes';

export const PostContext = createContext<IPostsProps>({
    posts: [],
    setPosts: ():Post[] => []
});

export const SelectedPostContext = createContext<IIdProps>({
  selectedPost: {
      id: 0,
      createdAt: new Date(),
      authorId: '',
      title: '',
      text: [],
      mood: '',
      tags: []
  },
  setSelectedPost: () => {},
});
