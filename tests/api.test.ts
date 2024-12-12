import { test, expect } from '@playwright/test';
import axios from 'axios';

test.describe('API Tests', () => {
  test('Create Post', async () => {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
      title: 'New Post',
      body: 'This is a new post',
      userId: 1,
    });

    expect(response.status).toBe(201);
    expect(response.data).toHaveProperty('id');
    expect(response.data).toHaveProperty('title', 'New Post');
    expect(response.data).toHaveProperty('body', 'This is a new post');
    expect(response.data).toHaveProperty('userId', 1);
  });

  test('Get Post by ID', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id', 1);
    expect(response.data).toHaveProperty('title');
    expect(response.data).toHaveProperty('body');
    expect(response.data).toHaveProperty('userId');
  });
});
