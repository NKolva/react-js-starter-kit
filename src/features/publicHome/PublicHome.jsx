import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { Button, Input, Loader } from 'src/components';

import { calculate } from 'src/utils/calculate';

import {
  fetchPostsList,
  getPostsListSelector,
  createPost,
  deletePost,
  isLoadingPostsSelector,
} from 'src/store/app';

import classes from './publicHome.module.scss';

export const PublicHome = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  console.log('calculate', calculate(10, 20));

  const postsList = useSelector(getPostsListSelector);
  const isLoadingPosts = useSelector(isLoadingPostsSelector);

  const [inputValue, setInputValue] = useState('');

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const [isVisibleModal, setIsVisibleModal] = useState(false);

  console.log('isVisibleModal', isVisibleModal);

  useEffect(() => {
    dispatch(fetchPostsList());

    // unmount
    return () => {
      console.log('unmounted');
    };
  }, [dispatch]);

  useEffect(() => {
    console.log('posts is loading');
  }, [isLoadingPosts]);

  const onClickSuccesToastMessage = useCallback(() => {
    setIsVisibleModal((prev) => !prev);
    history.push('/public-two');
    // toast('Success', { type: 'success' });
  }, [history]);

  const onClickWarningToastMessage = useCallback((event) => {
    toast('Warning', { type: 'warning' });
  }, []);

  const onClickErrorToastMessage = useCallback(() => {
    toast('Error', { type: 'error' });
  }, []);

  const onChangeInput = useCallback((event) => {
    console.log('input value', event.target.value);

    setInputValue(event.target.value);
  }, []);

  const onChangeTitle = useCallback((event) => {
    setTitle(event.target.value);
  }, []);

  const onChangeAuthorName = useCallback((event) => {
    setAuthor(event.target.value);
  }, []);

  // NORMAL FUNCTION
  const onCreateNewPost = useCallback(() => {
    const payload = {
      id: `${Math.random()}${Math.random()}`,
      author,
      title,
    };

    dispatch(createPost(payload));
  }, [dispatch, author, title]);

  // FUNCTION FOR ARRAYS
  const onDeletePost = useCallback(
    (id) => () => {
      dispatch(deletePost(id));
    },
    [dispatch],
  );

  const renderSomething = useCallback(() => {
    return (
      <div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
      </div>
    );
  }, []);

  return (
    <div className={classes.PublicHome}>
      <div>
        <div>
          <Button title="Primary" type="primary" onClick={onClickSuccesToastMessage} />
          <Button title="Secondary" type="secondary" onClick={onClickWarningToastMessage} />
          <Button title="Danger" type="danger" onClick={onClickErrorToastMessage} />
        </div>

        <div>
          <Input onChange={onChangeInput} value={inputValue} />
        </div>

        <div>
          <div className={classes.PublicHomeLabel}>Create Post</div>
          <div className={classes.PublicHomeCreatePost}>
            <Input onChange={onChangeTitle} value={title} />
            <Input onChange={onChangeAuthorName} value={author} />
            <Button onClick={onCreateNewPost} title="Create Post" />
          </div>
        </div>
      </div>

      {renderSomething()}
      {renderSomething()}
      {renderSomething()}
      {renderSomething()}

      <div>
        <div className={classes.PublicHomePosts}>
          <div className={classes.PublicHomeLabel}>posts</div>
          {isLoadingPosts ? (
            <Loader />
          ) : (
            postsList?.map((item) => (
              <div
                key={item.id}
                className={classes.PublicHomePostsItem}
                onClick={onDeletePost(item.id)}
              >
                <div>Title: {item.title}</div>
                <div>Author: {item.author}</div>
              </div>
            ))
          )}
          {postsList?.length > 0 && 'yes it is'}
        </div>
      </div>
    </div>
  );
};
