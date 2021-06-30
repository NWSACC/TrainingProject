import { TestAsyncPipe } from './test-async.pipe';

describe('TestAsyncPipe', () => {
  it('create an instance', () => {
    const pipe = new TestAsyncPipe();
    expect(pipe).toBeTruthy();
  });
});
