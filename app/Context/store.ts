'use client'

import {createContext, useContext} from 'react';
import { IPostsProps, Post} from '../types/PostType'
import { IIdProps } from '../types/IdTypes';
import { IEditorProps } from '../types/EditorStateType';

export const PostContext = createContext<IPostsProps>({
    posts: [],
    setPosts: ():Post[] => []
});

export const SelectedPostContext = createContext<IIdProps>({
  selectedPost: {
      id: 0,
      createdAt: new Date(),
      authorEmail: '',
      title: '',
      text: [],
      mood: '',
      tags: []
  },
  setSelectedPost: () => {},
});

export const EditorContext = createContext<IEditorProps>({
  openEditor: false,
  setOpenEditor: () => {}
 })
